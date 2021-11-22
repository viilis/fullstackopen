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
    cy.createBlog({ title: 'title2',author: 'author2',url: 'url2',likes: 10 })
    cy.logout()
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('Login')
  })

  describe('Login testing', function() {

    it('Login form with correct credentials', function(){
      cy.login({ username:'testuser',password:'123' })
      cy.visit('http://localhost:3000')
      cy.contains('Blogs')
    })

    it('Login form with false credentials', function(){
      cy.get(':nth-child(1) > input').type('testuser')
      cy.get(':nth-child(2) > input').type('321')
      cy.get('#login-button').click()
      cy.contains('Login')
    })
  })

  describe('Blog testing', function(){

    it('posting simple test blog',function(){
      cy.login({ username:'testuser',password:'123' })
      cy.visit('http://localhost:3000')

      cy.contains('create new blogpost').click()
      cy.get('#title-id').type('test-title')
      cy.get('#author-id').type('test-author')
      cy.get('#url-id').type('test-url')
      cy.get('#submit-button').click()

      cy.contains('test-title')
    })

    it('testing like button', function(){
      cy.login({ username:'testuser',password:'123' })
      cy.visit('http://localhost:3000')

      cy.get(':nth-child(5) > :nth-child(1) > div > button').click()
      cy.get('.likeclass > button').click()
      cy.get('.likeclass').contains('1')
    })

    it('testing blogtext deletion', function(){
      cy.login({ username:'testuser',password:'123' })
      cy.visit('http://localhost:3000')

      cy.get(':nth-child(5) > :nth-child(1) > div > button').click()
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(5)').click()
      cy.get('html').should('not.contain', 'test-title')

    })
    it('testing that most liked blog is first', function(){
      cy.login({ username:'testuser',password:'123' })
      cy.visit('http://localhost:3000')

      cy.get(':nth-child(4) > :nth-child(1) > div > button').click()

      cy.get(':nth-child(4) > :nth-child(1) > .likeclass > span').then(e => parseInt(e[0].textContent)).should('to.eq', 10)

    })
  })
})