<template>
  <div id="app">
    <Header :key="$route.fullPath"></Header>
      <main>
        <router-view/>
      </main>
    <Footer />
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
};
</script>


<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.4;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #000;
  height: 100%;
}

main {
  padding: 20px;
  width: 95vw;
  margin-left: 2vw;
}


@media screen and (min-width: 1000px) {
  main {
    padding: 40px;
    width: 80vw;
    margin-left: 7vw;
  }
}

</style>
