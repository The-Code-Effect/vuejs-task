<template>
    <v-card @click="switchRoute" class="card">
        <v-img src="../assets/cardImage.png"></v-img>
        <slot name="audio"></slot>
        <v-card-title >
            <h2 class="card-title">Header Title</h2>
        </v-card-title>
        <v-card-text >
         <p class="card-text"> {{ cardText }}</p>
            
        </v-card-text>
    </v-card>
 </template>
<script setup lang='ts'>
import { computed,ComputedRef } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const cardText:ComputedRef<string> = computed(()=>{
if (route.path == '/audio' ) {
    return 'Description: sit pellentesque volutpat aliquet ultricies. Risus blandit §§'
} else {
    return 'Description: sit pellentesque volutpat aliquet ultricies. Risus blandit §§ sit pellentesque volutpat aliquet ultricies. Risus blan'
}
})

const switchRoute = ()=>{
    route.path == '/articles' ? router.push('/audio'):router.push('/articles')
}
</script>
<style scoped lang='scss'>
//
@use '@/styles/card.scss';
</style>
