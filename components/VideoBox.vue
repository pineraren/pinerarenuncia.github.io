<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title is-6">
          {{video.title}}
        </p>
        <video preload="metadata" controls :src="videoUrl"></video>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        <nuxt-link :to="'video/'+video.file">Comparte esto</nuxt-link>
      </span>
        </p>
        <p class="card-footer-item">
      <span>
        <a :href="videoUrl">Descarga</a>
      </span>
        </p>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['video'],
    computed: {
      videoUrl() {
        return require('~/assets/videos/' + this.video.file);
      }
    }
  }
</script>>
