import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { musicStore } from '@/stores/musics'
import { fetchTopTracks } from '@/api/lastfm'

vi.mock('@/api/lastfm', () => ({
  fetchTopTracks: vi.fn()
}))

describe('musicStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches music from API and updates state', async () => {
    const store = musicStore()
    const mockTracks = [
      { name: 'Track 1', artist: { name: 'Artist 1' }, listeners: '1000' },
      { name: 'Track 2', artist: { name: 'Artist 2' }, listeners: '2000' }
    ]
    fetchTopTracks.mockResolvedValue(mockTracks)

    await store.fetchMusicFromApi('TestArtist')

    expect(store.musicList).toEqual([
      { name: 'Track 1', artist: 'Artist 1', listeners: '1000' },
      { name: 'Track 2', artist: 'Artist 2', listeners: '2000' }
    ])
    expect(store.loading).toBe(false)
    expect(store.error).toBe(null)
  })
})
