<template>

  <div class="flex">

    <div class="flex flex-col">

      <div class="m-3 flex-none">
        <button class="px-3 py-1 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
                @click=""><a href="/">
          OK Finish
        </a></button>

         <!-- <button class="px-3 py-1 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
                @click="mynextpage(myPayload)"><a href="/new/thesplash">

            Next Step
          </a></button> -->

        <!-- {{imgOri}} -->

        <!-- {{imgDark}} -->

      </div>

      <div>
        <hr>
      </div>

      <span>
        <label class="mt-3 mx-3"
               for="tx">Text Start (X):</label>
        <input type="text"
               id="tx"
               class="border-black border ml-3  mt-3 px-2 cursor-pointer"
               autocomplete="off"
               v-model="udthisTextX"></span>
      <span>
        <label class="mt-3 mx-3"
               for="ty">Text Start (Y):</label>
        <input type="text"
               id="ty"
               class="border-black border ml-3  mt-2 mb-3 px-2 cursor-pointer"
               autocomplete="off"
               v-model="udthisTextY"></span>

      <span>
        <label class="mt-2 mx-3 w-2/5"
               for="tw">Text Width:</label>
        <input type="text"
               id="tw"
               class="border-black border ml-3  mt-2 my-2 px-2 cursor-pointer w-2/5"
               autocomplete="off"
               v-model="udthisTextWidth"></span>

      <span><label class="mt-3 mx-3 w-2/5"
               for="tf">Font Size:&nbsp</label>
        <input type="text"
               id="tf"
               class="border-black border ml-3  mt-2 mb-3 px-2 cursor-pointer w-2/5"
               autocomplete="off"
               v-model="udtheFontSize"></span>

      <span><label class="mt-3 mx-3"
               for="fonts">Font:</label>
        <select v-model="udtheFont"
                class="mt-2 mx-3 mb-3 p-1 bg-gray-300 w-3/5"
                id="fonts"
                name="fonts">
          <option class="bg-gray-300"
                  value="Comfortaa">Comfortaa</option>
          <option class="bg-gray-300"
                  value="Tcfont">Noto Serif TC</option>
          <option class="bg-gray-300"
                  value="Cinzel">Cinzel</option>
          <option class="bg-gray-300"
                  value="Sarabun">Sarabun(Thai)</option>

          <!--
         Comfortaa: ['Comfortaa'],
                Tcfont: ['Noto Serif TC'], -->

        </select></span>

      <span><label class="mt-1 mx-3"
               for="tcolor">Font Color:</label>
        <input id="tcolor"
               class="mt-1 mx-3 mb-2"
               type="color"
               value="#ff0000"
               v-model="udfillColor" /></span>

      <span><label class="mt-2 mx-3"
               for="fonts">Language:</label>
        <select v-model="udMulti"
                class="mt-2 mx-3 mb-3 p-1 bg-gray-300 w-3/5"
                id="fonts"
                name="fonts">

          <option v-if="txtMulti"
                  class="bg-gray-300"
                  value="current">Current</option>
          <option v-if="txtMulti"
                  class="bg-gray-300"
                  value="basicenglish">English</option>
          <option v-if="txtMulti"
                  class="bg-gray-300"
                  value="thai">Thai</option>
          <option v-if="txtMulti"
                  class="bg-gray-300"
                  value="cut">繁体中文</option>
          <option v-if="txtMulti"
                  class="bg-gray-300"
                  value="cus">Vietnamese</option>

        </select></span>

      <div>
        <hr>
      </div>

      <span><label class="mt-5 mx-3 font-bold"
               for="tint">Tint:</label>
        <input id="tint"
               class="mt-5 mx-3 mb-3"
               type="checkbox"
               value="false"
               v-model="udthisTint" />

        <label class="mx-3"
               for="tintcolor">Tint Color:</label>
        <input id="tintcolor"
               class="mt-5 mx-3 mb-3"
               type="color"
               value="#ff0000"
               v-model="udtintColor" /></span>

      <!-- <span><label class="mt-1 mx-3 w-4/5"
               for="tintAlpha">Tint Opacity(0-255):</label>
        <input type="text"
               id="tintAlpha"
               class="border-black border ml-3 mt-1 mb-3 px-2 cursor-pointer w-1/5"
               autocomplete="off"
               v-model="udtintColorA"></span> -->

      <div>
        <hr>
      </div>

      <span><label class="mt-5 mx-3 font-bold"
               for="overlay">Overlay:</label>
        <input id="overlay"
               class="mt-5 mx-3"
               type="checkbox"
               value="false"
               v-model="udoverlayColor"
               @click="computeOverlay" /></span>

      <!-- <span><label class="mt-3 mx-3"
               for="overlayWhite">White:</label>
        <input id="overlayWhite"
               class="mt-3 mx-3 mb-3"
               type="radio"
               v-model="udoverlayWhite" />
        <label class="mt-3 mx-3"
               for="overlayBlack">Black:</label>
        <input id="overlayBlack"
               class="mt-3 mx-3 mb-3"
               type="radio"
               v-model="udoverlayBlack" />
      </span> -->

      <span class="mt-3"><label class="mt-3 mx-3 w-4/5"
               for="blackWhite">White / Black:</label>
        <input type="radio"
               id="blackWhite"
               name="blackWhite"
               value=0
               v-model="udoverlayWB"> White
        <input type="radio"
               name="blackWhite"
               value=1
               v-model="udoverlayWB"> Black
      </span>

      <!-- {{udoverlayWB}} -->

      <span><label class="mt-1 mx-3 w-4/5"
               for="overlayAlpha">Opacity(0-255):</label>
        <input type="text"
               id="overlayAlpha"
               class="border-black border ml-3 mt-2 mb-3 px-2 cursor-pointer w-1/5"
               autocomplete="off"
               v-model="udoverlayColorA"></span>

      <span><label class="mt-1 mx-3"
               for="tOpx">X:&nbsp</label>
        <input type="text"
               id="tOpx"
               class="border-black border ml-2 mt-2 px-2 cursor-pointer w-16"
               autocomplete="off"
               v-model="udOpX">

        <label class="mt-1 mx-3"
               for="tOpy">Y:</label>
        <input type="text"
               id="tOpy"
               class="border-black border ml-2 mt-2 px-2 cursor-pointer w-16"
               autocomplete="off"
               v-model="udOpY"></span>

      <span><label class="mt-1 mx-3"
               for="tOpw">W:</label>
        <input type="text"
               id="tOpw"
               class="border-black border ml-2 mt-2 px-2 cursor-pointer w-16"
               autocomplete="off"
               v-model="udOpW">

        <label class="mt-1 mx-3"
               for="tOph">H:</label>
        <input type="text"
               id="tOph"
               class="border-black border ml-2 mt-2 px-2 cursor-pointer w-16"
               autocomplete="off"
               v-model="udOpH"></span>

      <!-- <div class="ml-3 mr-72 my-3 flex-none">

        <!-- <input type="text"
               name="Text Start Position"
               id="">

               udtheFontSize: 20,-->

      <!-- <input id="range"
           type="range"
           min="10"
           max="40"
           step="1"
           v-model="theFontSize">

           {{theFontSize}} -->

    </div>
    <div class="">

      <div class="ml-10 mt-10 flex-none">
        <vue-p5 @preload="preload"
                @setup="setup"
                @draw="draw"> </vue-p5>
      </div>

    </div>

  </div>

