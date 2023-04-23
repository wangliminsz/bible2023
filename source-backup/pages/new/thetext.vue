<template>

  <div class="flex">

    <div class="m-3 flex-none">
      <button class="px-3 py-1 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
              @click="mytxtpage(myContent)"><a :href="getHref(imgOri,imgDark)">
          OK Confirm
        </a></button>
    </div>

    <div class="flex flex-col">

      <div class="flex">

        <div class="mt-4 flex-none">
          <!-- <button class="px-3 py-1 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
              @click="mynextpage(myPayload)"><a href="/new/thetext"> -->

          <span><Label for="multi"
                   class="mr-2 mt-2">Multi Language?</Label><input class="mr-2"
                   id="multi"
                   type="checkbox"
                   @click="multiL"> </span>
        </div>

        <!-- {{imgOri}} -->

        <div class="mt-4 flex-none">
          <!-- <button class="px-3 py-1 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
              @click="mynextpage(myPayload)"><a href="/new/thetext"> -->

          <span v-if="imgOri==1"><Label for="darkmode"
                   class="ml-5 mr-2 mt-2">Dark Mode?</Label><input class="mr-2"
                   id="darkmode"
                   type="checkbox"
                   @click="isDark"> </span>
        </div>

      </div>

      <div class="mt-10 p-10 justify-center">

        <textarea rows="15"
                  cols="80"
                  autofocus
                  class="m-3 p-10 border-2 border-yellow border-solid bg-gray-100 text-left"
                  v-model="theTxtContent">
       </textarea>

      </div>

    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      myChapter: '',
      myText: '',

      multiFlag: 0,

      myTextEn: '',
      myTextThai: '',
      myTextCut: '',
      myTextCus: '',

      theTextEn: [],
      theTextThai: [],
      theTextCut: [],
      theTextCus: [],

      theMultiEn: null,
      theMultiThai: {},
      theMultiCut: {},
      theMultiCus: {},

      myContent: {},
      theTxtContent: '',

      imgOri: null,
      imgDark: 0,
    }
  },

  beforeMount: function () {
    //this.fetchMulti()

    //this.getUrl('thebk', 'ver')

    this.getUrl('ori')
  },

  mounted: function () {
    this.fetchMulti()
    this.thisMyText()
    //this.thisMyMulti()
    // this.fetchMulti()
  },

  updated: function () {
    this.thisPayload()
  },

  computed: {
    // 映射store.state
    ...mapState({
      theText: (state) => state.sessionStorage.storedVerse,
      theBk: (state) => state.sessionStorage.storedBk,
      theVer: (state) => state.sessionStorage.storedVer,
    }),
  },

  methods: {
    // 映射store.mutations
    ...mapMutations({
      increment: 'increment',
      mytxtpage: 'mytxtpage',
    }),

    ...mapActions({}),

    getHref(val, val2) {
      return '/new/thetxt?ori=' + val + '&mode=' + val2
    },

    getUrl(args1) {
      this.imgOri = getQueryVariable(args1)
    },

    thisPayload() {
      let key1 = 'keyBk'
      let key2 = 'keyVer'
      let key3 = 'keyCh'
      let key4 = 'keyContent'

      //   let key5 = 'keyContentEn'
      //   let key6 = 'keyContentThai'
      //   let key7 = 'keyContentCut'
      //   let key8 = 'keyContentCus'

      let myBk1 = ''

      //true - number, false - not number
      if (this.myIsNaN(this.theBk.substr(0, 1))) {
        myBk1 =
          this.theBk.substr(0, 1) +
          ' ' +
          this.theBk.substr(1, this.theBk.length)
      } else {
        if (this.theBk == 'SongofSongs') {
          myBk1 = 'Song of Songs'
        } else {
          myBk1 = this.theBk
        }
      }
      this.myContent[key1] = myBk1

      this.myContent[key2] = this.theVer
      this.myContent[key3] = myBk1 + ' ' + this.myChapter
      //   this.myContent[key4] = this.myText
      this.myContent[key4] = this.theTxtContent
    },

    myIsNaN(value) {
      //   //console.log('------')
      //   //console.log(value)
      //   //console.log(typeof parseInt(value))
      //   //console.log(!isNaN(value))
      return typeof parseInt(value) === 'number' && !isNaN(value)
    },

    isDark() {
      if (this.imgDark == 0) {
        this.imgDark = 1
      } else {
        this.imgDark = 0
      }
    },

    multiL() {
      //   //console.log(this.theMultiEn)
      //   //debugger

      let key6 = 'keyContentEn'
      let key7 = 'keyContentThai'
      let key8 = 'keyContentCut'
      let key9 = 'keyContentCus'

      let theStr = ''
      let i = 0

      if (this.multiFlag == 0) {
        this.multiFlag = 1
      } else {
        this.multiFlag = 0
      }

      if (this.multiFlag == 1) {
        if (this.theText.length < 8) {
          for (i = 0; i < this.theText.length; i++) {
            theStr = this.theMultiEn.book[i].chapter[
              this.theText[i].chNumber
            ].verse.replace(/\n|\r/g, ' ')

            //let theStr = this.theText[i].theVerse.replace(/\n|\r/g, ' ')

            if (
              i == 0 ||
              (i > 0 &&
                this.theText[i].bkNumber == this.theText[i - 1].bkNumber &&
                this.theText[i].chNumber == this.theText[i - 1].chNumber + 1)
            ) {
              this.myTextEn = this.myTextEn + theStr
            } else {
              this.myTextEn = this.myTextEn + ' … ' + theStr
            }
          }
          this.multiFlag = 1
        } else {
          this.myTextEn = ''
          this.myTextThai = ''
          this.myTextCut = ''
          this.myTextCus = ''
          this.multiFlag = 0
        }

        theStr = ''

        if (this.theText.length < 8) {
          for (i = 0; i < this.theText.length; i++) {
            theStr = this.theMultiThai.book[i].chapter[
              this.theText[i].chNumber
            ].verse.replace(/\n|\r/g, ' ')

            if (
              i == 0 ||
              (i > 0 &&
                this.theText[i].bkNumber == this.theText[i - 1].bkNumber &&
                this.theText[i].chNumber == this.theText[i - 1].chNumber + 1)
            ) {
              this.myTextThai = this.myTextThai + theStr
            } else {
              this.myTextThai = this.myTextThai + ' … ' + theStr
            }

            //this.myTextThai = this.myTextThai.split("").join(" ")

            let thaiStr = this.myTextThai

            thaiStr = thaiStr.replace(/\s/g, '').replace(/(.{6})/g, '$1 ')

            this.myTextThai = thaiStr


            //console.log(thaiStr)

            // //console.log(str) //2019 1202 1137 59
            // debugger
          }
          this.multiFlag = 1
        }

        theStr = ''

        if (this.theText.length < 8) {
          for (i = 0; i < this.theText.length; i++) {
            theStr = this.theMultiCut.book[i].chapter[
              this.theText[i].chNumber
            ].verse.replace(/\n|\r/g, ' ')

            if (
              i == 0 ||
              (i > 0 &&
                this.theText[i].bkNumber == this.theText[i - 1].bkNumber &&
                this.theText[i].chNumber == this.theText[i - 1].chNumber + 1)
            ) {
              this.myTextCut = this.myTextCut + theStr
            } else {
              this.myTextCut = this.myTextCut + ' … ' + theStr
            }
          }
          this.multiFlag = 1
        }

        theStr = ''

        if (this.theText.length < 8) {
          for (i = 0; i < this.theText.length; i++) {
            theStr = this.theMultiCus.book[i].chapter[
              this.theText[i].chNumber
            ].verse.replace(/\n|\r/g, ' ')

            if (
              i == 0 ||
              (i > 0 &&
                this.theText[i].bkNumber == this.theText[i - 1].bkNumber &&
                this.theText[i].chNumber == this.theText[i - 1].chNumber + 1)
            ) {
              this.myTextCus = this.myTextCus + theStr
            } else {
              this.myTextCus = this.myTextCus + ' … ' + theStr
            }
          }
          this.multiFlag = 1
        }
      }

      this.myContent[key6] = this.myTextEn
      this.myContent[key7] = this.myTextThai
      this.myContent[key8] = this.myTextCut
      this.myContent[key9] = this.myTextCus

      let key5 = 'keyMultiFlag'
      this.myContent[key5] = this.multiFlag

      //   //console.log(this.myContent)
      //   //debugger
    },

    thisMyText() {
      for (let i = 0; i < this.theText.length; i++) {
        let theStr = this.theText[i].theVerse.replace(/\n|\r/g, ' ')

        if (
          i == 0 ||
          (i > 0 &&
            this.theText[i].bkNumber == this.theText[i - 1].bkNumber &&
            this.theText[i].chNumber == this.theText[i - 1].chNumber + 1)
        ) {
          this.myText = this.myText + theStr
        } else {
          this.myText = this.myText + '… ' + theStr
        }
      }

      for (let i = 0; i < this.theText.length; i++) {
        if (i == this.theText.length - 1) {
          this.myChapter =
            this.myChapter +
            this.theText[i].bkNumber +
            ':' +
            this.theText[i].chNumber
        } else {
          this.myChapter =
            this.myChapter +
            this.theText[i].bkNumber +
            ':' +
            this.theText[i].chNumber +
            ' | '
        }
      }

      //this.myContent = this.myText + '\n\n' + this.theBk + ' ' + this.myChapter

      //   let key1 = 'keyBk'
      //   let key2 = 'keyVer'
      //   let key3 = 'keyCh'
      //   let key4 = 'keyContent'

      //   //   let key5 = 'keyContentEn'
      //   //   let key6 = 'keyContentThai'
      //   //   let key7 = 'keyContentCut'
      //   //   let key8 = 'keyContentCus'

      //   this.myContent[key1] = this.theBk
      //   this.myContent[key2] = this.theVer
      //   this.myContent[key3] = this.theBk + ' ' + this.myChapter
      // //   this.myContent[key4] = this.myText
      //   this.myContent[key4] = this.myTextContent

      //   //console.log(this.theBk.substr(0, 1))
      //   //debugger

      //true - number, false - not number
      if (this.myIsNaN(this.theBk.substr(0, 1))) {
        this.theTxtContent =
          this.myText +
          '\n\n' +
          this.theBk.substr(0, 1) +
          ' ' +
          this.theBk.substr(1, this.theBk.length) +
          ' ' +
          this.myChapter
      } else {
        if (this.theBk == 'SongofSongs') {
          this.theTxtContent =
            this.myText + '\n\n' + 'Song of Songs' + ' ' + this.myChapter
        } else {
          this.theTxtContent =
            this.myText + '\n\n' + this.theBk + ' ' + this.myChapter
        }
      }

      // if (this.theBk == 'SongofSongs') {
      //   myBk1 = 'Song of Songs'
      // } else {
      //   myBk1 = this.theBk

      //   //console.log(this.theTxtContent)
      //   //debugger

      //   this.theTxtContent =
      //     this.myText + '\n\n' + this.theBk + ' ' + this.myChapter

      //   //console.log(this.myContent)
      //   //debugger
    },

    //-----------------------------------------

    // thisMyFetch() {
    //   // this.theBk
    //   // this.theText[i].bkNumber
    //   // this.theText[i].chNumber
    //   //http://getbible.net/json?passage=James1:3;1:4;1:7;1:8;2:1&version=basicenglish
    //   //theMultiContentEn
    // },

    // // thisMyMulti(txtObjEn,txtObjThai,txtObjCut,txtObjCus) {
    // thisMyMulti(txtObjEn) {
    //   //txtObjEn
    //   //console.log(txtObjEn)
    //   //debugger
    // },

    fetchMulti() {
      let that = this
      //let theMulti = {}

      let multiStr = ''

      for (let i = 0; i < this.theText.length; i++) {
        if (i == this.theText.length - 1) {
          multiStr =
            multiStr + this.theText[i].bkNumber + ':' + this.theText[i].chNumber
        } else {
          multiStr =
            multiStr +
            this.theText[i].bkNumber +
            ':' +
            this.theText[i].chNumber +
            ';'
        }
      }

      let urlStr1 =
        'https://getbible.net/json?passage=' +
        this.theBk +
        ' ' +
        multiStr +
        '&version=basicenglish'

      //*****************

      fetchJsonp(urlStr1)
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          that.theMultiEn = json
        })
        .catch(function (ex) {
          //console.log('parsing failed', ex)
        })

      let urlStr2 =
        'https://getbible.net/json?passage=' +
        this.theBk +
        ' ' +
        multiStr +
        '&version=thai'

      //*****************

      fetchJsonp(urlStr2)
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          that.theMultiThai = json
        })
        .catch(function (ex) {
          //console.log('parsing failed', ex)
        })

      //*************************

      let urlStr3 =
        'https://getbible.net/json?passage=' +
        this.theBk +
        ' ' +
        multiStr +
        '&version=cnt'

      //*****************

      fetchJsonp(urlStr3)
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          that.theMultiCut = json
        })
        .catch(function (ex) {
          //console.log('parsing failed', ex)
        })

      //--------------------------------

      let urlStr4 =
        'https://getbible.net/json?passage=' +
        this.theBk +
        ' ' +
        multiStr +
        '&version=vietnamese'

      //*****************

      fetchJsonp(urlStr4)
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          that.theMultiCus = json
        })
        .catch(function (ex) {
          //console.log('parsing failed', ex)
        })
    },

    //------------------------------
  },
}
</script>

<style>
</style>