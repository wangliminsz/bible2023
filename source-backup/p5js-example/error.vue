<template>
  <div id="app">
    <canvas id="mycanvas"></canvas>
    <!-- <vue-p5 v-on="this"></vue-p5>

    <vue-p5 @setup="setup"></vue-p5> -->

     <vue-p5 v-on="{setup, draw}"></vue-p5>
    <!-- <button @click="setup">Hello P5</button> -->
  </div>
</template>

<script>
import Vue from "vue";
//import VueP5 from "vue-p5";
import VueP5 from "vue-p5";

export default {

   components: {
    "vue-p5": VueP5
  },

  methods: {
    // setup(sketch: p5) {
    //   sketch.background("green");
    //   sketch.text("Hello p5!", 20, 20);
    // },

      setup(sketch) {
        sketch.resizeCanvas(800, 600);
        sketch.background('green');
        sketch.text('Hello p5!', 20, 20);
      },

    //     setup() {
    //       createCanvas(400, 400);
    //     },

    //     draw() {
    //       background(220);
    //     },
    //   },

    render(h) {
      return h(VueP5, { on: this });
    },
  },
};
</script>

<style>
</style>