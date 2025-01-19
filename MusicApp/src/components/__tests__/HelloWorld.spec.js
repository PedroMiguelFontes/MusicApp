import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import lastfm from '@/api/lastfm'

describe('lastfm', () => {
  it('renders properly', () => {
    const wrapper = mount(lastfm, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
