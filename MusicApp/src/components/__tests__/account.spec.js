import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Account from '@/views/account.vue'
import { setActivePinia, createPinia } from 'pinia'
import { userStore } from '@/stores/users'

describe('Account.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders account page', () => {
    const store = userStore()
    store.login('TestUser', '123')
    const wrapper = mount(Account)
    expect(wrapper.text()).toContain('Account Page')
    expect(wrapper.text()).toContain('TestUser')
  })

  it('shows form when change info button is clicked', async () => {
    const wrapper = mount(Account)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('Change Account Info')
  })
})