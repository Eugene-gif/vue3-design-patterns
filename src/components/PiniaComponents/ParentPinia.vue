<script setup>
  import { useCounterStore } from "@/stores/counter";
  import ChildPinia from "./ChildPinia.vue";

  const $store = useCounterStore();
</script>

<template>
  <div>
    <h1 class="w3-bottombar">
      Pinia Example
    </h1>
    <p>
      Центральный стор предоставляет больше, чем просто реактивное
      состояние ... также инкапсулирует логику.
    </p>
    <div class="padding with-background">
      <code>
        {{ $store }}
      </code>
      <div class="semi-padding">
        <button @click="$store.increment">Increment</button>

        <button
          @click="$store.decrement"
          :disabled="!$store.inRange"
        >
          Decrement
        </button>

        <span v-show="!$store.inRange">
          Разрешенные диапазоны являются натуральными числами, включая
          ноль
        </span>
      </div>

      <div class="padding flex-container flex-wrap">
        <ChildPinia />
      </div>
      {{ $store.text }}
    </div>
  </div>
</template>

<style scoped></style>
