<template>
  <div>
    <div class="sidebar" :style="{width: sideWidth}">
      <div class="sidebar__layout"></div>
      <div class="sidebar__right-border">
        <span @click="toggle"><v-icon>chevron-right</v-icon></span>
      </div>
    </div>
    <TopToBottom />
    <div
      class="sidebar__contain"
      :style="{ width: `calc(100% - ${sideWidth})` }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TopToBottom from "./TopToBottom.vue";

export default {
  components: {
    TopToBottom,
  },
  computed: {
    ...mapGetters(["sideWidth"]),
  },
  methods:{
    ...mapActions({
      toggle: "toggleSide"
    })
  },
  created(){
    setTimeout(() => {
      this.toggle()
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  background: url("https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80")
    center center no-repeat;
  background-size: cover;
  z-index: 99;
  height: 100%;
  transform: translateX(-100%);
  animation: translate 1s ease-in-out 1.5s forwards;
  transition: 0.5s;

  &__layout {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  &__right-border {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 10px;
    background: #d00355;
    height: 100%;
  }

  &__contain {
    margin-left: auto;
    transition: 0.5s;
  }
}

@keyframes translate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
