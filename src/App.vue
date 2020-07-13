<template>
  <v-app style="background-color: #fafafa;">
    <header>
      <v-app-bar app dark color="#191970" height="80">
        <v-app-bar-nav-icon
          @click.stop="toggleSideMenu"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="title">
          <router-link to="/" class="link">
            Pine's Portfolio Site
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <router-link
            :to="item.link"
            v-for="(item, index) in $store.state.items"
            :key="index"
            class="link"
          >
            <v-btn class="title" text>
              {{ item.title }}
            </v-btn>
          </router-link>
        </div>
      </v-app-bar>
    </header>
    <SideNav />

    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";

export default {
  name: "App",

  components: {
    SideNav
  },

  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>

<style lang="scss">
body * {
  line-height: 1.7 !important;
}
// Web Fontのちらつき対策
html {
  visibility: hidden;
}
html.wf-active,
html.loading-delay {
  visibility: visible;
}
.page-title {
  font-size: 2rem;
}
</style>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #fff !important;
}
</style>
