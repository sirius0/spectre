<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="mb-7 elevation-7">
          <v-row>
            <v-col cols="12" sm="12" class="pt-0">
              <v-toolbar class="color-theme-1-bg" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title class="color-theme-3"
                  ><h2>Bienvenue {{ firstname }} !</h2></v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
            </v-col>
            <v-col cols="12" sm="12" justify="center" align="center">
              <span v-if="validMessage">
                <v-btn
                  class="mb-3 mx-4 color-theme-2-bg color-theme-4"
                  href="#/message"
                  >Lire Messages
                </v-btn>
                <v-btn class="mb-3 color-theme-2-bg color-theme-4" disabled
                  >User admin ne peut etre supprimer</v-btn
                >
              </span>
              <span v-else>
                <v-btn class="mb-3 color-theme-2-bg color-theme-4" disabled
                  >Admin seul peut lire les messages</v-btn
                >
                <v-btn
                  class="mb-3 mx-4 color-theme-2-bg color-theme-4"
                  @click="deleteProfile"
                  >Supprimer mon profil</v-btn
                >
              </span>
            </v-col>
          </v-row>
        </v-card>
        <v-card ref="form" class="elevation-7">
          <v-toolbar class="color-theme-1-bg" dark flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="color-theme-3"
              ><h3>Modification du profil</h3></v-toolbar-title
            >
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                v-model="firstname"
                :rules="[() => !!firstname || 'Cette valeur est requise']"
                label="Votre prénom"
                placeholder="Habibou"
                required
              ></v-text-field>
              <v-text-field
                v-model="lastname"
                :rules="[() => !!lastname || 'Cette valeur est requise']"
                label="Votre Nom"
                placeholder="Le Bouffon"
                required
              ></v-text-field>
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Email"
                placeholder="id@mail.com"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[() => !!password || 'Cette valeur est requise']"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                counter
                @click:append="show = !show"
                label="Mot de passe (non modifiable pour raison de sécu)"
                placeholder="mot de passe de bouffon"
              ></v-text-field>
              <v-text-field
                v-model="city"
                :rules="[() => !!city || 'Cette valeur est requise']"
                label="Ville"
                placeholder="Dakar"
                required
              ></v-text-field>
              <v-text-field
                v-model="zipcode"
                :rules="[() => !!zipcode || 'Cette valeur est requise']"
                label="Code Postal"
                required
                placeholder="13001"
              ></v-text-field>
              <v-autocomplete
                v-model="country"
                :rules="[() => !!country || 'Cette valeur est requise']"
                :items="countries"
                label="Pays"
                value="truc"
                :placeholder="country"
                required
              ></v-autocomplete>
            </v-card-text>
            <v-divider class="mt-6"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="my-4 color-theme-2-bg color-theme-4"
                :disabled="!valid"
                @click="updateProfile"
                >{{ button }}</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      url: '', // 'http://localhost:3000',
      valid: true,
      validMessage: '',
      button: 'Mettre à jour',
      alert: false,
      firstname: '',
      lastname: '',
      username: '',
      usernameRules: [
        v => !!v || 'Cette valeur est requise',
        v => /.+@.+\..+/.test(v) || 'L\'email doit être valide'
      ],
      show: '',
      password: '',
      passwordRules: [
        v => !!v || 'Cette valeur est requise'
      ],
      city: '',
      zipcode: '',
      country: '',
      countries: [ 'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Anguilla', 'Antarctique', 'Antigua-et-Barbuda', 'Antilles néerlandaises', 'Arabie saoudite', 'Argentine', 'Arménie', 'Aruba', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Bélarus', 'Belgique', 'Belize', 'Bénin', 'Bermudes', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunéi Darussalam', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge', 'Cameroun', 'Canada', 'Cap-Vert', 'Ceuta et Melilla', 'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores', 'Congo-Brazzaville', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', 'Côte d’Ivoire', 'Croatie', 'Cuba', 'Danemark', 'Diego Garcia', 'Djibouti', 'Dominique', 'Égypte', 'El Salvador', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie', 'État de la Cité du Vatican', 'États fédérés de Micronésie', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Géorgie du Sud et les îles Sandwich du Sud', 'Ghana', 'Gibraltar', 'Grèce', 'Grenade', 'Groenland', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernesey', 'Guinée', 'Guinée équatoriale', 'Guinée-Bissau', 'Guyana', 'Guyane française', 'Haïti', 'Honduras', 'Hongrie', 'Île Bouvet', 'Île Christmas', 'Île Clipperton', 'Île de l\'Ascension', 'Île de Man', 'Île Norfolk', 'Îles Åland', 'Îles Caïmans', 'Îles Canaries', 'Îles Cocos - Keeling', 'Îles Cook', 'Îles Féroé', 'Îles Heard et MacDonald', 'Îles Malouines', 'Îles Mariannes du Nord', 'Îles Marshall', 'Îles Mineures Éloignées des États-Unis', 'Îles Salomon', 'Îles Turks et Caïques', 'Îles Vierges britanniques', 'Îles Vierges des États-Unis', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jersey', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban', 'Libéria', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine', 'Madagascar', 'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Martinique', 'Maurice', 'Mauritanie', 'Mayotte', 'Mexique', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Montserrat', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Nicaragua', 'Niger', 'Nigéria', 'Niue', 'Norvège', 'Nouvelle-Calédonie', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 'Pérou', 'Philippines', 'Pitcairn', 'Pologne', 'Polynésie française', 'Porto Rico', 'Portugal', 'Qatar', 'R.A.S. chinoise de Hong Kong', 'R.A.S. chinoise de Macao', 'régions éloignées de l’Océanie', 'République centrafricaine', 'République démocratique du Congo', 'République dominicaine', 'République tchèque', 'Réunion', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Sahara occidental', 'Saint-Barthélémy', 'Saint-Kitts-et-Nevis', 'Saint-Marin', 'Saint-Martin', 'Saint-Pierre-et-Miquelon', 'Saint-Vincent-et-les Grenadines', 'Sainte-Hélène', 'Sainte-Lucie', 'Samoa', 'Samoa américaines', 'Sao Tomé-et-Principe', 'Sénégal', 'Serbie', 'Serbie-et-Monténégro', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Svalbard et Île Jan Mayen', 'Swaziland', 'Syrie', 'Tadjikistan', 'Taïwan', 'Tanzanie', 'Tchad', 'Terres australes françaises', 'Territoire britannique de l\'océan Indien', 'Territoire palestinien', 'Thaïlande', 'Timor oriental', 'Togo', 'Tokelau', 'Tonga', 'Trinité-et-Tobago', 'Tristan da Cunha', 'Tunisie', 'Turkménistan', 'Turquie', 'Tuvalu', 'Ukraine', 'Union européenne', 'Uruguay', 'Vanuatu', 'Venezuela', 'Viêt Nam', 'Wallis-et-Futuna', 'Yémen', 'Zambie', 'Zimbabwe' ],
      superuser: ''
    }
  },
  validate () {
    if (this.$refs.form.validate()) {
      this.snackbar = true
    }
  },
  created () {
    this.getProfileInformations()
  },
  methods: {
    async getProfileInformations () {
      var emailStored = localStorage.getItem('email')
      var sessionIDStored = localStorage.getItem('sessionID')
      var that = this
      // connecter l'utilisateur
      this.axios({
        method: 'post',
        url: this.url + '/api/getprofilinfos',
        data: {
          username: emailStored,
          sessionID: sessionIDStored
        }
      })
        .then(function (response) {
          // On traite la suite une fois la réponse obtenue
          const status = JSON.parse(response.data.status)
          // eslint-disable-next-line
          if (status == '200') {
            that.username = response.data.username
            that.password = response.data.password
            that.firstname = response.data.firstname
            that.lastname = response.data.lastname
            that.country = response.data.country
            that.city = response.data.city
            that.zipcode = response.data.zipcode
            that.superuser = response.data.superuser
            if (response.data.superuser && response.data.superuser === 'true') {
              that.validMessage = true
            } else {
              that.validMessage = false
            }
          }
        })
        .catch(function (erreur) {
          // On traite ici les erreurs éventuellement survenues
        })
    },
    async updateProfile () {
      // connecter l'utilisateur
      var sessionIDStored = localStorage.getItem('sessionID')
      var that = this
      this.axios({
        method: 'post',
        url: this.url + '/api/updateProfile',
        data: {
          sessionID: sessionIDStored,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          country: this.country,
          city: this.city,
          zipcode: this.zipcode
        }
      })
        .then(function (response) {
          that.updateprofile = true
          that.button = 'C\'est fait !'
        })
    },
    async deleteProfile () {
      // connecter l'utilisateur
      var sessionIDStored = localStorage.getItem('sessionID')
      var that = this
      this.axios({
        method: 'post',
        url: this.url + '/api/deleteProfile',
        data: {
          sessionID: sessionIDStored,
          username: this.username
        }
      })
        .then(function (response) {
          that.updateprofile = true
          that.button = 'C\'est fait !'
          that.logout()
        })
    },
    async logout () {
      var emailStored = localStorage.getItem('email')
      var sessionIDStored = localStorage.getItem('sessionID')
      this.axios({
        method: 'post',
        url: this.url + '/api/logout',
        data: {
          username: emailStored,
          sessionID: sessionIDStored
        }
      })

      localStorage.removeItem('email')
      localStorage.removeItem('sessionID')
      localStorage.removeItem('email')
      this.$router.push('/')
    }
  },
  mounted () {
    if (sessionStorage.username) {
      this.username = sessionStorage.username
    }
    if (sessionStorage.password) {
      this.password = sessionStorage.password
    }
    if (sessionStorage.firstname) {
      this.firstname = sessionStorage.firstname
    }
    if (sessionStorage.lastname) {
      this.lastname = sessionStorage.lastname
    }
    if (sessionStorage.country) {
      this.country = sessionStorage.country
    }
    if (sessionStorage.city) {
      this.city = sessionStorage.city
    }
    if (sessionStorage.zipcode) {
      this.zipcode = sessionStorage.zipcode
    }
    if (sessionStorage.superuser) {
      this.superuser = sessionStorage.superuser
    }
  },
  watch: {
    username (upDateusername) {
      sessionStorage.username = upDateusername
    },
    password (upDatepassword) {
      sessionStorage.password = upDatepassword
    },
    firstname (upDatefirstname) {
      sessionStorage.firstname = upDatefirstname
    },
    lastname (upDatelastname) {
      sessionStorage.lastname = upDatelastname
    },
    country (upDatecountry) {
      sessionStorage.country = upDatecountry
    },
    city (upDatecity) {
      sessionStorage.city = upDatecity
    },
    zipcode (upDatezipcode) {
      sessionStorage.zipcode = upDatezipcode
    },
    superuser (upDatesuperuser) {
      sessionStorage.superuser = upDatesuperuser
    }
  }
}
</script>

<style scoped>
</style>
