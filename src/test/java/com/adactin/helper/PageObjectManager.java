package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adacticnproect.Pom_Book_Hotel;
import com.adacticnproect.Pom_Continue;
import com.adacticnproect.Pom_Login;
import com.adacticnproect.Pom_Logout;
import com.adacticnproect.Pom_Serach_Hotel2;

public class PageObjectManager {
	public static WebDriver driver;
	
	public PageObjectManager(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}
	
	private Pom_Login p;
	  public Pom_Login getInstanceLogin(){
		   p = new Pom_Login(driver);
		   return p;
	   }
	
	
	private Pom_Serach_Hotel2 psh;
	 public Pom_Serach_Hotel2 getInstanceSearchHotel() {
		 psh = new Pom_Serach_Hotel2(driver);
		 return psh;
	 }
	
	private Pom_Continue pc;
	public Pom_Continue getInstanceContinue() {
		pc = new Pom_Continue(driver);
		return pc;
	}
	
	private Pom_Book_Hotel pbh;
	public Pom_Book_Hotel getInstanceBookHotel() {
		pbh = new Pom_Book_Hotel(driver);
		return pbh;
	}
	
	private Pom_Logout pl;
	public Pom_Logout getInstanceLoout() {
		pl = new Pom_Logout(driver);
		return pl;
	}
	
	
	
	

}
