<template>
  <v-container
    fluid
    class="pa-0"
    style="background: url(photos/BackgroundPage.svg) center center / cover no-repeat fixed;"
  >
    <v-container bg fill-height grid-list-md text-xs-center class="pa-0" fluid>
      <v-layout
        style="height:150px; background-color: #fff"
        row
        wrap
        align-center
        class="pa-0"
      >
        <v-flex class="px-1">
          <h1
            class="titre-custom color-theme-2 display-2 text-uppercase font-weight-bold text-center"
            style="margin-top: 0px;"
          >
            mentions légales
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="col-xs-11 col-sm-9 col-md-9 col-lg-8 text-justify">
          <v-card flat tile class="py-10 px-5">
            <p>
              Le site&nbsp;<a href="https://www.specter.com/"
                >https://www.specter.com</a
              >&nbsp;est &eacute;dit&eacute; par la soci&eacute;t&eacute; HH
              SPECTER PRODUCTIONS, SAS au capital de 375 000&euro;, dont le
              si&egrave;ge social est situ&eacute; 74 bis Avenue Maurice Thorez,
              94200 Ivry sur Seine et exer&ccedil;ant son activit&eacute; dans
              son &eacute;tablissement &agrave; la m&ecirc;me adresse.
            </p>
            <ul>
              <li>
                T&eacute;l :&nbsp;<a href="tel://0156653476">01 56 65 34 76</a>
              </li>
              <li>
                Email :&nbsp;<a href="mailto:contact@specter.com"
                  >contact@specter.com</a
                >
              </li>
            </ul>
            <mapLayout class="py-10" style="height: 450px;" />
            <h3>H&eacute;bergement</h3>
            <p>SARL OVH</p>
            <p>140, Générale Bib - 75018 PARIS, FRANCE</p>
            <p>
              Tel :&nbsp;<a href="tel://0156653476">01 56 65 34 76</a>&nbsp;-
              Fax :&nbsp;<a href="tel://0134340101">01 34 34 01 01</a>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import mapLayout from '../layouts/mapLayout'
export default {
  name: 'mentionsLegales',
  components: { mapLayout }
}
</script>

<style>
  blockquote {
    font-style: italic;
    font-size: 1.4em;
    text-align: center;
    margin: 10px 100px 10px 40px;
  }
  .recap {
    font-size:  1.3em;
    line-height: 1.5em;
    margin: 20px 100px 20px 50px;
    text-align: center;
  }
  .fat {
    font-size:  1.6em;
    line-height:  1.6em;
    font-weight: bold;
    margin: 40px 0;
  }
  .titre-custom {
    margin-top: 50px;
  }
  .logo {
    width: 200px;
  }
  .flex-container{
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }
  a {
    color: #f8a907 !important;
    text-decoration: none;
  }
  .mapouter {
    position: relative;
    text-align: right;
    height: 400px;
    width: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 400px;
    width: 100%;
  }
</style>
