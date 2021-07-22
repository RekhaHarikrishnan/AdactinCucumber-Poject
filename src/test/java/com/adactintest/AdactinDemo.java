package com.adactintest;

import org.openqa.selenium.WebDriver;
import com.adacticnproect.Pom_Book_Hotel;
import com.adacticnproect.Pom_Continue;
import com.adacticnproect.Pom_Login;
import com.adacticnproect.Pom_Logout;
import com.adacticnproect.Pom_Serach_Hotel2;
import com.demobaseclass.DemoBaseClass;


public class AdactinDemo extends DemoBaseClass {
	public static WebDriver driver;
	public static void main(String[] args) {
		
		driver=browserLaunch("chrome");
		openUrl("https://adactinhotelapp.com/");
		implicitlyWaitMethod();
		
		//logIn
		Pom_Login p = new Pom_Login(driver);
		sendTheValues(p.getUserName(), "Rekha123");
		sendTheValues(p.getPassword(), "Vibin@@16");
		clickTheButton(p.getLogIn());
		
		//SerachHotel
		Pom_Serach_Hotel2 psh = new Pom_Serach_Hotel2(driver);
		
		dropdownUsingValue(psh.getLocation(), "Melbourne");
		dropdownUsingText(psh.getHotels(), "Hotel Hervey");
		dropdownUsingIndex(psh.getRoomType(), 2);
		dropdownUsingValue(psh.getNoofRooms(), "4");
		dropdownUsingValue(psh.getAdults(),"3");
		dropdownUsingValue(psh.getChildren(), "2");
		clickTheButton(psh.getSerach());
		
		//Radio Button
		
		Pom_Continue pc = new Pom_Continue(driver);
		clickCheckBox(pc.getButton());
		clickTheButton(pc.getContinue2());
		
		
		//BookNow
		Pom_Book_Hotel pbh = new Pom_Book_Hotel(driver);
		implicitlyWaitMethod();
		sendTheValues(pbh.getFirstName(), "Rekha");
		sendTheValues(pbh.getLastName(), "Harikrishnan");
		sendTheValues(pbh.getAddresss(),"No:A1,Vishmya Homes,ch-126");
		sendTheValues(pbh.getCreditcardNo(), "123456789101121325");
		dropdownUsingValue(pbh.getCreditcardType(), "MAST");
		dropdownUsingIndex(pbh.getExpiryDate(), 3);
		dropdownUsingText(pbh.getExpirtyear(), "2016");
		sendTheValues(pbh.getCvvNumber(), "123654");
		clickTheButton(pbh.getBookNow());
		
		//Logout
		
		Pom_Logout pl = new Pom_Logout(driver);
		implicitlyWaitMethod();
		clickTheButton(pl.getLogOut());
		
	}

	

}
