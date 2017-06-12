package steps

import au.com.redboxresearchdata.dlcf.page.DashboardPage

import static cucumber.api.groovy.EN.*

When(~/^I click on Proceed to the dashboard$/) { ->
  page.enterDashboard()
}
Then(~/^I am on the [Dd]ashboard page$/) { ->
  at DashboardPage
  assert page.previousPageName == 'HomePage'
}
And(~/^I should see the 'Create a plan' button$/) { ->
  page.assertCreatePlanButtonExists()
}
And(~/^I should see my plans$/) { ->
  // Write code here that turns the phrase above into concrete actions
  page.assertMyPlansExist()
}