<template>
  <div class="flex items-center">
    <div class="w-490px flex-grow-0">
      <div
        class="bg-center bg-cover bg-no-repeat pb-150% shadow-lg"
        style="background-image:url(/emilsgulbis.jpg)"
      ></div>
    </div>
    <div v-mouse-move class="flex-1 pl-8 pt-16">
      <h1 class="text-black uppercase font-extrabold text-40px leading-none">
        {{ firstName }}
        <span class="text-blue block">{{ lastName }}</span>
      </h1>
      <h2>{{ position }}</h2>
      <p class="text-gray">
        {{ aboutMe }}.
        <br />
        {{ age }} year old front-end developer from
        <nuxt-link to="/contact" class="text-blue link">
          {{ location.city }}, {{ location.country }}
        </nuxt-link>
      </p>
    </div>
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
} from '~/config/profile.yml'

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
