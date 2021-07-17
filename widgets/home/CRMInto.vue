<template>
  <div class="my-3 py-3">
    <v-container fluid>
      <v-layout row wrap justify-center my-3 py-3>
        <v-flex xs12 sm12 md5 lg5 pa-2>
          <h1 class="display-1 b1 py-3 mb-3">
            Build your Customer base.
          </h1>
          <v-card flat>
            <v-img
              contain
              height="100%"
              width="100%"
              src="https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-1-2.png"
              alt="crm"
            ></v-img>
            <v-card-text>
              <h1 class="title b1">How to Get Customers?</h1>
              <p class="body-1">
                Learn with BizEnforce today, and build your valuable customer
                database.
              </p>
              <v-btn color="primary">Learn More Now </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md5 lg5 pa-2>
          <div>
            <h1 class="display-1 b1 d-none d-md-block   white--text">
              Build your customer base.
            </h1>
          </div>
          <v-card flat>
            <v-card-text>
              <v-layout
                row
                wrap
                justify-center
                v-for="item in crms"
                :key="item.title"
                my-3
              >
                <v-flex xs4 sm4 md4 lg4 pa-2>
                  <v-card flat height="100%">
                    <v-img
                      contain
                      height="100%"
                      width="100%"
                      :src="item.img"
                      :alt="item.title"
                    ></v-img>
                  </v-card>
                </v-flex>
                <v-flex xs8 pa-2>
                  <v-card flat height="100%">
                    <h1 class="body-1 b1">{{ item.title }}</h1>
                    <h1 class="body-1 b">
                      {{ item.subtitle }}
                    </h1>
                    <p class="body-1">
                      {{ item.desc }}
                    </p>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-start>
        <v-flex xs12 pa-2>
          <p class="display-1 b1 text-center">
            Services you don't have to miss
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
        <v-flex xs12 md12 md4 lg4 pa-2 v-for="item in items" :key="item.title">
          <v-card flat height="100%">
            <v-img
              contain
              height="100%"
              width="100%"
              max-height="200px"
              :src="item.img"
              :alt="item.title"
            ></v-img>
            <v-card-text>
              <p class="display-1 b1">
                {{ item.title }}
              </p>
              <p class="body-1 text-justify">
                {{ item.desc }}
                <router-link :to="item.route" class="ndec">
                  Read More</router-link
                >
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-center align-center my-3 py-3>
        <v-flex xs12 pa-2>
          <p class="display-1 b1">
            Third Party Platform Integrations
          </p>
          <p class="body-1">
            Integrate third party platforms you like and catalyze your business
            reaction. This help you to get all reknowned business tools from a
            single interface. You will login with BizEnforce and it will take
            care of your interactions.
          </p>
        </v-flex>
        <v-flex
          xs12
          sm12
          md3
          lg3
          pa-2
          v-for="item in integrations"
          :key="item.title"
        >
          <v-card height="100%" flat>
            <v-card-text>
              <v-layout row wrap justify-center align-center>
                <v-flex xs3 pa-2>
                  <div style="height:40px;width:40px;margin:auto">
                    <img
                      :src="item.img"
                      :alt="item.title"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </v-flex>
                <v-flex xs9 pa-2>
                  <h1 class="body-1 b1">{{ item.title }}</h1>
                  <p class="body-2">{{ item.desc }}</p>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import integrations from "../../data/integrations";
export default {
  data() {
    return {
      integrations: integrations,
      items: [
        {
          img: require("../../static/images/call-center.jpg"),
          title: "Modern Call Center",
          route: "call-center",
          desc: `Enjoy with a browser based multi-purpose 
          modern call center ...`
        },
        {
          img: require("../../static/images/emailm.png"),
          title: "Easily Advertising",
          route: "ads",
          desc: `Advertise your business to your audience on Google,
          Facebook, and Linkedin.`
        },

        {
          img: require("../../static/images/report.jpg"),
          title: "Reportings",
          route: "reporting",
          desc: `BizEnforce AI helps your business generate automated reports ...`
        }
      ],

      crms: [
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-2.png",
          title: "REPORT",
          subtitle: "State of Sales Report",
          desc: `Research shows nearly 6,000 sales pros are selling in a global crisis.`
        },
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-smb-navigating-through-change.jpg",
          title: "Video",
          subtitle: "Navigate through Change",
          desc: "Small businesses evolve to meet customer needs."
        },
        {
          img:
            "https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-4.png",
          title: "Webinar",
          subtitle: "Lead Management",
          desc: "Get expert advice on lead management."
        }
      ]
    };
  }
};
</script>
