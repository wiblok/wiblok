<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          リアルタイムゲーマーマッチング
        </v-card-title>
        <v-card-text>
          <input
            type="text"
            v-model="age"
            class="form-control"
            placeholder="Enter age..."
          />
          <input
            type="text"
            v-model="game"
            class="form-control"
            placeholder="Enter game..."
          />
          <input
            type="text"
            v-model="sex"
            class="form-control"
            placeholder="Enter sex..."
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="searchOne()"> 検索 </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import io from 'socket.io-client'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      game: '',
      age: '',
      sex: '',
    }
  },
  created() {
    this.socket = io('http://localhost:3000')
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message)
    })
  },
  methods: {
    searchOne() {
      this.socket.emit('message', this.user)
    },
  },
}
</script>
