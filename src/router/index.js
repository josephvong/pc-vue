import Vue from 'vue'
import Router from 'vue-router'

import resultView from 'components/listView/resultView'
import defaultView from 'components/listView/defaultView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // 根路径 默认转跳到 recommend
      redirect:'/default',
    },
    {
      path: '/default',
      //name: 'default',
      component: defaultView
    },
    {
      path: '/result/:page',
      //name: 'resultView',
      component:resultView
    },

  ]
})
