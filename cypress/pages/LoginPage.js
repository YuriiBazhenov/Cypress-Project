class LoginPage {

    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    clickLoginButton(){
       return this.getLoginButton().click()
    }

    


    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }

}

export default LoginPage