<template>
  <v-main>
    <NavigationDrawer :drawer="drawer" />
    <div
      v-if="drawer"
      class="position-absolute drawer-state"
      @click="drawer = false"
    ></div>
    <AppHeader
      :toggle-active="drawer"
      :navbar-fixed="navbarFixed"
      @drawer-toggle="drawer = $event"
    />
    <div class="ms-4 mt-4 py-4">
      <slot />
    </div>
  </v-main>
</template>

<script>
import NavigationDrawer from '~~/components/sidebar/NavigationDrawer.vue';
import AppHeader from '~~/components/header/AppHeader.vue';

export default {
  components: { NavigationDrawer, AppHeader },

  data: () => ({
    drawer: false,
    navbarFixed: false,
  }),
};
</script>
