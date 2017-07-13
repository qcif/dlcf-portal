/*
 *
 *  * Copyright (C) 2017 Queensland Cyber Infrastructure Foundation (http://www.qcif.edu.au/)
 *  *
 *  * This program is free software: you can redistribute it and/or modify
 *  * it under the terms of the GNU General Public License as published by
 *  * the Free Software Foundation; either version 2 of the License, or
 *  * (at your option) any later version.
 *  *
 *  * This program is distributed in the hope that it will be useful,
 *  * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  * GNU General Public License for more details.
 *  *
 *  * You should have received a copy of the GNU General Public License along
 *  * with this program; if not, write to the Free Software Foundation, Inc.,
 *  * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 */

package au.com.redboxresearchdata.dlcf.module.record
/**
 * @author Matt Mulholland (matt@redboxresearchdata.com.au)
 * @date 27/6/17
 */
class ContributorsModule extends RecordModule {
  static content = {
    tabMenu {
      navTabMenus.find('a[href$="contributors"]')
    }
    tabContent {
      navTabContent.$(".tab-pane#contributors")
    }
    field {
      tabContent.$("dmp-field repeatable rb-contributor div")
    }
    researcherNameTitle {
      field.$(".row").$(".row label:eq(0)", "text": "Researcher Name")
    }
    researcherNameInput {
      field.$(".row").$(".row input:eq(0)", "type": "text", "formcontrolname": "name")
    }
    emailAddressTitle {
      field.$(".row").$(".row label:eq(1)", "text": "Email Address")
    }
    emailAddressInput {
      field.$(".row").$(".row input:nth-child(2)", "type": "text", "formcontrolname": "email")
    }
    projectRoleTitle {
      field.$(".row").$(".row label:nth-child(3)", "text": "Project Role")
    }
    projectRoleInput {
      def selector = field.$(".row").$(".row select:nth-child(3)", "formcontrolname": "role")
      def collected = waitFor { selector.$("option") }.collect {
        it?.text()?.trim()
      }
      assert collected == ["Chief Investigator", "Data manager", "Collaborators", "Supervisor"]
      return selector
    }
  }

  @Override
  def assertTabMenu() {
    assert tabMenu?.text()?.trim() ==~ /Contributors/
  }

  @Override
  def assertTabContent() {
//    [researcherNameTitle, researcherNameInput, emailAddressTitle, emailAddressInput, projectRoleTitle, projectRoleInput].each { panel ->
      [researcherNameTitle, researcherNameInput].each { panel ->

        waitFor { panel }.isDisplayed()
    }
  }

}
