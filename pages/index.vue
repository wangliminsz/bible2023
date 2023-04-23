<template>
  <div class="container">
    <div>
      <h2 class="title">myBible.cloud</h2>
      <!-- <div class="links"> -->
      <div class="links mt-4">
        <button class="border bg-green-600 px-9 py-2 mr-8 rounded text-white">
          <a href="/oldindex" rel="noopener noreferrer" class="button--green">
            Old 旧约
          </a>
        </button>

        <button class="border bg-gray-600 px-8 py-2 mr-8 rounded text-white">
          <a href="/newindex" rel="noopener noreferrer" class="button--green">
            New 新约
          </a>
        </button>
      </div>
    </div>
    <div class="footer mb-3">
      <span>email: mybible.cloud@outlook.com </span><span class="ml-3">2021-2022</span>
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  data() {
    return {
      myFontEn: null,
      myFontCn: null,
    };
  },

  components: {
    "vue-p5": VueP5,
  },

  methods: {
    // preload(sketch) {
    //   this.myFontEn = sketch.loadFont('/font/SourceSansPro-Regular.ttf')
    //   this.myFontCn = sketch.loadFont('/font/TaipeiSansTCBeta-Regular.ttf')
    // },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
}
</style>
