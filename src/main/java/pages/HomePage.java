package pages;


import java.io.IOException;
import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import resources.BaseClassForBrowserLaunch;

public class HomePage extends BaseClassForBrowserLaunch
{
	
	@FindBy(xpath ="//button[@class='slide-prev slide-arrow']")
	private WebElement slidebtton;
	 
	@FindBy(xpath="//input[@id='keyword']")
	private WebElement searchBox;
	
	@FindBy(xpath="//input[@type='submit' and @value='Search']")
	private WebElement searchButton;
	
	@FindBy(xpath="//div[@class='Nbutton activeButton']")
	private WebElement alertOkayBtn;
	
	@FindBy(xpath="//h1[@class='tpdlrd_h1 f12 fwn']/b")
	private WebElement noOfPlots;
	
	//@FindBy(xpath="//div[@class='lcol_new' and @xpath='1']//div[2]")
	@FindBy(xpath="//body/div[contains(@class,'c content mTopFixLFT')]/div[contains(@class,'srp-side-bar-R')]/div[@id='results']/div[contains(@class,'lcol_new')]/div[2]")
	private WebElement clickParticualitem;
	
	@FindBy(xpath="//a[@id='homeLoan']")
	private WebElement homeLoansLink;
	
	public HomePage() throws IOException {
		super();
		PageFactory.initElements(driver, this);
	}
	
//---------------------- Page Actions----------------------------------------
	
	public String getHomePageTitle() {
		return driver.getTitle();
	}
	
	public void clickSlideBtn() throws InterruptedException {

		WebElement ele = driver.findElement(By.cssSelector("div.__slider-container"));
		waitForElement(ele);
		//JavascriptExecutor js = (JavascriptExecutor) driver;
		//js.executeScript("arguments[0].onmouseover()", ele);
		//Thread.sleep(200);
		Actions act = new Actions(driver);
		act.moveToElement(ele);
		act.click().build().perform();
		Thread.sleep(100);	
		int noOfele1 = driver.findElements(By.xpath("//div[@class='slide-track']/child::div")).size();
		System.out.println("no of div tags for slider "+noOfele1);
		
		//act.moveToElement(driver.findElement(By.xpath("//div[@class ='slick-slide slick-current slick-active']"))).click().build().perform();
		
		
	}
	
	public void searchForPlot(String placeName) throws InterruptedException {		
		//wait.until(ExpectedConditions.elementToBeClickable(searchBox));
		waitForElement(searchBox);
		searchBox.click();
		searchBox.sendKeys(placeName);
	}
	public void clickOnSearch() throws InterruptedException {
		waitForElement(searchButton);
		searchButton.click();
		Thread.sleep(100);	
	}

	public String getNoOfPlots() throws InterruptedException {
		Thread.sleep(500);
		//driver.findElement(By.xpath("//input[@id='INTL_MOB_LENGTH']")).click();
		driver.findElement(By.xpath("//div[@class='newNdgeCochMrk hide']//img")).click();
		Thread.sleep(100);
		//driver.findElement(By.xpath("//div[@class='DialogBoxConfirm']/div[4]/div[1]")).click();
		waitForElement(noOfPlots);
		return noOfPlots.getText();
	}
	
	public void clickParticularItem() throws InterruptedException {
		Thread.sleep(500);
		//WebElement ele2 = driver.findElement(By.xpath("//div[@class='newNdgeCochMrk hide']//img"));
		//waitForElement(ele2);
		//driver.findElement(By.xpath("//div[@class='DialogBoxConfirm']/div[4]/div[1]")).click();
		//driver.findElement(By.xpath("//input[@id='INTL_MOB_LENGTH']")).click();
		//waitForElement(clickParticualitem);	
		clickParticualitem.click();
	}
		
	
	public void checkDetailsPage() throws InterruptedException {
		
		String parentWindow = driver.getWindowHandle();
		String titleOfWindow = "DSR Infrastructure DSR Fortune Prime Madhapur Hyderabad - 99acres.com";
		waitForElement(clickParticualitem);
		clickParticualitem.click();
		Thread.sleep(100);
		Set<String> childWindows = driver.getWindowHandles();
		Iterator<String> itr = childWindows.iterator();
		while(itr.hasNext())
		{
			driver.switchTo().window(itr.next());
			if(driver.getTitle().equalsIgnoreCase(titleOfWindow))
			{
				String titleOfItem = driver.findElement(By.xpath("//div[@class='project-name']")).getText();
				System.out.println("Title of the item selected is: "+ titleOfItem);
			}
		}
		
	}
	
	public void clickHomeLoansLink() throws InterruptedException {
		String homeloanTitle ="Home Loan - Apply Housing Loan - Home Finance - 99acres.com";
		String parent = driver.getWindowHandle();
		waitForElement(homeLoansLink);
		homeLoansLink.click();
		Thread.sleep(100);
		Set<String> windws = driver.getWindowHandles();
		System.out.println("no of windows after home loan clicked "+windws.size());
		for(String s : windws)
		{
			driver.switchTo().window(homeloanTitle);
		}
		Thread.sleep(100);
		driver.findElement(By.xpath("//div[@class='hamList']//a[contains(@href,'calculate')]"));
		WebElement loanAmountTxt = driver.findElement(By.xpath("//div[@class='eoiLyr_inpWrap ']//input[@id='loanAmountInput']"));
		loanAmountTxt.clear();
		loanAmountTxt.sendKeys("20,00,000");
		
		driver.findElement(By.xpath("//div[@class='_99HomeLoanForm']//div[2]//input[1]")).clear();
		driver.findElement(By.xpath("//div[@class='_99HomeLoanForm']//div[2]//input[1]")).sendKeys("30");
		
		driver.findElement(By.xpath("//button[contains(text(),\"Let's get started\")]")).click();
		
	}
}