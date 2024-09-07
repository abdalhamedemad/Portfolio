<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="imgSrc" cover>
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-text>
      <div>{{ title }}</div>

      <div>Tech: {{ tech }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Demo"></v-btn>

      <v-btn color="orange" text="Code"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    tech: String,
    demoSrc: String,
    codeSrc: String,
    imgSrc: String,
  },
  data: () => ({}),
};
</script>
