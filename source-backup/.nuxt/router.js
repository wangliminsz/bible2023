import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54de258d = () => interopDefault(import('../pages/newindex.vue' /* webpackChunkName: "pages/newindex" */))
const _4d5d48e6 = () => interopDefault(import('../pages/oldindex.vue' /* webpackChunkName: "pages/oldindex" */))
const _6416b24a = () => interopDefault(import('../pages/ytext.vue' /* webpackChunkName: "pages/ytext" */))
const _5152a052 = () => interopDefault(import('../pages/new/thecontent.vue' /* webpackChunkName: "pages/new/thecontent" */))
const _0486779e = () => interopDefault(import('../pages/new/thesplash.vue' /* webpackChunkName: "pages/new/thesplash" */))
const _78ecbb24 = () => interopDefault(import('../pages/new/thetext.vue' /* webpackChunkName: "pages/new/thetext" */))
const _e153396e = () => interopDefault(import('../pages/new/thetxt.vue' /* webpackChunkName: "pages/new/thetxt" */))
const _14cb927b = () => interopDefault(import('../pages/new/backup-2021-06-15/thetext.vue' /* webpackChunkName: "pages/new/backup-2021-06-15/thetext" */))
const _75668ef2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/newindex",
    component: _54de258d,
    name: "newindex"
  }, {
    path: "/oldindex",
    component: _4d5d48e6,
    name: "oldindex"
  }, {
    path: "/ytext",
    component: _6416b24a,
    name: "ytext"
  }, {
    path: "/new/thecontent",
    component: _5152a052,
    name: "new-thecontent"
  }, {
    path: "/new/thesplash",
    component: _0486779e,
    name: "new-thesplash"
  }, {
    path: "/new/thetext",
    component: _78ecbb24,
    name: "new-thetext"
  }, {
    path: "/new/thetxt",
    component: _e153396e,
    name: "new-thetxt"
  }, {
    path: "/new/backup-2021-06-15/thetext",
    component: _14cb927b,
    name: "new-backup-2021-06-15-thetext"
  }, {
    path: "/",
    component: _75668ef2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
