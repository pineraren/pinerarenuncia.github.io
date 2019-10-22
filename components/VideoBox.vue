<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title is-6">
          {{videoTitle}}
        </p>
        <video preload="metadata" controls :src="videoFile"></video>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        <nuxt-link :to="'video/'+video">Comparte esto</nuxt-link>
      </span>
        </p>
        <p class="card-footer-item">
      <span>
        <a :href="videoFile">Descarga</a>
      </span>
        </p>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      video: {
        default: 'Chadwick cagao de la risa.mp4',
        type: String
      }
    },
    computed: {
      videoFile() {
        return require('~/assets/videos/' + this.video);
      },
      videoTitle() {
        if (typeof this.video === 'string') {
          return this.video;
        }

        return this.video.title;
      }
    }
  }
</script>>
