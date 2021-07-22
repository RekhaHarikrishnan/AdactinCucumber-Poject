package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.demobaseclass.DemoBaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature",
glue="com.adactin.stepdefenition",monochrome=true,dryRun=false,strict=true,
tags=("@SmokeTest,@SanityTest"),
plugin = 
{"html:Report/HTML_Report",
"pretty","json:Report/CucumberJSON_Report.json",
"com.cucumber.listener.ExtentCucumberFormatter:Report/extentReport.html"})




public class RunnerDemo {
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Throwable {
		String browser = FileReaderManager.getInstanceFR().getInstanceCR().getBrowser();
		driver = DemoBaseClass.browserLaunch(browser);
		 
	}
	@AfterClass
	public static void tearDown() {
		
		driver.close();

	}

}
