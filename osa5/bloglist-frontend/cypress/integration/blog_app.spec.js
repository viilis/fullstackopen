describe('Blog ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')

    /*const testuser = {
      username: 'testuser',
      password: '123',
      name:'name'
    }

    const loginTo = {
      username: 'testuser',
      password: '123'
    }

    const firstBlog = {
      title:'title',
      author:'author',
      url: 'url',
      likes: 0
    }

    cy.request('POST','http://localhost:3001/api/user',testuser)
    cy.request('POST', 'http://localhost:3001/api/login',loginTo)
    cy.request('POST', 'http://localhost:3001/api/blogs',firstBlog)*/

    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('Login')
  })

  /*it('Login form works', function(){
    cy.get('input:first').type('testuser')
    cy.get('input:last').type('123')
    cy.get('#login-button').click()

    cy.contains('Blogs')
  })*/
})