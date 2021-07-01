<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <MainContents />
    </v-main>
  </v-app>
</template>

<script>
import MainContents from './components/MainContents.vue';

export default {
  name: 'App',

  components: {
    MainContents,
  },

  data: () => ({
    //
  }),
};
</script>
