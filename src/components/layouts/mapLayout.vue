<template>
    <v-container fluid>
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=esiea%20paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
    </v-container>
</template>

<script>
export default {
  name: 'mapLayout',
  data: () => ({
    // vm.log = loginVar
  })
}
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 600px;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 600px;
  width: 100%;
}
</style>
