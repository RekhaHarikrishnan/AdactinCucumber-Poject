package com.adacticnproect;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pom_Continue {
public static WebDriver driver;
	
	@FindBy(name="radiobutton_0")
	private WebElement button;
	
	@FindBy(xpath="//input[@value='Continue']")
	private WebElement continue2;
	
	public Pom_Continue(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getButton() {
		return button;
	}

	public WebElement getContinue2() {
		return continue2;
	}

	
	}
