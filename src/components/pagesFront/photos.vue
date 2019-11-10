<template>
  <v-container class="pa-0" fluid>
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
                    Photos
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
      <v-container>
        <v-row>
          <v-col cols="12">
          <v-col cols="11" class="mx-auto">
          <v-card>
            <v-tabs
              style="background-color:#fafafa"
              color="deep-purple accent-4"
              centered
            >
              <v-tab>DEFCON 1</v-tab>
              <v-tab>DEFCON 2</v-tab>
              <v-tab>DEFCON 3</v-tab>

              <v-tab-item
                v-for="n in 3"
                :key="n"
              >
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="i in 6"
                      :key="i"
                      cols="12"
                      md="4"
                    >
                      <v-img
                        :src="`photos/picture/${n}${i}-min.jpg`"
                        :lazy-src="`photos/preview/${n}${i}-min.jpg`"
                        aspect-ratio="1"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
          </v-col>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'photos',
  hackers: null,
  data () {
    return {
    }
  }
}
</script>

<style>
.v-slide-group__content.v-tabs-bar__content {
    background-color: #fafafa !important;
}
.v-card.v-sheet.theme--light {
    box-shadow: none;
}
.v-window__container {
    background-color: #fafafa;
}
</style>
