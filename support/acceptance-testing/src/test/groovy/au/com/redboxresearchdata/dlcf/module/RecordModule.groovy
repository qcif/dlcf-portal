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

package au.com.redboxresearchdata.dlcf.module

import au.com.redboxresearchdata.dlcf.helper.PageHelper
import geb.Module

/**
 * @author Matt Mulholland (matt@redboxresearchdata.com.au)
 * @date 27/6/17
 */
class RecordModule extends Module {
  static content = {
    layout { module LayoutModule }
    form {
      layout.$("form")
    }
    navTab {
      form.$("div ul.nav")
    }
    navTabMenus {
      def menus = navTab.$("li")
      assert menus.size() == 4
      return menus
    }
    navTabContent {
      form.$("div div.tab-content")
    }
    introductionTabMenu {
      navTabMenus.find('a[href$="intro"]')
    }
    overviewTabMenu {
      navTabMenus.find('a[href$="overview"]')
    }
    contributorsTabMenu {
      navTabMenus.find('a[href$="contributors"]')
    }
    submitTabMenu {
      navTabMenus.find('a[href$="submit"]')
    }
    introductionTabContent {
      navTabContent.$(".tab-pane#intro")
    }
    overviewTabContent {
      navTabContent.$(".tab-pane#overview")
    }
    contributorsTabContent {
      navTabContent.$(".tab-pane#contributors")
    }
    submitTabContent {
      navTabContent.$(".tab-pane#submit")
    }

    navTabFooter {
      PageHelper.scrollIntoView(".single-product-area form div.form-row div")
      form.$("div.form-row div")
        .has("button", type: "button", text: "Save")
        .has('a.btn-warning[href$="default/rdmp/home"]')
    }

  }
}
