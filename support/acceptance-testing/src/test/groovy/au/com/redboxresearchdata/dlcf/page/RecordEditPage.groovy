package au.com.redboxresearchdata.dlcf.page

import au.com.redboxresearchdata.dlcf.module.RecordModule
import geb.Page

/**
 * @author Matt Mulholland
 * @date 24/5/17
 */
class RecordEditPage extends GenericLayoutPage {
  static url = "/default/rdmp/record/edit"
  static at = {
    assertNavMenusAndContentAreDisplayed()
  }

  static content = {
    record { module RecordModule }
  }
  String previousPageName

  @Override
  void onLoad(Page previousPage) {
    previousPageName = previousPage.class.simpleName
  }

  def assertNavMenusAndContentAreDisplayed() {
    waitFor { record.navTabMenus }
    waitFor { record.navTabContent }.isDisplayed()
  }

  def assertAtCreateRecordStart() {
    assertNavMenusAndContentAreDisplayed()
    assertNavTabFooterIsDisplayed()
    assertAtIntroTabMenu()
  }

  def assertAtIntroTabMenu() {
    assert getActiveTabMenu().find("a") == record.introductionTabMenu
    assertIntroductionTabMenu()
    assertIntroductionTabContent()
  }

  def getActiveTabMenu() {
    record.navTabMenus.filter(".active")
  }

  def assertIntroductionTabMenu() {
    assert record.introductionTabMenu?.text()?.trim() ==~ /Introduction/
  }

  def assertIntroductionTabContent() {
    assertIntroductionTabContentHeading()
    assertIntroductionTabContentBody()
  }

  def assertIntroductionTabContentHeading() {
    def heading = record.introductionTabContent.find("dmp-field")[0]
    assert heading?.text()?.trim() ==~ /^[Ww]elcome to the [Dd]ata [Mm]anagement [Pp]lan [Ff]orm$/
  }

  def assertIntroductionTabContentBody() {
    def body = record.introductionTabContent.find("dmp-field").drop(1).collect { it?.text() }
    assert body?.join(" ")?.trim() ==~ /(?si)Some text to introduce the user to the form would go here.$/
  }

  def assertNavTabFooterIsDisplayed() {
    waitFor { record.navTabFooter }.isDisplayed()
  }
}
