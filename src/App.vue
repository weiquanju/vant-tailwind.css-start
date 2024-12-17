<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition>
      <keep-alive>
        <div>
          <component :is="Component" />
        </div>
      </keep-alive>
    </transition>
  </RouterView>
</template>
