<template>
  <v-container class="mb-10" >
      <h2 align="center" class="display-1 text-uppercase pb-5">
      FAQ
      </h2>
    <v-row align="center" justify="center">
        <v-col cols="8" class="pa-0 ma-1" xs="12" sm="12" md="3" lg="3">
        <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Quel est le niveau de difficulté?</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Le niveau de difficulté varie selon le jeu choisi, il est variable d’un niveau Facile à Expert. Choisissez donc un jeu présentant un niveau de difficulté correspondant à votre expérience en Escape game.</p><p><strong>Facile</strong> : Nous conseillons ce niveau pour les personnes découvrant l'Escape game ou qui souhaitent venir avec des enfants.</p><p><strong>Intermédiaire</strong> : Ce niveau est conseillé pour les personnes ayant déjà eu une première expérience d'Escape game et qui souhaitent pimenter leur partie avec un peu de challenge ! Ce niveau est également envisageable avec des enfants encadrés par des adultes.</p><p><strong>Expert</strong> : Vous êtes un fanatique d'escape game ? Aucun escape game ne vous résiste ? Constituez votre dreamteam et essayez nos jeux de niveau Expert ! Un niveau qui vous mettra à rude épreuve.</p>
          </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Jusqu’à combien de personnes pouvons nous participer?</v-expansion-panel-header>
          <v-expansion-panel-content>
              <p>Le nombre de joueurs varie selon l’expérience. Au delà de la limite de joueurs indiquée, nous proposons plusieurs formats de jeu adaptés à vos besoins. Vous pouvez nous contacter à tout moment par mail à <a href="mailto:contact@specter.com">contact@specter.com</a></p>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
        <v-col cols="8" class="pa-0 ma-1" xs="12" sm="12" md="3" lg="3">
        <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Puis je venir avec mon enfant?</v-expansion-panel-header>
          <v-expansion-panel-content>
            L'agence de voyage spatio-temporel Specter demande aux mineurs de moins de 15 ans d'être accompagnés d'un adulte afin que l'expérience soit appréciée de tous et dans les meilleures conditions.
          </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Combien de temps dure une session?</v-expansion-panel-header>
          <v-expansion-panel-content>
            Chaque jeu dure entre 60 et 90 minutes. L'information est précisée sur la présentation de chaque jeu. Comptez 15 minutes pour les formalités d'embarquement et 15 minutes pour votre retour de destination.
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FAQLayout',
  data: () => ({
    // vm.log = loginVar
  })
}
</script>

<style>

</style>
