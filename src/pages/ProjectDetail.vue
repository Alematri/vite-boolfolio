<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue'

  export default {
    name: 'About',
    data() {
      return {
        project:{},
        isLoaded: false
      }
    },
    components:{
      Loader
    },
    methods: {
      getproject(slug){
        axios.get(store.apiUrl + 'projects/get-project/' + slug )
          .then(res => {
            console.log(res.data.project);
            if(!res.data.success){
              // se lìAPI restituisce il fallimento della chiamata reindirizzo alla pagina 404
              this.$router.push({ name: 'error-404' })
            }
            
            this.isLoaded = true;
            this.project = res.data.project;
          })
      }
    },
    mounted() {
      this.getproject(this.$route.params.slug);
    },
    computed: {
      tagsList(){
        return this.project.tags?.map(tag => tag.name).join(', ') || 'NO TAG';
      },
      formattedDate(){
        const d = new Date(this.project.date);

        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }

        return new Intl.DateTimeFormat(navigator.language, options).format(d)
      }
    }
  }
</script>

<template>
  <Loader v-if="!isLoaded" />
  <div v-else>
    <h1>{{ project.title }}</h1>
    <em>{{ formattedDate }}</em>
    <p>Teconologia: {{ project.technology?.name || ' NO TECHNOLOGY '  }} | Tag: {{ tagsList }}</p>
    <div>FOTO</div>
    <em>Nome Foto</em>
    <p>{{ project.text }}</p>

  </div>
</template>


<style lang="scss" scoped>
em{
  display:inline-block;
}
h1,em,p,div{
  margin-bottom: 10px;
}
</style>