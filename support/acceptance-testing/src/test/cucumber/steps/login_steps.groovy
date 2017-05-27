package steps

import au.com.redboxresearchdata.dlcf.page.BasePage
import au.com.redboxresearchdata.dlcf.page.HomePage
import au.com.redboxresearchdata.dlcf.page.LoginPage

import static cucumber.api.groovy.EN.*

Given(~/^I go to the home page$/) { ->
    via BasePage
    at HomePage
}

When(~/^I click on login$/) { ->
    page.enterLogin()
}

Then(~/^I am on the login page$/) { ->
    at LoginPage
    assert page.previousPageName == 'HomePage'
}

Then(~/^I should see the login dialog$/) { ->
    page.assertLoginDialog()
}

Given(~/^I go to the login page$/) { ->
    to LoginPage
    at LoginPage
}

When(~/^I enter test username and test password$/) { ->
    def username = System.getenv("REDBOX_USERNAME")
    def password = System.getenv("REDBOX_PASSWORD")
    page.login(username, password)
}

Then (~/^I am on the home page$/) { ->
    at HomePage
    assert page.previousPageName == 'LoginPage'
}

Then(~/^I am logged in$/) { ->
    page.isLoggedIn()
}
