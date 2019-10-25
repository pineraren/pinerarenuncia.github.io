<template>
  <div class="links">
    <video-box :video="video"/>
  </div>
</template>

<script>
  import VideoBox from '../../components/VideoBox';
  import Video from '../../model/Video';

  export default {
    components: {
      VideoBox
    },
    created() {
      this.video = Video.createFromFile(this.$route.params.id);
    },
    data() {
      return {
        video: null
      };
    },
    head(){
      return {
        title: this.video.title,
        meta: [
          {
            hid: 'og_single_video_video',
            property: "og:video",
            content: this.video.url
          }
        ]
      }
    }
  };
</script>

