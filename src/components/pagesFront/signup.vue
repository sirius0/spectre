<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form" class="elevation-7">
          <v-toolbar class="color-theme-1-bg" dark flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="color-theme-3"
              >SPECTER SIGN UP</v-toolbar-title
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
                label="Mot de passe"
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
                placeholder="Selectionner..."
                required
              ></v-autocomplete>
            </v-card-text>
            <v-divider class="mt-6"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="color-theme-2-bg color-theme-4"
                :disabled="!valid"
                @click="submit"
                >Je m'inscris</v-btn
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
  name: 'signup',
  data () {
    return {
      url: '', // 'http://localhost:3000',
      valid: true,
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
      countries: [ 'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Anguilla', 'Antarctique', 'Antigua-et-Barbuda', 'Antilles néerlandaises', 'Arabie saoudite', 'Argentine', 'Arménie', 'Aruba', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Bélarus', 'Belgique', 'Belize', 'Bénin', 'Bermudes', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunéi Darussalam', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge', 'Cameroun', 'Canada', 'Cap-Vert', 'Ceuta et Melilla', 'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores', 'Congo-Brazzaville', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', 'Côte d’Ivoire', 'Croatie', 'Cuba', 'Danemark', 'Diego Garcia', 'Djibouti', 'Dominique', 'Égypte', 'El Salvador', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie', 'État de la Cité du Vatican', 'États fédérés de Micronésie', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Géorgie du Sud et les îles Sandwich du Sud', 'Ghana', 'Gibraltar', 'Grèce', 'Grenade', 'Groenland', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernesey', 'Guinée', 'Guinée équatoriale', 'Guinée-Bissau', 'Guyana', 'Guyane française', 'Haïti', 'Honduras', 'Hongrie', 'Île Bouvet', 'Île Christmas', 'Île Clipperton', 'Île de l\'Ascension', 'Île de Man', 'Île Norfolk', 'Îles Åland', 'Îles Caïmans', 'Îles Canaries', 'Îles Cocos - Keeling', 'Îles Cook', 'Îles Féroé', 'Îles Heard et MacDonald', 'Îles Malouines', 'Îles Mariannes du Nord', 'Îles Marshall', 'Îles Mineures Éloignées des États-Unis', 'Îles Salomon', 'Îles Turks et Caïques', 'Îles Vierges britanniques', 'Îles Vierges des États-Unis', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jersey', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban', 'Libéria', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine', 'Madagascar', 'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Martinique', 'Maurice', 'Mauritanie', 'Mayotte', 'Mexique', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Montserrat', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Nicaragua', 'Niger', 'Nigéria', 'Niue', 'Norvège', 'Nouvelle-Calédonie', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 'Pérou', 'Philippines', 'Pitcairn', 'Pologne', 'Polynésie française', 'Porto Rico', 'Portugal', 'Qatar', 'R.A.S. chinoise de Hong Kong', 'R.A.S. chinoise de Macao', 'régions éloignées de l’Océanie', 'République centrafricaine', 'République démocratique du Congo', 'République dominicaine', 'République tchèque', 'Réunion', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Sahara occidental', 'Saint-Barthélémy', 'Saint-Kitts-et-Nevis', 'Saint-Marin', 'Saint-Martin', 'Saint-Pierre-et-Miquelon', 'Saint-Vincent-et-les Grenadines', 'Sainte-Hélène', 'Sainte-Lucie', 'Samoa', 'Samoa américaines', 'Sao Tomé-et-Principe', 'Sénégal', 'Serbie', 'Serbie-et-Monténégro', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Svalbard et Île Jan Mayen', 'Swaziland', 'Syrie', 'Tadjikistan', 'Taïwan', 'Tanzanie', 'Tchad', 'Terres australes françaises', 'Territoire britannique de l\'océan Indien', 'Territoire palestinien', 'Thaïlande', 'Timor oriental', 'Togo', 'Tokelau', 'Tonga', 'Trinité-et-Tobago', 'Tristan da Cunha', 'Tunisie', 'Turkménistan', 'Turquie', 'Tuvalu', 'Ukraine', 'Union européenne', 'Uruguay', 'Vanuatu', 'Venezuela', 'Viêt Nam', 'Wallis-et-Futuna', 'Yémen', 'Zambie', 'Zimbabwe' ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    async submit () {
      this.axios({
        method: 'post',
        url: this.url + '/api/signup',
        data: {
          username: this.username,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          city: this.city,
          zipcode: this.zipcode,
          country: this.country
        }
      })
        .then((response) => {
          this.alert = true
          this.$router.push('signin')
        })
    }
  }
}
</script>

<style  scoped>
</style>
