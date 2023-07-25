<template>
  <header>
    <div class="container">
      <div class="box">
        <div class="name">
          <span>Abdalhameed <span color="#dd93f7">Emad</span></span>
        </div>
        <div :class="[contentList ? 'contents-list contents' : 'contents']">
          <nav>
            <ul>
              <li><a href="#home">Home </a></li>
              <li><a href="#professional">Professional </a></li>
              <li><a href="#portfolio">Portfolio </a></li>
              <li><a href="#contact">Contact </a></li>
            </ul>
            <i @click="contentList = !contentList"
              ><i class="fa-solid fa-bars"></i
            ></i>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      contentList: false,
    };
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
header div div.box {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
  font-size: 25px;
  width: 100%;
}
.contents {
  display: flex;
  align-items: center;
  font-size: 18px;
}
.contents nav {
  display: flex;
  align-items: center;
  position: relative;
}
.contents nav ul {
  display: flex;
  align-items: center;
}
.contents-list nav ul {
  display: block !important;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  right: 0;
  top: 40px;
  border: 1px solid #dd93f7;
  /* padding: 18px; */
  /* z-index: ; */
}
.contents-list nav ul li:not(:last-child) {
  margin-bottom: 10px;
  padding: 18px;
  border-bottom: 1px solid #dd93f7;
  /* width: 100%; */
}
.contents nav ul li {
  margin-left: 40px;
}
.contents-list nav ul li {
  margin-left: 0px;
  padding: 18px;
  width: 100%;
}

.contents nav ul li a {
  transition: 0.3s;
}
.contents nav ul li a:hover {
  color: #dd93f7;
}
.name {
  cursor: pointer;
}
.name span span {
  color: #dd93f7;
}
.name span span,
.name span {
  transition: 0.3s;
}
.name:hover span span {
  color: #ffffff;
}
.name:hover span {
  color: #dd93f7;
}
.container {
  padding: 0 60px;
  width: 100%;
}
div.contents nav i {
  display: none;
  cursor: pointer;
}
@media (max-width: 865px) {
  nav i {
    display: block !important;
  }
  nav ul {
    display: none !important;
  }
}
@media (min-width: 865px) {
  .contents-list nav ul {
    display: flex !important;
    align-items: center !important;
    flex-direction: row !important;
    position: unset;
    border: none;
    align-items: center;
  }
  .contents-list nav ul li:not(:last-child),
  .contents-list nav ul li {
    margin-left: 40px;
    border-bottom: unset;
    margin-bottom: 0px;
    padding: 0px;
  }
}
</style>
