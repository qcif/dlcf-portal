package au.com.redboxresearchdata.dlcf.page

import geb.Page

/**
 * @author Matt Mulholland
 * @date 24/5/17
 */
class RecordEditPage extends Page {
  static url = "/default/rdmp/record/edit"
  static at = { $("#intro")?.text() ==~ /[Ww]elcome.*[Dd]ata.*[Mm]anagement.*[Pp]lan.*[Ff]orm/ }
  static content = {


  }
  String previousPageName

  @Override
  void onLoad(Page previousPage) {
    previousPageName = previousPage.class.simpleName
  }

}
