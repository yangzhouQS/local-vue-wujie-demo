<script setup lang="ts">
import { ref } from 'vue'
import { testStore } from "sun-store"
defineProps<{ msg: string }>()

const bears = testStore((state: any) => state.bears)
const add = testStore((state: any) => state.add)
const clear = testStore((state: any) => state.clear)

const count = ref(0)
const dialogVisible = ref(false)

const handleClick = () => {
  console.log(window);
  dialogVisible.value = true
}
</script>

<template>
  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-button type="primary" @click="handleClick">点击测试</el-button>
  <h1>{{ msg }}</h1>
  <div>store.bears: {{ bears }}</div>
  <el-button @click="add">add</el-button>
  <el-button @click="clear">clear</el-button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
