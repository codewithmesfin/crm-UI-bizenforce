<template>
  <div>
    <v-container>
      <v-layout row wrap justify-center pt-3 mt-3>
        <v-flex xs12 sm12 md8 lg8 pa-2>
          <p class="display-1 b1 text-center pt-3 mt-3">
            What’s new at BizEnforce?
          </p>
        </v-flex>
        <v-flex xs12></v-flex>
        <v-flex xs12 ms12 md4 lg4 pa-2 v-for="col in items" :key="col.title">
          <v-card style="cursor:pointer" height="100%" width="100%" flat>
            <v-card-text>
              <v-layout row wrap justify-start align-center>
                <v-flex xs4 pa-2>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    :src="col.img"
                    height="100%"
                    width="100%"
                    min-height="90px"
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
                </v-flex>
                <v-flex xs8 pa-2>
                  <div class="subtitle-1 b">{{ col.title }}</div>
                  <p class="body-1 b1">{{ col.desc }}</p>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <div class="d-none d-md-block" style="height:50px"></div>
      <div class="d-block d-md-none" style="height:20px"></div>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md8 lg8 pa-2>
          <p class="display-1 b1 text-center">
            Learn what BizEnforce products can do for you.
          </p>
          <p class="body-1 text-center">
            BizEnforce is a simple, easy to use, powerful, and affordable
            business tool that will engineer the rails on which businesses flow
            because we believe a secure, trusted, reliable, consistent, and
            affordable business network will act as a catalyst to unlock
            business opportunities everywhere. At the core of what we do is a
            better user experience and connectivity.
          </p>
        </v-flex>
        <v-flex xs12></v-flex>
        <v-flex xs12 ms12 md2 lg2 pa-2 v-for="col in services" :key="col">
          <v-card
            elevation="5"
            class="contentCard white"
            height="100%"
            min-height="210px"
            width="100%"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-layout column align-center justify-center>
                    <v-avatar style="background: #f0f2f5" size="60">
                      <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        contain
                        :src="col.img"
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
                    </v-avatar>
                    <v-card-text class="text-center subtitle-1">
                      <strong> {{ col.title }}</strong>
                      <p class="body-1">{{ col.subtitle }}</p>
                    </v-card-text>
                  </v-layout>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import services from "../../data/services";
export default {
  data() {
    return {
      services: services,
      items: [
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/news-bar-img-01.png",
          title: "CRM",
          route: "crm",
          desc: "Simple Customer Relation Manager"
        },
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/ticker/php-whatsnew-smb-reports.png",
          title: "REPORT",
          route: "report",
          desc: "Automated and optimized business report"
        },
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/ticker/php-whatsnew-crm-fast-class.png",
          title: "LEARN",
          route: "learn",
          desc: "Learn how to use BizEnforce for your business."
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="css" scoped>
.contentCard {
  cursor: pointer;
}
.contentCard:hover {
  background: #f0f2f5 !important;
}
</style>
