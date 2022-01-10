<template>
  <div class="container">
    <div class="container__top"></div>
    <div class="container__center container__center--top "></div>
    <div class="container__center container__center--bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  &__top {
    width: 70px;
    height: 100%;
    background: black;
    position: absolute;
    top: 0px;
    left: 0px;
    animation: topToBottom 1s ease-in-out, fullWidth 1s ease-in-out 1s forwards,
      opacity 0.1s ease-in-out 2s forwards;
    z-index: 99;
  }

  &__center {
    position: absolute;
    left: 0px;
    height: 50%;
    background: black;
    width: 100%;
    visibility: hidden;
    z-index: 99;
    animation: displayAnimation 0.1s ease-in-out 2.1s forwards,
      heightAnimation 1s ease-in-out 2.2s forwards;

    &--top {
      top: 0px;
    }
    &--bottom {
      bottom: 0px;
    }
  }
}

@keyframes topToBottom {
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fullWidth {
  0% {
    width: 70px;
  }
  100% {
    width: 100%;
  }
}

@keyframes opacity {
  0% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes displayAnimation {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

@keyframes heightAnimation {
  0% {
    height: 50%;
  }
  100% {
    height: 0px;
  }
}
</style>
