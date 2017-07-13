import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'
import UserSubmissionsView from './components/UserSubmissionsView.vue'
import UserCommentsView from './components/UserCommentsView.vue'
<<<<<<< HEAD
=======
// import io from 'socket.io'
>>>>>>> 52eef3c1b6c90d55062fa0d188000982d0e3dc5b

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
<<<<<<< HEAD
var router = new Router()
=======
let router = new Router()
>>>>>>> 52eef3c1b6c90d55062fa0d188000982d0e3dc5b

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  },
  // add route for user's submissions
<<<<<<< HEAD

  // add route for user's comments

=======
  '/user-submissions/:id': {
    component: UserSubmissionsView
  },

  // add route for user's comments
  '/user-comments/:id': {
    component: UserCommentsView
  }
>>>>>>> 52eef3c1b6c90d55062fa0d188000982d0e3dc5b
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})

router.start(App, '#app')
