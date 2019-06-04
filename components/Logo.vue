<template>
  <div
    class="logo relative inline-block uppercase text-white font-extrabold leading-none inline-block"
  >
    <strong class="block">frnt/nd</strong>
    <small class="block leading-normal">developer</small>
  </div>
</template>

<style lang="scss" scoped>
strong {
  font-size: 32px;
}

small {
  font-size: 18px;
}

.logo {
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.25s, transform 0.25s;
    transform: translateY(-50%);

    font-size: 32px;
    line-height: 1;
  }

  &::before {
    content: '<';
    right: 100%;
  }

  &::after {
    content: '/>';
    left: 100%;
  }

  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 0.3;
    }

    &:before {
      transform: translate(-10px, -50%);
    }

    &:after {
      transform: translate(10px, -50%);
    }
  }
}
</style>
