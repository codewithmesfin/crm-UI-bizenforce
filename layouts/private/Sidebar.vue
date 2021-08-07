<template>
  <v-navigation-drawer
    v-model="drawerStatus"
    app
    :mini-variant.sync="mini"
    fixed
    clipped
  >
    <v-list link dense>
      <v-list-item>
        <v-switch color="black" v-model="switch1" label="Dark Mode" />
      </v-list-item>
      <v-divider class=""></v-divider>
      <v-list-item-group v-model="menu" color="primary">
        <template v-for="menu in menus">
          <!-- if no children  -->
          <v-list-item
            :key="menu.title"
            @click="$router.push({ name: menu.route })"
            v-if="!menu.children"
          >
            <v-list-item-icon>
              <v-icon v-text="menu.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ menu.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- if children  -->
          <v-list-group
            color="primary"
            :key="menu"
            v-if="menu.children"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="menu.icon"></v-icon>
                </v-list-item-icon>
                {{ menu.title }}
              </v-list-item-title>
            </template>
            <template v-for="item in menu.children">
              <v-list-item
                :key="item"
                v-if="item.route"
                @click="
                  $router.push({
                    name: item.route,
                  })
                "
              >
                <v-list-item-content class="body-2">
                  {{ item.title }}
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menuData from "../../data/sidebar.menu";
export default {
  data() {
    return {
      drawer: true,
      menus: menuData,
      mini: false,
    };
  },
};
</script>