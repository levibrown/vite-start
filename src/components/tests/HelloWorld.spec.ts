import { render, screen, fireEvent } from '@testing-library/vue'
import HelloWorld from '../../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const { queryByText } = render(HelloWorld, { props: { msg } })

    expect(queryByText(msg)).toBeInTheDocument()
  })
})