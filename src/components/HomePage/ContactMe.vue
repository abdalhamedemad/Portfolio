<template>
  <section class="contact-me">
    <div class="box" id="contact">
      <div class="contact-content">
        <div class="contact-text">
          <div>
            <h3>Contact</h3>
            <p class="contact-paragraph sm:block">
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
        <form @submit="sendEmail" ref="contactForm" class="contact-form w-full">
          <div class="contact-n-e w-full">
            <div class="n mt-5">
              <!-- <input
                v-model="name"
                type="text"
                placeholder="Name"
                required
                name="name"
              /> -->
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                hide-details
                required
                name="name"
                class="text-white"
              ></v-text-field>
            </div>
            <div class="e mt-5">
              <!-- <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
                name="email"
              /> -->
              <v-text-field
                v-model="email"
                :counter="10"
                :rules="nameRules"
                label="Email"
                hide-details
                class="text-white"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="contact-p-m mt-5">
            <!-- <input
              v-model="phone"
              type="tel"
              placeholder="Phone"
              name="phone"
            /> -->
            <v-text-field
              v-model="phone"
              :counter="10"
              :rules="nameRules"
              label="Phone"
              hide-details
              class="text-white"
              required
            ></v-text-field>
            <!-- <textarea
              v-model="message"
              rows="5"
              placeholder="Message"
              required
              name="message"
              class="text-white mt-5 min-h-100 border-1 border-white"
            ></textarea> -->
            <v-textarea
              v-model="message"
              class="text-white mt-5"
              name="message"
              required
              label="Message"
            ></v-textarea>
          </div>
          <div class="send-button">
            <!-- <button type="submit">Send</button> -->
            <v-btn
              :loading="loading"
              class="flex-grow-1"
              height="48"
              variant="tonal"
              type="submit"
            >
              Send
            </v-btn>
          </div>
        </form>
      </div>
      <div class="social-link"></div>
    </div>
    <TheDialogVue :dialog="openDialog" :text="text" />
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import TheDialogVue from './TheDialog.vue';

export default {
  name: 'ContactMe',
  components: {
    TheDialogVue,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      loading: false,
      openDialog: false,
      text: '',
    };
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    },
    sendEmail(e) {
      e.preventDefault(); // Prevent the default form submission behavior
      this.loading = true;
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
            this.text = 'Email sent successfully!';
            this.openDialog = true;
            this.loading = false;
            // Reset form fields
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
            form.reset(); // Optional: Reset the form element
          })
          .catch((error) => {
            console.log('Error:', error);
            this.text = 'Failed to send email!';
            this.openDialog = true;
            this.loading = false;
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
  transform: translateY(-25%);
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
  display: none;
  margin-bottom: 40px;
  width: 100%;
  padding-right: 16px;
}
@media (min-width: 640px) {
  .contact-paragraph {
    display: block !important; /* Show as block on larger screens */
  }
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
/* @media (max-width: 992px) {
  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-content div.contact-form {
    padding-left: 0px;
    margin-top: 10px;
  }
} */
</style>
