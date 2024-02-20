<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center py-0">
      <v-carousel cycle hide-delimiter-background :show-arrows="false" :height="getHeightBanner">
        <v-carousel-item v-for="(slide, i) in bannerImages" :key="i">
          <v-img :src="'src/assets/images/' + slide" :width="getWidthBanner" :height="getHeightBanner" cover></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

export default defineComponent({
  name: 'Banner',
  data() {
    const screen = useDisplay()
    return {
      bannerImages: ['first_banner.png', 'second_banner.png', 'third_banner.png'],
      screen,
    }
  },

  computed: {
    getWidthBanner() {
      if (this.screen.mdAndUp) return '1280px'
      else if (this.screen.mdAndDown) return '704px'
      else return '343px'
    },
    getHeightBanner() {
      if (this.screen.lgAndUp) return '564px'
      else if (this.screen.mdAndDown) return '311px'
      else return '152px'
    },
  },
})
</script>

<style lang="scss" scoped>
:deep(.v-carousel__controls) {
  display: none;
}
</style>
