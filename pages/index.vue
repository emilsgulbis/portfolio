<template>
  <div class="flex items-center">
    <div class="w-490px flex-grow-0">
      <div
        id="photo"
        class="bg-center bg-white bg-cover bg-no-repeat pb-150 shadow"
      ></div>
    </div>
    <div v-mouse-move class="flex-1 pl-8 pt-16">
      <h1
        class="text-black uppercase font-extrabold text-4xl leading-none mb-5"
      >
        {{ firstName }}
        <div class="relative">
          <div
            class="absolute w-120px right-100 top-50 border-blue border-b-5 line-transform"
          ></div>
          <span class="text-blue">{{ lastName }}</span>
        </div>
      </h1>
      <h2 class="mb-2">{{ position }}</h2>
      <p class="text-gray">
        {{ aboutMe }}
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
  aboutMe
} from '~/docs/profile.json'

export default {
  directives: {
    mouseMove
  },

  data() {
    return {
      firstName,
      lastName,
      position,
      aboutMe
    }
  },

  computed: {
    age() {
      return getAge(birthday)
    }
  }
}
</script>

<style scoped>
.line-transform {
  transform: translate(-25px, -50%);
}
#photo {
  background-image: url('~assets/images/emilsgulbis.jpg');
}
</style>
