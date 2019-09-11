<template>
  <div class="flex">
    <div class="w-490px flex-grow-0">
      <form class="bg-black shadow p-10 mb-10" @submit.prevent="">
        <p class="text-white text-xl font-bold mb-10">Send a message</p>
        <fe-field
          v-model="form.name"
          label="Your Name"
          type="text"
          class="mb-8"
        />

        <fe-field
          v-model="form.email"
          label="Your Email"
          type="email"
          class="mb-8"
        />

        <fe-field
          v-model="form.message"
          label="Your Message"
          type="textarea"
          class="mb-8"
        />

        <button
          class="uppercase text-white font-black tracking-widest w-full text-center p-3 rounded-full bg-blue"
        >
          Send
        </button>
      </form>

      <google-maps
        :lat="56.484392"
        :lng="21.017387"
        :zoom="4"
        class="h-300px"
      />
    </div>

    <div class="flex-1 pl-8">
      <div class="max-w-3/5">
        <h1 class="uppercase text-4xl font-black leading-none mb-10">
          Contact me
        </h1>

        <div class="p-6 shadow-lighter mb-8">
          <p class="font-bold mb-2">Email</p>
          <a href="mailto:emils.gulbis@gmail.com" class="hover:underline"
            >emils.gulbis@gmail.com</a
          >
        </div>

        <div class="p-6 mb-8">
          <p class="font-bold mb-2">Phone</p>
          <a href="tel:+37120303056" class="hover:underline"
            >+371 20 30 30 56</a
          >
        </div>

        <div class="p-6">
          <p class="font-bold mb-2">Addresss</p>
          <p>Mirdzas Kempes 3, Liepaja, Latvia, LV-3407</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from '~/components/Field'
import GoogleMaps from '~/components/GoogleMaps'

export default {
  components: {
    FeField: Field,
    GoogleMaps
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
