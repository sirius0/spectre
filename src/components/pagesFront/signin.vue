<template>
  <v-container>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar class="color-theme-1-bg" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title class="color-theme-3"
                  >SPECTER CONNECT</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="E-mail"
                    name="E-mail"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    id="Mot de passe"
                    label="Mot de passe"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="color-theme-2-bg color-theme-4" href="#/signup"
                  >Inscription</v-btn
                >
                <v-btn
                  class="color-theme-2-bg color-theme-4"
                  :disabled="!valid"
                  @click="validate"
                  >Connexion</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      url: '', // 'http://localhost:3000',
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'Cette valeur est requise',
        v => /.+@.+\..+/.test(v) || 'L\'email doit être valide'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Cette valeur est requise'
      ],
      sessionID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.login()
      }
    },
    async login () {
      var that = this
      this.axios({
        method: 'post',
        url: this.url + 'http://192.168.1.20:3000/api/login',
        data: {
          email: this.email,
          password: this.password,
          sessionID: this.sessionID
        }
      })
        .then(function (response) {
          const status = JSON.parse(response.data.status)
          // eslint-disable-next-line eqeqeq
          if (status == '200') {
            localStorage.setItem('email', that.email)
            localStorage.setItem('sessionID', that.sessionID)
            sessionStorage.clear()
            that.$router.push('profil')
          }
        })
        .catch(function (erreur) {
          console.log(erreur)
        })
    }
  }
}
</script>

<style scoped>

</style>
