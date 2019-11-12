<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form" class="elevation-7 pb-3">
          <v-toolbar class="color-theme-1-bg" dark flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="color-theme-3"
              ><h3>Messages reçus via la page contact :</h3></v-toolbar-title
            >
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-col cols="12" sm="12" justify="center" align="center">
            <v-btn class="color-theme-2-bg color-theme-4" href="#/profil"
              >Retour</v-btn
            >
          </v-col>
          <v-card
            class="mx-auto ma-5"
            max-width="70%"
            outlined
            v-for="item in messagesJSON"
            :key="item.email"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{
                  item.name
                }}</v-list-item-title>
                <div class="overline mb-4">{{ item.email }}</div>
                <div class="overline mb-4">{{ item.status }}</div>
                <v-list-item-subtitle>
                  <p>
                    {{ item.content }}
                  </p>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'message',
  data () {
    return {
      url: '', // 'http://localhost:3000',
      valid: true,
      messagesJSON: ''
    }
  },
  created () {
    this.getMessage()
  },
  methods: {
    // Login back end
    async getMessage () {
      var emailStored = localStorage.getItem('email')
      var sessionIDStored = localStorage.getItem('sessionID')

      this.axios.post('http://192.168.1.20:3000/api/getmessage', {
        username: emailStored,
        sessionID: sessionIDStored
      }).then((response) => {
        this.messagesJSON = response.data
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
