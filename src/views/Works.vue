<template>
  <v-content class="mb-10">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12">
          <h2 class="mt-10 text-center page-title">制作物</h2>
          <p class="mb-10 text-center title">
            学習のアウトプットも兼ねて作成した個人制作物です。
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="work in works"
          :key="work.img"
          cols="12"
          xs="12"
          md="6"
          lg="4"
        >
          <v-card
            class="mx-auto"
            height="310"
            @click.stop="work.dialog = true"
            elevation="7"
          >
            <v-img
              :src="work.img"
              :lazy-src="work.img"
              height="170px"
              position="top center"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-divider></v-divider>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
            <div class="mx-4 pb-3">
              <v-chip
                v-if="work.tag.includes('HTML/CSS')"
                class="caption mr-2 mb-2"
                small
                color="#e44d26"
                text-color="white"
                >HTML / CSS</v-chip
              >
              <v-chip
                v-if="work.tag.includes('Sass')"
                class="caption mr-2 mb-2"
                small
                color="#cd6799"
                text-color="white"
                >Sass</v-chip
              >
              <v-chip
                v-if="work.tag.includes('TypeScript')"
                class="caption mr-2 mb-2"
                small
                color="#007acc"
                text-color="white"
                >TypeScript</v-chip
              >
              <v-chip
                v-if="work.tag.includes('jQuery')"
                class="caption mr-2 mb-2"
                small
                color="#21609b"
                text-color="white"
                >jQuery</v-chip
              >
              <v-chip
                v-if="work.tag.includes('Vue.js')"
                class="caption mr-2 mb-2"
                small
                color="#41b883"
                text-color="white"
                >Vue.js</v-chip
              >
              <v-chip
                v-if="work.tag.includes('React')"
                class="caption mr-2 mb-2"
                small
                color="#61DBFB"
                text-color="white"
                >React</v-chip
              >
              <v-chip
                v-if="work.tag.includes('PHP')"
                class="caption mr-2 mb-2"
                small
                color="#6181b6"
                text-color="white"
                >PHP</v-chip
              >
            </div>
          </v-card>
          <v-dialog v-model="work.dialog" max-width="720">
            <v-card class="pa-5 hidden-xs-only">
              <div class="mb-3">
                <v-spacer></v-spacer>
                <v-icon @click.stop="work.dialog = !work.dialog"
                  >mdi-close</v-icon
                >
              </div>
              <v-img
                :src="work.dialogImg ? work.dialogImg : work.img"
                :lazy-src="work.dialogImg ? work.dialogImg : work.img"
                height="300px"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title class="headline py-5">{{
                work.title
              }}</v-card-title>
              <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
              <v-simple-table>
                <tbody>
                  <tr>
                    <td class="subtitle-1 text-center py-5 td-left">
                      ポイント
                    </td>
                    <td class="subtitle-1 py-5">
                      <ul>
                        <li
                          v-for="(point, index) in work.points"
                          :key="index"
                          class="pb-4"
                        >
                          {{ point }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle-1 text-center py-5 td-left">
                      サイトURL
                    </td>
                    <td class="subtitle-1">
                      <a :href="work.url">{{ work.url }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle-1 text-center py-5 td-left">GitHub</td>
                    <td class="subtitle-1">
                      <a :href="work.github">{{ work.github }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle-1 text-center py-5 td-left">
                      担当箇所
                    </td>
                    <td class="subtitle-1">{{ work.charge }}</td>
                  </tr>
                  <tr v-if="work.designDistributer">
                    <td class="subtitle-1 text-center py-5 td-left">
                      デザイン配布元
                    </td>
                    <td class="subtitle-1">
                      <a :href="work.designURL">{{ work.designDistributer }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle-1 text-center py-5 td-left">
                      言語・ツール
                    </td>
                    <td class="subtitle-1">{{ work.tools }}</td>
                  </tr>
                  <tr v-if="work.period">
                    <td class="subtitle-1 text-center py-5 td-left">
                      制作時間
                    </td>
                    <td class="subtitle-1">{{ work.period }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            <v-card class="pa-5 hidden-sm-and-up">
              <div class="mb-3">
                <v-spacer></v-spacer>
                <v-icon @click.stop="work.dialog = !work.dialog"
                  >mdi-close</v-icon
                >
              </div>
              <v-img
                :src="work.dialogImg ? work.dialogImg : work.img"
                :lazy-src="work.dialogImg ? work.dialogImg : work.img"
                height="200px"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title class="headline py-5">{{
                work.title
              }}</v-card-title>
              <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
              <div class="pb-5">
                <div class="title py-5">ポイント</div>
                <ul class="subtitle-1">
                  <li
                    v-for="(point, index) in work.points"
                    :key="index"
                    class="pb-4"
                  >
                    {{ point }}
                  </li>
                </ul>
              </div>
              <v-divider></v-divider>
              <div class="py-5">
                <div class="title pb-3">サイトURL</div>
                <div class="subtitle-1">
                  <a :href="work.url">{{ work.url }}</a>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="py-5">
                <div class="title pb-3">GitHub</div>
                <div class="subtitle-1">
                  <a :href="work.github">{{ work.github }}</a>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="py-5">
                <div class="title pb-3">担当箇所</div>
                <div class="subtitle-1">{{ work.charge }}</div>
              </div>
              <v-divider></v-divider>
              <div v-if="work.designDistributer" class="py-5">
                <div class="title pb-3">デザイン配布元</div>
                <div class="subtitle-1">
                  <a :href="work.designURL">{{ work.designDistributer }}</a>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="py-5">
                <div class="title pb-3">言語・ツール</div>
                <div class="subtitle-1">{{ work.tools }}</div>
              </div>
              <v-divider></v-divider>
              <div v-if="work.period" class="py-5">
                <div class="title pb-3">制作時間</div>
                <div class="subtitle-1">{{ work.period }}</div>
              </div>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import works from "../assets/json/works.json";
export default {
  data: function() {
    return {
      works: works
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.td-left {
  white-space: nowrap;
}
.dialog-text {
  color: rgba(0, 0, 0, 0.87) !important;
}
.container {
  max-width: 1200px !important;
}
</style>
