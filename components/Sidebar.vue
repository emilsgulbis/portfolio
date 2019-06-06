<template>
  <aside
    class="w-280px p-45px flex flex-col justify-between bg-blue text-white"
  >
    <header class="mb-5">
      <logo />
    </header>
    <footer>
      <dl class="mb-3">
        <dt class="font-bold">Email</dt>
        <dd>
          <a href="mailto:emils.gulbis@gmail.com">emils.gulbis@gmail.com</a>
        </dd>
      </dl>

      <dl class="mb-3">
        <dt class="font-bold">Phone</dt>
        <dd><a href="tel:+37120303056">+371 20 30 30 56</a></dd>
      </dl>

      <dl>
        <dt class="font-bold">Find me on</dt>
        <dd>
          <ul class="flex">
            <li class="mr-4">
              <a href="https://www.facebook.com/emiils" target="_blank">
                <fa :icon="['fab', 'facebook']" />
              </a>
            </li>

            <li class="mr-4">
              <a
                href="https://www.linkedin.com/in/emilsgulbis/"
                target="_blank"
              >
                <fa :icon="['fab', 'linkedin']" />
              </a>
            </li>

            <li class="mr-4">
              <a href="https://twitter.com/yozhis" target="_blank">
                <fa :icon="['fab', 'twitter']" />
              </a>
            </li>

            <li>
              <a href="https://github.com/emilsgulbis" target="_blank">
                <fa :icon="['fab', 'github']" />
              </a>
            </li>
          </ul>
        </dd>
      </dl>
    </footer>
  </aside>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>
