
<template>

  <div class="text-gray-900 font-bold font-italic font-Comfortaa">

    <header class="mb-10">

      <div class="container">

        <div class="nav">

          <!-- <h2><i class="fas fa-camera"
               style="color:orange; margin:3px"></i>Unsplash API Demo</h2> -->

         <div class="flex">
          <span class="mt-3"><label class="mt-3 mr-3 w-1/3"
                   for="ori">Orientation:</label>
            <input type="radio"
                   id="ori"
                   name="ori"
                   value=0
                   v-model="imgOrientation"> Portrait
            <input type="radio"
                   name="ori"
                   value=1
                   v-model="imgOrientation"> Landscape(embed)
            <input type="radio"
                   name="ori"
                   value=2
                   v-model="imgOrientation"> Landscape(raw)
          </span>

          <div class="search-box ml-10 mr-5">
            <input type="text"
                   id="input"
                   placeholder="Search..."
                   v-model="theQueryUrl"
                   @keyup.enter="loadImg"><i @click="loadImg"
               class="fas fa-search"></i>

          </div>
          </div>

           <div class="ml-16 flex-none">
            <!-- <button class="px-3 py-2 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
                    @click="myimgpage(theImgUrl)"><a href="/new/thetext">
                OK Confirm
              </a></button> -->

              <!-- /new/thetext?theori= -->

            <button class="px-3 py-2 bg-blue-500 border rounded shadow-2xl text-white text-sm flex-none"
                    @click="myimgpage(theImgUrl)"><a :href="getHref(imgOrientation)">
                OK Confirm
              </a></button>
          </div>

        </div>

      </div>
    </header>

    <div class="w-full m-auto grid grid-cols-3 gap-4 p-5"
         v-if="imgArray[0]">
      <div class="flex justify-around m-2 p-2"
           v-for="(i,index) in imgArray"
           :key="index">

        <div flex
             v-model="imgSelected">

          <img :src="i"
               @dblclick="recordUrl(i,index)"
               class="imgcss"
               :style="imgStyle(index)"
               alt="" />

        </div>
      </div>

    </div>

  </div>

</template>

