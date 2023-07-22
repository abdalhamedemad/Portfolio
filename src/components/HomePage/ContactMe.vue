<template>
  <section class="contact-me">
    <div class="box">
      <div class="contact-content">
        <div class="contact-text">
          <div>
            <h3>contact</h3>
            <p class="contact-paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you
            </p>
          </div>
          <div class="contact-E-Tel">
            <p>medo.emadd23@gmail.com</p>
            <p>Tel:0111-234-2248</p>
          </div>
        </div>
        <div class="contact-form">
          <div class="contact-n-e">
            <div class="n">
              <input type="text" placeholder="Name" />
            </div>
            <div class="e">
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div class="contact-p-m">
            <input type="number" placeholder="phone" />
            <input type="message" placeholder="message" />
          </div>
          <div class="send-button">
            <button>send</button>
          </div>
        </div>
      </div>
      <div class="social-link"></div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
section.contact-me {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* padding-bottom: 370px; */
  height: 500px;
  background-image: url('../../assets/bg2.jpg');
  background-size: cover;
}
.box {
  position: absolute;
  padding: 40px;
  width: 70%;
  min-height: 500px;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -50%;
  z-index: 1;
}

section.contact-me::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.45;
}
.contact-content {
  display: flex;
  width: 100%;
}
.contact-content div.contact-text {
  width: 50%;
}
.contact-content div.contact-form {
  width: 50%;
}
div.contact-text {
  color: #ffffff;
  text-align: left;
}
div.contact-text h3 {
  text-transform: uppercase;
  font-weight: lighter;
  margin-bottom: 16px;
}
div.contact-text div p.contact-paragraph {
  margin-bottom: 40px;
  width: 100%;
  padding-right: 16px;
}
div.contact-E-Tel {
  width: 100%;
}
div.contact-E-Tel p:first-child {
  margin-bottom: 16px;
}
div.contact-E-Tel p:nth-child(2) {
  width: 100%;
}
input {
  outline: none;
  height: 40px;
  border: none;
  text-transform: capitalize;
  padding: 15px;
}
.contact-content div.contact-form {
  width: 50%;
  padding-left: 10px;
}
.contact-n-e {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.n {
  width: 100%;
  padding-right: 5px;
}
.e {
  width: 100%;
  padding-left: 5px;
}
.contact-n-e input {
  /* width: 50%; */
  /* margin-right: 10px; */
  width: 100%;

  margin-bottom: 16px;
}
.contact-p-m {
  display: flex;
  flex-direction: column;
}
.contact-p-m input {
  margin-bottom: 16px;
  /* width: 305px; */
}
.send-button {
  width: 100%;
}
.send-button button {
  width: 100%;
  height: 40px;
  text-transform: capitalize;
  background-color: #dd93f7;
  color: #ffffff;
  cursor: pointer;
}
</style>
