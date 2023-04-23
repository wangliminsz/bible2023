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
  }),

  methods: {

    preload(sketch) {

      this.myFont = sketch.loadFont("/font/SourceSansPro-Regular.ttf");
    //    this.myFont = sketch.loadFont("/font/HARNGTON.ttf");

    },

    setup(sketch) {
      let fontsize = 32;
      sketch.createCanvas(710, 400);

      // Set text characteristics
      sketch.textFont(this.myFont);
      sketch.textSize(fontsize);
    //   sketch.textAlign(CENTER, CENTER);
    },

    draw(sketch) {
      sketch.background(160);

      let gap = 52;
      let margin = 10;
      sketch.translate(margin * 4, margin * 4);

      let counter = 35;

      // Loop as long as there is space on the canvas
      for (let y = 0; y < sketch.height - gap; y += gap) {
        for (let x = 0; x < sketch.width - gap; x += gap) {
          // Use the counter to retrieve individual letters by their Unicode number
          let letter = sketch.char(counter);

          // Add different color to the vowels and other characters
          if (
            letter === "国" ||
            letter === "E" ||
            letter === "I" ||
            letter === "O" ||
            letter === "U"
          ) {
            sketch.fill("#ed225d");
          } else {
            sketch.fill(255);
          }

          // Draw the letter to the screen
          sketch.text(letter, x, y);

          // Increment the counter
          counter++;
        }
      }
    },

  },
};

// let font,
//   fontsize = 32;

// function preload() {
//   // Ensure the .ttf or .otf font stored in the assets directory
//   // is loaded before setup() and draw() are called
//   font = loadFont('assets/SourceSansPro-Regular.otf');
// }

// function setup() {
//   createCanvas(710, 400);

//   // Set text characteristics
//   textFont(font);
//   textSize(fontsize);
//   textAlign(CENTER, CENTER);
// }

// function draw() {
//   background(160);

//   // Set the gap between letters and the left and top margin
//   let gap = 52;
//   let margin = 10;
//   translate(margin * 4, margin * 4);

//   // Set the counter to start at the character you want
//   // in this case 35, which is the # symbol
//   let counter = 35;

//   // Loop as long as there is space on the canvas
//   for (let y = 0; y < height - gap; y += gap) {
//     for (let x = 0; x < width - gap; x += gap) {
//       // Use the counter to retrieve individual letters by their Unicode number
//       let letter = char(counter);

//       // Add different color to the vowels and other characters
//       if (
//         letter === 'A' ||
//         letter === 'E' ||
//         letter === 'I' ||
//         letter === 'O' ||
//         letter === 'U'
//       ) {
//         fill('#ed225d');
//       } else {
//         fill(255);
//       }

//       // Draw the letter to the screen
//       text(letter, x, y);

//       // Increment the counter
//       counter++;
//     }
//   }
// }
</script>

<style>
</style>

