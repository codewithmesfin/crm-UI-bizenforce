<template>
  <v-footer app absolute color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary text-center white--text" cols="12">
        <p class="white--text pt-3">
          <strong>
            &copy; All rights reserved!
            {{ new Date().getFullYear() }} — bizenforce.com
          </strong>
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>