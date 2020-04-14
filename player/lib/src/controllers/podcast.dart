import 'package:flutter/foundation.dart';
import 'package:podcast_search/podcast_search.dart';

import '../constants.dart';

class PodcastController {
  final _podcast = ValueNotifier<Podcast>(null);
  final _episode = ValueNotifier<Episode>(null);
  void load() async {
    var podcast = await Podcast.loadFeed(url: kPodcastFeed);
    _podcast.value = podcast;
  }

  ValueListenable<Podcast> get feed => _podcast;
  ValueListenable<Episode> get selection => _episode;

  void selectEpisode(Episode val) {
    _episode.value = val;
  }
}
