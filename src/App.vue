<template>
  <v-app id="inspire">

    <v-navigation-drawer

      permanent
      v-model="drawer"
      app
    >
      <v-list dense>
        <router-link v-bind:to="{ name: 'home' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>Home</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'contact' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contact</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark fixed >
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>

  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>
