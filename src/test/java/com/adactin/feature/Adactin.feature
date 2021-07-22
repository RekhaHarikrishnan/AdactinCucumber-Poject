Feature: Testing the booking functionality of the Adactin Hotel Booking application
@SmokeTest
Scenario Outline: User Checking the login functionality using valid username and password

      Given User must launch the loin page
      When user enter the valid username "<username>" in the username field
      And user ente the valid password "<password>" in the password field
      Then User confirm it and navigate to the search page
      
      Examples:
      |username|password|
      |rekhamca.h88@gmail.com|vibin|
      |rekhamcah88@gmail.com|Vibin@@16|
      |Rekha1234|Vibin@@16|
      
@SmokeTest 
Scenario: User Checking the Booking Functionality for Searching Hotel

      Given User must click the Login Button
      When  User Must Select the location by using Single Drop Down Method
      And   User Must Select the Hotel by using Single Drop Down Method  
      And   User Must Select the RoomType by using Single Drop Down Method
      And   User Must Select Number Of Rooms by using Single Drop Down Method 
      And   User Must Select the Room for Adults by using Single Drop Down Method   
      And   User Must Select the Room for Children by using Single Drop Down Method 
      Then  User Confirm it by Clicking the Search button and Navigated to the Select Hotel Page
   
@SanityTest
Scenario: User Checking the booking Functionality fo Selecting the Hotel

      Given  User must click the serach button
      When   User must click the radio Button to confirm the Hoteol
      And    User must click the continue button 
      Then   User Confirm it and Navigated to the Book Hotel Page
      
@SanityTest
Scenario: User checking the Booking Functionality to Book a Hotel


      Given  User should click the continue button
      When   User enter First name in the First Name Field
      And    User enter Last Name in the Last Name Field
      And    User Enter Address in the Address Field
      And    User Enter The credit Card Number by using 16digits in the Credit Card Field
      And    User Must select the Credit card type
      And    User Must select Expiry Date by using single drop down method
      And    User Must select Expiry Year by using single drop down method
      And    User must enter the CVV Number in the CVV Number field
      Then   User Confirm it by clicking BookNow button and Navigated to Booking Confirmation Page
        
 
@RegressionTest  
Scenario: User Checking the Fuctionality to log out the Page

       Given  User just click the BookNow button
       When   User must verify the Booking Confirmation page
       And    User must click the Logout button
       Then   user Confirm it and navigated to the Logout Page
      
      
      
      
      
                