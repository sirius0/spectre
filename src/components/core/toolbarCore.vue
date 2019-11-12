<template>
  <nav>
    <!-- #### rightMenuLogin start #### -->
    <v-navigation-drawer class="color-theme-2-bg" v-model="drawerR" app disable-resize-watcher left>
        <v-list>
          <!-- top list start -->
          <v-list-item v-for="item in menus" :key="item.name" link :to="item.url" >
            <!-- icon start -->
            <v-list-item-icon>
              <v-icon>mdi-menu-left-outline</v-icon>
            </v-list-item-icon>
            <!-- icon end -->
            <!-- title start -->
            <v-list-item-content>
              <v-list-item-title class="color-theme-1 font-weight-medium ">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
            <!-- title end -->
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer class="color-theme-2-bg" v-model="drawerL" app disable-resize-watcher right>
        <v-list>
          <!-- top list start -->
          <v-list-item v-for="item in rightMenuLogin" :key="item.name" link :to="item.url" >
            <!-- icon start -->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <!-- icon end -->
            <!-- title start -->
            <v-list-item-content>
              <v-list-item-title class="color-theme-1 font-weight-medium ">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
            <!-- title end -->
          </v-list-item>
        </v-list>
        <!-- top list end -->
        <!--  element of the end - start -->
        <template v-slot:append>
          <div class="pa-2">
            <v-btn @click="logout" block>Logout</v-btn>
          </div>
        </template>
        <!--  element of the end - end -->
    </v-navigation-drawer>
    <!-- #### rightMenuLogin End #### -->

    <!-- #### toolbar start #### -->
    <v-app-bar app class="color-theme-1-bg" height="70" >
      <v-btn class="d-md-none" icon @click.stop="drawerR = !drawerR" >
        <v-icon class="color-theme-3">mdi-menu</v-icon>
      </v-btn>
      <v-spacer class=" d-md-none" />
      <v-toolbar-title class="color-theme-3 mx-sm-4 mx-md-4 mx-lg-auto text text-center">
        <v-img class="pa-0" height="60" width="60" id="logo" :src="require('../../assets/logo/SPECTER_Logo.png')"></v-img>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          class="color-theme-1-bg"
          v-for="item in menus"
          :key="item.id"
          :to="item.url"
          text
        >
          <span class="color-theme-3">{{ item.name }}</span>
        </v-btn>
      </v-toolbar-items>
      <v-btn icon @click.stop="drawerL = !drawerL">
        <v-icon class="color-theme-3">mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- #### toolbar end #### -->
  </nav>
</template>

<script>
export default {
  name: 'toolbarCore',
  data: () => ({
    url: '',
    drawerL: false,
    drawerR: false,
    menus: [
      { id: '0', name: 'Accueil', url: '/' },
      { id: '1', name: 'Offres', url: 'offres' },
      { id: '2', name: 'Photos', url: 'photos' },
      { id: '3', name: 'Contact', url: 'contact' }
    ],
    rightMenuLogin: [
      { id: '0', name: 'Sign in', icon: 'mdi-view-dashboard', url: 'signin' },
      { id: '1', name: 'Sign up', icon: 'mdi-account-box', url: 'signup' }
    ]
  }),
  methods: {
    async logout () {
      var emailStored = localStorage.getItem('email')
      this.axios({
        method: 'post',
        url: this.url + '/api/logout',
        data: {
          username: emailStored
        }
      })
      localStorage.removeItem('email')
      this.$router.push('/')
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.email
    }
  },
  watch: {
    name (newName) {
      localStorage.hicham = newName
    }
  }
}
</script>

<style scoped>

</style>
