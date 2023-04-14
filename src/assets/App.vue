<script lang="ts">
import { onMounted, onUnmounted, defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'Carousel',
  setup() {
    const images = [
      { id: 0, src: "/src/assets/swipe_image/001.jpg" },
      { id: 1, src: "/src/assets/swipe_image/002.jpg" },
      { id: 2, src: "/src/assets/swipe_image/003.jpg" },
      { id: 3, src: "/src/assets/swipe_image/004.jpg" },
      { id: 4, src: "/src/assets/swipe_image/005.jpg" },
      { id: 5, src: "/src/assets/swipe_image/006.jpg" },
    ]

    return {
      images,
    };
  },
  mounted() {
  },
  unmounted() {
  },
  data() {
    return {
      gameListData: [
        [
          { id: 1, src: 'src/assets/game_list/casino/001-STUDIO-BAC-10.png', alt: 'image1', gameName: '經典百家樂10' },
          { id: 2, src: 'src/assets/game_list/casino/002-STUDIO-BAC-1.png', alt: 'image1', gameName: '世界盃666' },
          { id: 3, src: 'src/assets/game_list/casino/003-STUDIO-DIL-102.png', alt: 'image1', gameName: '財神骰寶' },
          { id: 4, src: 'src/assets/game_list/casino/004-STUDIO-ROL-103.png', alt: 'image1', gameName: '財神輪盤' },
          { id: 5, src: 'src/assets/game_list/casino/005-STUDIO-BAS-11.png', alt: 'image1', gameName: '拳賽廳1' },
          { id: 6, src: 'src/assets/game_list/casino/006-STUDIO-DT-12.png', alt: 'image1', gameName: '龍虎12' },
        ],
        [
          { id: 1, src: 'src/assets/game_list/sports/001.png', alt: 'image1', gameName: '籃球' },
          { id: 2, src: 'src/assets/game_list/sports/002.png', alt: 'image1', gameName: '足球' },
          { id: 3, src: 'src/assets/game_list/sports/003.png', alt: 'image1', gameName: '棒球' },
          { id: 4, src: 'src/assets/game_list/sports/004.png', alt: 'image1', gameName: '羽球' },
          { id: 5, src: 'src/assets/game_list/sports/005.png', alt: 'image1', gameName: '網球' },
          { id: 6, src: 'src/assets/game_list/sports/006.png', alt: 'image1', gameName: '拳擊' },
          { id: 7, src: 'src/assets/game_list/sports/007.png', alt: 'image1', gameName: '橄欖球' },
          { id: 8, src: 'src/assets/game_list/sports/008.png', alt: 'image1', gameName: '桌球' },
        ],
      ],
      gameListImg: [
        { id: 1, src: 'src/assets/game_list/casino/001-STUDIO-BAC-10.png', alt: 'image1', gameName: '經典百家樂10' },
        { id: 2, src: 'src/assets/game_list/casino/002-STUDIO-BAC-1.png', alt: 'image1', gameName: '世界盃666' },
        { id: 3, src: 'src/assets/game_list/casino/003-STUDIO-DIL-102.png', alt: 'image1', gameName: '財神骰寶' },
        { id: 4, src: 'src/assets/game_list/casino/004-STUDIO-ROL-103.png', alt: 'image1', gameName: '財神輪盤' },
        { id: 5, src: 'src/assets/game_list/casino/005-STUDIO-BAS-11.png', alt: 'image1', gameName: '拳賽廳1' },
        { id: 6, src: 'src/assets/game_list/casino/006-STUDIO-DT-12.png', alt: 'image1', gameName: '龍虎12' },
      ],
      footerBtnImg: [
        { id: 1, src: 'src/assets/footer_img/imgHome.jpg', alt: 'Home', },
        { id: 2, src: 'src/assets/footer_img/imgPresent.jpg', alt: 'Present', },
        { id: 3, src: 'src/assets/footer_img/imgCash.jpg', alt: 'Cash', },
        { id: 4, src: 'src/assets/footer_img/imgNotice.jpg', alt: 'Notice', },
        { id: 5, src: 'src/assets/footer_img/imgWithrew.jpg', alt: 'Withdrew', },
      ],
      gameTypeBtnList: [
        { id: 1, src: 'src/assets/game_type_list/001.jpg', text: 'Casino', alt: 'Casino', },
        { id: 2, src: 'src/assets/game_type_list/002.jpg', text: 'Sports', alt: 'Sports', },
        { id: 3, src: 'src/assets/game_type_list/003.jpg', text: 'Slot', alt: 'Slot', },
        { id: 4, src: 'src/assets/game_type_list/004.jpg', text: 'Lottery', alt: 'Lottery', },
        { id: 5, src: 'src/assets/game_type_list/005.jpg', text: 'Chess', alt: 'Chess', },
        { id: 6, src: 'src/assets/game_type_list/006.jpg', text: 'Fishing', alt: 'Fishing', },
      ],
      checked: false,
      nowPageIdx: 1,
      nowGameTypeIdx: 1,
      active: 0,
    }
  },
  methods: {
    switchPage(id: number) {
      this.nowPageIdx = id
    },
    switchGameType(id: number) {
      this.nowGameTypeIdx = id
      // console.log("ANGO : ", this.nowGameTypeIdx);

    },
    clickTabs(name: string, title: string) {
      // console.log("ANGO : name : ", name, " title : ", title);

    }
  }
});

