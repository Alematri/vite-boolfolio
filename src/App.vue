<script>

  import Header from './components/partials/Header.vue'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components:{
      Header
    },
    methods: {},
    mounted() {},
    computed: {}
  }
</script>

<template>
  <Header />
  <div class="main-wrapper">
    <div class="container">

      <RouterView />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>