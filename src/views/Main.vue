<template>
  <v-main class="main-section d-flex flex-column">
      <v-row class="d-flex align-start my-3">
        <v-col class="text-center">
          <h1 class="heading">Header Text</h1>
          <p class="subheading">Lorem ipsim pellentesque volutpat Alquet Ultrucies</p>
        </v-col>
      </v-row>
      <v-row class="d-flex">
        <v-col v-for="n in 3" :key="n" class="d-flex flex-column align-center">
          <CardComponent>
            <template #audio v-if="$route.path == '/audio'">
              <v-row  class="d-flex">
                <v-img max-width="3rem" max-height="3rem" contain class="play-button" src="../assets/play icon.svg"></v-img>
                <v-img max-width="20rem" src="../assets/soundWaves.svg"></v-img>
                <v-divider></v-divider>
              </v-row>
            </template>
          </CardComponent>
        </v-col>
      </v-row>
  </v-main>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';


const CardComponent = defineAsyncComponent(()=> import('@/components/CardComponent.vue'))

</script>
<style lang="scss" scoped>
@use '@/styles/main.scss';
</style>
