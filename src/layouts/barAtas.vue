<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="row justify-start">
        <q-btn flat round dense icon="menu" class="lt-xs" />

        <q-toolbar-title>Breaking Bad Info</q-toolbar-title>
        <q-tabs v-model="tab">
          <q-route-tab
            name="MDL"
            label="Monkey D. Luffy"
            :to="{ name: 'profile', params: { id: 1 } }"
          />
          <q-route-tab
            name="UN"
            label="Uzumaki Naruto"
            :to="{ name: 'profile', params: { id: 2 } }"
          />
          <q-route-tab
            name="Asta"
            label="Asta"
            :to="{ name: 'profile', params: { id: 3 } }"
          />
          <q-route-tab
            name="DS"
            label="Meriodasu"
            :to="{ name: 'profile', params: { id: 4 } }"
          />
          <q-route-tab
            name="ND"
            label="Natsu Dragneel"
            :to="{ name: 'profile', params: { id: 5 } }"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  meta: {
    title: "Anime List"
  },
  data() {
    return {
      leftDrawer: false,
      tab: ""
    };
  }
};
</script>
