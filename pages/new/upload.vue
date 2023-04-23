<template>
  <div class="flex upContainer">
    <div class="flex flex-col ml-5">
      <div class="mb-3">
        <p class="text-xl">Upload image (Google Cloud)</p>

        <!-- {{isPortrait}} -->
      </div>
      <div class="mb-3">
        <input type="file" @change="previewImage" accept="image/*" />
      </div>

      <div v-if="imageData != null">
        <hr />

        <div class="mb-3 mt-6">
          <p class="text-sm">
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
        </div>

        <div class="mb-3">
          <!-- <div class="mb-3 mt-3" v-if="imageData != null"> -->
          <!-- <img class="preview" :src="picture" />
        <br /> -->
          <button
            class="
              px-3
              py-1
              bg-blue-500
              border
              rounded
              shadow-2xl
              text-white text-sm
              flex-none
            "
            @click="onUpload"
          >
            Upload Image
          </button>
        </div>


        <hr />

        <div v-if="isPortrait || isLandscape">
        <!-- <div> -->
          <div class="flex flex-col mt-3" v-if="isPortrait">
            <!-- <div class="flex mt-3" v-if="imageData != null"> -->
            <div class="mt-3 text-gray-300">
              <label class="mr-3 w-1/3" for="oriPortrait"
                >Portrait Img Option:</label
              >
            </div>

            <div class="mt-3 mb-3 text-gray-300">
              <input
                type="radio"
                name="oriPortrait"
                value="0"
                v-model="imgPortraitOrientation"
              />
              Portrait(raw)
            </div>
          </div>
          <hr />

          <div class="flex flex-col mt-3" v-if="isLandscape">
            <!-- <div class="flex mt-3" v-if="imageData != null"> -->
            <div class="mt-3">
              <label class="mr-3 w-1/3" for="ori">Landscape Img Option:</label>
            </div>

            <div class="mt-3">
              <input
                type="radio"
                name="ori"
                value="1"
                v-model="imgOrientation"
              />
              Landscape(embed)
            </div>
            <div class="mb-3">
              <input
                type="radio"
                name="ori"
                value="2"
                v-model="imgOrientation"
              />
              Landscape(raw)
            </div>
          </div>
          <hr />
        </div>

        <div class="mb-3 mt-6">
          <!-- <div class="mb-3 mt-3" v-if="imageData != null"> -->
          <!-- <img class="preview" :src="picture" />
        <br /> -->
          <button
            v-if="(buttonShow && isPortrait) || (buttonShow && isLandscape)"
            class="
              px-3
              py-2
              bg-blue-500
              border
              rounded
              shadow-2xl
              text-white text-sm
              flex-none
            "
            @click="myimgpage(theImgUrl)"
          >
            <a :href="getHref(imgOrientation)"> Next Step </a>
          </button>
        </div>
      </div>
    </div>

    <div class="ml-10">
      <!-- <div v-if="imageData != null"> -->
      <img class="preview" :src="picture" />
      <br />
      <!-- <button @click="onUpload">Upload</button> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      imgOrientation: 1,
      imgPortraitOrientation: 0,

      buttonShow: false,

      theImgUrl: "",
      imgInfo: {}, // 存图片的宽高信息
      imgHeight: 0,
      imgWidth: 0,

      isImage: false,
      isPortrait: false,
      isLandscape: false,
    };
  },

  created() {
    let imgRandom = 0;

    imgRandom = this.random(1, 100);

    console.log("random");
    console.log(imgRandom);

    if (imgRandom < 50) {
      // console.log("<50");
      const firebaseConfig = {
        apiKey: "AIzaSyCiZNyV6K9yffD61Zp6zusMlouLVfu9hqI",
        authDomain: "mybible-cloud.firebaseapp.com",
        projectId: "mybible-cloud",
        storageBucket: "mybible-cloud.appspot.com",
        messagingSenderId: "563472959624",
        appId: "1:563472959624:web:fe6a51bed9757276edf73d",
        measurementId: "G-HGTW5CJ4R3",
      };
      firebase.initializeApp(firebaseConfig);
    } else {
      // console.log(">=50");
      const firebaseConfig = {
        apiKey: "AIzaSyDgJHOZldk2E05u1jCZBcXnO_kJe9TN5xM",
        authDomain: "second-bible-5566.firebaseapp.com",
        projectId: "second-bible-5566",
        storageBucket: "second-bible-5566.appspot.com",
        messagingSenderId: "280175030437",
        appId: "1:280175030437:web:5ddccd021c69d66a769d4c",
      };
      firebase.initializeApp(firebaseConfig);
    }

    // const firebaseConfig = {
    //   apiKey: "AIzaSyDgJHOZldk2E05u1jCZBcXnO_kJe9TN5xM",
    //   authDomain: "second-bible-5566.firebaseapp.com",
    //   projectId: "second-bible-5566",
    //   storageBucket: "second-bible-5566.appspot.com",
    //   messagingSenderId: "280175030437",
    //   appId: "1:280175030437:web:5ddccd021c69d66a769d4c",
    // };

    // firebase.initializeApp(firebaseConfig);
  },

  updated() {},

  methods: {
    // 映射store.mutations
    ...mapMutations({
      increment: "increment",
      myimgpage: "myimgpage",
    }),

    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    getHref(val) {
      return "/new/thetext?ori=" + val;
    },

    getImgInfo() {
      this.imgShow = this.theImgUrl;
      //window.open(this.theImgUrl, '_blank')

      let img = new Image();
      img.src = this.imgShow;

      img.onload = function () {
        //console.log(img.height);
        //console.log(img.width);

        if (img.height > img.width) {
          //console.log("Portrait");
          return "Portrait";
        } else {
          //console.log("Landscape");
          return "Landscape";
        }
      };
      // const vm = this;
      // img.onload = function () {
      //   vm.$set(vm.imgInfo, "width", img.width);
      //   vm.$set(vm.imgInfo, "height", img.height);
      //   // vm.imgHeight = img.height;
      //   // vm.imgWidth = img.width;
      //   // //console.log(img.width)
      //   // //console.log(img.height)
      //   // //console.log('internal^^^^^^^^^^^^^')
      // };
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            this.theImgUrl = url;
            this.buttonShow = true;
            this.isImage = true;

            const that = this;

            let img = new Image();
            img.src = url;
            img.onload = function () {
              //console.log(img.height);
              //console.log(img.width);
              //console.log("url-------------");
              if (img.height > img.width) {
                that.isPortrait = true;
                that.isLandscape = false;
                that.imgOrientation = 0;
                console.log(this.isPortrait);
                console.log("true-------------");
              } else {
                that.isPortrait = false;
                that.isLandscape = true;
                that.imgOrientation = 1;
                //console.log(this.isPortrait)
                //console.log("false-------------");
              }
            };
            setTimeout("console.log('2.8 seconds')", 2800);
          });
        }
      );
      // console.log("The End-----------");
      // console.log(this.isPortrait);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- style scoped>

.upContainer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img.preview {
    width: 200px;
}
</style-->

<style scoped>
.upContainer {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Comfortaa", cursive;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 40px;
}

img.preview {
  width: 500px;
}

body {
  font-family: "Comfortaa", cursive;
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