</script>

<template>
  <div id="app">
    <!-- 頂部面板 -->
    <div class="header">
      <div class="yellow-bar">
        <img alt="KBS Logo" class="kbslogo" src="./assets/kbsbet_logo.png" />
        <div>
          <span>99999 VND</span>
          <img alt="Person" class="person-img" src="./assets/img_person.png" />
        </div>
      </div>
    </div>

    <div class="body">
      <!-- 促銷活動列表 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

      <!-- 公告欄 -->
      <div class="notice-bar">
        <img src="./assets/img_notion.jpg" alt="notion">
        <span>
          anarkixd**** win bonus amount 8888 by Slot
        </span>
      </div>

      <!-- 遊戲類型選取 -->
      <div class="game-type-list">
        <div v-for="(item, index) in gameTypeBtnList" :key="index">
          <button :class="['game-type-btn', { 'game-type-btn-active': nowGameTypeIdx == item.id }]"
            @click="switchGameType(item.id)">
            <img :src="item.src" :alt="item.alt">
            <span>{{ item.alt }}</span>
          </button>
        </div>
      </div>

      <!-- 遊戲列表 -->
      <!-- <div class="game-list">
                                              <div v-for="imgData in gameListImg" :key="imgData.id">
                                                <img :src="imgData.src" :alt="imgData.alt">
                                                <span>{{ imgData.gameName }}</span>
                                              </div>
                                            </div> -->

      <!-- <div>
            <van-tabs v-model="active">
              <van-tab title="标签 1">
                <div class="game-list">
                  <div v-for="imgData in gameListImg" :key="imgData.id">
                    <img :src="imgData.src" :alt="imgData.alt">
                    <span>{{ imgData.gameName }}</span>
                  </div>
                </div>
              </van-tab>
              <van-tab title="标签 2">
                <div slot="title">
                  <van-icon name="more-o" />选项
                </div>
                内容 ddd
              </van-tab>
              <van-tab title="标签 3">内容 3</van-tab>
              <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs>
          </div> -->

      <div>
        <div class="homePageTab">
          <van-tabs class="" v-model="active" @change="clickTabs" type="card">
            <van-tab v-for="(item, index) in gameTypeBtnList" :key="index" :title="item.text" :name="item.id">
              <!--遊戲類型選擇-->
              <template #title>
                <div class="game-list-slot">
                  <img :src="item.src" :alt="item.alt">
                  <span>{{ item.alt }}</span>
                </div>
              </template>

              <!-- 遊戲入口列表 -->
              <div class="game-list">
                <div v-for="imgData in gameListData[item.id - 1]" :key="imgData.id" class="game-list-slot-img">
                  <img :src="imgData.src" :alt="imgData.alt" class="game-list-slot-img">
                  <span>{{ imgData.gameName }}</span>
                </div>
              </div>

            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>

    <!-- 底層按鈕 -->
    <div class="footer">
      <div v-for="(item, index) in footerBtnImg" :key="index">
        <div>
          <img :src="item.src" :alt="item.alt" :class="{ 'page-active': nowPageIdx == item.id }"
            @click="switchPage(item.id)">

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ccc;
  height: 45px;
  z-index: 9999;

}

