<template>
  <v-app>
      <v-container class="pa-0" fluid>
        <v-img
          class="pa-0"
          height="150px"
          src="https://picsum.photos/id/107/1500/200?grayscale&blur=2"
          aspect-ratio="1"
        >
          <v-col cols="12" class="pa-0">
            <v-row style="height: 150px;">
              <v-row align="end" justify="end">
                <!-- <v-card class="pa-10 ma-10"> -->
                <div class="pa-1 mt-0 mr-11 mb-5 ml-5">
                  <!-- Column -->
                  <h1
                    class="color-theme-4 display-2 text-uppercase font-weight-bold"
                  >
                    Contact
                  </h1>
                  <v-divider
                    style="border-width: 3px 0 0 0 !important;"
                    class="color-theme-4-br"
                  ></v-divider>
                </div>
              </v-row>
            </v-row>
          </v-col>
        </v-img>
      </v-container>
      <v-container class="pa-0">
        <v-row  justify="center" align="center" no-gutters>
          <v-col xs="12" sm="12" md="12" lg="6" >
            <v-card class="xs-12 pa-1 ma-10">
              <mapLayout id="mapContact"/>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="6" >
            <v-card class="pa-10 ma-10">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Votre nom"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-select
                  v-model="status"
                  :items="items"
                  :rules="[v => !!v || 'Cette valeur est requise']"
                  label="Status"
                  required
                ></v-select>

                <v-textarea
                  v-model="content"
                  counter
                  label="Message"
                  filled
                  required
                  auto-grow
                ></v-textarea>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'Vous devez accepter avant de continuer!']"
                  label="Les informations ci-dessous sont exactes"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  {{ sendButton }}
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import mapLayout from '../layouts/mapLayout'

export default {
  name: 'contact',
  components: { mapLayout },
  data () {
    return {
      url: '',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Cette valeur est requise',
        v => (v && v.length <= 15) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Cette valeur est requise',
        v => /.+@.+\..+/.test(v) || 'L\'email doit être valide'
      ],
      status: null,
      items: [
        'Particulier',
        'Professionnel',
        'Administration',
        'Autre'
      ],
      content: '',
      sendButton: 'Envoyer',
      checkbox: false,
      lazy: false
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.sendMessage()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async sendMessage () {
      var that = this
      that.sendButton = 'C\'est envoyer'

      this.axios({
        method: 'post',
        url: this.url + '/api/sendmessage',
        data: {
          name: this.name,
          email: this.email,
          status: this.status,
          content: this.content
        }
      })
        .catch(function (erreur) {
        })
      this.reset()
    }
  }
}
</script>

<style scoped>
#mapContact {
  height: 500px;
}
</style>
