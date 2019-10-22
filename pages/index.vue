<template>
  <div>
    <h3>Lista de videos por orden de aparicion {{rowsAmount}}</h3>

    <div v-for="row in rowsAmount" :key="row" class="row columns">
      <video-box v-for="(video, index) in getVideosForRow(row)"
                 :key="index" :video="video"/>
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
        videos: json,
        columns: 3
      };
    },
    computed: {
      rowsAmount() {
        return Math.round(this.videos.length / this.columns);
      }
    },
    methods: {
      getVideosForRow(row) {
        let videos = [];
        for (let i = row * this.columns; i < (row + 1) * this.columns; i++) {
          if (typeof this.videos[i] !== 'undefined' && this.videos[i] !== null) {
            videos.push(this.videos[i]);
          }

        }
        return videos;
      }
    }
  };
</script>

<style>
  .video-box video {
    width: 100%;
  }
</style>
