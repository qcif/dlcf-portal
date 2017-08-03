$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "As any user, who is not logged in, I type in a url, and I am redirected to the login page",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I try to go to the \u003cstarting\u003e page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;",
  "rows": [
    {
      "cells": [
        "starting"
      ],
      "line": 8,
      "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;1"
    },
    {
      "cells": [
        "RecordEdit"
      ],
      "line": 9,
      "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;2"
    },
    {
      "cells": [
        "Home"
      ],
      "line": 10,
      "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;3"
    },
    {
      "cells": [
        "Dashboard"
      ],
      "line": 11,
      "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;4"
    },
    {
      "cells": [
        "Login"
      ],
      "line": 12,
      "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 117432529,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "As any user, who is not logged in, I type in a url, and I am redirected to the login page",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I try to go to the RecordEdit page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "create_record_steps.groovy:21"
});
formatter.result({
  "duration": 538189790,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:34"
});
formatter.result({
  "duration": 404041928,
  "status": "passed"
});
formatter.after({
  "duration": 122876,
  "status": "passed"
});
formatter.after({
  "duration": 82545182,
  "status": "passed"
});
formatter.before({
  "duration": 80169986,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As any user, who is not logged in, I type in a url, and I am redirected to the login page",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I try to go to the Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "home_steps.groovy:32"
});
formatter.result({
  "duration": 474640256,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:34"
});
formatter.result({
  "duration": 359042979,
  "status": "passed"
});
formatter.after({
  "duration": 51436,
  "status": "passed"
});
formatter.after({
  "duration": 83327227,
  "status": "passed"
});
formatter.before({
  "duration": 124960429,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As any user, who is not logged in, I type in a url, and I am redirected to the login page",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I try to go to the Dashboard page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "dashboard_steps.groovy:26"
});
formatter.result({
  "duration": 507380882,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:34"
});
formatter.result({
  "duration": 393689344,
  "status": "passed"
});
formatter.after({
  "duration": 63780,
  "status": "passed"
});
formatter.after({
  "duration": 87599462,
  "status": "passed"
});
formatter.before({
  "duration": 107714041,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As any user, who is not logged in, I type in a url, and I am redirected to the login page",
  "description": "",
  "id": "login;as-any-user,-who-is-not-logged-in,-i-type-in-a-url,-and-i-am-redirected-to-the-login-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I try to go to the Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login_steps.groovy:38"
});
formatter.result({
  "duration": 450407395,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:34"
});
formatter.result({
  "duration": 377201669,
  "status": "passed"
});
formatter.after({
  "duration": 59770,
  "status": "passed"
});
formatter.after({
  "duration": 83110474,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "As any user, I go to any page, and I do not log in and I observe the same logged out layout Page",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I try to go to the \u003cstarting\u003e page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I do not log in",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see all of the logged out layout",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;",
  "rows": [
    {
      "cells": [
        "starting"
      ],
      "line": 20,
      "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;1"
    },
    {
      "cells": [
        "RecordEdit"
      ],
      "line": 21,
      "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;2"
    },
    {
      "cells": [
        "Home"
      ],
      "line": 22,
      "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;3"
    },
    {
      "cells": [
        "Dashboard"
      ],
      "line": 23,
      "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;4"
    },
    {
      "cells": [
        "Login"
      ],
      "line": 24,
      "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94315076,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As any user, I go to any page, and I do not log in and I observe the same logged out layout Page",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I try to go to the RecordEdit page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I do not log in",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see all of the logged out layout",
  "keyword": "Then "
});
formatter.match({
  "location": "create_record_steps.groovy:21"
});
formatter.result({
  "duration": 535290246,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:59"
});
formatter.result({
  "duration": 7646147822,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat ✽.When I do not log in(Login.feature:17)\nCaused by: geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e loginHeader: au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e header: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy:33)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:67)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:64)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:114)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:57)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:66)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:109)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:147)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:129)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:46)\n",
  "status": "failed"
});
formatter.match({
  "location": "layout.steps.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 59557,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 371692900,
  "status": "passed"
});
formatter.before({
  "duration": 61132693,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As any user, I go to any page, and I do not log in and I observe the same logged out layout Page",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I try to go to the Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I do not log in",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see all of the logged out layout",
  "keyword": "Then "
});
formatter.match({
  "location": "home_steps.groovy:32"
});
formatter.result({
  "duration": 529859364,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:59"
});
formatter.result({
  "duration": 7442511589,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat ✽.When I do not log in(Login.feature:17)\nCaused by: geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e loginHeader: au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e header: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy:33)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:67)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:64)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:114)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:57)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:66)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:109)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:147)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:129)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:46)\n",
  "status": "failed"
});
formatter.match({
  "location": "layout.steps.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66565,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 367020070,
  "status": "passed"
});
formatter.before({
  "duration": 58927633,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "As any user, I go to any page, and I do not log in and I observe the same logged out layout Page",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I try to go to the Dashboard page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I do not log in",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see all of the logged out layout",
  "keyword": "Then "
});
formatter.match({
  "location": "dashboard_steps.groovy:26"
});
formatter.result({
  "duration": 514582889,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:59"
});
formatter.result({
  "duration": 7378634444,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat ✽.When I do not log in(Login.feature:17)\nCaused by: geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e loginHeader: au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e header: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy:33)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:67)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:64)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:114)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:57)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:66)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:109)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:147)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:129)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:46)\n",
  "status": "failed"
});
formatter.match({
  "location": "layout.steps.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 84451,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 394423514,
  "status": "passed"
});
formatter.before({
  "duration": 70274489,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "As any user, I go to any page, and I do not log in and I observe the same logged out layout Page",
  "description": "",
  "id": "login;as-any-user,-i-go-to-any-page,-and-i-do-not-log-in-and-i-observe-the-same-logged-out-layout-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I try to go to the Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I do not log in",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see all of the logged out layout",
  "keyword": "Then "
});
formatter.match({
  "location": "login_steps.groovy:38"
});
formatter.result({
  "duration": 468477508,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:59"
});
formatter.result({
  "duration": 7602582124,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat ✽.When I do not log in(Login.feature:17)\nCaused by: geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e loginHeader: au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e header: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy:33)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginHeaderModule$__clinit__closure1$_closure3.doCall(LoginHeaderModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$_assertLoginHeaderIsVisible_closure2.doCall(GenericLayoutPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertLoginHeaderIsVisible(GenericLayoutPage.groovy:79)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage.assertIsNotLoggedIn(GenericLayoutPage.groovy:74)\n\tat au.com.redboxresearchdata.dlcf.page.GenericLayoutPage$assertIsNotLoggedIn$0.call(Unknown Source)\n\tat steps.login_steps$_run_closure10.doCall(login_steps.groovy:61)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:67)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:64)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:114)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:57)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:66)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:109)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:147)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:129)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:46)\n",
  "status": "failed"
});
formatter.match({
  "location": "layout.steps.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60533,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 457892344,
  "status": "passed"
});
formatter.before({
  "duration": 97268360,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "As any user, I select the login dialog",
  "description": "",
  "id": "login;as-any-user,-i-select-the-login-dialog",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I go to the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I am on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see the login dialog",
  "keyword": "And "
});
formatter.match({
  "location": "home_steps.groovy:27"
});
formatter.result({
  "duration": 7637802336,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:243)\n\tat geb.Page.getAtVerificationResult(Page.groovy:223)\n\tat geb.Page.verifyAt(Page.groovy:194)\n\tat geb.Page$verifyAt$3.call(Unknown Source)\n\tat geb.Page$verifyAt$3.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:457)\n\tat geb.Browser.at(Browser.groovy:356)\n\tat geb.Browser$at$5.callCurrent(Unknown Source)\n\tat geb.Browser$at$5.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:571)\n\tat geb.Browser$to$1.callCurrent(Unknown Source)\n\tat geb.Browser$to$1.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:548)\n\tat geb.Browser$to$0.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:537)\n\tat geb.Browser.to(Browser.groovy)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.home_steps$_run_closure1.doCall(home_steps.groovy:28)\n\tat ✽.Given I go to the home page(Login.feature:27)\nCaused by: geb.waiting.WaitTimeoutException: condition did not pass in 7.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:535)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.waiting.WaitingSupport$waitFor.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage.assertMainPanelIsVisible(HomePage.groovy:39)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure3.doCall(HomePage.groovy:11)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure3.doCall(HomePage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:117)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:243)\n\tat geb.Page.getAtVerificationResult(Page.groovy:223)\n\tat geb.Page.verifyAt(Page.groovy:194)\n\tat geb.Page$verifyAt$3.call(Unknown Source)\n\tat geb.Page$verifyAt$3.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:457)\n\tat geb.Browser.at(Browser.groovy:356)\n\tat geb.Browser$at$5.callCurrent(Unknown Source)\n\tat geb.Browser$at$5.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:571)\n\tat geb.Browser$to$1.callCurrent(Unknown Source)\n\tat geb.Browser$to$1.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:548)\n\tat geb.Browser$to$0.callCurrent(Unknown Source)\n\tat geb.Browser.to(Browser.groovy:537)\n\tat geb.Browser.to(Browser.groovy)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.home_steps$_run_closure1.doCall(home_steps.groovy:28)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:67)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:64)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:114)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:57)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:66)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:109)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:147)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:129)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:46)\nCaused by: geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.HomePage -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e defaultPanel: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure5.doCall(HomePage.groovy:15)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure5.doCall(HomePage.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:112)\n\tat geb.Page.getProperty(Page.groovy)\n\tat geb.content.PageContentTemplateFactoryDelegate.propertyMissing(PageContentTemplateFactoryDelegate.groovy:45)\n\tat geb.content.PageContentTemplateFactoryDelegate.getProperty(PageContentTemplateFactoryDelegate.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure6.doCall(HomePage.groovy:18)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure6.doCall(HomePage.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:112)\n\tat geb.Page.getProperty(Page.groovy)\n\tat geb.content.PageContentTemplateFactoryDelegate.propertyMissing(PageContentTemplateFactoryDelegate.groovy:45)\n\tat geb.content.PageContentTemplateFactoryDelegate.getProperty(PageContentTemplateFactoryDelegate.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure7.doCall(HomePage.groovy:23)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$__clinit__closure4$_closure7.doCall(HomePage.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:112)\n\tat geb.Page.getProperty(Page.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$_assertMainPanelIsVisible_closure1.doCall(HomePage.groovy:39)\n\tat au.com.redboxresearchdata.dlcf.page.HomePage$_assertMainPanelIsVisible_closure1.doCall(HomePage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\t... 78 more\n",
  "status": "failed"
});
formatter.match({
  "location": "login_steps.groovy:30"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_steps.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_steps.groovy:42"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 61057,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 427197745,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 32,
      "value": "#   Once set, any other aaf login will be stuck with the same user/role"
    }
  ],
  "line": 33,
  "name": "As a \u003crole\u003e user, I login using \u003ccredentialsType\u003e",
  "description": "",
  "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am a \u003crole\u003e user",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I log in using \u003ccredentialsType\u003e credentials",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I am on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;",
  "rows": [
    {
      "cells": [
        "role",
        "credentialsType"
      ],
      "line": 40,
      "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;;1"
    },
    {
      "cells": [
        "admin",
        "local"
      ],
      "line": 41,
      "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;;2"
    },
    {
      "cells": [
        "guest",
        "aaf"
      ],
      "line": 42,
      "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 85509038,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "As a admin user, I login using local",
  "description": "",
  "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am a admin user",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I log in using local credentials",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I am on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 7
    }
  ],
  "location": "user_steps.groovy:20"
});
formatter.result({
  "duration": 432079,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:46"
});
formatter.result({
  "duration": 1133168748,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:10"
});
formatter.result({
  "duration": 866063594,
  "error_message": "geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e local: au.com.redboxresearchdata.dlcf.module.login.LocalLoginModule -\u003e login: au.com.redboxresearchdata.dlcf.module.login.LoginModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e defaultPanel: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure3.doCall(LoginModule.groovy:34)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure3.doCall(LoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.PageContentTemplateFactoryDelegate.propertyMissing(PageContentTemplateFactoryDelegate.groovy:45)\n\tat geb.content.PageContentTemplateFactoryDelegate.getProperty(PageContentTemplateFactoryDelegate.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure5.doCall(LoginModule.groovy:40)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure5.doCall(LoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LocalLoginModule$__clinit__closure1$_closure4.doCall(LocalLoginModule.groovy:36)\n\tat au.com.redboxresearchdata.dlcf.module.login.LocalLoginModule$__clinit__closure1$_closure4.doCall(LocalLoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.PageContentTemplateFactoryDelegate.propertyMissing(PageContentTemplateFactoryDelegate.groovy:45)\n\tat geb.content.PageContentTemplateFactoryDelegate.getProperty(PageContentTemplateFactoryDelegate.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LocalLoginModule$__clinit__closure1$_closure5.doCall(LocalLoginModule.groovy:38)\n\tat au.com.redboxresearchdata.dlcf.module.login.LocalLoginModule$__clinit__closure1$_closure5.doCall(LocalLoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:52)\n\tat geb.content.PageContentSupport$propertyMissing$0.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:110)\n\tat geb.Module.setProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:92)\n\tat geb.content.TemplateDerivedPageContent.setProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage.loginUsingLocalCredentials(LoginPage.groovy:32)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage$loginUsingLocalCredentials$0.callCurrent(Unknown Source)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage.loginUsingLocalCredentials(LoginPage.groovy:28)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage$loginUsingLocalCredentials.call(Unknown Source)\n\tat steps.login_steps$_run_closure1.doCall(login_steps.groovy:12)\n\tat ✽.When I log in using local credentials(Login.feature:36)\n",
  "status": "failed"
});
formatter.match({
  "location": "dashboard_steps.groovy:10"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_steps.groovy:55"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 72025,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 359312810,
  "status": "passed"
});
formatter.before({
  "duration": 66619750,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "As a guest user, I login using aaf",
  "description": "",
  "id": "login;as-a-\u003crole\u003e-user,-i-login-using-\u003ccredentialstype\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am a guest user",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I log in using aaf credentials",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I am on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "guest",
      "offset": 7
    }
  ],
  "location": "user_steps.groovy:20"
});
formatter.result({
  "duration": 170951,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:46"
});
formatter.result({
  "duration": 1046371162,
  "status": "passed"
});
formatter.match({
  "location": "login_steps.groovy:17"
});
formatter.result({
  "duration": 830958379,
  "error_message": "geb.error.RequiredPageContentNotPresent: The required page content \u0027au.com.redboxresearchdata.dlcf.page.LoginPage -\u003e aaf: au.com.redboxresearchdata.dlcf.module.login.AafLoginModule -\u003e login: au.com.redboxresearchdata.dlcf.module.login.LoginModule -\u003e layout: au.com.redboxresearchdata.dlcf.module.LayoutModule -\u003e defaultPanel: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:60)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure3.doCall(LoginModule.groovy:34)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure3.doCall(LoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.PageContentTemplateFactoryDelegate.propertyMissing(PageContentTemplateFactoryDelegate.groovy:45)\n\tat geb.content.PageContentTemplateFactoryDelegate.getProperty(PageContentTemplateFactoryDelegate.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure5.doCall(LoginModule.groovy:40)\n\tat au.com.redboxresearchdata.dlcf.module.login.LoginModule$__clinit__closure1$_closure5.doCall(LoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.module.login.AafLoginModule$__clinit__closure1$_closure4.doCall(AafLoginModule.groovy:36)\n\tat au.com.redboxresearchdata.dlcf.module.login.AafLoginModule$__clinit__closure1$_closure4.doCall(AafLoginModule.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:88)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage.enterAafLogin(LoginPage.groovy:40)\n\tat au.com.redboxresearchdata.dlcf.page.LoginPage$enterAafLogin$1.call(Unknown Source)\n\tat steps.login_steps$_run_closure2.doCall(login_steps.groovy:19)\n\tat ✽.When I log in using aaf credentials(Login.feature:36)\n",
  "status": "failed"
});
formatter.match({
  "location": "dashboard_steps.groovy:10"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_steps.groovy:55"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 59727,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 309853710,
  "status": "passed"
});
});