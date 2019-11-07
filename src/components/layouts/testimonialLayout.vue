<template>
    <v-container >
      <h2 class="display-1 text-uppercase pb-5">
      nos clients nous aiment, et ils le disent
      </h2>
      <v-row align="center" justify="center" >
        <v-col cols="6" class="pa-0" xs="2" sm="2" md="2" lg="1">
          <img cols=1 class="ml-5" width="45%" height="45%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAuNDYgMTEwLjE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2VmYWE0Njt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZiLXJldmlldzwvdGl0bGU+PGcgaWQ9IkNhbHF1ZV8yIiBkYXRhLW5hbWU9IkNhbHF1ZSAyIj48ZyBpZD0iQ2FscXVlXzUiIGRhdGEtbmFtZT0iQ2FscXVlIDUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExMC40Niw1NS4yNnEwLDIzLjkxLDAsNDcuOGMwLDYtLjkzLDctNi43OSw3LTcuNzIuMDYtMTUuNDQtLjEtMjMuMTYuMDctMy4wNi4wNy00LjQxLS42Ny00LjM3LTQuMDYuMTEtMTEsMC0yMi0uMTktMzMsMC0yLjg0LjU3LTQsMy43NS00LjA4LDEwLjEzLS4xOCwxMC4xMy0uMzIsMTIuMTctMTAuMzhhOS43Miw5LjcyLDAsMCwxLC4zOS0xLjQzYzEuNTQtNC4yNC42MS02LjUyLTQuNC01LjYyYTUuNDUsNS40NSwwLDAsMS0xLDBjLTExLjczLDAtMTIuNy0xLjIyLTEwLjg1LTEzLC44NC01LjMzLDQuNzMtNi4xNCw5LTYuNDksOC41My0uNyw4LjI3LS42OSw4LjYzLTkuMDcuMi00LjUzLS43NS02LjU5LTUuNzUtNi4yMi0zLjg4LjI4LTcuNzktLjQtMTEuNzYuMTEtMTAuNDQsMS4zNS0xNy44Niw5Ljc2LTE3LjQ3LDIwLjI0LDAsMSwuMTksMiwuMTQsMy0uMTgsMy41OSwxLjQzLDgtLjY0LDEwLjU1cy02LjQ3LjgyLTkuODMuODhjLTIuNTgsMC0zLjQ3LjkyLTMuMzcsMy40NS4xNiwzLjYxLjE1LDcuMjMsMCwxMC44NC0uMTEsMi42NywxLjEzLDMuMjMsMy41NSwzLjM0LDEwLjMuNDcsMTAuMy41NCwxMC4yOSwxMC43MywwLDguNzEtLjEyLDE3LjQyLjA3LDI2LjEyLjA3LDMuMjYtMSw0LjIyLTQuMjQsNC4xOS0xNS45My0uMTQtMzEuODcsMC00Ny44LS4wOEMxLjEyLDExMC4wNiwwLDEwOC44OSwwLDEwM1EwLDU1LDAsNi45QzAsMS4xMywxLjExLDAsNywwUTU1LjMsMCwxMDMuNiwwYzUuOSwwLDYuODQsMSw2Ljg1LDdRMTEwLjQ4LDMxLjEsMTEwLjQ2LDU1LjI2WiIvPjwvZz48L2c+PC9zdmc+"/>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="5" class="mr-sm-6 text-justify">
          <p>
              « Noffhus avons testé le Cabaret version Halloween et ce fut une super
              expérience ! Le jeu est chouette avec des types d'énigmes assez variés,
              les décors sont sublimes comme toujours chez Specter, il y a plein de
              salles différentes et les comédiens nous ont vraiment fait flipper ! On
              a hâte de tester la nouvelle salle 👍 »
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="7" class="pa-0" xs="2" sm="2" md="2" lg="1">
          <img cols=1 class="ml-5" width="45%" height="45%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzguNiAxMTAuNDEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWZhYTQ2O308L3N0eWxlPjwvZGVmcz48dGl0bGU+dGEtcmV2aWV3PC90aXRsZT48ZyBpZD0iQ2FscXVlXzIiIGRhdGEtbmFtZT0iQ2FscXVlIDIiPjxnIGlkPSJDYWxxdWVfNSIgZGF0YS1uYW1lPSJDYWxxdWUgNSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY3LjYxLDM4LjA1Yy0yLTIuNTUtMS45NC0zLjk0LjM3LTYsMy4yNS0yLjksNi4yMS02LjExLDEwLjEyLTEwLTguMzcsMC0xNS41MywwLTIyLjY4LDBhOS43MSw5LjcxLDAsMCwxLTUuOTMtMS43QzExNS43OC0yLjQsODAuMTgtNy4zNiw0My42MiwxMiwzMC4xNywxOS4xOSwxNy4zOCwyNC43OCwxLjgxLDIxLjI2TDEuMywyMy4wNWMyLjc3LDIuNyw1LjM3LDUuNiw4LjM2LDgsMy4xOCwyLjU4LDMuNDgsNC41MS42NCw3Ljg1QzEuODgsNDguODItMS42NSw2MC40NS43Myw3My4zMmM2LjA3LDMyLjgsNDIuOCw0Ny43Nyw3MC4yMSwyOC42NCwyLjg0LTIsNC41OC0yLDcuMTUuMSwzLjU2LDIuODgsNy41MSw3LjQ4LDExLjIsNy4zOCw0LS4xLDgtNC41NiwxMS42OC03LjUxLDIuNTItMiw0LjEyLTEuNzUsNi43MS4wNywxOC43NCwxMy4xNyw0NC44NiwxMC4zNCw1OS02LjE2QzE4Mi4yLDc3LjY4LDE4Mi42Myw1Ni44LDE2Ny42MSwzOC4wNVpNNzguMjMsNjYuNTZjLS4wNiwxOC4wNy0xNS4xNSwzMy0zMy40NSwzMy4wNVMxMS4xMSw4NC4yMywxMS4xOCw2NkMxMS4yNSw0OC4xNSwyNi41NCwzMyw0NC44MywzMyw2Ni40LDMzLjA4LDc5LjM3LDUyLjEyLDc4LjIzLDY2LjU2Wk01MC43LDIyLjQ5YzE5LjY1LTE1LjYyLDYwLTE0LjQ2LDc2LjYzLDAtMjAuOTEsNC0zMi45NCwxNi45LTM4LDM3Qzg0LDM5LjYxLDcyLjI0LDI2LjMyLDUwLjcsMjIuNDlabTgzLDc3LjA2Yy0xOC4zNCwwLTMzLjQ5LTE1LjE1LTMzLjUtMzMuMTRBMzMuNTMsMzMuNTMsMCwwLDEsMTMzLjkzLDMzYTMzLjE4LDMzLjE4LDAsMCwxLDMzLjMsMzMuMTNDMTY4LDgxLjMxLDE1NS4wNSw5OS41OCwxMzMuNjgsOTkuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMyLjkzLDQzLjA4Yy0xMS4xMy0uNjUtMjEuNTUsOC42OS0yMi4yMiwxOS45MS0uNzEsMTEuOSw4Ljg1LDIyLjI4LDIxLDIyLjc1QzE0My4xOSw4Ni4xOSwxNTIuODYsNzcsMTUzLjUsNjUsMTU0LjEyLDUzLjQ2LDE0NSw0My43OCwxMzIuOTMsNDMuMDhabS0uNjksMzYuNjhBMTUuNCwxNS40LDAsMSwxLDEzMiw0OWExNS40LDE1LjQsMCwwLDEsLjIsMzAuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Myw0M0EyMS40LDIxLjQsMCwxLDAsNjQuNDIsNjQuNTUsMjEuMzcsMjEuMzcsMCwwLDAsNDMsNDNabS40MiwzNi44MkExNS40MiwxNS40MiwwLDEsMSw0My4xNiw0OWExNS40MiwxNS40MiwwLDAsMSwuMjEsMzAuODRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMzLjM3LDU0LjU5YTEwLjU4LDEwLjU4LDAsMSwwLS41MywyMS4xNiwxMC41OSwxMC41OSwwLDAsMCwuNTMtMjEuMTZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDQuMDksNTQuNTZBMTAuNiwxMC42LDAsMSwwLDU0LjUyLDY0LjkzLDEwLjU0LDEwLjU0LDAsMCwwLDQ0LjA5LDU0LjU2WiIvPjwvZz48L2c+PC9zdmc+"/>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="5" class="mr-sm-6 text-justify">
          <p>
              « Super Escape !! game master au top, super salles, plein de surprises à
              tous les niveaux, immersion parfaite, de la manipulation, de la
              réflexion, de la fouille et une multitude d'énigmes. <br />
              C'est le genre de salle d'où l'on sort satisfait d'avoir été immergé
              dans une vraie aventure, une vraie histoire, d'avoir eu beaucoup de
              choses à faire et qui ne se ressemblaient pas. Bravo et merci !! nous
              recommandons vraiment »
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" class="pa-0" xs="2" sm="2" md="2" lg="1">
          <img cols=1 class="ml-5" width="45%" height="45%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDcuNTMgMTEwLjE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2VmYWI0Njt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmctcmV2aWV3XzI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV81IiBkYXRhLW5hbWU9IkNhbHF1ZSA1Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MS4zOCwxNGMtNS4yLDUuMTctMTAuMTIsMTAuMTUtMTUuMTksMTUtLjQ0LjQyLTIuMDkuMDktMi44NC0uNDEtMTAuMTYtNi43NC0yMC44OC03LjU4LTMxLjkyLTIuNzYtMTMuNjgsNi0yMS4xMywyMS4zNi0xOCwzNi40MiwyLjk1LDE0LjEsMTYsMjQuOCwzMC41NiwyNS4xLDkuMTIuMTksMTcuNi0xLjcxLDI0LTguNjksMi4zOC0yLjYxLDMuODUtNi4wOCw1LjU1LTkuMjUsMS4wNi0yLC4yMi0yLjkxLTItMi45LTcuNzIuMDYtMTUuNDQsMC0yMy4xNiwwLTMuMjgsMC0zLjQ0LS4xOC0zLjQ2LTMuNDgsMC01LC4wNi05Ljk0LDAtMTQuOTEsMC0yLjA5LjU4LTMsMi44Ny0zcTIzLC4xMSw0Ni4wNiwwYzIsMCwyLjg3LjgsMy4xNCwyLjY5LDQsMjcuMDgtMTAuOTIsNTctNDQuMjcsNjEuODRDMzIuMywxMTQsNC43OCw5Mi45LjUzLDYyLjQzQTU0Ljc5LDU0Ljc5LDAsMCwxLDQ5LjQ1LjNDNjQuMzQtMS4xOSw3Ny41LDMsODkuMjUsMTIsODkuODcsMTIuNSw5MC40MSwxMy4wOCw5MS4zOCwxNFoiLz48L2c+PC9nPjwvc3ZnPg=="/>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="5" class="mr-sm-6 text-justify">
          <p>
              « Sans doute le meilleur escape game que j'ai pu réalisé jusqu'ici à
              Paris. J'ai eu l'occasion de faire plusieurs jeux et je n'ai jamais été
              déçus, tant pas les intrigues que l'immersion ou les échanges avec le
              game Master. Avec mention spéciale pour Protocole Hawaï ! <br />
              Ils viennent de lancer un nouveau jeu qui a l'air assez costaud et je
              suis pressé de le tester. »
          </p>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'testimonialLayout',
  data: () => ({
    // vm.log = loginVar
  })
}
</script>

<style>

</style>
