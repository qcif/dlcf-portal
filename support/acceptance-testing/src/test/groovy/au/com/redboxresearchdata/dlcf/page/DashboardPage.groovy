package au.com.redboxresearchdata.dlcf.page

import geb.Page

/**
 * @author Matt Mulholland
 * @date 24/5/17
 */
class DashboardPage extends Page {
  static url = "/default/rdmp/dashboard"
  static at = {
    $("h1#main-title")?.text() ==~ /[Ww]elcome.*[DMP].*[Tt]ool/
//    assertCreatePlanButtonExists()
  }
  static content = {
    createButton {
      $('a.btn[href$="record/edit"]')
    }
    myPlans {
      def myplans = $("dashboard[portal='rdmp']")
      assert myplans?.has("h2")?.text()?.trim() ==~ /^(?s).*My.*[Dd]raft.*[Pp]lans.*$/
      assert myplans?.has("h2")?.text()?.trim() ==~ /^(?s).*My.*[Aa]ctive.*[Pp]lans.*$/
      return myplans
    }

  }
  String previousPageName

  @Override
  void onLoad(Page previousPage) {
    previousPageName = previousPage.class.simpleName
  }

  def assertCreatePlanButtonExists() {
    waitFor { createButton }.isDisplayed()
  }
  def assertMyPlansExist() {
    waitFor { myPlans }.isDisplayed()
  }

  def enterPlan() {
    getDriver().manage().window().maximize()
    def result = createButton.click()
    print result
  }
}
