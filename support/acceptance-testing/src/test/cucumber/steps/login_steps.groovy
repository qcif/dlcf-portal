package steps

import au.com.redboxresearchdata.dlcf.page.AafTestOrganisationPage
import au.com.redboxresearchdata.dlcf.page.AafTestVirtualHomePage
import au.com.redboxresearchdata.dlcf.page.BasePage
import au.com.redboxresearchdata.dlcf.page.HomePage
import au.com.redboxresearchdata.dlcf.page.LoginPage

import static cucumber.api.groovy.EN.*
import static cucumber.api.groovy.Hooks.After

Given(~/^I go to the [Hh]ome page$/) { ->
  via BasePage
  at HomePage
}

Given(~/^I log[ ]?in (?:with|using) local (?:credentials)?$/) { ->
  to LoginPage
  page.loginUsingLocalCredentials(world.user)
  at HomePage
  page.assertIsLoggedIn()
}

Given(~/^I log in (?:with|using) aaf (?:credentials)?$/) { ->
  to LoginPage
  page.enterAafLogin()
  at AafTestOrganisationPage
  page.selectAafOrganisation()
  world.useAafSession({ user ->
    at AafTestVirtualHomePage
    page.loginUsingAafCredentials(user)
  })
  at HomePage
  page.assertIsLoggedIn()
}

When(~/^I click on login$/) { ->
  page.enterLogin()
}

Then(~/^I am on the [Ll]ogin page$/) { ->
  at LoginPage
  assert page.previousPageName == 'HomePage'
}

Then(~/^I am redirected to the [Ll]ogin page$/) { ->
  at LoginPage
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
}

Given(~/^I am logged in$/) { ->
  page.assertIsLoggedIn()
}

Given(~/^I do not log[ ]?in$/) { ->
  page.assertIsNotLoggedIn()
}

Then(~/^the header should show that I am not logged in$/) { ->
  page.assertHeaderIsVisible()
  page.assertIsNotLoggedIn()
}

Then(~/^the header should show that I am logged in$/) { ->
  page.assertHeaderIsVisible()
  page.assertIsLoggedIn()
}
