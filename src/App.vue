<template>
  <v-app app class ="app" min-height= "0" wrap>
    <toolbarCore />
      <v-content min-height= "0" >
        <router-view></router-view>
      </v-content>
    <footerCore />
  </v-app>
</template>

<script>
import toolbarCore from './components/core/toolbarCore'
import footerCore from './components/core/footerCore'

export default {
  name: 'App',
  components: {
    toolbarCore,
    footerCore
  },
  data: () => ({
    //
  })
}
</script>
