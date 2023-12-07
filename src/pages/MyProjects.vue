<script >

import axios from 'axios';
import { store } from '../data/store';
import MyProjectsComponent from '../components/MyProjectsComponent.vue';
import Loader from '../components/partials/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';

export default {  
  name: 'App',
  components:{
    MyProjectsComponent,
    Loader,
    Navigator
  },
  data(){
    return {
      titolo: 'I miei progetti',
      isLoaded: false,
      paginator:{
        links: [],
        firstPageUrl:'',
        lastPageUrl:'',
        currentPage:'',
        lastPage:'',
      }
      
    }
  },
  methods:{

    getApi(endpoint){
      this.isLoaded = false;
      axios.get(endpoint)
        .then(results =>{
          this.isLoaded = true;
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPageUrl = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.currentPage = results.data.current_page;
          this.paginator.lastPage = results.data.last_page;
        })
    }

  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}

</script>

<template>

    <Loader v-if="!isLoaded" />

    <div v-else>
      <MyProjectsComponent  />
      <Navigator
        :paginator="paginator"
        @callApi="getApi"
      />
    </div>

    

</template>

<style lang="scss">

</style>
