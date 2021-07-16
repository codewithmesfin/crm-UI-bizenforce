<template>
  <div class="primary" style="height: 100vh">
    <v-layout row wrap justify-center pa-0 ma-0>
      <v-flex xs12 sm12 md6 lg6 pa-0 class="d-none d-md-block">
        <v-card flat tile color="primary white--text" dark height="100%">
          <v-card-text>
            <div style="height: 100px"></div>
            <v-layout row wrap justify-center pa-3>
              <v-flex xs12 sm12 md8 lg8 pa-2>
                <h2 class="white--text text-left">
                  <span> Affordable solution to elevate your buziness! </span>
                </h2>
                <p class="white--text my-3 py-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <p class="white--text my-2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <p class="white--text my-2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div class="text-left">
                  <v-btn outlined rounded large color="white primary--text">
                    <v-icon class="mr-2">mdi-speedometer</v-icon>
                    Read More</v-btn
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 pa-0>
        <v-card tile flat height="100vh">
          <div style="height: 100px"></div>
          <v-container grid-list-xs>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm12 md12 lg12 pa-2>
                <v-layout column justify-center align-center>
                  <img src="/images/logo.png" alt width="150px" />
                </v-layout>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 pa-2>
                <p class="text-center">Login to your account</p>
              </v-flex>
              <v-flex xs12 sm12 md7 lg7 pa-3>
                <v-card outlined>
                  <v-card-text>
                    <v-form @submit.prevent="login">
                      <v-layout row wrap justify-start pa-3 my-5>
                        <v-flex xs12 sm12 md12 lg12>
                          <v-text-field
                            label="E-mail"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.email"
                            name="email"
                            type="email"
                            autocomplete="email"
                          />
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12>
                          <v-text-field
                            label="Password"
                            dense
                            outlined
                            background-color="white"
                            v-model="user.password"
                            name="Password"
                            autocomplete="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                          />
                        </v-flex>
                        <v-flex xs12></v-flex>
                        <v-flex xs12 sm12 md6 lg6>
                          <v-btn
                            type="submit"
                            block
                            color="white primary"
                            @click="$router.push({ name: 'dashboard' })"
                            >Log In</v-btn
                          >
                        </v-flex>
                        <v-flex xs12 sm12 md4 lg4 pa-3>
                          <v-btn
                            small
                            text
                            class="primary--text text-capitalize"
                            >Forgot password?</v-btn
                          >
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12>
                          New User?
                          <v-btn
                            small
                            text
                            class="text-capitalize primary--text"
                            @click="$router.push({ name: 'signup' })"
                            >Register Now</v-btn
                          >
                        </v-flex>
                      </v-layout>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      value: String
    };
  }
};
</script>
