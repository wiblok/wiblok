<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          リアルタイムゲーマーマッチング
        </v-card-title>
        <v-card-text>
          <textarea
            type="text"
            v-model="age"
            class="form-control"
            placeholder="Enter age..."
          />
        </v-card-text>
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
      user: {
        game: this.$route.query.name,
        age: this.$route.query.age,
        sex: this.$route.query.sex,
      },
    }
  },
  created() {},
  methods: {},
}
</script>
