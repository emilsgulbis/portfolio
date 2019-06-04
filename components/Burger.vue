<template>
  <div
    class="relative w-30px h-24px cursor-pointer"
    @click="$emit('input', !value)"
  >
    <div class="absolute top-0 border-t-2 border-b-2 w-full h-0"></div>
    <div class="absolute top-50 -mt-2px border-t-2 border-b-2 w-full h-0"></div>
    <div class="absolute bottom-0 border-t-2 border-b-2 w-full h-0"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>
