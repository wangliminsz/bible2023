<template>
  <div>
    <vue-p5 @preload="preload" @setup="setup" @draw="draw"> </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  components: {
    "vue-p5": VueP5,
  },

  data: () => ({
    myFont: null,
    mybg: "",

    canvasHeight: null,
    canvasWidth: null,
  }),

  beforeMount: function () {
    this.setCanvasSize(800, 300);
  },

  methods: {
    setCanvasSize(argsW, argsH) {
      this.canvasWidth = argsW;
      this.canvasHeight = argsH;
    },

    preload(sketch) {
      this.myFont = sketch.loadFont("/font/SourceSansPro-Regular.ttf");
      //this.myFont = sketch.loadFont("/font/HARNGTON.ttf");
    },

    setup(sketch) {
      let fontsize = 40;

      this.mybg = sketch.loadImage("/p5js.png");
      sketch.createCanvas(this.canvasWidth, this.canvasHeight);

      // Set text characteristics
      sketch.textFont(this.myFont);
      sketch.textSize(fontsize);
      sketch.textAlign("CENTER", "CENTER");
    },

    draw(sketch) {
      let x = 0;
      let myStr = "";

      myStr = "Hello World How are you How old are you Why always you";
      //sketch.background(160);

      sketch.background(this.mybg);

      sketch.textAlign("LEFT");
      //   this.drawWords(sketch.width * 0.25);
      x = sketch.width * 0.25 - 50;
      //   //console.log(x);
      //   //debugger
      sketch.fill(0);
      sketch.text("ichi", x, 80);

      sketch.fill(65);
      sketch.text("ni", x, 150);

      sketch.fill(190);
      sketch.text("san", x, 220);

      sketch.fill(255);
      sketch.text("shi", x, 290);

      sketch.textAlign("CENTER");
      //   this.drawWords(sketch.width * 0.5);
      x = sketch.width * 0.5 - 50;
      sketch.fill(0);
      sketch.text("ichi", x, 80);

      sketch.fill(65);
      sketch.text("ni", x, 150);

      sketch.fill(190);
      sketch.text("san", x, 220);

      sketch.fill(255);
      sketch.text("shi", x, 290);

      sketch.textAlign("CENTER");
      //   this.drawWords(sketch.width * 0.75);
      x = sketch.width * 0.75 - 50;
      sketch.fill(0);
      sketch.text("ichi", x, 80);

      sketch.fill(65);
      sketch.text("ni", x, 150);

      sketch.fill(190);
      sketch.text("san", x, 220);

      sketch.fill(255);
      sketch.text("shi", x, 290);
    },

    // drawWords(x, sketch) {
    //   sketch.fill(0);
    //   sketch.text("ichi", x, 80);

    //   sketch.fill(65);
    //   sketch.text("ni", x, 150);

    //   sketch.fill(190);
    //   sketch.text("san", x, 220);

    //   sketch.fill(255);
    //   sketch.text("shi", x, 290);
    // },
  },
};
</script>

<style>
</style>