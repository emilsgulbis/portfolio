<template>
  <div class="flex">
    <sidebar />
    <div class="p-10 flex-1 bg-white pb-12 relative">
      <div
        class="w-0 absolute top-0 left-0 h-full bg-blue transition-width-250"
        :class="{ 'w-185px': expandSidebar }"
      ></div>
      <div class="relative">
        <app-menu />
        <main>
          <nuxt />
        </main>
      </div>
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
  },

  computed: {
    expandSidebar() {
      // return this.$route.name
      return ['index', 'contact'].includes(this.$route.name)
    }
  }
}
</script>
