<template>
  <div class="links">
    <video controls :src="require('~/assets/videos/'+video)"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: 'test'
    };
  }
};
</script>

