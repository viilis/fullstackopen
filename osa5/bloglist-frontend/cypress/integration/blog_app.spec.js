describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')

    const testuser = {
      username: 'testuser',
      password: '123',
      name:'name'
    }

    cy.request('POST','http://localhost:3003/api/users',testuser)
    cy.login({ username: 'testuser', password:'123' })
    cy.createBlog({ title: 'title',author: 'author',url: 'url',likes: 0 })

    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('Login')
  })

  describe('Login testing', function() {

    it('Login form with correct credentials', function(){
      cy.get('input:first').type('testuser')
      cy.get('input:last').type('123')
      cy.get('#login-button').click()

      cy.contains('Blogs')
    })

    it('Login form with false credentials', function(){
      cy.get('input:first').type('testuser')
      cy.get('input:last').type('321')
      cy.get('#login-button').click()

      cy.contains('Login')
    })
  })
})