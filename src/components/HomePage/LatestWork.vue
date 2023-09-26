<template>
  <div class="latest-work">
    <ul>
      <li>
        <div class="item-description">
          Frontend project that mimcis the real apple website using Vue.js 3 &&
          Nuxt 3 && Tailwindcss && HTML && CSS
        </div>
        <div class="item-gif">
          <img src="../../assets/3.gif" alt="" />
        </div>
      </li>
      <li>
        <div class="item-description">
          Full project that mimics the real reddit website using Vue.js 3 &&
          font-awesome && HTML && CSS && Javascript && Firebase && Vitest the
          project contains all the features of the real website ,including:
          login, logout, signup, create post, create comment, infinite list
          posts , four Types of posts (hybrid, image, video , link), integration
          with backend , unit testing , functional documentation
        </div>
        <div class="item-gif">
          <img src="../../assets/4.gif" alt="" />
        </div>
      </li>
      <li>
        <div class="item-description">
          Full project that mimics the real reddit website using Vue.js 3 &&
          font-awesome && HTML && CSS && Javascript && Firebase && Vitest the
          project contains all the features of the real website ,including:
          login, logout, signup, create post, create comment, infinite list
          posts , four Types of posts (hybrid, image, video , link), integration
          with backend , unit testing , functional documentation
        </div>
        <div class="item-gif">
          <img src="../../assets/Kasper.gif" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.latest-work {
  width: 100%;
  height: 100%;
  display: flex;
}
.latest-work ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.latest-work ul li {
  /* width: 70%; */
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 24px; */
}
div.item-description {
  max-width: 400px;
}
div.item-gif img {
  width: 400px;
  height: 400px;
}

@media (max-width: 865px) {
  div.item-description {
    display: none;
  }
  .latest-work ul li {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
