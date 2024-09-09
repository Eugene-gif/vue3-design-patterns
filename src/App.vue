<script setup>
  import MainHeader from "@/components/Headers/MainHeader.vue";
  import ToDoProject from "@/components/ToDoProject/ToDoProject.vue";
</script>

<template>
  <div class="app">
    <MainHeader></MainHeader>
    <main class="w3-container">
      <ToDoProject></ToDoProject>
    </main>
  </div>
</template>

<style scoped>
  .app {
    width: 100vw;
    min-height: 100vh;
    padding: 0;
  }
</style>
