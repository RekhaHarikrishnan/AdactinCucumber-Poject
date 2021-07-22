package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class ConfigurationReader {

	public static Properties p;
	
	public ConfigurationReader() throws Throwable {
		File f = new File("C:\\Users\\ranjithrekha\\eclipse-workspace-new\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);	
		
		p = new Properties();
		p.load(fis);
		
			
	}
	
	
	public String getBrowser() {
		String browser = p.getProperty("browser");
		return browser;
		
		
	}
	
	public String geturl() {
		String url = p.getProperty("url");
		return url;
		
	}

	public String getUserName() {
		String username = p.getProperty("username");
		return username;
		
	}
	
	public String getPassword() {
		String password = p.getProperty("password");
		return password;

	}
	
	public String getCreditCardNo() {
		String creditcardno = p.getProperty("creditno");
		return creditcardno;
	}
	
	public String getCvv() {
		String cvv = p.getProperty("cvv");
	    return cvv; 

	}
	
	
}
