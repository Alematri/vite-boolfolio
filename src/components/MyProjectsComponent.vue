<script>
import { store } from '../data/store';

  export default {
    name: 'MyProjectsComponent',
    data() {
      return {
        store
      }
    },
    components:{},
    methods: {},
    mounted() {},
    computed: {}  
  }
</script>

<template>
  <h1>I miei progetti</h1>
  <ul>
    <li v-for="project in store.projects" :key="project.id" >
      <router-link :to="{name: 'ProjectDetail', params:{slug: project.slug}}"  class="title">{{ project.title }}</router-link>
      <div>
        <em>{{ project.technology?.name }}</em>
        <strong v-for="tag in project.tags" :key="tag.id" >{{ tag.name }}</strong>
      </div>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
h1{
  margin-bottom: 20px;  
}
ul{
  list-style:none;
  .title, em, strong{
    margin-right: 10px;
  }
  li{
    margin-bottom:5px;
    display:flex;
    justify-content:space-between;
    a{
        color:white;
        text-decoration: none;
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
</style>