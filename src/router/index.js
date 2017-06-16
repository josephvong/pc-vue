import Vue from 'vue'
import Router from 'vue-router'
import seacher from '../components/seacher.vue'
import headerV from '@/components/header.vue'
import asideV from '@/components/aside.vue'
import listV from '@/components/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'seacher',
      component: seacher
    },
    {
      path: '',
      name: 'headerV',
      component:headerV
    },
    {
      path: '',
      name: 'asideV',
      component:asideV
    },
    {
      path: '',
      name: 'listV',
      component:listV
    },

  ]
})
