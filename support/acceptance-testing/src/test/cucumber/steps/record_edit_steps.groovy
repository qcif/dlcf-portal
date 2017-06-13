package steps

import cucumber.api.PendingException

/**
 * @author Matt Mulholland
 * @date 13/6/17
 */

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Then(~/^I am on the record edit page$/) { ->
  // Write code here that turns the phrase above into concrete actions
  throw new PendingException()
}
And(~/^I should see the [Ww]elcome to the [Dd]ata [Mm]anagement [Pp]lan [Ff]orm$/) { ->
  // Write code here that turns the phrase above into concrete actions
  throw new PendingException()
}
