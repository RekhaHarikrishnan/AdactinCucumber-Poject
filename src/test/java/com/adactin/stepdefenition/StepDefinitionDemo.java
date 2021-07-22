package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adacticnproect.Pom_Book_Hotel;
import com.adacticnproect.Pom_Continue;
import com.adacticnproect.Pom_Login;
import com.adacticnproect.Pom_Logout;
import com.adacticnproect.Pom_Serach_Hotel2;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.RunnerDemo;
import com.demobaseclass.DemoBaseClass;

import cucumber.api.java.en.*;


		

public class StepDefinitionDemo extends DemoBaseClass{
public static WebDriver driver = RunnerDemo.driver;
	
PageObjectManager pom = new PageObjectManager(driver);
//Pom_Login p= new Pom_Login(driver);


@Given("^User must launch the loin page$")
public void user_must_launch_the_loin_page() throws Throwable {
	

	String url = FileReaderManager.getInstanceFR().getInstanceCR().geturl();
	openUrl(url);
   
}
@When("^user enter the valid username \"([^\"]*)\" in the username field$")
public void user_enter_the_valid_username_in_the_username_field(String arg1) throws Throwable {
	//sendTheValues(p.getUserName(), arg1);
	sendTheValues(pom.getInstanceLogin().getUserName(), arg1);
   
}

@When("^user ente the valid password \"([^\"]*)\" in the password field$")
public void user_ente_the_valid_password_in_the_password_field(String arg1) throws Throwable {
	//sendTheValues(p.getPassword(), arg1);
	sendTheValues(pom.getInstanceLogin().getPassword(), arg1);
    
}

@When("^user enter the valid username in the username field$")
public void user_enter_the_valid_username_in_the_username_field() throws Throwable {
	//sendTheValues(p.getUserName(), "Rekha123");
	sendTheValues(pom.getInstanceLogin().getUserName(), "Rekha123");
    
}

@When("^user ente the valid password in the password field$")
public void user_ente_the_valid_password_in_the_password_field() throws Throwable {
	//sendTheValues(p.getPassword(), "Vibin@@16");
	sendTheValues(pom.getInstanceLogin().getPassword(), "Vibin@@16");
    
}

@Then("^User confirm it and navigate to the search page$")
public void user_confirm_it_and_navigate_to_the_search_page() throws Throwable {
	//clickTheButton(p.getLogIn());
	clickTheButton(pom.getInstanceLogin().getLogIn());
	   
	    
}


//Pom_Serach_Hotel2 psh = new Pom_Serach_Hotel2(driver);
@Given("^User must click the Login Button$")
public void user_must_click_the_Login_Button() throws Throwable {

}

@When("^User Must Select the location by using Single Drop Down Method$")
public void user_Must_Select_the_location_by_using_Single_Drop_Down_Method() throws Throwable {
	//dropdownUsingValue(psh.getLocation(), "Melbourne");
	dropdownUsingValue(pom.getInstanceSearchHotel().getLocation(), "Melbourne");
    
}

@When("^User Must Select the Hotel by using Single Drop Down Method$")
public void user_Must_Select_the_Hotel_by_using_Single_Drop_Down_Method() throws Throwable {
//dropdownUsingText(psh.getHotels(), "Hotel Hervey");
dropdownUsingText(pom.getInstanceSearchHotel().getHotels(), "Hotel Hervey");
  
}

@When("^User Must Select the RoomType by using Single Drop Down Method$")
public void user_Must_Select_the_RoomType_by_using_Single_Drop_Down_Method() throws Throwable {
	//dropdownUsingIndex(psh.getRoomType(), 2);
	dropdownUsingIndex(pom.getInstanceSearchHotel().getRoomType(), 2);
   
}

@When("^User Must Select Number Of Rooms by using Single Drop Down Method$")
public void user_Must_Select_Number_Of_Rooms_by_using_Single_Drop_Down_Method() throws Throwable {
	//dropdownUsingValue(psh.getNoofRooms(), "4");
	dropdownUsingValue(pom.getInstanceSearchHotel().getNoofRooms(), "4");
    
}

@When("^User Must Select the Room for Adults by using Single Drop Down Method$")
public void user_Must_Select_the_Room_for_Adults_by_using_Single_Drop_Down_Method() throws Throwable {
  //dropdownUsingValue(psh.getAdults(), "3");
  dropdownUsingValue(pom.getInstanceSearchHotel().getAdults(), "3");
	
}

@When("^User Must Select the Room for Children by using Single Drop Down Method$")
public void user_Must_Select_the_Room_for_Children_by_using_Single_Drop_Down_Method() throws Throwable {
//dropdownUsingValue(psh.getChildren(), "2"); 
dropdownUsingValue(pom.getInstanceSearchHotel().getChildren(), "2");
	
}
@Then("^User Confirm it by Clicking the Search button and Navigated to the Select Hotel Page$")
public void user_Confirm_it_by_Clicking_the_Search_button_and_Navigated_to_the_Select_Hotel_Page() throws Throwable {
	//clickTheButton(psh.getSerach()); 
	clickTheButton(pom.getInstanceSearchHotel().getSerach()); 
}


//Pom_Continue pc = new Pom_Continue(driver);
@Given("^User must click the serach button$")
public void user_must_click_the_serach_button() throws Throwable {
	
    
}

@When("^User must click the radio Button to confirm the Hoteol$")
public void user_must_click_the_radio_Button_to_confirm_the_Hoteol() throws Throwable {
	//clickCheckBox(pc.getButton());
	clickCheckBox(pom.getInstanceContinue().getButton());
    
}

@When("^User must click the continue button$")
public void user_must_click_the_continue_button() throws Throwable {
	//clickTheButton(pc.getContinue2());
	clickTheButton(pom.getInstanceContinue().getContinue2());
    
}

@Then("^User Confirm it and Navigated to the Book Hotel Page$")
public void user_Confirm_it_and_Navigated_to_the_Book_Hotel_Page() throws Throwable {
    
}


//Pom_Book_Hotel pbh = new Pom_Book_Hotel(driver);
@Given("^User should click the continue button$")
public void user_should_click_the_continue_button() throws Throwable{
}


@When("^User enter First name in the First Name Field$")
public void user_enter_First_name_in_the_First_Name_Field() throws Throwable {
	//sendTheValues(pbh.getFirstName(), "Rekha");
	sendTheValues(pom.getInstanceBookHotel().getFirstName(), "Rekha");
   
}

@When("^User enter Last Name in the Last Name Field$")
public void user_enter_Last_Name_in_the_Last_Name_Field() throws Throwable {
	//sendTheValues(pbh.getLastName(), "Harikrishnan");
	sendTheValues(pom.getInstanceBookHotel().getLastName(), "Harikrishnan");
    
}

@When("^User Enter Address in the Address Field$")
public void user_Enter_Address_in_the_Address_Field() throws Throwable {
	//sendTheValues(pbh.getAddresss(), "No:A1,Vishmya Homes,ch-126");
	sendTheValues(pom.getInstanceBookHotel().getAddresss(), "No:A1,Vishmya Homes,ch-126");
    
}

@When("^User Enter The credit Card Number by using (\\d+)digits in the Credit Card Field$")
public void user_Enter_The_credit_Card_Number_by_using_digits_in_the_Credit_Card_Field(int arg1) throws Throwable {
   //sendTheValues(pbh.getCreditcardNo(), "123456789101121325");
   sendTheValues(pom.getInstanceBookHotel().getCreditcardNo(), "123456789101121325");
}

@When("^User Must select the Credit card type$")
public void user_Must_select_the_Credit_card_type() throws Throwable {
	//dropdownUsingValue(pbh.getCreditcardType(), "MAST");
	dropdownUsingValue(pom.getInstanceBookHotel().getCreditcardType(), "MAST");
    
}

@When("^User Must select Expiry Date by using single drop down method$")
public void user_Must_select_Expiry_Date_by_using_single_drop_down_method() throws Throwable {
	//dropdownUsingIndex(pbh.getExpiryDate(),3);
	dropdownUsingIndex(pom.getInstanceBookHotel().getExpiryDate(),3);
    
}
@When("^User Must select Expiry Year by using single drop down method$")
public void user_Must_select_Expiry_Year_by_using_single_drop_down_method() throws Throwable {
	//dropdownUsingText(pbh.getExpirtyear(), "2016");
	dropdownUsingText(pom.getInstanceBookHotel().getExpirtyear(), "2016");
    
}

@When("^User must enter the CVV Number in the CVV Number field$")
public void user_must_enter_the_CVV_Number_in_the_CVV_Number_field() throws Throwable {
	//sendTheValues(pbh.getCvvNumber(), "123654");
	sendTheValues(pom.getInstanceBookHotel().getCvvNumber(), "123654");
    
}

@Then("^User Confirm it by clicking BookNow button and Navigated to Booking Confirmation Page$")
public void user_Confirm_it_by_clicking_BookNow_button_and_Navigated_to_Booking_Confirmation_Page() throws Throwable {
	//clickTheButton(pbh.getBookNow());
	clickTheButton(pom.getInstanceBookHotel().getBookNow());
}

//Pom_Logout pl = new Pom_Logout(driver);
@Given("^User just click the BookNow button$")
public void user_just_click_the_BookNow_button() throws Throwable {
	
}


@When("^User must verify the Booking Confirmation page$")
public void user_must_verify_the_Booking_Confirmation_page() throws Throwable {
}


@When("^User must click the Logout button$")
public void user_must_click_the_Logout_button() throws Throwable {
	implicitlyWaitMethod();
	//clickTheButton(pl.getLogOut());
	clickTheButton(pom.getInstanceLoout().getLogOut());
   
}

@Then("^user Confirm it and navigated to the Logout Page$")
public void user_Confirm_it_and_navigated_to_the_Logout_Page() throws Throwable {
    
}

}