<script setup>
  import { inject, computed } from "vue";

  const $props = defineProps({
    name: { type: String, default: "" },
    title: { type: String, default: "Модальный диалог" },
  });
  
  const $modals = inject("$modals");
  const _show = computed(() => {
    return $modals.active() == $props.name;
  });

  function closeModal(accept = false) {
    accept ? $modals.accept() : $modals.cancel();
  }
</script>

<template>
  <div
    class="viewport-wrapper"
    v-if="_show"
  >
    <div class="dialog-wrapper">
      <header>{{ $props.title }}</header>

      <main>
        <slot></slot>
      </main>

      <footer>
        <button @click="closeModal(true)">Accept</button>
        <button @click="closeModal(false)">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .viewport-wrapper {
    --shadow: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center;
  }

  .dialog-wrapper {
    border: 1px solid black;
    box-shadow: 0 1rem 1rem var(--shadow);
    background-color: #6a6a6a;
    /* background-color: #9e9e9e; */
  }

  header,
  footer {
    padding: 4px;
    user-select: none;
  }

  main {
    min-height: 5rem;
    max-width: 40rem;
  }
</style>
