<template>
  <div class="relative">
    <slot>
      <component
        :is="component"
        :type="type"
        class="bg-transparent outline-none w-full"
        v-on="{
          $listeners,
          input: $event => $emit('input', $event.target.value)
        }"
      />
    </slot>
    <label class="text-gray absolute top-0 left-0 block">{{ label }}</label>
    <div class="border border-gray"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    value: {
      required: true,
      type: [String, Number]
    }
  },

  computed: {
    component() {
      if (this.type === 'textarea') {
        return 'textarea'
      }

      return 'input'
    }
  }
}
</script>
