<template>
  <div class="home-page" id="home">
    <div class="box">
      <div class="container">
        <div class="content">
          <div class="hello-word"><h3>Hello I'm a</h3></div>
          <div class="front-end-word">
            <h2>
              Front-End <br />
              Developer
            </h2>
          </div>
          <div class="introduction">
            <p>
              As a Bachelor of Science in Computer Engineering student at Cairo
              University, I have developed a strong foundation in various
              computer engineering concepts. My coursework has included data
              structures, software methodology, algorithms analysis, database
              management, artificial intelligence, internet technology, systems
              programming, and computer architecture.
            </p>
          </div>
          <div class="my-work-button">
            <button @click="openResume">My Resume</button>
          </div>
          <div class="icons">
            <div class="social-links">
              <a href=""><i class="fa-brands fa-whatsapp"></i></a>
              <a
                href="https://www.linkedin.com/in/abdal-hameed-emad-740097227/"
                target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://web.facebook.com/medo.amad.3/" target="_blank"
                ><i class="fa-brands fa-square-facebook"></i
              ></a>
              <a href="https://github.com/abdalhamedemad" target="_blank"
                ><i class="fa-brands fa-github"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="my-photo">
          <figure>
            <img
              style="display: "
              src="../../assets/myphoto.png"
              alt="personal photo"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function openResume() {
  // change the route to /files/resume.pdf using vue-router
  window.open(
    'https://drive.google.com/file/d/1OdQs6IkVjhw5BerCvheo_X5RpBEO_ZPF/view?usp=sharing',
    '_blank',
  );
}
</script>

<style scoped>
p {
  margin: 0px !important;
  padding: 0px !important;
  margin-block-start: 0px !important;
  margin-block-end: 0px !important;
}
div.home-page {
  width: 100%;
  height: 100%;
  height: 100vh;
  background-color: #333333;
  color: #ffffff;
  /* position: relative; */
}
div.home-page::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 100%;
  background-color: #dd93f7;
  left: 0px;
  top: 0px;
  z-index: 1;
  transform: rotateZ(0deg);
}
div.box {
  /* the height of the Header (nav bar) is 100px */
  padding-top: 100px;
  width: 100%;
  height: 100%;
}
div.container {
  padding: 0 60px;
  /* width: calc(100%-120px); */
  width: 100%;
  height: 100%;
  display: flex;
}
div.content {
  width: 40%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div.my-photo {
  flex-grow: 1;
  overflow: hidden;
}
div.my-photo figure {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  width: 1000px;
  /* bottom: 348px; */
  /* right: -84px; */
}
div.my-photo figure img {
  position: relative;
  width: 1713px;
  bottom: -329px;
  right: -84px;
}
div.content div.hello-word h3 {
  display: block;
  font-size: 35px;
  margin-bottom: 10px;
}
div.content div.front-end-word h2 {
  display: block;
  font-size: 45px;
  margin-bottom: 15px;
  color: #dd93f7;
}
div.introduction {
  margin-bottom: 20px;
}
div.introduction p {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  /* display: none; */
}
div.my-work-button {
  width: 100%;
  display: flex;
}
div.my-work-button button {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #dd93f7;
  border-radius: 30px;
  border: 2px solid #dd93f7;
  transition: 0.5s;
  padding: 15px 40px;
  cursor: pointer;
}
div.my-work-button button:hover {
  background-color: transparent;
}
div.icons,
div.social-links {
  width: 100%;
}
div.social-links {
  margin-top: 40px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  transition: 0.5s;
}
div.social-links a {
  width: 45px;
  margin-right: 10px;
}
div.social-links a:hover {
  color: #dd93f7;
}
/* @media (max-width: 768px) {
  div.introduction p {
    display: none !important;
  }
}

@media (max-width: 992px) {
  div.introduction p {
    display: none !important;
  }
}
*/

/* Large */
@media (max-width: 992px) {
  div.introduction p {
    display: none !important;
  }
}
</style>
