<script>
  export default {
    name: 'Navigator',
    props:{
      paginator:Object
    },
    data() {
      return {}
    },
    components:{},
    methods: {
      callApi(linkUrl){
        this.$emit('callApi',linkUrl);
      }
    },
    mounted() {},
    computed: {}
  }
</script>

<template>
    <div class="nav-wrapper">

      <button
        @click="callApi(paginator.firstPageUrl)"
        :disabled="paginator.currentPage == 1"
      >
        |&lt;
      </button>

      <button
        v-for="link in paginator.links"
        :key="link.label"
        v-html="link.label"
        :disabled="link.active || !link.url"
        @click="callApi(link.url)"
      ></button>

      <button
        @click="callApi(paginator.lastPageUrl)"
        :disabled="paginator.currentPage == paginator.lastPage"
      >
        &gt;|
      </button>
    </div>
</template>


<style lang="scss" scoped>
.nav-wrapper{
  margin-top:20px;
  text-align: center;
  button{
    padding:3px 7px;
    margin: 2px;
  }
}
</style>