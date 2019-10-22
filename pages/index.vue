<template>
  <div class="links">
    <h3>Lista de videos por orden de aparicion</h3>
    <div v-for="(video, index) in videos" :key="index" class="video-box">
      <video-box :video="video" />
    </div>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";
import json from '../assets/videos.json';

export default {
  components: {
    VideoBox
  },
  data() {
    return {
      videos: json
    };
  }
};
</script>

<style>
.video-box {
  margin-bottom: 10px;
}

.video-box video {
  width: 300px;
}
</style>
