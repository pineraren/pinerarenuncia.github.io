<template>
  <div>
    <h4>{{video}}</h4>
    <nuxt-link :to="'video/'+video">Comparte esto</nuxt-link>
    <br />
    <video controls :src="require('~/assets/videos/'+video)"></video>
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