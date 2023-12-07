import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti delle pagine
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import MyProjects from './pages/MyProjects.vue'
import Contacts from './pages/Contacts.vue'
import ProjectDetail from './pages/ProjectDetail.vue'
import Error404 from './pages/Error404.vue'


const router = createRouter({
  history: createWebHistory(),
  // così customizziamo il nome della classe del link attivo
  linkExactActiveClass: 'active',

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/MyProjects',
      name: 'MyProjects',
      component: MyProjects
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      // rotta con elemento dinamico come parametro (lo slug)
      path: '/dettaglio-project/:slug',
      name: 'ProjectDetail',
      component: ProjectDetail
    },


    // rotta 404 da mettere come ultima rotta
    ///:patMatch(.*)* significa "tutte le rotte possibili" ed è per esto motivo che intercetta tutte le rotte sbagliate ad esclusione di quelli precedenti
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router }