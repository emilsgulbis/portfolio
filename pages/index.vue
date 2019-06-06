<template>
  <div>
    <div v-mouse-move>
      <h1 class="text-black uppercase font-extrabold text-40px leading-none">
        {{ firstName }} <span class="text-blue block">{{ lastName }}</span>
      </h1>
      <h2>{{ position }}</h2>
      <p class="text-gray">
        {{ aboutMe }}.
        <br />
        {{ age }} year old code ninja from
        <nuxt-link to="/contact" class="text-blue">
          {{ location.city }}, {{ location.country }}
        </nuxt-link>
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
import {
  firstName,
  lastName,
  position,
  birthday,
  aboutMe,
  location
} from '~/config/site.yml'

export default {
  directives: {
    mouseMove
  },

  data() {
    return {
      firstName,
      lastName,
      position,
      aboutMe,
      location
    }
  },

  computed: {
    age() {
      return getAge(birthday)
    }
  }
}
</script>
