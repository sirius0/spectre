<template>
  <v-app id="inspire">
    <!-- <Toolbar/> -->
    <v-container class="pa-0" fluid>
      <carouselLayout/>
      <presentationTextLayout align="center" />
      <mapLayout class="pa-0 mb-6" id="mapHome"/>
      <testimonialLayout align="center"/>
      <FAQLayout/>
    </v-container>
   </v-app>
</template>

<script>
// import Toolbar from './Toolbar'
import carouselLayout from '../layouts/carouselLayout'
import presentationTextLayout from '../layouts/presentationTextLayout'
import mapLayout from '../layouts/mapLayout'
import testimonialLayout from '../layouts/testimonialLayout'
import FAQLayout from '../layouts/FAQLayout'

export default {
  name: 'home',
  components: {
    presentationTextLayout,
    carouselLayout,
    mapLayout,
    testimonialLayout,
    FAQLayout
  },
  data: () => ({
    // vm.log = loginVar
  })
}
</script>

<style scoped>
#mapHome{
  height: 500px;
}
</style>
