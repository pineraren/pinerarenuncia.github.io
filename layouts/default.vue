<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <h1 class="title is-1">Pi&ntilde;era renuncia!</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                        <span></span>
                        <span></span>
                        </span>
        </div>
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-active" to="/">Videos</nuxt-link>
            <nuxt-link class="navbar-item" to="/flyers">Flyers</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->

    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <nuxt/>

      </div>
    </div>

    <!--    <footer class="footer">-->
    <!--      <div class="container">-->
    <!--        <div class="content has-text-centered">-->
    <!--          <div class="soc">-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-github-alt fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--          </div>-->
    <!--          <p>-->
    <!--            <strong>Bulma</strong> by-->
    <!--            <a href="http://jgthms.com">Jeremy Thomas</a>.-->
    <!--            The source code is licensed-->
    <!--            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.-->
    <!--            <br/>-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </footer>-->
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "Piñera renuncia!",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: "charset", charset: "utf-8"},
          {
            hid: "charset",
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }
        ]
      };
    }
  };
</script>

<style>
  @import "../node_modules/bulma/css/bulma.css";
</style>
<style>
  .links {
    padding-top: 15px;
  }
</style>
