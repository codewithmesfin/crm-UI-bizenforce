<template>
  <div>
    <v-app-bar
      flat
      class="d-block d-md-none"
      app
      clipped-left
      clipped-right
      fixed
      style="border-bottom: 1px solid #e6e6e6; background-color: white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="/images/logo.png" alt="logo" height="35px" class="mr-1" />

      <v-text-field
        append-icon="mdi-magnify"
        solo
        rounded
        flat
        dense
        hide-details
        label="Search"
        color="primary"
        background-color="#edf2f7"
      />
      <v-btn icon>
        <v-badge dot left overlap color="pink" class="mx-3 pr-3">
          <span slot="badge"></span>
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar
        flat
        dense
        style="border-bottom: 2px solid #f6f7f9; background-color: white"
      >
        <img src="/images/logo.png" alt="logo" height="35px" class="mr-1" />
        <v-toolbar-title class="primary--text title"
          >BizEnforce</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list dense>
        <template v-for="menu in menus">
          <v-list-item v-if="!menu.children" :key="menu.title">
            <v-list-item-title
              >{{ menu.title }}
            </v-list-item-title></v-list-item
          >
          <v-list-group v-if="menu.children" :key="menu.title">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.title }} </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in menu.children" :key="i" link>
              <v-list-item-title>{{ child.title }} </v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      menus: [
        {
          title: "About",
          route: "about"
        },
        { title: "Why?", route: "why" },
        {
          title: "Support",
          children: [{ title: "How to use", route: "howToUse" }]
        },
        { title: "Sore", route: "store" },
        {
          title: "Language",
          children: [
            {
              title: "English",
              route: "english"
            },
            { title: "Afaan Oroomoo", route: "oromic" },
            {
              title: "አማርኛ",
              route: "amharic"
            }
          ]
        }
      ]
    };
  }
};
</script>
