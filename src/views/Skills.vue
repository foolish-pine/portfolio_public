<template>
  <v-content class="mb-10">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12">
          <h2 class="my-10 text-center page-title">
            Skills I'm refining now
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="skill in skills"
          :key="skill.name"
          cols="12"
          xs="12"
          md="6"
          lg="4"
        >
          <v-card class="mx-auto px-5 py-8" height="310" elevation="7">
            <div class="d-flex justify-center img-container">
              <img :src="skill.img" :width="skill.imgWidth" />
              <div v-if="skill.img2" class="img-spacer"></div>
              <img
                v-if="skill.img2"
                :src="skill.img2"
                :width="skill.imgWidth"
              />
            </div>
            <v-card-title class="justify-center mb-3">
              {{ skill.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ skill.text }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import skills from "../assets/json/skills.json";
export default {
  data: function() {
    return {
      skills: skills
    };
  }
};
</script>

<style lang="scss" scoped>
.img-container {
  height: 100px;
}
.img-spacer {
  width: 30px;
}
.container {
  max-width: 1200px !important;
}
</style>
