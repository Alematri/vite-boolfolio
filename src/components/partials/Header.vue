<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
    components:{},
    methods: {},
    mounted() {},
    computed: {}
  }
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">chi sono</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MyProjects'}">Progetti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
header{
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 20px;
  ul{
    list-style:none;
    li{
      margin: 0 10px;
      display:inline-block;
      a{
        color:white;
        text-decoration: none;
        text-transform:uppercase;
        &.active{
          font-weight: bold;
          color:blue;
        }
        &:hover{
          text-decoration:underline;
        }
      }
    }
    
  }
}

.router-link-exact-active{
  font-weight: bold;
  color: blue;
}

</style>