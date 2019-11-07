<template>
    <v-layout row wrap class="image">
      <v-flex xs12>
        <v-carousel cycle align="center" justify="end" height="600" jumbotron>
          <v-carousel-item style="background-size: cover;"
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id" >
            <v-parallax class="img" :src="meetup.imageUrl" height="600" jumbotron>
            </v-parallax>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'carouselLayout',
  data () {
    return {
      meetups: [
        {
          imageUrl: 'carouselPhotos/bg1.jpg',
          id: '0',
          width: screen.width
        },
        {
          imageUrl: 'carouselPhotos/bg2.jpg',
          id: '1',
          width: screen.width
        },
        {
          imageUrl: 'carouselPhotos/bg3.png',
          id: '2',
          width: screen.width
        }
      ]
    }
  }
}
</script>

<style>

</style>
