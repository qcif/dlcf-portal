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
    dashboardLink(required: false) { $("div a[href*='dashboard']") }
    logoutLink { $(".user-menu").has('div a[href$="/user/logout"]') }
    welcomeMessage {
      def selector = $('.user-menu').has('.fa-user')
      assert selector?.text().trim() ==~ /^(?s)[Ww]elcome.*$/
      assert dashboardLink.isDisplayed()
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

  def enterDashboard() {
    getDriver().manage().window().maximize()
    def result = dashboardLink.click()
    print result
  }

  def isLoggedIn() {
    waitFor { logoutLink }.isDisplayed()
    waitFor { welcomeMessage }.isDisplayed()
    !loginLink.isDisplayed()
  }

}
