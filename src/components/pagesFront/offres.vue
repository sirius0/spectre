<template>
  <v-container class="grey lighten-5 pa-0" fluid>
    <v-container class="pa-0" fluid>
      <v-img
        class="pa-0"
        height="150px"
        src="https://picsum.photos/id/189/1500/200?grayscale&blur=2"
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
                  Offres
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
    <v-row no-gutters>
        <v-col>
          <v-card class="pa-2"  tile >
        <v-row justify="center" align="center" no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12">
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="4"
              class="mx-auto text-center mt-5"
            >
              <h4>Prix</h4>
              <h1>Offres</h1>
              <hr
                role="separator"
                aria-orientation="horizontal"
                style="width: 37px;"
                class="mt-5 mb-4 mx-auto v-divider theme--light"
              />
              <p>
                Choisissez l'un des plans suivants pour commencer. Vous pouvez
                commencer avec le plan GRATUIT pour voir notre application Web
                au début. Vous pouvez toujours changer votre plan à tout moment.
              </p>
              <hr
                role="separator"
                aria-orientation="horizontal"
                style="width: 37px;"
                class="mt-5 mb-4 mx-auto v-divider theme--light"
              />
            <h1
              class="title text-uppercase"
            >
              Tu viens avec des amis ?
            </h1>
          <v-slider
            v-model="hackers"
            :rules="rules"
            class="mx-sm-12 mx-xs-12 "
            color="orange"
            label="Combien ?"
            hint="Plus on est de fous, plus on rit"
            min="1"
            max="40"
            thumb-label
          ></v-slider>
            </v-col>
          </v-col>
        </v-row>
          </v-card>
        </v-col>
        <v-responsive
          width="100%"
        ></v-responsive>
        <v-responsive
          width="100%"
        ></v-responsive>
        <v-col>
          <v-card class="pa-2" tile >
        <v-row class="mx-10 mb-10" justify="center" align="center" no-gutters>
          <v-col xs="12" sm="12" md="12" lg="4">
            <v-card class="elevation-3 ma-3 text-center pb-3">
              <v-toolbar
                flat
                style="height: 64px; background-color: #f2a900 !important;"
                class="grey lighten-5"
              >
                <v-spacer></v-spacer>
                <v-toolbar-title style="color: #fff !important;"
                  >DEFCON 1</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-row>
                <v-col col="12" class="pa-5">
                  <div class="d-inline-block success--text">
                    <sup>$</sup
                    ><span class="display-3 font-weight-bold">{{`${hackers * 8}`}}</span>
                  </div>
                  <span class="caption"> /jour </span>
                </v-col>
                <v-card-text class="mb-4">
                  <div>10 sénarios</div>
                  <div>Team de 4 personnes</div>
                  <div>Durée 2 heures</div>
                </v-card-text>
                <v-card-text>
                  <v-btn
                    href="#/contact"
                    depressed
                    large
                    tile
                    style="background-color: #4caf50 !important; color: #fff !important;"
                    >GO !</v-btn
                  >
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="4">
            <v-card class="ma-3 elevation-12 text-center pb-3">
              <v-toolbar
                flat
                style="height: 64px; background-color: #ba000d !important;"
                class="color-theme-2-bg grey lighten-5"
              >
                <v-spacer></v-spacer>
                <v-toolbar-title style="color: #fff !important;"
                  >DEFCON 3</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-row>
                <v-col col="12" class="pa-5">
                  <div class="d-inline-block success--text">
                    <sup>$</sup
                    ><span class="display-3 font-weight-bold">{{`${hackers * 199}`}}</span>
                  </div>
                  <span class="caption"> /jour </span>
                </v-col>
                <v-card-text class="mb-4">
                  <div>20 scénarios</div>
                  <div>Team de 8 personnes</div>
                  <div>Durée 6 heures</div>
                </v-card-text>
                <v-card-text>
                  <v-btn
                    href="#/contact"
                    depressed
                    large
                    tile
                    style="background-color: #4caf50 !important; color: #fff !important;"
                    >GO !</v-btn
                  >
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="4">
            <v-card class="elevation-3 ma-3 text-center pb-3">
              <v-toolbar
                flat
                style="height: 64px; background-color: #161616 !important;"
                class="grey lighten-5"
              >
                <v-spacer></v-spacer>
                <v-toolbar-title
                  style="color: #fff !important; color: #fff !important;"
                  >DEFCON 5</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-row>
                <v-col col="12" class="pa-5">
                  <div class="d-inline-block success--text">
                    <sup>$</sup
                    ><span class="display-3 font-weight-bold">{{`${hackers * 999}`}}</span>
                  </div>
                  <span class="caption"> /jour </span>
                </v-col>
                <v-card-text class="mb-4">
                  <div>100+ scénarios</div>
                  <div>Team de 60 personnes</div>
                  <div>48 heures non stop !</div>
                </v-card-text>
                <v-card-text>
                  <v-btn
                    href="#/contact"
                    depressed
                    large
                    tile
                    style="background-color: #4caf50 !important; color: #fff !important;"
                    >GO !</v-btn
                  >
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'offres',
  hackers: null,
  data () {
    return {
      name: 'Offres',
      hackers: null,
      rules: [
        val => val < 10 || `WOOOOOOOOOOW CA VA ETRE OUF!`
      ]
    }
  }
}
</script>

<style></style>
