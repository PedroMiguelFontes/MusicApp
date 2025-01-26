import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { userStore } from '@/stores/users'

describe('userStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('logs in a user', () => {
    const store = userStore()
    store.login('TestUser', '123')
    expect(store.loggedUser).toEqual({ username: 'TestUser', pass: '123', role: 'admin' })
  })

  it('registers a new user', () => {
    const store = userStore()
    store.register('NewUser', 'password')
    expect(store.users).toContainEqual({ username: 'NewUser', pass: 'password', role: 'user' })
  })

  it('updates user info', () => {
    const store = userStore()
    store.login('TestUser', '123')
    store.updateUserInfo('UpdatedUser', 'newpass')
    expect(store.loggedUser).toEqual({ username: 'UpdatedUser', pass: 'newpass', role: 'admin' })
  })
})