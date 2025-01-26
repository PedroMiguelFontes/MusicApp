import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/index'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'

describe('Router', () => {
  let router

  beforeEach(() => {
    setActivePinia(createPinia())
    router = createRouter({
      history: createWebHistory(),
      routes
    })
  })

  it('renders Home component via routing', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('Welcome to MusicApp')
  })

  it('renders Login component via routing', async () => {
    router.push('/login')
    await router.isReady()
    const wrapper = mount(Login, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('Login')
  })
})