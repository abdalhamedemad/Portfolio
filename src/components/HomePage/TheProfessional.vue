<template>
  <div class="about-page" id="professional">
    <section class="professional">
      <header>
        <h2><span>01</span>Professional</h2>
        <h4>My Knowledge level in software</h4>
      </header>
      <div class="sw-box">
        <ul class="sw-items">
          <li>
            <span> HTML &CSS</span>
            <span
              v-animateonscroll="{
                enterClass: 'mm1',
                leaveClass: 'ml',
              }"
            ></span
            ><span>85%</span>
          </li>
          <li>
            <span>JS </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm2',
                leaveClass: 'ml',
              }"
            ></span
            ><span>85%</span>
          </li>
          <li>
            <span>VUE JS </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm3',
                leaveClass: 'ml',
              }"
            ></span
            ><span>90%</span>
          </li>
          <li>
            <span>Nuxt JS </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm4',
                leaveClass: 'ml',
              }"
            ></span
            ><span>60%</span>
          </li>
          <li>
            <span>Photoshop </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm5',
                leaveClass: 'ml',
              }"
            ></span
            ><span>65%</span>
          </li>
          <li>
            <span>Node js </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm6',
                leaveClass: 'ml',
              }"
            ></span
            ><span>70%</span>
          </li>
          <li>
            <span>express </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm7',
                leaveClass: 'ml',
              }"
            ></span
            ><span>70%</span>
          </li>
          <li>
            <span>flask </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm8',
                leaveClass: 'ml',
              }"
            ></span
            ><span>65%</span>
          </li>
          <li>
            <span>Mongo db </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm9',
                leaveClass: 'ml',
              }"
            ></span
            ><span>70%</span>
          </li>
          <li>
            <span>sql </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm10',
                leaveClass: 'ml',
              }"
            ></span
            ><span>75%</span>
          </li>
          <li>
            <span>python </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm11',
                leaveClass: 'ml',
              }"
            ></span
            ><span>85%</span>
          </li>
          <li>
            <span>C++ </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm12',
                leaveClass: 'ml',
              }"
            ></span
            ><span>90%</span>
          </li>
          <li>
            <span>C </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm13',
                leaveClass: 'ml',
              }"
            ></span
            ><span>90%</span>
          </li>
          <li>
            <span>java </span
            ><span
              v-animateonscroll="{
                enterClass: 'mm14',
                leaveClass: 'ml',
              }"
            ></span
            ><span>65%</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
div.about-page {
  padding: 40px;
  width: calc(100%-40px);
  /* background-color: #555252; */
  background-image: url('../../assets/image.jpg');
  background-size: cover;
  color: #ffffff;
  /* display: none; */
  position: relative;
}
div.about-page::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.45;
}
div.about-page section.professional {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
section.professional header {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 50%;
  line-height: 30px;
  text-transform: uppercase;
  z-index: 1;
}
section.professional header h2 {
  font-weight: bolder;
  letter-spacing: 6px;
  margin-bottom: 30px;
}
section.professional header h2 span {
  margin-right: 10px;
}
section.professional header h4 {
  letter-spacing: 1px;
  font-weight: lighter;
  margin-bottom: 30px;
}
div.sw-box {
  width: 70%;
  display: flex;
  align-items: flex-start;
}
div.sw-box ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: uppercase;
}
span {
  display: inline-block;
}
div.sw-box ul li {
  width: 100%;
  text-align: left;
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}
div.sw-box ul li span:first-child {
  width: 22%;
  z-index: 100;
}
div.sw-box ul li span:nth-child(2) {
  width: 70%;
  height: 30px;
  background-color: #ffffff;
  position: relative;
}
div.sw-box ul li span:nth-child(3) {
  width: 8%;
  padding: 5px;
  z-index: 100;
}
/* div.sw-box ul li span:nth-child(2)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 15%;
  height: 100%;
  background-color: #dd93f7;
} */
/* div.sw-box ul li:nth-child(1) span:nth-child(2)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: #dd93f7;
} */
.mm1::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
/* .mm {
  width: 85%;
  height: 100%;
  background-color: #dd93f7;
} */
.ml::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background-color: #dd93f7;
}
.mm2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm4::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm5::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm6::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 75%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm7::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 75%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm8::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm9::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm10::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 75%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm11::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm12::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm13::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
.mm14::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background-color: #dd93f7;
  transition: width 2s ease-out;
}
</style>
