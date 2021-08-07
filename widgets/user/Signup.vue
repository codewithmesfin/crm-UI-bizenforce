<template>
  <div class="primary">
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md4 lg4 pa-1>
          <h2 class="text-center white--text">
            Sign up for free and experience BizEnforce today
          </h2>
        </v-flex>
        <v-flex xs12 pa-1></v-flex>
        <v-flex xs12 sm12 md8 lg8 pa-2>
          <v-card flat>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm12 md5 lg5 pa-2>
                <div class="d-none d-md-block" style="height: 60px"></div>
                <div class="d-none d-md-block">
                  <v-layout row wrap justify-start mx-3 pa-3>
                    <v-flex xs2 pa-1>
                      <v-icon color="primary" large>mdi-account-group</v-icon>
                    </v-flex>
                    <v-flex xs10 pa-1>
                      <h2 class="title pt-2 primary--text">Integrations</h2>
                    </v-flex>
                    <v-flex xs12 pa-1>
                      <p class="text-justify body-1">
                        Google-Ads, Twilio, Facebook-Ads, Instagram, Linkedin,
                        Salesforce, and MailChimp
                      </p>
                    </v-flex>
                  </v-layout>

                  <v-layout row wrap>
                    <v-flex xs12 mx-3 pa-3>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-start mx-3 pa-3>
                    <v-flex xs2 pa-1>
                      <v-icon color="primary" large
                        >mdi-arrow-decision-auto</v-icon
                      >
                    </v-flex>
                    <v-flex xs10 pa-1>
                      <h2 class="title pt-2 primary--text">C. R. M</h2>
                    </v-flex>
                    <v-flex xs12 pa-1>
                      <p class="text-justify body-1">
                        Sales force, Marketing, and Service automation;
                        Analytics, Collaborative, Customer Data management
                      </p>
                    </v-flex>
                  </v-layout>

                  <v-layout row wrap>
                    <v-flex xs12 mx-3 pa-3>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-start mx-3 pa-3>
                    <v-flex xs2 pa-1>
                      <v-icon color="primary" large
                        >mdi-message-text-lock</v-icon
                      >
                    </v-flex>
                    <v-flex xs10 pa-1>
                      <h2 class="title pt-2 primary--text">Call and Message</h2>
                    </v-flex>
                    <v-flex xs12 pa-1>
                      <p class="text-justify">
                        Automated and Affordable call and message centers with a
                        very cheap service price
                      </p>
                    </v-flex>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex xs12 sm12 md1 lg1 pa-1></v-flex>
              <v-flex xs12 sm12 md6 lg6 pa-2>
                <v-card class="my-3">
                  <v-card-text>
                    <v-form @submit.prevent="register">
                      <v-layout row wrap justify-center>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            name="StudentName"
                            label="First Name"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.studentName"
                            type="text"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            name="FatherName"
                            label="Last Name"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.fatherName"
                            type="text"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            name="GrandFatherName"
                            label="Middle Name"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.gfName"
                            type="text"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md5 lg5 px-3>
                          <v-select
                            name="Gender"
                            :items="gender"
                            label="Gender"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.gender"
                            type="text"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md7 lg7 px-3>
                          <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="user.birthDate"
                                label="Birth Date"
                                readonly
                                v-on="on"
                                dense
                                outlined
                                background-color="white"
                                name="DoB"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="user.birthDate"
                              @input="menu2 = false"
                            ></v-date-picker>
                          </v-menu>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            name="PhoneNumber"
                            label="Phone Number"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.phoneNumber"
                            type="text"
                          />
                        </v-flex>

                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            label="E-mail"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.email"
                            name="Email"
                            type="text"
                            autocomplete="email"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-text-field
                            label="Password"
                            dense
                            outlined
                            background-color="white"
                            type="password"
                            v-model="user.password"
                            name="Password"
                            autocomplete="password"
                          />
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs12 sm12 md10 lg10 pa-3>
                          <p>
                            By clicking Sign Up, you agree to our
                            <router-link to class="link">Terms</router-link>,
                            <router-link to class="link mr-1"
                              >Data Policy</router-link
                            >and
                            <router-link to class="link"
                              >Cookies Policy</router-link
                            >.
                          </p>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 px-3>
                          <v-btn
                            block
                            color="white primary"
                            @click="register"
                            type="submit"
                            >Sign Up</v-btn
                          >
                        </v-flex>
                      </v-layout>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      gender: ["Male", "Female", "Other"],
      error: "",
    };
  },
};
</script>
