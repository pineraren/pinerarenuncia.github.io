<template>
  <div class="column is-one-third">
    <div class="card large">
      <div class="card-image">

          <video preload="metadata" controls :src="require('~/assets/videos/'+video)"></video>
        
      </div>
      <div class="card-content">
        <div class="content">
          {{video}}<br>
          <span class="title is-6">
                       <nuxt-link :to="'video/'+video">Comparte esto</nuxt-link>
                      </span>
        </div>
      </div>
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
