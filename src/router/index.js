import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import ViewUser from '@/components/ViewUser'
import EditUser from '@/components/EditUser'
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
        path: '/users/:id',
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
