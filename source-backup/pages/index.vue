<template>
  <div class="container">

    <div>
      <Logo />
      <h1 class="title">
        myBible
      </h1>
      <div class="links">
        <a href="/oldindex"
           rel="noopener noreferrer"
           class="button--green">
          Old 旧约

        </a>
        <a href="/newindex"
           rel="noopener noreferrer"
           class="button--grey">
          New 新约
        </a>
      </div>
    </div>

    <!-- <div class="visible: false">
      <vue-p5 @preload="preload"> </vue-p5>
    </div> -->
  </div>
</template>

<script>
import VueP5 from 'vue-p5'

export default {
  data() {
    return {
      myFontEn: null,
      myFontCn: null,
    }
  },

  components: {
    'vue-p5': VueP5,
  },

  methods: {
    // preload(sketch) {
    //   this.myFontEn = sketch.loadFont('/font/SourceSansPro-Regular.ttf')
    //   this.myFontCn = sketch.loadFont('/font/TaipeiSansTCBeta-Regular.ttf')
    // },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
