<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Customer Centric Tech</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/components">Components</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/components" title="Components"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
        <v-list-item to="/contact" title="Contact"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer app color="primary" dark>
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Customer Centric Tech</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
const drawer = ref(false)
</script>