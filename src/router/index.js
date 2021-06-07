import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Product from '@/components/ViewUser'
import EditProduct from '@/components/EditUser'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true,
    },
    {
        path: '/ViewUser/:id',
        name: 'Id',
        component: ViewUser,
        props: true,
        children: [
          {
            path: 'edit',
            name: 'Edit',
            component: EditUser,
            props: true
          }
        ]
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true
    },
    {
      path: '*',
      redirect:"/"
    }


  ]
})
