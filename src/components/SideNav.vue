<template>
  <v-navigation-drawer v-model="$store.state.drawer" fixed temporary>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="img/avatar-pine.png" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Pine's Portfolio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in $store.state.items"
        :key="index"
        :to="item.link"
        class="item"
      >
        <v-list-item-content>
          <v-list-item-title v-if="uid" key="login">
            <v-btn @click="doLogout" outlined>ログアウト</v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 60px;
}
</style>
