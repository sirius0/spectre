<template>
    <v-container class="pa-0 mx-0" fluid>
      <v-card flat tile class="color-theme-1-bg color-theme-3 text-center">
                <v-card-text>
                    <v-btn
                      v-for="item in social"
                      :key="item.icon"
                      class="mx-4 white--text"
                      icon
                    >
                    <a :href="item.url" class="color-theme-2" target="_blank" style="text-decoration: none !important;">
                      <v-icon size="24px">{{ item.icon }}</v-icon>
                    </a>
                    </v-btn>
                </v-card-text>
                <div class="caption pb-5" style="display: inline-flex;">
                  <a class="color-theme-3 text-uppercase" href="#/partenariats">partenariats</a>
                  &nbsp;—&nbsp;
                  <a class="color-theme-3 text-uppercase" href="#/cgv">cgv</a>
                  &nbsp;—&nbsp;
                  <a class="color-theme-3 text-uppercase" href="#/mentionsLegales">mentions légales</a>
                </div>
        <v-divider class="color-theme-3-br"></v-divider>
        <v-card-text class="black--text">
          <p class="pt-0 color-theme-3">
          © 2010 - {{ new Date().getFullYear() }} — <strong>SPECTER</strong>
          </p>
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'footer',
  data: () => ({
    // vm.log = loginVar
    social: [
      { icon: 'mdi-facebook-box', url: 'http://facebook.com/' },
      { icon: 'mdi-twitter', url: 'http://twitter.com/' },
      { icon: 'mdi-instagram', url: 'http://instagram.com/' }
    ]
  })
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
