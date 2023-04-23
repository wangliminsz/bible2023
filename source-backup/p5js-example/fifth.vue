<template>
  <div>
    <vue-p5 @preload="preload" @setup="setup" @draw="draw" @sketch="sketch"> </vue-p5>
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
  }),

  methods: {
    setup(sketch) {
      let canvas0 = sketch.createCanvas(100, 100);
      canvas0.position(100, 100);
    },

    draw(sketch) {
      sketch.background(160);
    },

    sketch(sk1) {
      (sk1.setup = () => {
        let canvas1 = sk1.createCanvas(710, 400);
        canvas1.position(200, 200);
      }),
        (sk1.draw = () => {
          sk1.background(160);
        });
    },

    preload(sketch) {
      const s = (sketch) => {
        let x = 100;
        let y = 100;

        sketch.setup = () => {
          sketch.createCanvas(200, 200);
        };

        sketch.draw = () => {
          sketch.background(0);
          sketch.fill(255);
          sketch.rect(x, y, 50, 50);
        };
      };

      //let myp5 = new p5(s);
    },

    // sketch(sk2) {
    //   (sk2.setup = () => {
    //     let canvas2 = sk2.createCanvas(710, 400);
    //     canvas2.position(200, 200);
    //   }),
    //     (sk2.draw = () => {
    //       sk2.background(160);
    //     });
    // },
  },
};
</script>

<style>
</style>

