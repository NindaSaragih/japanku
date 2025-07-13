// tests/AnimeCard.test.js
import { mount } from '@vue/test-utils'
import AnimeCard from '../src/components/AnimeCard.vue'

test('renders anime title', () => {
  const wrapper = mount(AnimeCard, { props: { anime: { id:1, title:'Test', image:'', genre:'X', ongoing:false }}})
  expect(wrapper.text()).toContain('Test')
})
