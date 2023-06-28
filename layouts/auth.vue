import ContentFooter from '~~/components/footer/ContentFooter.vue';

<template>
  <v-main>
    <div class="header-auth ma-4 rounded-lg"></div>
    <slot />
    <ContentFooter />
  </v-main>
</template>

<script>
import ContentFooter from '~~/components/footer/ContentFooter.vue';

export default defineComponent({
  components: { ContentFooter },
});
</script>

<style lang="scss" scoped>
.header-auth {
  position: relative;
  padding-top: 10rem !important;
  padding-bottom: 8rem !important;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
}
</style>