<script>
//import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
//import { mapActions, mapGetters } from 'vuex'

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
    ],
  },

  computed: {},

  data() {
    return {
      theQueryUrl: '',
      theImgUrl: '',
      image: '',
      imgArray: [],
      imgSelected: 100,

      imgOrientation: 0,
    }
  },

  //   created() {
  //     this.loadImg()
  //   },

  methods: {
    // 映射store.mutations
    ...mapMutations({
      increment: 'increment',
      myimgpage: 'myimgpage',
    }),


    getHref(val){
	    return '/new/thetext?ori='+ val
	},


    imgStyle(args1) {
      //   //console.log('index----' + args1)
      //   //console.log('imgSelected' + this.imgSelected)

      if (args1 === this.imgSelected) {
        return {
          opacity: '30%',

          //padding: '5px',
        }
      }
    },

    recordUrl(args1, args2) {
      ////alert('Gotit' + args2)

      this.theImgUrl = args1
      this.imgSelected = args2
      window.open(this.theImgUrl, '_blank')
      //window.open(this.theImgUrl)
    },

    removeImages() {
      this.imgArray = []
      this.imgSelected = 100
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },

    loadImg() {
      let imgRandom = 0
      let url = ''

      this.removeImages()

      ////alert('Hello loadImg' + '----' + this.theQueryUrl)

      if (this.imgOrientation == 0) {
        imgRandom = this.random(1, 100)

        if (imgRandom <= 20) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=5T916LLmUG9kAW6lhMY3iAKq-9H4zL0WxrpapsPy7nM' +
            '&orientation=portrait'
        } else if (imgRandom <= 40) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=2th_gqNwnvgcfb0ikWBWWlvFQlF5O9rrurV7GF7KAxI' +
            '&orientation=portrait'
        } else if (imgRandom <= 60) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=zU1q0xdfr56qOzzvEbcQD5YBMmdlIcgFdn1zBipTLsY' +
            '&orientation=portrait'
        } else if (imgRandom <= 80) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=vT-Uey30lowc-mrPKIyLNRDQp7-VfRSaVgxPy5KnxF4' +
            '&orientation=portrait'
        } else if (imgRandom <= 100) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=4VRgfz1OZfqOAp9b0zwuDvLk7ATa8ONXm-RWmeBvqwU' +
            '&orientation=portrait'
        }
      } else {
        imgRandom = this.random(1, 100)

        if (imgRandom <= 20) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=5T916LLmUG9kAW6lhMY3iAKq-9H4zL0WxrpapsPy7nM' +
            '&orientation=landscape'
        } else if (imgRandom <= 40) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=2th_gqNwnvgcfb0ikWBWWlvFQlF5O9rrurV7GF7KAxI' +
            '&orientation=landscape'
        } else if (imgRandom <= 60) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=zU1q0xdfr56qOzzvEbcQD5YBMmdlIcgFdn1zBipTLsY' +
            '&orientation=landscape'
        } else if (imgRandom <= 80) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=vT-Uey30lowc-mrPKIyLNRDQp7-VfRSaVgxPy5KnxF4' +
            '&orientation=landscape'
        } else if (imgRandom <= 100) {
          url =
            'https://api.unsplash.com/search/photos/?query=' +
            this.theQueryUrl +
            '&per_page=18&client_id=4VRgfz1OZfqOAp9b0zwuDvLk7ATa8ONXm-RWmeBvqwU' +
            '&orientation=landscape'
        }
      }

      //5T916LLmUG9kAW6lhMY3iAKq-9H4zL0WxrpapsPy7nM
      //2th_gqNwnvgcfb0ikWBWWlvFQlF5O9rrurV7GF7KAxI

      //   zU1q0xdfr56qOzzvEbcQD5YBMmdlIcgFdn1zBipTLsY
      //   vT-Uey30lowc-mrPKIyLNRDQp7-VfRSaVgxPy5KnxF4
      //   4VRgfz1OZfqOAp9b0zwuDvLk7ATa8ONXm-RWmeBvqwU

      //this.theQueryUrl = ''

      fetch(url)
        .then((response) => {
          ////console.log(response);

          if (response.ok) return response.json()
          else //console.log(response.status)
        })

        .then((json) => {
          ////console.log(json.results[0].urls.raw)
          //this.image = json.results[0].urls.raw

          let i
          for (i = 0; i < json.results.length; i++) {
            this.imgArray.push(json.results[i].urls.raw)
          }
        })
    },
  },
}
</script>

<style scoped>
body {
  font-family: 'Comfortaa', cursive;
  background-color: black;
  color: white;
}

header {
  border-bottom: 1px solid orange;
}

.container {
  width: 90%;
  margin: auto;
}

.nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 25px 0;
}

.nav h2 {
  font-size: 2rem;
}

.search-box {
  position: relative;
  width: 350px;
}

.search-box input {
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  border-radius: 6px;
  outline: none;
  border: 1px solid lightgray;
}

input:focus {
  box-shadow: 0 0 5px orange;
  border: 1px solid orange;
}

.search-box i {
  color: black;
  position: absolute;
  top: 25%;
  right: 4%;
  transition: 1.5s;
}

.search-box i:hover {
  color: orange;
}

.imgcss {
  width: 450px;
  height: 280px;
  margin-top: 15px;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 15px;
}

.imgcss1 {
  width: 450px;
  height: 280px;
  margin-top: 15px;
  background-position: 50% 50%;
  background-size: cover;
  opacity: 50%;
  border-radius: 15px;
}

@media (max-width: 768px) {
  .imgcss {
    width: 100%;
  }
  .nav {
    justify-content: center;
  }
  .nav h2 {
    padding: 5px 0;
  }
}

@media (max-width: 480px) {
  .nav h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  .search-box {
    width: 80%;
    margin: auto;
  }
  .search-box input {
    font-size: 0.7rem;
  }
}
</style>>