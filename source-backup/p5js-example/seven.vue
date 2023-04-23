<template>
  <div class="app">
    Sketch 1
    <p5  @setup="setup" @draw="draw1"></p5>
    Sketch 2
    <p5 @draw="draw2"></p5>
    Press R to reset both sketches to black color.
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  components: {
    p5: VueP5,
  },

  data() {
    return {
      state1: {
        color: 50,
      },
      state2: {
        color: 180,
      },

      fillColor: 100,
      imgFromUrl: 'https://images.unsplash.com/photo-1616564826491-96d5c8a38cc7?ixid=MnwxNzUyODZ8MHwxfHNlYXJjaHwxfHwlRTYlODglOTF8ZW58MHx8fHwxNjIyOTExNzQ5&ixlib=rb-1.2.1',
      imgBg: null,

      thisTextX: 20,
      thisTextY: 20,

    };
  },

  methods: {
    setup(sketch) {
      let button;
      //sketch.createCanvas(766, 765);
      //   this.img = sketch.loadImage("/p5js.png"); // Load the image

      this.imgBg = sketch.loadImage(this.imgFromUrl); // Load the image

      button = sketch.createButton("click me");
      button.position(800, 100);
      //button.mousePressed(this.changeBG(sketch));

      button.mousePressed(this.reset);
    },

    draw1(sketch) {
    //   this.state1.color += 3;
    //   this.state1.color %= 255;
      sketch.createCanvas(766, 765);
      //sketch.background(this.state1.color);
      sketch.background(this.imgBg);
      sketch.fill(this.fillColor);
      sketch.text("ABC", this.thisTextX, this.thisTextY);
    },
    draw2(sketch) {
    //   this.state2.color += 2;
    //   this.state2.color %= 255;
      sketch.background(this.state2.color);
    },
    keyPressed(keyCode) {
      //console.log(keyCode);
      //debugger
      if (keyCode == 82) {
        // 'r' key
        this.reset();
      }
    },
    reset() {

      this.state1.color = 0;
      this.state2.color = 0;
      this.fillColor = 300;

      this.thisTextX = 100;
      this.thisTextY = 200;
    },
  },
};
</script>

<style>
</style>