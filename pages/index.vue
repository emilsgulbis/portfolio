<template>
  <div>
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

    <div
      class="w-8 h-8 bg-center bg-cover bg-no-repeat"
      style="background-image:url(/emilsgulbis.jpg)"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      return getAge('1993/04/15')
    }
  }
}

const getAge = function(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}
</script>
