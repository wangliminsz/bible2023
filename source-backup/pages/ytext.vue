<template>
  <div>

    <div>

      <Label>Change X Axis</Label>
      <input type="text"
             class="border p-2 m-2"
             v-model="updateX">

      <Label>Change Y Axis</Label>
      <input type="text"
             class="border p-2 m-2"
             v-model="updateY">
    </div>

    <div class="app">
      <p5 @setup="setup"
          @draw="draw1"></p5>
    </div>

  </div>
</template>

<script>
import VueP5 from 'vue-p5'

export default {
  components: {
    p5: VueP5,
  },

  data() {
    return {
      fillColor: 100,

      TextX: 20,
      TextY: 20,

      updateX: 20,
      updateY: 20,

      thisTxt:
        "(CNN)Joe Biden will this week confront two relentless forces that could seriously hamper his presidency: Vladimir Putin and Capitol Hill deadlock. Both will test the President's leverage and ability to fulfill his agenda of restoring American global leadership and enacting one of the most ambitious economic transformations at home in generations.",
    }
  },

  methods: {
    setup(sketch) {
      sketch.createCanvas(766, 1350)

      let button

      button = sketch.createButton('click me')
      button.position(800, 100)
      button.mousePressed(this.reset)
    },

    draw1(sketch) {
      sketch.background(255)

      sketch.textAlign('LEFT')

      sketch.textFont('Comfortaa')
      sketch.textSize(14)

      sketch.fill(this.fillColor)
      sketch.text(this.thisTxt, this.TextX, this.TextY, 500)
    },

    reset() {
      let pureNumber = 0

      this.fillColor = 0
      this.TextX = this.updateX
      pureNumber = parseInt(this.updateY)
      this.TextY = pureNumber
      //this.TextY = this.updateY   //It's NOT working when use VUE data
      //this.TextY = 120          //It's OK if use Number directly
    },
  },
}
</script>

<style>
</style>

