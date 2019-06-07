<template>
  <div
    class="burger relative w-30px h-24px cursor-pointer"
    :class="{ 'is-open': value }"
    @click="$emit('input', !value)"
  >
    <!-- Three lines -->
    <div
      class="absolute top-0 border-t-2 border-b-2 w-full h-0"
      :class="{ 'border-white': value }"
    ></div>
    <div
      class="absolute top-50 -mt-2px border-t-2 border-b-2 w-full h-0"
      :class="{ 'opacity-0': value }"
    ></div>
    <div
      class="absolute bottom-0 border-t-2 border-b-2 w-full h-0"
      :class="{ 'border-white': value }"
    ></div>

    <!-- ME NU -->
    <template v-if="!value">
      <span
        class="absolute top-0 right-100 w-full block leading-none text-center"
        >ME</span
      >
      <span
        class="absolute bottom-0 left-100 w-full block leading-none text-center"
        >NU</span
      >
    </template>
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

<style lang="scss" scoped>
// Animation for burger lines and MENU
.burger {
  > * {
    transition: 0.25s transform, 0.25s opacity;
  }

  &:not(.is-open) {
    span.top-0 {
      margin-top: -4px;
    }

    span.bottom-0 {
      margin-bottom: -4px;
    }

    > span {
      font-size: 12px;
      opacity: 0;
    }

    &:hover {
      .top-0 {
        transform: translateX(100%);
      }

      .bottom-0 {
        transform: translateX(-100%);
      }

      div {
        opacity: 0;
      }

      span {
        opacity: 1;
      }
    }
  }

  &.is-open {
    transition: 0.25s transform;

    .top-0 {
      transform-origin: 0 0;
      transform: translateX(6px) rotate(45deg);
    }

    .bottom-0 {
      transform-origin: 0 100%;
      transform: translateX(6px) rotate(-45deg);
    }

    &:hover {
      transform: rotate(90deg);
      transform-origin: 50% 50%;
    }
  }
}
</style>
