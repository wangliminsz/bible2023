<template>
  <div>
    <div class="flex">
      <div class="w-auto flex flex-col">
        <div class="my-3 mx-3 flex-none">
          <button
            class="
              w-32
              px-2
              py-2
              bg-blue-500
              border
              rounded
              shadow-2xl
              text-white text-sm
              flex-nowrap
            "
            @click="selectThem()"
          >
            OK Select
          </button>
        </div>

        <div class="flex flex-col flex-none">
          <div class="ml-3 mb-2 text-sm">
            <label for="ori">Image:</label>
          </div>
          <div class="ml-3 text-sm">
            <input type="radio" name="imgS" value="0" v-model="imgSource" />
            Network
          </div>
          <div class="ml-3 text-sm">
            <input type="radio" name="imgS" value="1" v-model="imgSource" />
            Upload
          </div>
        </div>
      </div>

      <div v-if="selectedVerse[0]" class="w-auto my-3 mx-3">
        <button
          class="
            w-32
            px-3
            py-2
            bg-blue-500
            border
            rounded
            shadow-2xl
            text-white text-sm
            flex-none
          "
          @click="mynextpage(myPayload)"
        >
          <!-- <a href="/new/thesplash"> Next Step </a> -->

          <a :href="getHref(imgSource)">Next Step</a>
        </button>
      </div>

      <div v-if="selectedVerse[0]" class="w-auto flex flex-col m-3 p-1">
        <div
          v-for="(i, index) in selectedVerse"
          :key="index"
          class="flex m-2 px-20 py-1"
        >
          {{ i.bk }}:{{ i.ch }} {{ bookContent.book[i.bk].chapter[i.ch].verse }}
        </div>
      </div>
    </div>

    <div v-if="bookContent.type">
      <div v-for="(i, index) in booklist01" :key="index">
        <span
          class="flex text-center font-bold justify-center mt-3 mb-3 mx-2 p-1"
        >
          Chapter {{ i.bkno }}

          <img
            v-if="index > 0"
            height="20"
            width="25"
            class="ml-5"
            src="/gotop.png"
            @click="backTop"
          />
        </span>

        <hr />
        <br />
        <div
          v-for="(j, index) in i.chno"
          :key="index"
          class="flex m-2 px-20 py-1"
        >
          <input
            type="checkbox"
            id="wselect"
            class="flex mr-1 mt-2"
            @click="whichOne(i.bkno, j)"
          />
          {{ i.bkno }}:{{ j }} {{ bookContent.book[i.bkno].chapter[j].verse }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import LogoVue from '~/components/Logo.vue';

import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions, mapGetters } from "vuex";

// import '../../static/js/fetch-jsonp'
// import '../../static/js/theUrl'

// import '../../static/js/fetch-jsonp.js'

export default {
  head: {
    script: [
      {
        //src: 'https://cdn.bootcss.com/fetch-jsonp/1.1.3/fetch-jsonp.min.js',
        src: "/js/fetch-jsonp.js",
      },

      {
        src: "/js/theUrl.js",
      },
    ],
  },

  beforeMount: function () {
    this.getUrl("thebk", "ver");
    //this.mypageinit()
  },

  mounted: function () {
    ////alert("Mounted")

    this.fetchGames();
    window.addEventListener("scroll", this.scrollToTop);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  data: function () {
    return {
      booklist01: [],

      booklist: [1, 2, 3, 4, 5],
      chapterlist: [27, 26, 18, 17, 20],
      selectVerse: [],
      selectedVerse: [],
      bookContent: {},
      thisBk: "",
      thisVer: "",
      myPayload: {},

      imgSource: 0,

      btnFlag: null,
      scrollTop: null,
    };
  },

  computed: {
    // 映射store.state
    ...mapState({
      anyValues: (state) => state.sessionStorage.anyValues,
    }),

    ...mapGetters({}),
  },

  methods: {
    // 映射store.mutations
    ...mapMutations({
      increment: "increment",
      mynextpage: "mynextpage",
      //mypageinit: 'mypageinit',
    }),

    ...mapActions({}),

    getHref(val) {
      if (val == 0) {
        return "/new/thesplash";
      } else {
        return "/new/upload";
      }
    },

    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 0) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },

    selectThem() {
      let key1 = "keyBk";
      let value1 = this.thisBk;

      let key2 = "keyVer";
      let value2 = this.thisVer;

      let key3 = "keyContent";

      let txtArray = [];

      this.selectedVerse = this.selectVerse;

      for (let ii = 0; ii < this.selectedVerse.length; ii++) {
        let txtObj = {};

        txtObj.bkNumber = this.selectedVerse[ii].bk;
        txtObj.chNumber = this.selectedVerse[ii].ch;
        txtObj.theVerse =
          this.bookContent.book[this.selectedVerse[ii].bk].chapter[
            this.selectedVerse[ii].ch
          ].verse;

        console.log(this.thisVer);

        if (this.thisVer == "cns" || this.thisVer == "cnt") {
          let cutStr = txtObj.theVerse;

          cutStr = cutStr.replace(/\s/g, "").replace(/(.{1})/g, "$1 ");

          txtObj.theVerse = cutStr;
        }

        // console.log(this.myTextCut);

        txtArray.push(txtObj);
      }

      this.myPayload[key1] = value1;
      this.myPayload[key2] = value2;
      this.myPayload[key3] = txtArray;
    },

    getUrl(args1, args2) {
      this.thisBk = getQueryVariable(args1);
      this.thisVer = getQueryVariable(args2);

      this.booklist01 = getChList(this.thisBk);

      //   //console.log(this.booklist01);
      //   //debugger

      //
      // chapter list
      //
    },

    whichOne(bid, cid) {
      ////alert("Here is me --- " + bid + "---" + cid)
      let a = -100;
      let theElement = {};
      let x = 0;
      let y = 0;

      this.selectedVerse = [];

      if (this.selectVerse.length > 0) {
        for (theElement in this.selectVerse) {
          let x = this.selectVerse[theElement].bk;
          let y = this.selectVerse[theElement].ch;

          if (x == bid && y == cid) {
            this.selectVerse.splice(theElement, 1);
            a = 100;
          } else {
          }
        }
      }

      if (a == 100) {
        a = -100;
      } else {
        this.selectVerse.push({ bk: bid, ch: cid });
      }

      this.selectedVerse = [];
    },

    fetchGames() {
      let that = this;
      //let bookContent = {}
      let urlStr =
        "https://getbible.net/json?p=" +
        this.thisBk +
        "&version=" +
        this.thisVer;

      fetchJsonp(urlStr)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.bookContent = json;
        })
        .catch(function (ex) {
          //console.log('parsing failed', ex)
        });
    },
  },
};
</script>
