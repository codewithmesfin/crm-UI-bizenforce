<template>
  <div>
    <v-app-bar
      flat
      class="d-none d-md-block"
      app
      clipped-left
      clipped-right
      style="border-bottom: 1px solid #e6e6e6; background-color: white"
    >
      <div class="d-flex" style="cursor:pointer" @click="$router.push('/')">
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
        >About
      </v-btn>

      <v-btn
        text
        class="text-capitalize"
        @click="$router.push({ name: 'home' })"
        >Why?
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

      <v-btn
        text
        class="text-capitalize"
        @click="$router.push({ name: 'home' })"
        >Contact us
      </v-btn>

      <v-btn icon>
        <v-badge dot left overlap color="pink" class="mx-3 pr-3">
          <span slot="badge"></span>
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>አማርኛ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>ትግርኛ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>Afaan Oroomoo</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn tile color="primary" @click="$router.push({ name: 'signin' })">
        Sign In
      </v-btn>
    </v-app-bar>
  </div>
</template>
