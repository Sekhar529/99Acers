package stepDefinationFiles;

import java.io.IOException;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import resources.BaseClassForBrowserLaunch;

public class StepDefinationClass extends BaseClassForBrowserLaunch{	
	
	private static HomePage  home;
	
	public StepDefinationClass() throws IOException {
		super();
	}
		
	
	@Before
	public void setUp() throws IOException
	{
		System.out.println("------ I am Before Method ------");
		launchBrowserDriver();
		System.out.println("Browser launched");
		
		
	}
	@After
	public void tearDown() {
		System.out.println("------ I am After Method ------- \n");
		closeTheBrowser();
		System.out.println("Browser closed");
	}
	

@Given("^User landed on acrers home page$")
public void user_landed_on_acrers_home_page() throws Throwable {
	System.out.println("99 acres page lacunched");
	home = new HomePage();
	System.out.println("Object is created for HomePage");
}

@When("^User click on toggle slider button$")
public void user_click_on_toggle_slider_button() throws Throwable {   
	
	home.clickSlideBtn();
}

@Then("^User can able to see products moving$")
public void user_can_able_to_see_products_moving() throws Throwable {
	System.out.println("Products are moving");
   
}
@When("^User type location as \"([^\"]*)\"$")
public void user_type_location_as(String placeName) throws Throwable {
  home.searchForPlot(placeName);
}

@When("^User clicks on serach$")
public void user_clicks_on_serach() throws Throwable {
	home.clickOnSearch();
}

@Then("^User can see all floats under hyderabad$")
public void user_can_see_all_floats_under_hyderabad() throws Throwable {

	System.out.println("there are total "+home.getNoOfPlots());
}
@When("^User clicks on particular flot$")
public void user_clicks_on_particular_flot() throws InterruptedException  {
	home.clickParticularItem();
}

@When("^User clicks on particular flot as \"([^\"]*)\"$")
public void user_clicks_on_particular_flot_as(String nameOfPlot) throws Throwable {
	driver.findElement(By.xpath("//b[contains(text(),'"+nameOfPlot+"')]")).click();
	//home.clickParticularItem();
}

@Then("^User navigates to details page$")
public void user_navigates_to_details_page() throws Throwable {
	home.checkDetailsPage();
	
/*
@When("^User clicks on homLoans link$")
public void user_clicks_on_homLoans_link() throws Throwable {
   home.clickHomeLoansLink();
}

@Then("^User is navigates to HomeLoansPage$")
public void user_is_navigates_to_HomeLoansPage() throws Throwable {
 System.out.println("User navigated to HomeLoan page");
}

@When("^User click on check Elgibility$")
public void user_click_on_check_Elgibility() throws Throwable {
	System.out.println("User clicks on check eligibility link");
}

@When("^User provides necessary details and clicks on Go$")
public void user_provides_necessary_details_and_clicks_on_Go() {
	System.out.println("User clicked on go");
}*/
	
	
  
}

	

	
}
