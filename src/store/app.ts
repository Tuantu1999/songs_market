// Utilities
import { SongsModel } from '@/model/songs.model'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import songsData from '@/data/songs.json'

export const appStore = defineStore('app', {
  state: () => ({
    songs: useLocalStorage('songs', [] as SongsModel[]),
  }),
  actions: {
    async fetchSongsData() {
      this.songs = songsData
    },
  },
  getters: {
    newSongs: (state) => {
      const res = state.songs.filter((item) => item.SongType === 'new')
      return res
    },
    topDownload: (state) => {
      const res = state.songs.filter((item) => item.SongType === 'top download')
      return res
    },
  },
})
