package com.adacticnproect;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pom_Login {
public static WebDriver driver;
	
	@FindBy(xpath="(//input[@class='login_input'])[1]")
	private WebElement userName;
	
	@FindBy(name="password")
	private WebElement Password;
	
	@FindBy(name="login")
	private WebElement logIn;
	
	public Pom_Login(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getPassword() {
		return Password;
	}

	public WebElement getLogIn() {
		return logIn;
	}


}
