class Project{
    get username(){
        return $("#user-name")
    }
    get password(){
        return $("#password")
    }
    get cbutton(){
        return $("#login-button")
    }

    async LoginPage(){
        await this.username.setValue("standard_user")
        await this.password.setValue("secret_sauce")
        await this.cbutton.click()
    }
}
module.exports = new Project()