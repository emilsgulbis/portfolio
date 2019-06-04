<template>
  <div>
    <burger v-model="isOpen" />

    <transition name="fadeScale">
      <nav v-if="isOpen">
        <ul>
          <li>
            <nuxt-link to="/">About me</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/resume">Resume</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/contact">Contact me</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import Burger from '~/components/Burger'

export default {
  components: {
    Burger
  },

  data() {
    return {
      isOpen: false
    }
  }
}
</script>
