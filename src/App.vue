<template>
  <div class="app">
    <div class="home">
      <div class="nav">
        <a href="https://www.blog.v2l.tech">博客</a>
      </div>
    </div>

    <Sphere />
  </div>
</template>

<script>
import Sphere from '@/components/Sphere.vue';

export default {
  name: 'App',
  components: { Sphere },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #bd9779 0%, #a6cdfb 100%);
  .app {
    color: #fff;
    .home {
      width: 100%;
      position: absolute;
      .nav {
        text-align: left;
        margin: 20px;
        a {
          font-size: 20px;
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}
</style>
