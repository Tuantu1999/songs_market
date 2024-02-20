<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="3">
        <v-img :src="'src/assets/images/' + listSongs.avatar" aspect-ratio="16/9" cover :alt="listSongs.name" />
      </v-col>
      <v-col cols="9">
        <div class="fw-600 font-size-24">{{ listSongs.name }}</div>
        <div class="font-italic font-size-20 fw-500 text-grey4">{{ listSongs.author }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'List Songs',
  data() {
    return {}
  },
  props: {
    listSongs: {
      type: Object,
      default: () => {},
    },
  },
})
</script>
