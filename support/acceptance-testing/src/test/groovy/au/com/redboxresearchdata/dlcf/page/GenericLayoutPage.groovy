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

package au.com.redboxresearchdata.dlcf.page

import au.com.redboxresearchdata.dlcf.module.LayoutModule
import au.com.redboxresearchdata.dlcf.module.MenuModule
import au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule
import geb.Page
import groovy.util.logging.Slf4j

/**
 * @author Matt Mulholland (matt@redboxresearchdata.com.au)
 * @date 26/6/17
 */
@Slf4j
abstract class GenericLayoutPage extends GenericPage {
  static content = {
    layout { module LayoutModule }
    loginHeader { module LoginHeaderModule }
    menu { module MenuModule }
  }

  String previousPageName

  @Override
  void onLoad(Page previousPage) {
    previousPageName = previousPage.class.simpleName
  }

  def assertAllLayoutFor(def role) {
    assertIsLoggedIn()
    assertAllBodyPanelsAreVisibleFor(role)
    assertFooterIsVisible()
  }

  def assertAllLoggedOutLayout() {
    assertIsNotLoggedIn()
    assertAllDefaultBodyPanelsAreVisible()
    assertFooterIsVisible()
  }

  def assertHeaderIsVisible() {
    waitFor { layout.header }.isDisplayed()
  }

  def assertIsLoggedIn() {
    assertLogoutHeaderIsVisible()
    assertLoginHeaderIsNotVisible()
  }

  def assertIsNotLoggedIn() {
    assertLoginHeaderIsVisible()
    assertLogoutHeaderIsNotVisible()
  }

  def assertLoginHeaderIsVisible() {
    waitFor { loginHeader.loginLink }.isDisplayed()
  }

  def assertLogoutHeaderIsVisible() {
    waitFor { loginHeader.logoutLink }.isDisplayed()
  }

  def assertLoginHeaderIsNotVisible() {
    assert loginHeader.loginLink.isEmpty()
  }

  def assertLogoutHeaderIsNotVisible() {
    assert loginHeader.logoutLink.isEmpty()
  }

  def assertAllBodyPanelsAreVisibleFor(role) {
    assertAllDefaultBodyPanelsAreVisible()
    assertRoleMenusAreVisibleFor(role)
  }

  def assertAllDefaultBodyPanelsAreVisible() {
    assertDefaultBrandingIsVisible()
    assertAllDefaultMenusAreVisible()
  }

  def assertDefaultBrandingIsVisible() {
    waitFor { layout.branding }.isDisplayed()
  }

  def assertRoleMenusAreVisibleFor(role) {
    switch (role) {
      case "admin":
        waitFor { menu."${role}Menu" }.isDisplayed()
        break
      default:
        log.info("No specific menu(s) exist for #{user}. Skipping...")
        break
    }
  }

  def assertAllDefaultMenusAreVisible() {
    ["home"].each { name ->
      waitFor { menu."${name}Menu" }.isDisplayed()
    }
  }

  def assertFooterIsVisible() {
    waitFor { layout.footer }.isDisplayed()
  }

}