/* 通用容器 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px; */
  /* width: 100%; */
  /* overflow-x: scroll; */
  scroll-behavior: smooth;
  overflow: hidden
}

/* head頂部黃條 */
.yellow-bar {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  justify-items: center;
  height: 45px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #F0CD4D;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0px 0;
  position: sticky;
  top: 0;
  left: 0;
  /* width: 100vw; */
  z-index: 50;
  -webkit-box-shadow: 0px 0px 8px 0px #8f8f8f;
  box-shadow: 0px 0px 8px 0px #8f8f8f;
}

/* 黃條內物件 */
.yellow-bar div {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 黃條內LOGO */
.kbslogo {
  height: 30px;
  padding-left: 30px
}

/* 黃條內文字 */
.yellow-bar span {
  text-align: center;
  padding-right: 10px
}

/* 人像圖片 */
.person-img {
  padding-right: 30px
}

/*  */
.game-type-btn {
  text-align: center;
}

.notice-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px; */
  /* width: 100%; */
  /* overflow-x: scroll; */
  scroll-behavior: smooth;
  overflow: hidden;
  padding-top: 5px;
}

.notice-bar img {
  padding-right: 5px
}

/* vant-tabs-外層 */
.homePageTab {
  margin: 0 auto;
  padding-bottom: 10px;
}

/* 遊戲類型列表 */
.game-type-list {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* height: 200px; */
  /* width: 100%; */
  overflow-x: scroll;
  scroll-behavior: smooth;
  /* overflow: hidden */
  height: 100px;

}

/* 遊戲類型列表 滑條 (Chrome) */
.game-type-list::-webkit-scrollbar {
  display: none;
}

/* 遊戲類型按鈕 */
.game-type-btn {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border: 0px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); */
}

.game-type-btn img {
  height: 30px;
}

/* 遊戲類型按鈕 (啟用狀態) */
.game-type-btn-active {
  border-radius: 8px;
  background: #F0CD4D;
}

/* 遊戲列表 */
.game-list {
  display: grid;
  grid-template-columns: 182px 182px;
  grid-template-rows: repeat(3, 182px);
  grid-gap: 30px 10px;
  grid-auto-flow: row;
  place-content: center center;
  font-size: 3;
  max-width: 100vw;
  /* padding: 0.3rem;
  max-width: 100vw;
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0.5rem; */
}

.game-list-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26px;
  font-size: 12px;
  margin: auto;
  text-align: center;
}

/* 遊戲列表元件圖片 */
.game-list img {
  width: 182px;
  height: 182px;
}

.game-list-slot-img {
  width: 182px;
  height: 182px;
}

/* 遊戲列表元件文字 */
.game-list span {
  font-size: 3;
  text-align: left
}


.body {
  background: #FFFFFF;
  font-family: 'Maven Pro';
  overflow-x: hidden;
  padding-top: 60px;
  padding-bottom: 50px;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 50;
  box-shadow: 0px 3px 8px 0px;
}

/* 底層按鈕列表的圖片 */
.footer img {
  display: inline;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 2px solid transparent;
}

/* 底層按鈕 目前選取頁面 */
.page-active {
  border-radius: 8px;
  background: #F0CD4D;
}

/* 促銷活動輪播物件 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}

/* 促銷活動輪播物件中的圖片 */
.van-swipe-item img {
  width: 370px;
  height: 162px;
  border-radius: 10px;
}
</style>
