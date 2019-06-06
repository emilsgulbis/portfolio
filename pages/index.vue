<template>
  <div>
    <div v-mouse-move>
      <h1 class="text-black uppercase font-extrabold text-40px leading-none">
        Emils <span class="text-blue block">Gulbis</span>
      </h1>
      <h2>Front-end developer - Latvia</h2>
      <p class="text-gray">
        I'm Emils Gulbis and I love to develop <br />
        beautiful UI's. <br />
        {{ age }} year old code ninja from
        <nuxt-link to="/contact" class="text-blue">Liepaja, Latvia</nuxt-link>
      </p>
    </div>

    <div
      class="w-8 h-8 bg-center bg-cover bg-no-repeat"
      style="background-image:url(/emilsgulbis.jpg)"
    ></div>
  </div>
</template>

<script>
import { getAge } from '~/utils/functions'
import { mouseMove } from '~/utils/directives'

export default {
  directives: {
    mouseMove
  },

  computed: {
    age() {
      return getAge('1993/04/15')
    }
  }
}
</script>
