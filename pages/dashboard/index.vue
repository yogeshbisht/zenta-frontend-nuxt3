<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mb-6">
        <v-col cols="12" class="mb-lg-0 mb-6">
          <DailyBalance />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DailyBalance from "~~/components/charts/DailyBalance.vue";

export default defineComponent({
  components: { DailyBalance },

  setup() {
    return {};
  },
});
</script>

<style scoped></style>
