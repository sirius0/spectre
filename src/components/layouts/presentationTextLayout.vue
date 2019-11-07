<template>
  <v-container class="pt-10">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="6" lg="3" id="truc">
        <v-card class="pa-2 color-theme-5-bg" elevation="0" width="81%">
          <!-- <img  alt="" class="AgenceDescription__Img-gtundy-2 jAdskn"> -->
          <v-img class="pa-0" :src="require('../../assets/logo/agence-logo.svg')"></v-img>
          <!-- <v-img class="pa-0" src="agence-logo.svg" ></v-img> -->
        </v-card>
      </v-col>
      <v-col class="" cols="12" sm="9" md="6" lg="4">
        <v-card class="pa-2 color-theme-5-bg" elevation="0">
          <h2 class="display-2 text-uppercase pb-5">l'agence</h2>
          <span class="text-justify">
            <p>&Agrave; Specter, nous nous engageons &agrave; cr&eacute;er une atmosph&egrave;re amusante et conviviale dans laquelle vous pourrez passer un agr&eacute;able souvenir de votre famille, de vos amis et de vos coll&egrave;gues. Un jeu Live Escape est une exp&eacute;rience interactive o&ugrave; vous et votre groupe choisissez une salle th&eacute;matique avec une mission: hacker la maison blanche afin de rendre l'Am&eacute;rique vuln&eacute;rable, hacker les donn&eacute;es bancaires de la banque centrale europ&eacute;enne ou encore hacker la CIA pour effacer votre nom de meurtre!</p>
            <p>Ne vous inqui&eacute;tez pas, personne n'a jamais &eacute;t&eacute; condamn&eacute;e apr&egrave;s une s&eacute;ance de escape hacking et vous aurez l&rsquo;aide de votre ma&icirc;tre de jeu personnel, qui surveillera votre progression et pourra vous fournir autant de coups de pouce et d&rsquo;indices que vous le souhaitez. Les comp&eacute;tences en r&eacute;solution de probl&egrave;mes, la logique et la patience vous seront utiles, ainsi qu'un esprit de coop&eacute;ration et de plaisir.</p>
            <p>Vous &ecirc;tes &eacute;tudiant &agrave; l'ESIEA ou habitez en Ile de France et souhaitez faire un escape game &agrave; Paris ? Specter Paris, l&rsquo;un des premiers escape game de la capitale vous accueille toute la semaine pour vous envoyer &agrave; travers le monde du hacking.</p>
            <p>Avec de nombreux avantures tr&egrave;s immersives, rentrez dans un d&eacute;cor unique o&ugrave; chaque d&eacute;tail aura son importance.</p>
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>

</style>

<script>
export default {
  name: 'FAQLayout',
  data: () => ({
  })
}
</script>
