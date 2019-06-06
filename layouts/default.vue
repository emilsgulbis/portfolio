<template>
  <div class="flex bg-blue min-h-screen">
    <sidebar />
    <div class="p-45px flex-1 bg-white mb-10">
      <main class="relative">
        <app-menu />
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import AppMenu from '~/components/Menu'

export default {
  components: {
    Sidebar,
    AppMenu
  }
}
</script>
