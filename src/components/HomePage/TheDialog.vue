<template>
  <div class="text-center">
    <!-- <v-btn color="orange-darken-2" @click="snackbar = true">
      Open Snackbar
    </v-btn> -->
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="green" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props: {
    dialog: Boolean,
    text: String,
  },
  data: () => ({
    snackbar: false,
    // text: 'Email sent successfully!',
    timeout: 2000,
  }),
  watch: {
    dialog: {
      immediate: true,
      handler(val) {
        if (val) {
          this.snackbar = true;
        }
      },
    },
  },
};
</script>
