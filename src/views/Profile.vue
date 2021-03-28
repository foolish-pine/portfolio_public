<template>
  <v-content class="mb-10">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12">
          <h1 class="my-10 text-center page-title">プロフィール</h1>
        </v-col>
      </v-row>
      <v-card class="mx-auto pa-5" elevation="7">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" xs="12" lg="4">
            <div class="d-flex justify-center">
              <v-avatar size="200">
                <img :src="profile.about.avatar" />
              </v-avatar>
            </div>
          </v-col>
          <v-col cols="12" xs="12" lg="6">
            <p class="mb-2 headline font-weight-bold text-center text-lg-left">
              🍍{{ profile.about.name }}
            </p>
            <div>
              {{ profile.about.comment }}
            </div>
            <div class="text-center text-lg-left">
              <a href="https://twitter.com/foolish_pine">
                <v-icon class="mdi-36px" color="#55acee">mdi-twitter</v-icon>
              </a>
              <a href="https://github.com/foolish-pine" class="mx-3">
                <v-icon class="mdi-36px" color="#0a0a0a">mdi-github</v-icon>
              </a>
            </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="12" xs="12" lg="6">
          <div class="mt-10">
            <v-card class="mx-auto pa-5" elevation="7">
              <h2 class="mb-3 text-center">
                📃 {{ profile.qualifications.title }}
              </h2>
              <v-simple-table>
                <thead>
                  <tr class="col-xs-4">
                    <th class="text-left subtitle-2">
                      {{ profile.qualifications.th[0] }}
                    </th>
                    <th class="text-left subtitle-2">
                      {{ profile.qualifications.th[1] }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="content in profile.qualifications.contents"
                    :key="content.name"
                    class="col-xs-8"
                  >
                    <td class="body-1">{{ content.date }}</td>
                    <td class="body-1">{{ content.name }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
          </div>
        </v-col>
        <v-col class="my-10" cols="12" xs="12" lg="6">
          <v-card class="mx-auto pa-5" elevation="7">
            <h2 class="mb-3 text-center">👍 {{ profile.like.title }}</h2>
            <v-simple-table>
              <tbody>
                <tr
                  v-for="content in profile.like.contents"
                  :key="content.label"
                  class="tr-like"
                >
                  <td>
                    <v-chip class="ma-2" color="#41b883" text-color="white">
                      <v-avatar left>
                        <v-icon>{{ content.icon }}</v-icon>
                      </v-avatar>
                      {{ content.label }}
                    </v-chip>
                  </td>
                  <td class="body-1">
                    {{ content.list }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profile from "../assets/json/profile.json";
export default {
  data: function() {
    return {
      profile: profile
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.v-chip-about {
  width: 106px;
}
.tr-like {
  height: 60px;
}
.container {
  max-width: 1200px !important;
}
</style>
