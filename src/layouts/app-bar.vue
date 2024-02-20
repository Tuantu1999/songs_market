<template>
  <v-app-bar color="#FF3179" elevation="0">
    <v-container>
      <v-row class="appbar_bg d-flex align-center mt-lg-1 mt-md-0 mt-7">
        <v-col cols="6" md="2">
          <v-app-bar-title>
            <v-img src="@/assets/images/logo_market_song.png" height="32px"></v-img>
          </v-app-bar-title>
        </v-col>
        <v-col cols="6" md="4">
          <v-autocomplete
            density="compact"
            bg-color="white"
            menu-icon=""
            placeholder="Type any name here..."
            hide-details
            rounded="lg"
            variant="solo"
            class="font-size-14 fw-500"
            :items="songs"
            item-title="name"
            item-value="name"
          >
            <template #item="{ props, item }">
              <v-list-item v-bind="props" class="pa-5" rounded="lg" :width="getWidthList">
                <template v-slot:prepend>
                  <v-img
                    class="mr-3"
                    :src="'src/assets/images/' + item.raw.avatar ?? require(`@/assets/images/unknown-icon.png`)"
                    min-height="60"
                    min-width="60"
                    contain
                  />
                </template>

                <div class="font-size-18 fw-600">{{ item.raw.name }}</div>
              </v-list-item>
              <v-divider class="mx-5"></v-divider>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col md="6"></v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { appStore } from '@/store/app'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppBar',
  data() {
    const { songs } = appStore()

    return {
      songs,
    }
  },

  computed: {
    getWidthList() {
      switch (this.$vuetify.display.mdAndDown) {
        case true:
          return 218
        default:
          return 361
      }
    },
  },
})
</script>

<style lang="scss">
.appbar_bg {
  background-color: #ff3179;
}

.v-list::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
  border-radius: 5px;
}

/* Track */
.v-list::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Handle */
.v-list::-webkit-scrollbar-thumb {
  background-color: #4a5866;
  max-height: 500px;
  border-radius: 5px;
}

/* Handle on hover */
.v-list::-webkit-scrollbar-thumb:hover {
  background-color: #555;
  border-radius: 5px;
}
</style>
