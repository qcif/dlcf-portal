package steps

import au.com.redboxresearchdata.dlcf.page.RecordEditPage
import cucumber.api.PendingException

/**
 * @author Matt Mulholland
 * @date 13/6/17
 */

import static cucumber.api.groovy.EN.*

Then(~/^I am on the record edit page$/) { ->
  // Write code here that turns the phrase above into concrete actions
  throw new cucumber.api.PendingException()
}
And(~/^I should see the [Ww]elcome to the [Dd]ata [Mm]anagement [Pp]lan [Ff]orm$/) { ->
  // Write code here that turns the phrase above into concrete actions
  throw new PendingException()
}


When(~/^I go to the [Cc]reateRecord page$/) { ->
  to RecordEditPage
  at RecordEditPage
}

When(~/^I try to go to the [Cc]reateRecord page$/) { ->
  go RecordEditPage.url
}

Then(~/^I should see the CreateRecord panel$/) { ->
  page.assertAtCreateRecordStart()
}
