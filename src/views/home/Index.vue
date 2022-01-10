<template>
  <div class="home">
    <div v-if="animated" class="home__contain">
      <div class="home__contain__layout"></div>

      <CenterTitle />
    </div>
  </div>
</template>

<script>
import CenterTitle from "./components/CenterTitle.vue";
export default {
  components: {
    CenterTitle,
  },
  data: () => ({
    animated: false,
  }),
  created() {
    setTimeout(() => {
      this.animated = true;
    }, 2200);
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  position: relative;

  &__contain {
    width: 100%;
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")
      center center no-repeat;
    background-size: cover;
    &__layout {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
