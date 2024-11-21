<template>
  <div>home2.vue

    <el-divider></el-divider>
    <el-button @click="onClickIndex" type="primary">跳转到 index</el-button>
    <el-button @click="onClick" type="primary">跳转到 list</el-button>
    <el-button @click="onClickAbout" type="danger">跳转到about</el-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const onClickIndex = () => {
  console.log(window);
  // router.push({path: "/"})
}
const onClick = () => {
  router.push({path: "/list"})
}
const onClickAbout = () => {
  router.push({path: "/about"})
}
</script>

<style scoped>

</style>
