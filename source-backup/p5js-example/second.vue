<template>

  <div>
    <vue-p5 @setup="setup" @draw="draw"> </vue-p5>
  </div>

</template>

<script>
import VueP5 from "vue-p5";

export default {
  components: {
    "vue-p5": VueP5,
  },

  data: () => ({
    red: 0,
    green: 255,
    // blue color is a computed property that changes over time
    lines: [],
    p5LogoImage: null,
    img: null,
    imgFromUrl: 'https://images.unsplash.com/photo-1616564826491-96d5c8a38cc7?ixid=MnwxNzUyODZ8MHwxfHNlYXJjaHwxfHwlRTYlODglOTF8ZW58MHx8fHwxNjIyOTExNzQ5&ixlib=rb-1.2.1',
    startTime: Date.now(),
    // store current time in data to force computed properties to update
    currentTime: Date.now(),
  }),

  methods: {
    setup(sketch) {
      sketch.createCanvas(766, 765);
    //   this.img = sketch.loadImage("/p5js.png"); // Load the image

      this.img = sketch.loadImage(this.imgFromUrl); // Load the image
    },

    draw(sketch) {
      sketch.image(this.img, 0, 0);
      sketch.image(this.img, 0, sketch.height / 2, this.img.width / 2, this.img.height / 2);
      //const logoWidth = sketch.width / 3;
    },
  },
};

// image.src =
// 'https://images.unsplash.com/photo-1616564826491-96d5c8a38cc7?ixid=MnwxNzUyODZ8MHwxfHNlYXJjaHwxfHwlRTYlODglOTF8ZW58MHx8fHwxNjIyOTExNzQ5&ixlib=rb-1.2.1'

// let img; // Declare variable 'img'.

// function setup() {
//   createCanvas(720, 400);
//   img = loadImage('assets/moonwalk.jpg'); // Load the image
// }

// function draw() {
//   // Displays the image at its actual size at point (0,0)
//   image(img, 0, 0);
//   // Displays the image at point (0, height/2) at half size
//   image(img, 0, height / 2, img.width / 2, img.height / 2);
// }
</script>

<style>
</style>