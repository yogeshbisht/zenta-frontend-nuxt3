<template>
  <v-footer
    color="transparent"
    class="px-6 text-center d-flex flex-column text-body-2 mt-6"
  >
    <div class="d-flex mb-4">
      <div v-for="item in footer" :key="item.linkName" class="px-4">
        <nuxt-link
          :to="item.link"
          class="text-decoration-none text-secondary"
          target="_blank"
        >
          {{ item.linkName }}
        </nuxt-link>
      </div>
    </div>
    <div class="copyright text-body-2">
      © {{ new Date().getFullYear() }}, created by
      <nuxt-link
        href="https://yogeshbisht.com"
        class="text-decoration-none text-primary text-body-2"
        target="_blank"
      >
        Yogesh Bisht
      </nuxt-link>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const footer = [
  {
    linkName: 'Home',
    link: 'https://yogeshbisht.com/',
  },
  {
    linkName: 'About Us',
    link: 'https://yogeshbisht.com/',
  },
  {
    linkName: 'Terms & Conditions',
    link: 'https://yogeshbisht.com/',
  },
  {
    linkName: 'Privacy Policy',
    link: 'https://yogeshbisht.com/',
  },
];
</script>

<style scoped></style>
