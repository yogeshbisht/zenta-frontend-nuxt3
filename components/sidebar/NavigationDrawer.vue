<template>
  <v-navigation-drawer
    fixed
    app
    floating
    :expand-on-hover="mini"
    :value="drawer"
    class="my-4 ms-4 rounded-s-lg bg-white sidebar"
  >
    <div class="d-flex flex-column justify-center align-center pa-6">
      <div class="brand">
        <nuxt-img src="/img/small-logos/logo-github.svg"></nuxt-img>
      </div>
      <v-list-item title="Company Name" value="brand"></v-list-item>
    </div>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-group expand-icon="mdi-menu-down" collapse-icon="mdi-menu-up">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-avatar="/img/team-3.jpg"
            class="pl-4"
          >
            <v-list-item-title class="font-weight-light">
              Brooklyn Alice
            </v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item v-for="child in userInfo" :key="child.title" link>
          <v-list-item-title class="pl-4 font-weight-light">{{
            child.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider></v-divider>

    <v-list nav class="py-4">
      <template v-for="item in navItems" :key="item.value">
        <nuxt-link :to="item.link">
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            link
            class="pl-4 pr-12"
          >
          </v-list-item>
        </nuxt-link>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
  },

  data: () => ({
    mini: false,
    togglerActive: false,
    userInfo: [
      {
        title: "My Profile",
        icon: "mdi-account-circle",
      },
      {
        title: "Settings",
        icon: "mdi-cog",
      },
      {
        title: "Logout",
        icon: "mdi-logout",
      },
    ],
    navItems: [
      {
        title: "Dashboard",
        value: "dashboard",
        icon: "mdi-view-dashboard",
        link: "/dashboard",
      },
      {
        title: "Transactions",
        value: "transactions",
        icon: "mdi-table",
        link: "/transactions",
      },
      {
        title: "Scenarios",
        value: "scenarios",
        icon: "mdi-list-box-outline",
        link: "/scenarios",
      },
      {
        title: "Assets & Liabilities",
        value: "assets",
        icon: "mdi-swap-vertical",
        link: "/assets-liabilities",
      },
    ],
  }),
};
</script>
