<script setup>
  import { ref, inject, onMounted, onBeforeUnmount } from "vue";
  import eventBus from "@/services/eventBus";
  import todoService from "@/services/todo";

  const _projects = ref([]);

  function updateProjects() {
    let projects = todoService.loadProjectsManifest();
    _projects.value = projects.list;
  }

  updateProjects();

  onMounted(() => {
    // Register events
    eventBus.on("#UpdateProjects", updateProjects);
  });

  onBeforeUnmount(() => {
    // De-register events (Clean after yourself!)
    eventBus.off("#UpdateProjects", updateProjects);
  });
</script>

<template>
  <section class="w3-blue">
    <h4 class="w3-row-padding">To-Do Projects</h4>

    <RouterLink
      :to="{ name: 'landing' }"
      class="w3-padding"
      active-class="w3-yellow"
    >
      Home
    </RouterLink>

    <!-- Projecs -->
    <div
      v-for="project in _projects"
      :key="project.id"
    >
      <RouterLink
        :to="{ name: 'project', params: { id: project.id } }"
        active-class="w3-yellow"
        class="w3-padding"
      >
        {{ project.name }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
  a {
    text-decoration: none;
    display: block;
    padding: 4px;
  }
</style>
