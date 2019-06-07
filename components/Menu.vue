<template>
  <div>
    <div class="absolute right-0 top-0">
      <burger v-model="isOpen" class="z-20" />
    </div>

    <transition name="fadeScale">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-10 bg-black-90 flex justify-center items-center p-8"
      >
        <nav>
          <ul>
            <li v-for="link in links" :key="link.to" @click="isOpen = false">
              <nuxt-link
                :to="link.to"
                class="relative uppercase text-4xl text-white text-center font-bold px-10 py-2 block hover:border"
                exact-active-class="border border-white-20"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import Burger from '~/components/Burger'
import { links } from '~/utils/lists'

export default {
  components: {
    Burger
  },

  data() {
    return {
      isOpen: false,
      links
    }
  }
}
</script>
