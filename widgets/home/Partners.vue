<template>
  <div>
    <div style="height:20px"></div>
    <v-container>
      <v-layout wrap row justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 pa-2>
          <h1 class="display-1 b1 text-center">Partners</h1>
        </v-flex>
        <v-flex xs6 sm6 md2 lg2 pa-2 v-for="item in items" :key="item.title">
          <v-card tile flat>
            <v-card-text>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                contain
                height="50px"
                width="100%"
                :src="item.logo"
                :alt="item.title"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <p class="subtitle-1 b text-center">
                {{ item.title }}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div style="height:50px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Tesfa Coffee",
          logo: require("../../static/images/tesfacoffee.png")
        },
        {
          title: "Yesu ICT Solution",
          logo: "https://yesuitsolution.com/img/logo800.png"
        },
        {
          title: "Emarke",
          logo: require("../../static/images/emarke.png")
        },
        {
          title: "ECSP",
          logo: require("../../static/images/ecsp.jpg")
        }
      ]
    };
  }
};
</script>
