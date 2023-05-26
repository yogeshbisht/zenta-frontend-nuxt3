<template>
  <v-container class="mt-n16">
    <v-row class="align-center d-flex h-100 mt-md-n16">
      <v-col lg="4" md="7" class="mx-auto">
        <v-card class="card py-1">
          <div class="card-avatar card-padding text-center mt-n7 mx-4">
            <h4 class="text-h5 text-white mb-2">Join us today</h4>
            <p class="mb-1 text-subtitle-2 text-white">
              Enter your email and password to register
            </p>
          </div>
          <div class="card-padding text-center mt-6">
            <v-text-field
              label="Email"
              variant="outlined"
              density="compact"
              type="email"
              class="text-input-default"
            ></v-text-field>
            <v-text-field
              label="Password"
              variant="outlined"
              density="compact"
              type="password"
              class="text-input-default"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              variant="outlined"
              density="compact"
              type="password"
              class="text-input-default"
            ></v-text-field>

            <v-checkbox hide-details>
              <template #label>
                <span class="text-body-2"
                  >I agree the
                  <a
                    href="javascript:;"
                    class="font-weight-bold text-decoration-none"
                    >Terms and Conditions</a
                  ></span
                >
              </template>
            </v-checkbox>

            <v-btn class="btn-primary py-2 px-6 mt-6 mb-2" block>
              Register
            </v-btn>
            <p class="text-body-2 font-weight-light mt-6 mb-0">
              Already have an account?
              <nuxt-link
                to="/"
                class="text-decoration-none font-weight-bold text-primary"
              >
                Login
              </nuxt-link>
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped></style>
