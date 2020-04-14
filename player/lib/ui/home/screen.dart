import 'package:flutter/material.dart';
import 'package:flutter_web_audio_player/flutter_web_audio_player.dart';
import 'package:player/src/constants.dart';
import 'package:player/src/controllers/podcast.dart';
import 'package:podcast_search/podcast_search.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final _controller = Provider.of<PodcastController>(context, listen: false);
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: Text('Creative Engineering'),
        actions: [
          IconButton(
            icon: Icon(Icons.rss_feed),
            onPressed: () {
              launch(kPodcastFeed);
            },
          ),
          IconButton(
            icon: Icon(Icons.refresh),
            onPressed: () {
              _controller.load();
            },
          ),
        ],
      ),
      body: ValueListenableBuilder<Podcast>(
        valueListenable: _controller.feed,
        builder: (context, podcast, child) => podcast == null
            ? Center(child: CircularProgressIndicator())
            : Column(
                children: <Widget>[
                  Expanded(
                    child: ListView.separated(
                      separatorBuilder: (context, index) => Divider(height: 0),
                      itemCount: podcast.episodes.length,
                      itemBuilder: (context, index) {
                        final _episode = podcast.episodes[index];
                        return ListTile(
                          leading: Image.network(podcast.image),
                          title: Text(_episode.title),
                          subtitle: Text(_episode.description),
                          onTap: () => _controller.selectEpisode(_episode),
                        );
                      },
                    ),
                  ),
                  ValueListenableBuilder<Episode>(
                    valueListenable: _controller.selection,
                    builder: (context, episode, child) {
                      if (episode != null) {
                        return Container(
                          height: 50,
                          child: WebAudioPlayer(src: episode.contentUrl),
                        );
                      }
                      return Container();
                    },
                  ),
                ],
              ),
      ),
    );
  }
}
