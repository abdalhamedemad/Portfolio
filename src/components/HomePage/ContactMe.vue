<template>
  <section class="contact-me" id="contact">
    <div class="box">
      <div class="contact-content">
        <div class="contact-text">
          <div>
            <h3>Contact</h3>
            <p class="contact-paragraph">
              Thank you for visiting my portfolio! If you have any inquiries,
              collaboration opportunities, or just want to say hello, please
              don't hesitate to reach out. Your feedback and questions are
              valuable to me, and I'm here to assist you promptly. Feel free to
              fill out the contact form below, and I'll get back to you as soon
              as possible. Alternatively, you can also connect with me via email
              or social media platforms listed below. Looking forward to hearing
              from you!
            </p>
          </div>
          <div class="contact-E-Tel">
            <p>Email: medo.emadd23@gmail.com</p>
            <p>Tel: 0111-234-2248</p>
          </div>
        </div>
        <form @submit="sendEmail" ref="contactForm" class="contact-form">
          <div class="contact-n-e">
            <div class="n">
              <input
                v-model="name"
                type="text"
                placeholder="Name"
                required
                name="name"
              />
            </div>
            <div class="e">
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>
          </div>
          <div class="contact-p-m">
            <input
              v-model="phone"
              type="tel"
              placeholder="Phone"
              name="phone"
            />
            <textarea
              v-model="message"
              rows="5"
              placeholder="Message"
              required
              name="message"
            ></textarea>
          </div>
          <div class="send-button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div class="social-link"></div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactMe',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault(); // Prevent the default form submission behavior

      // Access the form element via ref
      const form = this.$refs.contactForm;
      console.log(form);

      if (form) {
        // Use emailjs.sendForm with the form element
        emailjs
          .sendForm(
            'service_td3ogah',
            'template_s949z75',
            form,
            '62gB-jnc3tx9wiex_',
          )
          .then((response) => {
            console.log('Success:', response);
            // Reset form fields
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
            form.reset(); // Optional: Reset the form element
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      } else {
        console.error('Form element not found');
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
section.contact-me {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  transform: translateY(-50%);
  z-index: 1;
}
section.contact-me::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  opacity: 0.45;
}
.contact-content {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.contact-content div.contact-text {
  flex-grow: 1;
}
.contact-content div.contact-form {
  flex-grow: 1;
  margin-top: 24px;
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
  word-break: break-all;
}
div.contact-E-Tel p:first-child {
  margin-bottom: 16px;
}
div.contact-E-Tel p:nth-child(2) {
  width: 100%;
}
input,
textarea {
  outline: none;
  border: none;
  text-transform: capitalize;
  padding: 15px;
}
input {
  height: 40px;
}
textarea {
  margin-bottom: 16px;
  width: 100%;
}
.contact-n-e {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.n,
.e {
  width: 100%;
  padding-right: 5px;
}
.e {
  padding-left: 5px;
}
.contact-n-e input {
  width: 100%;
  margin-bottom: 16px;
}
.contact-p-m {
  display: flex;
  flex-direction: column;
}
.contact-p-m input {
  margin-bottom: 16px;
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
@media (max-width: 992px) {
  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-content div.contact-form {
    padding-left: 0px;
    margin-top: 10px;
  }
}
</style>
