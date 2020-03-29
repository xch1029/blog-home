<template>
  <div id="sphere"></div>
</template>

<script>
import { init, animate } from './scripts/sphere';

export default {
  name: 'Sphere',
  mounted() {
    init();
    animate();
  },
};
</script>

<style lang="less">
#sphere{
  overflow: hidden;
  height: 100vh;
  width: 1oovw;
}
</style>
