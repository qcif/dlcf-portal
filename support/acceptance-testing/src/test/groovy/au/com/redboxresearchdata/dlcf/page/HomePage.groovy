package au.com.redboxresearchdata.dlcf.page

import geb.Page

/**
 * @author <a href="matt@redboxresearchdata.com.au">Matt Mulholland</a>
 * Created on 25/05/2017.
 */
class HomePage extends Page {
    static url = "/default/rdmp/home"

    static at = { $("h1#main-title")?.text() ==~ /[Ww]elcome.*[DMP].*[Tt]ool/ }

    static content = {
        loginLink(required: false) { $("div a[href*='login']") }
        logoutLink { $(".user-menu").has('a[href$="logout"]') }
        welcomeMessage {
            def selector = $('.user-menu').has('.fa-user')
            assert selector?.text().trim() ==~ /^(?s)[Ww]elcome.*$/
            return selector
        }
    }

    String previousPageName

    @Override
    void onLoad(Page previousPage) {
        previousPageName = previousPage.class.simpleName
    }

    def enterLogin() {
        getDriver().manage().window().maximize()
        def result = loginLink.click()
        print result
    }

    def isLoggedIn() {
        waitFor { logoutLink }.isDisplayed()
        welcomeMessage.isDisplayed()
        !loginLink.isDisplayed()
    }

}
