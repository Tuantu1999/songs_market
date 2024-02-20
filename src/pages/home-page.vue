<template>
  <v-container>
    <banner />
    <!-- New Songs -->
    <v-row>
      <v-col cols="12" class="font-size-40 fw-700 mt-xl-12 mt-md-8 mt-sm-4">New Songs</v-col>
      <v-divider class="divider"></v-divider>
      <v-col
        cols="12"
        sm="6"
        class="my-xl-12 my-md-8 my-sm-4"
        v-for="newSong in newSongs"
        :key="newSong.id + 'newSongs'"
      >
        <ListSongs :listSongs="newSong" @click="openDialog" />
      </v-col>
    </v-row>

    <!-- Top Download Songs -->
    <v-row>
      <v-col cols="12" class="font-size-40 fw-700 my-xl-12 my-md-8 my-sm-4">Top Download Songs</v-col>
      <v-divider class="divider"></v-divider>
      <v-col
        cols="12"
        sm="6"
        class="my-xl-12 my-md-8 my-sm-4"
        v-for="top in topDownload"
        :key="top.id + 'top_download'"
      >
        <ListSongs :listSongs="top" @click="openDialog" />
      </v-col>
    </v-row>

    <v-row class="my-12">
      <v-divider class="mb-3"></v-divider>
      <div>© Music Market 2023. All Rights Reserved.</div>
    </v-row>

    <div class="text-center">
      <v-dialog v-model="isShow" activator="parent" width="auto">
        <v-card>
          <v-card-text> Do you want to download this song? </v-card-text>
          <div class="d-flex justify-space-around">
            <v-card-actions>
              <v-btn color="primary" block @click="cancel">Cancel</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="primary" block @click="confirm">Download</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListSongs from '@/components/list-songs.vue'
import { appStore } from '@/store/app'

export default defineComponent({
  name: 'Home Page',
  components: { ListSongs },
  data() {
    const { newSongs, topDownload } = appStore()
    return {
      newSongs,
      topDownload,
      isShow: false,
    }
  },
  mounted() {
    appStore().fetchSongsData()
  },
  methods: {
    openDialog() {
      this.isShow = true
    },
    confirm() {
      const mp3Url = 'src/assets/mp3/Let_Me_Down_Slowly.mp3'
      const link = document.createElement('a')
      link.href = mp3Url
      link.download = 'audio.mp3'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      this.isShow = false
    },
    cancel() {
      this.isShow = false
    },
  },
})
</script>

<style lang="scss">
.divider {
  height: 2px;
  background: #e1e3e9;
}
</style>
