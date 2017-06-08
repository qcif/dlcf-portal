package au.com.redboxresearchdata.dlcf.page

import geb.Page

/**
 * @author Matt Mulholland
 * @date 24/5/17
 */
class LoginPage extends Page {
  static url = "/default/rdmp/user/login"
  static at = {
    assertLoginDialogExists()
  }
  static content = {
    loginPanel(required: false) {
      def aaf = $('.panel.panel-default')
        .has(".panel-title")
        .has("a[href^='https://rapid']")
      def local =
        $('.panel.panel-default')
          .has(".panel-title")
          .has("#username")
          .has("#password")
          .has("button, input[type='button']")
      assert aaf?.text()?.trim() ==~ /^(?s)[aA][aA][fF].*[cC]redentials.*$/
      assert local?.text()?.trim() ==~ /^(?s).*[Ll]ocal.*[cC]redentials.*$/
      return local
    }
    loginName { loginPanel.find("#username") }
    loginPass { loginPanel.find("#password") }
    submit {
      loginPanel.find('button, input[type="button"]')
    }

  }
  String previousPageName

  @Override
  void onLoad(Page previousPage) {
    previousPageName = previousPage.class.simpleName
  }

  def assertLoginDialogExists() {
    waitFor { loginPanel }.isDisplayed()
  }

  def login() {
    def username = System.getenv("REDBOX_USERNAME")
    def password = System.getenv("REDBOX_PASSWORD")
    login(username, password)
  }

  def login(String username, String password) {
    loginName = username
    loginPass = password
    // ensure the driver can see the entire login dialog
    js.exec '$("#password")[0].scrollIntoView()'
    submit.click()
  }
}
