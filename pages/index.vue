<template>
  <div>
    <div class="box">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            v-model="searchText"
            class="input has-text-centered"
            type="search"
          />
        </div>
        <div class="control">
          <a class="button is-info">Buscar</a>
        </div>
      </div>
    </div>
    <h2 class="title">Lista de videos por orden de aparici&oacute;n</h2>

    <div v-for="row in rowsAmount" :key="row" class="row columns">
      <video-box v-for="(video, index) in getVideosForRow(row-1)"
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
        columns: 3,
        searchText: ''
      };
    },
    computed: {
      rowsAmount() {
        return Math.round(this.videos.length / this.columns);
      },
      filteredVideos() {
        if (!this.searchText || 0 === this.searchText.length) {
          return this.videos;
        }

        let self = this;
        return this.videos.filter(function (fileName) {
          return fileName.search(self.searchText) !== -1;
        })
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
