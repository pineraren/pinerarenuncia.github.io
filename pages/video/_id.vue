<template>
  <div class="links">
    <video-box :video="video" />
  </div>
</template>

<script>
import VideoBox from '../../components/VideoBox';
export default {
  components:{
    VideoBox
  },
  mounted(){
    this.video = this.$route.params.id;
  },
  data() {
    return {
      video: 'Militares amedrentando personas con sus rifles en apoquindo 2.mp4'
    };
  }
};
</script>

