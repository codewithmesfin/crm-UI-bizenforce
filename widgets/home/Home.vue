<template>
  <div>
    <section>
      <div class="d-block d-md-none" style="height:50px"></div>
      <v-container fluid>
        <v-layout row wrap justify-end align-center>
          <v-flex xs12 sm12 md5 lg5 pa-2>
            <v-card height="100%" flat>
              <v-card-text>
                <div class="text-left">
                  <p class="display-1 b1 text-left">{{ $t("intro") }}</p>
                  <p class="subtitle-1 px-1 black--text">
                    <router-link to> See how</router-link>
                    Tesfa increased sales revenue by 5X with BizEnforce.
                  </p>
                </div>
                <v-layout row wrap justify-start px-2>
                  <v-flex xs6 sm6 md4 lg4 pa-2>
                    <v-btn color="primary" class="text-capitalize">
                      <v-icon class="mr-2 d-none d-md-flex"
                        >mdi-speedometer</v-icon
                      >
                      Try for FREE
                    </v-btn>
                  </v-flex>
                  <v-flex xs6 sm6 md4 lg4 pa-2>
                    <v-btn outlined color="primary" class="text-capitalize ">
                      <v-icon class="mr-2 d-none d-md-flex"
                        >mdi-play-circle</v-icon
                      >
                      Watch a Demo</v-btn
                    >
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
            <v-card height="100%" flat>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                contain
                height="100%"
                width="100%"
                src="/images/1.png"
                alt="biz"
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
                  </v-row> </template
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <services />
    </section>
    <section>
      <CRMIntro />
    </section>
    <section>
      <partners />
    </section>
  </div>
</template>
<script>
import Services from "./Services.vue";
import CRMIntro from "./CRMInto.vue";
import Partners from "./Partners.vue";
export default {
  components: {
    Services,
    CRMIntro,
    Partners
  }
};
</script>
