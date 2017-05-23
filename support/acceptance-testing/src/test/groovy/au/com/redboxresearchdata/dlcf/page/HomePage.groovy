package au.com.redboxresearchdata.dlcf.page

import geb.Page

/**
 * @author <a href="matt@redboxresearchdata.com.au">Matt Mulholland</a>
 * Created on 29/01/2017.
 */
class HomePage extends Page {
    static URL = ""
    static at = { $("h1#main-title")?.text() ==~ /[Ww]elcome.*[DMP].*[Tt]ool/ }

    static content = {
        loginLink(required: true) { $("div a[href*='login']") }
        loginPanel(required: false) { $(".panel-heading")?.find("Local Credentials") }
        loginName { loginPanel.find("#username") }
        loginPass { loginPanel.find("input[id='password']") }
        submit { loginPanel.find("input[id='login-submit']") }
        logoutLink { $("#user-info #logout-now") }
    }

    def login(String username, String password) {
        loginName = username
        loginPass = password
        submit.click()
    }

    def showLoginDialog() {
        if (!loginPanel?.isDisplayed()) {
            def result = loginLink.click()
            print result
        }
    }

    def isLoggedIn() {
        waitFor { logoutLink }.isDisplayed()
        !loginPanel.isDisplayed()
        !loginLink.isDisplayed()
    }

    def isLoginDisplayed() {
        loginPanel.isDisplayed()
    }
}
