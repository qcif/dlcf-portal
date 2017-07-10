package au.com.redboxresearchdata.acceptance

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

/**
 * @author <a href="matt@redboxresearchdata.com.au">Matt Mulholland</a>
 * Created on 27/01/2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
  format = ["pretty", "html:build/reports/cucumber"],
  features = ["src/test/cucumber/features"],
  glue = ["src/test/cucumber/steps", "src/test/cucumber/support"]
)
class RunAcceptanceTest {
}
