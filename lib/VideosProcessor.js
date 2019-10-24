import videos from '../assets/videos.json';
import Video from '../model/Video';

class VideosProcessor {
  getVideos() {
    let videoInstances = [];
    for (let i = 0; i < videos.length; i++) {
      videoInstances.push(
        new Video(
          this.getVideoFile(videos[i]),
          this.getVideoTitle(videos[i])
        )
      );
    }

    return videoInstances;
  }

  getVideoFile(video) {
    if (typeof video === 'string') {
      return video;
    }

    return video.file;
  }

  getVideoTitle(video) {
    if (typeof video === 'string') {
      return video;
    }

    if (typeof video.title !== 'undefined') {
      return video.title;
    }

    return this.getVideoFile(video);
  }

  /**
   *
   * @param {Video[]} haystack
   * @param {String} needle
   * @returns {Video[]}
   */
  search(haystack, needle) {
    if (!needle) {
      return haystack;
    }

    return haystack.filter(function (video) {
      return video.title.toLowerCase().search(needle.toLowerCase()) !== -1;
    })
  }
}

const videosProcessor = new VideosProcessor();

export {videosProcessor as default}
