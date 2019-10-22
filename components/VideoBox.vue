<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title is-6">
          {{video}}
        </p>
        <video preload="metadata" controls :src="require('~/assets/videos/'+video)"></video>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        <nuxt-link :to="'video/'+video">Comparte esto</nuxt-link>
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
    }
  }
</script>>
