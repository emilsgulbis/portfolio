<template>
  <div class="bg-white flex">
    <div
      class="w-280px h-full p-45px flex flex-col justify-between bg-blue text-white"
    >
      <header class="mb-5">
        <logo />
      </header>
      <footer>
        footer
      </footer>
    </div>
    <main class="p-45px flex-1">
      <app-menu />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import AppMenu from '~/components/Menu'
export default {
  components: {
    Logo,
    AppMenu
  }
}
</script>
