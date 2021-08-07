<template>
  <div>
    <v-app-bar
      flat
      dense
      class="d-none d-md-block"
      app
      clipped-left
      clipped-right
      style="border-bottom: 1px solid #e6e6e6; background-color: white"
    >
      <div class="d-flex" style="cursor: pointer" @click="$router.push('/')">
        <img src="/images/logo.png" alt="logo" height="35px" class="mr-1" />
        <v-toolbar-title class="title primary--text"
          >BizEnforce</v-toolbar-title
        >
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        solo
        rounded
        flat
        dense
        hide-details
        label="Search"
        color="primary"
        background-color="#edf2f7"
      />
      <v-spacer></v-spacer>

      <v-btn
        text
        class="text-capitalize"
        @click="$router.push({ name: 'home' })"
        >Learn
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="text-capitalize" v-bind="attrs" v-on="on">
            Support
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        text
        class="text-capitalize"
        @click="$router.push({ name: 'home' })"
        >Store
        <v-icon>mdi-layers-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-badge dot left overlap color="pink" class="mx-3 pr-3">
          <span slot="badge"></span>
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon>
        <v-badge dot left overlap color="pink" class="mx-3 pr-3">
          <span slot="badge"></span>
          <v-icon>mdi-chat</v-icon>
        </v-badge>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <template v-for="(locale, i) in $i18n.locales">
            <v-list-item :key="i" :to="switchLocalePath(locale.code)">
              <v-list-item-title> {{ locale.name }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
      <v-btn icon @click="$router.push({ name: 'signin' })">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
