import { mount } from '@cypress/vue'
import HelloWorld from '../../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders a message', () => {
    const msg = 'Hello Cypress Component Testing!'
    mount(HelloWorld, {
      propsData: {
        msg
      }
    }).get('h1')
      .should('have.text', msg)
  })

  it('updates button text', () => {
    mount(HelloWorld)
      .get('button')
      .should('have.text', 'count is: 0')
      .click()
      .should('have.text', 'count is: 1')
  })

  it('tests', () => {
    // this doesn't work
    // mount(HelloWorld)
    // const spy = cy.spy()
    // Cypress.vue.$on('click', spy)
    // cy.get('button')
    //   .click()
    //   .then(() => {
    //     expect(spy).to.be.calledOnce
    //   })

    // this either
    // mount(HelloWorld)
    //   .get('button')
    //   .click()
    //   .vue()
    //   .then((wrapper) => {
    //     debugger
    //   })

    mount(HelloWorld)
    cy.get('button').click()
    cy.vue().then((wrapper) => {
      debugger
    })

  })
})