describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('счётчик того, насколько петя крутой:', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('счётчик моей крутости:');
  })
})
