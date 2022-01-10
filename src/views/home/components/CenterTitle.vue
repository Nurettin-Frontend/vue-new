<template>
  <div class="center-title" v-if="showChars">
    <span class="center-title__top white-text d-block playball"
      >Nour's Portfolio</span
    >
    <div class="text-center">
      <span
        class="center-title__char white-text noto"
        :style="{ animationDelay: i * 0.05 + 's' }"
        v-for="(char, i) in chars"
        :key="i"
        v-html="char"
      >
      </span>
    </div>
    <div class="center-title__btn cursor-pointer">
      <span class=" d-inline-block white-text noto">Download CV</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showChars: false,
    chars: [
      "W",
      "e",
      "l",
      "c",
      "o",
      "m",
      "e",
      "!",
      "&nbsp",
      "h",
      "a",
      "v",
      "e",
      "&nbsp",
      "f",
      "u",
      "n",
      "n",
      "y",
      "&nbsp",
      "j",
      "o",
      "u",
      "r",
      "n",
      "y",
    ],
  }),
  created() {
    setTimeout(() => {
      this.showChars = true;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.center-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100px;

  &__top {
    opacity: 0;
    font-size: 30px;
    position: relative;
    top: 35px;
    animation: translateTitle 1s ease-in-out forwards;
    font-size: 100px;
    font-weight: 600;
  }

  &__char {
    opacity: 0;
    display: inline-block;
    font-size: 24px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0025, 0, 0, 0, 1);
    animation-name: opacity;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    font-style: italic;
  }
  &__btn {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    position: relative;
    margin: auto;
    margin-top: 20px;
    padding: 10px 0px;
    min-height: 30px;
    transition: 0.3s;
    border: 1px solid white;
    animation: opacity 1s ease-in-out 1.5s forwards;
    opacity: 0;
    span {
      font-size: 17px;
      font-weight: 600;
    }

    &:hover {
      background-color: #fff;
      border-color: #fff;
      span {
        color: #292b2c;
        transition: 0.3s;
      }
    }
  }
}

@keyframes translateTitle {
  0% {
    top: 35px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
