package steps

import au.com.redboxresearchdata.dlcf.page.BasePage
import au.com.redboxresearchdata.dlcf.page.HomePage
import au.com.redboxresearchdata.dlcf.page.LoginPage

import static cucumber.api.groovy.EN.*

Given(~/^I go to the [Hh]ome page$/) { ->
  via BasePage
  at HomePage
}

Given(~/^I have logged in$/) { ->
  to LoginPage
  page.login()
  at HomePage
  page.isLoggedIn()
}

When(~/^I click on login$/) { ->
  page.enterLogin()
}

Then(~/^I am on the login page$/) { ->
  at LoginPage
  assert page.previousPageName == 'HomePage'
}

Then(~/^I should see the login dialog$/) { ->
  page.assertLoginDialogExists()
}

Given(~/^I go to the [Ll]ogin page$/) { ->
  to LoginPage
  at LoginPage
}

When(~/^I enter test username and test password$/) { ->
  page.login()
}

Then(~/^I am on the home page$/) { ->
  at HomePage
  assert page.previousPageName == 'LoginPage'
}

Then(~/^I am logged in$/) { ->
  page.isLoggedIn()
}
