<template>
  <v-app-bar
    :color="background"
    class="pa-6 rounded-lg header"
    :class="
      navbarFixed ? 'position-sticky blur shadow-blur top-1 z-index-sticky' : ''
    "
    flat
  >
    <v-row>
      <v-col cols="12" sm="6" class="d-flex align-center">
        <h6 class="text-h6 font-weight-bolder text-typo mb-0">My App Name</h6>
        <div
          v-if="!$vuetify.display.mobile"
          class="drawer-toggler pa-5 ms-6 cursor-pointer"
          :class="{ active: togglerActive }"
          @click="minifyDrawer"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line bg-body"></i>
            <i class="drawer-toggler-line bg-body"></i>
            <i class="drawer-toggler-line bg-body"></i>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" class="d-flex align-center justify-end">
        <v-btn
          v-if="$vuetify.display.mobile"
          elevation="0"
          :ripple="false"
          height="43"
          class="font-weight-600 text-capitalize drawer-toggler py-3 px-0 rounded-sm btn-toggler-hover"
          :class="{ active: togglerActive }"
          color="transparent"
          @click="drawerClose"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
          </div>
        </v-btn>

        <v-btn
          icon
          :ripple="false"
          :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
          class="text-body px-5"
          :color="linkColor"
          small
          @click="$emit('toggleSettingsDrawer', true)"
        >
          <v-icon icon="mdi-cog" class="material-icons-round"></v-icon>
        </v-btn>

        <v-menu
          transition="slide-y-transition"
          offset-y
          offset-x
          min-width="300"
          max-width="300"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              :ripple="false"
              class="text-body btn-hover"
              :color="linkColor"
              v-bind="attrs"
              small
              v-on="on"
            >
              <v-badge color="#f44335" dot>
                <v-icon icon="mdi-bell"></v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-list class="pa-3">
            <v-list-item
              v-for="(item, i) in dropdown"
              :key="i"
              class="pa-4 list-item-hover-active d-flex align-items-center py-1 my-1 border-radius-md"
            >
              <v-icon class="material-icons-round text-body" size="20">{{
                item.icon
              }}</v-icon>

              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                >
                  <v-row>
                    <v-col>
                      <h6 class="text-sm font-weight-normal ms-2 text-typo">
                        {{ item.title }}
                      </h6>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: 'AppBar',
  props: {
    background: {
      type: String,
      default: 'rgba(255, 255, 255, 0)',
    },
    hasBg: {
      type: Boolean,
      default: true,
    },
    toggleActive: Boolean,
    navbarFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawer: false,
      togglerActive: false,
      linkColor: '#98a4b2',
      dropdown: [
        {
          icon: 'email',
          title: 'Check new messages',
        },
        {
          icon: 'podcasts',
          title: 'Manage podcast session',
        },
        {
          icon: 'shopping_cart',
          title: 'Payment successfully completed',
        },
      ],
    };
  },

  watch: {
    toggleActive(val) {
      this.togglerActive = val;
    },
  },

  methods: {
    drawerClose() {
      this.togglerActive = !this.togglerActive;
      this.$emit('drawer-toggle', true);
    },
    minifyDrawer() {
      this.togglerActive = !this.togglerActive;
      this.mini = !this.mini;
      const body = document.getElementsByTagName('body')[0];

      if (body.classList.contains('drawer-mini')) {
        body.classList.remove('drawer-mini');
      } else {
        body.classList.add('drawer-mini');
      }
    },
  },
};
</script>
