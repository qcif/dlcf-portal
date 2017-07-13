package steps

import au.com.redboxresearchdata.dlcf.page.RecordEditPage
import cucumber.api.PendingException

import static cucumber.api.groovy.EN.*
/**
 * @author Matt Mulholland
 * @date 13/6/17
 */
And(~/^I should see the [Ww]elcome to the [Dd]ata [Mm]anagement [Pp]lan [Ff]orm$/) { ->
  // Write code here that turns the phrase above into concrete actions
  throw new PendingException()
}

When(~/^I go to the (?:[Cc]reate[\s]?Record|[Rr]ecord[\s]?Edit) page$/) { ->
  to RecordEditPage
  at RecordEditPage
}

Then(~/^I am on the (?:[Cc]reate[\s]?Record|[Rr]ecord[\s]?Edit) page$/) { ->
  at RecordEditPage
}

When(~/^I try to go to the (?:[Cc]reate[\s]?Record|[Rr]ecord[\s]?Edit) page$/) { ->
  go RecordEditPage.url
}

Then(~/^I should see the CreateRecord panel$/) { ->
  page.assertAtCreateRecordStart()
}

When(~/^I click on the (\w+) tab$/) { tabName ->
  page.clickTabMenu(tabName)
}

Then(~/^I should see the (\w+) panel$/) { tabName ->
  page.assertAtTabMenu(tabName)
}

And(~/^I enter (.+) in the for codes input field$/) { forCodesInput ->
  page.overview.enterForCodes(forCodesInput)
}
Then(~/^I should see the for codes dropdown list show (.+)$/) { forCodesResponse ->
  page.overview.assertCodesDropDown(forCodesResponse)
}