</template>

<script>
import VueP5 from 'vue-p5'

import { mapState } from 'vuex'

export default {
  components: {
    'vue-p5': VueP5,
  },

  data() {
    return {
      imgOri: null,
      imgDark: null,

      txtBK: '',
      txtVer: '',
      txtCh: '',

      txtShow: '',
      txtShowMulti: '',

      txtShowEn: '',
      txtShowThai: '',
      txtShowCut: '',
      txtShowCus: '',
      txtMulti: 0,

      myTxtArr: [],
      myTxtShow: [],
      myTxtFinalShow: '',

      imgShow: '',
      imgInfo: {}, // 存图片的宽高信息

      myCanvasWidth: 0,
      myCanvasHeight: 0,

      myFinalImg: null,
      myImg768: null,
      myImg1024: null,
      myImgLogo: null,

      //-------------

      theFont: 'Comfortaa',
      theFontSize: 36,

      fillColor: '#ffffff',

      thisTextX: 150,
      thisTextY: 100,

      thisTextWidth: 750,

      thisTint: false,

      tintColor: '#808080',

      tintColorR: 0,
      tintColorG: 0,
      tintColorB: 0,

      tintColorA: 128,

      overlayColor: false,
      overlayColorA: 127,

      overlayWhite: null,
      overlayBlack: null,
      overlayWB: 0,

      OpW: 0,
      OpH: 0,
      OpX: 0,
      OpY: 0,

      //-------------
      udOpW: 0,
      udOpH: 0,
      udOpX: 0,
      udOpY: 0,

      udMulti: '',
      udtheFont: 'Comfortaa',
      udtheFontSize: 36,

      udfillColor: '#ffffff',

      udthisTextX: 150,
      udthisTextY: 100,

      udthisTextWidth: 750,

      udthisTint: false,

      udtintColor: '#808080',

      udtintColorR: 0,
      udtintColorG: 0,
      udtintColorB: 0,

      udtintColorA: 128,

      udoverlayColor: false,
      udoverlayColorA: 127,

      udoverlayWhite: null,
      udoverlayBlack: null,
      udoverlayWB: 0,
    }
  },

  computed: {
    // 映射store.state
    ...mapState({
      //   theText: (state) => state.sessionStorage.storedVerse,
      //   theBk: (state) => state.sessionStorage.storedBk,
      //   theCh: (state) => state.sessionStorage.storedVer,

      theImgBk: (state) => state.sessionStorage.txtFinal.keyBk,
      theImgVer: (state) => state.sessionStorage.txtFinal.keyVer,
      theImgCh: (state) => state.sessionStorage.txtFinal.keyCh,
      theImgTxt: (state) => state.sessionStorage.txtFinal.keyContent,

      imgTxtEn: (state) => state.sessionStorage.txtFinal.keyContentEn,
      imgTxtThai: (state) => state.sessionStorage.txtFinal.keyContentThai,
      imgTxtCut: (state) => state.sessionStorage.txtFinal.keyContentCut,
      imgTxtCus: (state) => state.sessionStorage.txtFinal.keyContentCus,
      imgMulti: (state) => state.sessionStorage.txtFinal.keyMultiFlag,

      //   let key5 = 'keyContentEn'
      //   let key6 = 'keyContentThai'
      //   let key7 = 'keyContentCut'
      //   let key8 = 'keyContentCus'
      //   let key9 = 'keyMultiFlag'

      theImgUrl: (state) => state.sessionStorage.imgFinal,
    }),
    //...mapGetters({}),
  },

  beforeMount: function () {
    this.getUrl('ori', 'mode')
  },

  mounted: function () {
    this.getImgInfo()
    this.thisMyImg()
  },

  methods: {
    getUrl(args1, args2) {
      this.imgOri = getQueryVariable(args1)
      this.imgDark = getQueryVariable(args2)
    },

    getImgInfo() {
      this.imgShow = this.theImgUrl
      //window.open(this.theImgUrl, '_blank')

      let img = new Image()
      img.src = this.imgShow
      const vm = this
      img.onload = function () {
        vm.$set(vm.imgInfo, 'width', img.width)
        vm.$set(vm.imgInfo, 'height', img.height)
      }
    },

    thisMyImg() {
      //this.txtShow = this.theImgTxt + '\n\n' + this.theImgCh
      this.txtShow = this.theImgTxt

      this.txtShowEn = this.imgTxtEn + '\n\n' + this.theImgCh
      this.txtShowThai = this.imgTxtThai + '\n\n' + this.theImgCh
      this.txtShowCut = this.imgTxtCut + '\n\n' + this.theImgCh
      this.txtShowCus = this.imgTxtCus + '\n\n' + this.theImgCh
      this.txtMulti = this.imgMulti

      // //console.log(this.theImgCh)
      // //debugger

      //   //console.log(this.txtShow)
      //   //debugger
      //   //console.log(this.imgTxtEn)
      //   //console.log(this.imgTxtThai)
      //   //console.log(this.imgTxtCut)
      //   //console.log(this.imgTxtCus)
      // //console.log(this.imgMulti)
      // //debugger

      //   this.myTxtArr = this.txtShow.split('')
    },

    // txtCal() {
    //   //   //console.log(this.imgInfo.height)
    //   //   //console.log(this.imgInfo.width)
    //   //   //debugger

    //   let rowNumber = 0
    //   let i = 0
    //   let j = 0
    //   let str1 = ''
    //   let str2 = ''
    //   let restNumber = 0

    //   //if (this.imgInfo.height >= this.imgInfo.width)
    //   if (true) {
    //     //this.myCanvasWidth = 768

    //     rowNumber = Math.ceil(this.myTxtArr.length / 18)

    //     restNumber = this.myTxtArr.length - (rowNumber - 1) * 18

    //     // //console.log('72----------' + this.myTxtArr[72])
    //     // //console.log(this.myTxtArr)

    //     for (i = 0; i < rowNumber - 1; i++) {
    //       for (j = 18 * (i + 1) - 18; j < 18 * (i + 1); j++) {
    //         if (false &&
    //           j == 18 * (i + 1) - 18 &&
    //           (this.myTxtArr[j] == '，' ||
    //             this.myTxtArr[j] == '。' ||
    //             this.myTxtArr[j] == '、'||
    //             this.myTxtArr[j] == '；')
    //         ) {
    //         //   //console.log('Start' + this.myTxtArr[j] + 'j---' + j)
    //         //   //debugger
    //         } else {

    //           str1 = str1 + this.myTxtArr[j]
    //         }
    //       }

    //       this.myTxtShow.push(str1)
    //       str1 = ''
    //     }

    //     // //console.log(this.myTxtShow);
    //     // //debugger;
    //     let i = rowNumber - 1
    //     for (j = 18 * (i + 1) - 18; j < 18 * (i + 1) - 18 + restNumber; j++) {
    //       str1 = str1 + this.myTxtArr[j]
    //     }

    //     this.myTxtShow.push(str1)
    //     str1 = ''

    //     // //console.log(this.myTxtShow)

    //     // //console.log('36 ---' + this.myTxtShow[36])
    //     // //debugger

    //     for (i = 0; i < this.myTxtShow.length; i++) {
    //       this.myTxtFinalShow =
    //         this.myTxtFinalShow + '\n' + this.myTxtShow[i].trimStart()
    //     }

    //     this.myTxtFinalShow  = this.myTxtFinalShow + '\n\n' + this.theImgCh

    //     // //console.log(this.myTxtShow);
    //     // //debugger;
    //   }
    // },

    //------------------------------

    preload(sketch) {
      this.txtShowMulti = this.txtShow

    //   if (this.imgInfo.height >= this.imgInfo.width) {

        if (this.imgOri == 0 || this.imgOri == 2){

        this.myCanvasWidth = 768
        this.myCanvasHeight = Math.round(
          (768 * this.imgInfo.height) / this.imgInfo.width
        )

        this.thisTextWidth = 560
        this.thisTextX = 125
        this.thisTextY = 100

        this.udthisTextWidth = 560
        this.udthisTextX = 125
        this.udthisTextY = 100

        this.fillColor = '#ffffff'
        this.udfillColor = '#ffffff'
      } else {
        // this.myCanvasWidth = 1024
        // this.myCanvasHeight = Math.round(
        //   (1024 * this.imgInfo.height) / this.imgInfo.width
        // )
        // this.thisTextWidth = 750
        // this.thisTextX = 150
        // this.thisTextY = 100

        // this.udthisTextWidth = 750
        // this.udthisTextX = 150
        // this.udthisTextY = 100

        this.myCanvasWidth = 768
        this.myCanvasHeight =
          600 + Math.round((648 * this.imgInfo.height) / this.imgInfo.width)
        this.thisTextWidth = 660
        this.thisTextX = 80
        this.thisTextY = this.myCanvasHeight - 520

        this.udthisTextWidth = this.thisTextWidth
        this.udthisTextX = this.thisTextX
        this.udthisTextY = this.thisTextY

        if (this.imgDark == 0) {
          this.fillColor = '#000000'
          this.udfillColor = '#000000'
        } else {
          this.fillColor = '#ffffff'
          this.udfillColor = '#ffffff'
        }
      }
    },

    setup(sketch) {
      sketch.createCanvas(this.myCanvasWidth, this.myCanvasHeight)

      this.myFinalImg = sketch.loadImage(this.imgShow)

      this.myImg768 = sketch.loadImage('/768.png')
      this.myImg1024 = sketch.loadImage('/1024.png')

      this.myImg768Black = sketch.loadImage('/768black.png')
      this.myImg1024Black = sketch.loadImage('/1024black.png')

      //   this.myImgLogo = sketch.loadImage('/mybible01.png')

      //   sketch.textFont('Tcfont')
      //   sketch.textSize(this.theFontSize)
      //sketch.textAlign("LEFT", "LEFT");

      //this.txtCal()

      let button, button1

      let buttonStyle =
        'border-radius: 6px; background-color: #0d6efd; border: Solid; color: white; padding: 3px 22px; text-align: center;  text-decoration: none; display: inline-block; font-size: 14px;'

      let buttonStyle1 =
        'border-radius: 6px; background-color: #198754; border: Solid; color: white; padding: 3px 30px; text-align: center;  text-decoration: none; display: inline-block; font-size: 14px;'

      button = sketch.createButton('Update')
      button.position(10, 640)
      button.style(buttonStyle)
      button.mousePressed(this.reset)

      button1 = sketch.createButton('Save')
      button1.position(150, 640)
      button1.style(buttonStyle1)
      //   button1.mousePressed(this.saveImg)
      button1.mousePressed(() => {
        sketch.saveCanvas('myCanvas', 'jpg')
      })

      //   let button1

      //   button1 = sketch.createButton('save me')
      //   button1.position(50, 150)

      //   button1.mousePressed(this.saveImg(sketch))
    },

    saveImg() {
      //this.myFinalImg.save('saved-image', 'jpg');
    },

    hexToRgb(hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null
    },

    computeOverlay() {
      //   udthisTextX: 150,
      //   udthisTextY: 100,
      //   udthisTextWidth: 750,

      //   udOpW: 0,
      //   udOpH: 0,
      //   udOpX: 0,
      //   udOpY: 0,
      this.udOpX = parseInt(this.udthisTextX) - 40
      this.udOpY = parseInt(this.udthisTextY) - 40
      this.udOpW = parseInt(this.udthisTextWidth) + 70
      this.udOpH = 400
    },

    reset() {
      //   this.fillColor = this.udfillColor
      //   this.theFontSize = this.udtheFontSize

      let pureNumber = 0
      let pureStr = ''

      let tR = 0
      let tG = 0
      let tB = 0
      let tA = 0

      pureNumber = parseInt(this.udthisTextY)

      this.thisTextY = pureNumber

      this.thisTextX = this.udthisTextX

      this.thisTextWidth = this.udthisTextWidth

      pureNumber = 0

      pureNumber = parseInt(this.udtheFontSize)

      this.theFontSize = pureNumber

      pureStr = this.udtheFont
      this.theFont = pureStr

      this.fillColor = this.udfillColor

      this.thisTint = this.udthisTint

      if (this.udthisTint) {
        this.tintColor = this.udtintColor

        this.udtintColorR = this.hexToRgb(this.udtintColor).r
        this.udtintColorG = this.hexToRgb(this.udtintColor).g
        this.udtintColorB = this.hexToRgb(this.udtintColor).b

        tR = parseInt(this.udtintColorR)
        tG = parseInt(this.udtintColorG)
        tB = parseInt(this.udtintColorB)
        tA = parseInt(this.udtintColorA)

        this.tintColorR = tR
        this.tintColorG = tG
        this.tintColorB = tB
        this.tintColorA = tA
      } else {
        this.tintColorR = 0
        this.tintColorG = 0
        this.tintColorB = 0
        this.tintColorA = 0
      }

      this.overlayColor = this.udoverlayColor

      let oV = 0
      oV = parseInt(this.udoverlayColorA)
      this.overlayColorA = oV

      let myOpX = 0
      let myOpY = 0

      let myOpW = 0
      let myOpH = 0

      myOpX = parseInt(this.udOpX)
      myOpY = parseInt(this.udOpY)
      myOpW = parseInt(this.udOpW)
      myOpH = parseInt(this.udOpH)

      this.OpX = myOpX
      this.OpY = myOpY
      this.OpW = myOpW
      this.OpH = myOpH

      let blackWhite = 0
      blackWhite = parseInt(this.udoverlayWB)
      this.overlayWB = blackWhite

      //this.tintColorR, this.tintColorG, this.tintColorB, this.tintColorA

      //   //console.log(this.tintColorR)
      //   //console.log(this.tintColorG)
      //   //console.log(this.tintColorB)
      //   //debugger

      if (this.txtMulti == 1) {
        if (this.udMulti == 'current') {
          this.txtShowMulti = this.txtShow
        }

        if (this.udMulti == 'basicenglish') {
          this.txtShowMulti = this.txtShowEn
        }

        if (this.udMulti == 'thai') {
          this.txtShowMulti = this.txtShowThai
        }

        if (this.udMulti == 'cut') {
          this.txtShowMulti = this.txtShowCut
        }

        if (this.udMulti == 'cus') {
          this.txtShowMulti = this.txtShowCus
        }
      }
    },

    // saveImg(sketch){

    //     sketch.saveCanvas('myCanvas.jpg');
    // },

    draw(sketch) {
      //sketch.background(this.myFinalImg)

    //   if (this.imgOri == 0) {

        if (this.imgOri == 0 || this.imgOri == 2){
        sketch.image(
          this.myFinalImg,
          0,
          0,
          this.myCanvasWidth,
          this.myCanvasHeight
        )
      } else {
        if (this.imgDark == 0) {
          sketch.background(this.myImg768)

          sketch.image(
            this.myFinalImg,
            40,
            40,
            this.myCanvasWidth - 80,
            this.myCanvasHeight - 600
          )
        } else {
          sketch.background(this.myImg768Black)

          sketch.image(
            this.myFinalImg,
            40,
            40,
            this.myCanvasWidth - 80,
            this.myCanvasHeight - 600
          )
        }
      }

      let x = 0
      let myStr = ''

      //myStr = this.txtShow
      //myTxtShow

      if (this.overlayColor) {
        if (this.imgInfo.height >= this.imgInfo.width) {
          sketch.tint(255, this.overlayColorA)
          if (this.overlayWB == 0) {
            sketch.image(this.myImg768, this.OpX, this.OpY, this.OpW, this.OpH)
          } else {
            sketch.image(
              this.myImg768Black,
              this.OpX,
              this.OpY,
              this.OpW,
              this.OpH
            )
          }
        } else {
          sketch.tint(255, this.overlayColorA)
          if (this.overlayWB == 0) {
            sketch.image(this.myImg1024, this.OpX, this.OpY, this.OpW, this.OpH)
          } else {
            sketch.image(
              this.myImg1024Black,
              this.OpX,
              this.OpY,
              this.OpW,
              this.OpH
            )
          }
        }
      } else {
        if (this.imgInfo.height >= this.imgInfo.width) {
          sketch.tint(255, 0)
          if (this.overlayWB == 0) {
            sketch.image(this.myImg768, this.OpX, this.OpY, this.OpW, this.OpH)
          } else {
            sketch.image(
              this.myImg768Black,
              this.OpX,
              this.OpY,
              this.OpW,
              this.OpH
            )
          }
        } else {
          sketch.tint(255, 0)
          if (this.overlayWB == 0) {
            sketch.image(this.myImg1024, this.OpX, this.OpY, this.OpW, this.OpH)
          } else {
            sketch.image(
              this.myImg1024Black,
              this.OpX,
              this.OpY,
              this.OpW,
              this.OpH
            )
          }
        }
      }

      sketch.textAlign('LEFT')

      sketch.textFont(this.theFont)
      sketch.textSize(this.theFontSize)

      sketch.fill(this.fillColor)

      sketch.text(
        this.txtShowMulti,
        this.thisTextX,
        this.thisTextY,
        this.thisTextWidth
      )

      //sketch.tint(0, 153, 204)
      //sketch.tint(255, 255,127)

      if (this.thisTint) {
        //sketch.tint('#808080', 127)
        // sketch.tint('#fff000')

        sketch.noTint()

        sketch.tint(
          this.tintColorR,
          this.tintColorG,
          this.tintColorB,
          this.tintColorA
        )
      } else {
        sketch.noTint()
      }

      sketch.textAlign('LEFT')

    //   sketch.textFont(this.theFont)
      sketch.textFont('Comfortaa')
      sketch.textSize(18)

      sketch.fill(this.fillColor)

      sketch.text(
        'mybible.cloud',
        this.myCanvasWidth - 180,
        this.myCanvasHeight - 60
      )

      //sketch.image(this.myImgLogo, this.myCanvasWidth-180, this.myCanvasHeight-60, 160, 32)
      //sketch.stroke(255,255,0)
      //sketch.strokeWeight(10) // Beastly
      //sketch.line(15, 15, this.myCanvasWidth-30, 15)
    },

    //------------------------------
  },
}
</script>

<style>
canvas {
  border-radius: 8px;
}
</style>