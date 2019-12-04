package resources;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClassForBrowserLaunch {
	
	public static WebDriver driver;	
	private static Properties prop;
	private static final String propertyFilePath = "C:\\Users\\Sekhar\\git\\99Acers\\configFiles\\config.properties";
	
	public BaseClassForBrowserLaunch() throws IOException {
		
		prop = new Properties();
		
		FileInputStream fis = new FileInputStream(propertyFilePath);
		BufferedInputStream bis = new BufferedInputStream(fis);
		
		if(!bis.equals(null)){
			prop.load(bis);
		}
		else {
			System.out.println("Property file: config.properties not found in class path");
		}
		//prop.load(bis);
	}
	
	public void launchBrowserDriver() {
		
		String browserName 		=	 prop.getProperty("Browser");
		String applicationURL 	=    prop.getProperty("URL");
		
		if(browserName.equalsIgnoreCase("CH")) 
		{
			System.setProperty("webdriver.chrome.driver","C:\\Users\\Sekhar\\git\\99Acers\\Libraries\\chromedriver.exe" );
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			
			driver.get(applicationURL);
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);						
		}
		
		else if(browserName.equalsIgnoreCase("IE")) 
		{
			System.setProperty("webdriver.ie.driver","../Maven/libraries/IEDriverServer.exe" );
			
			InternetExplorerOptions options = new InternetExplorerOptions();
			options.ignoreZoomSettings().introduceFlakinessByIgnoringSecurityDomains().withInitialBrowserUrl("https://www.99acres.com");
						
			driver = new InternetExplorerDriver(options);
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			
			driver.get(applicationURL);
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);						
		}
		

		else if(browserName.equalsIgnoreCase("FF")) 
		{
			System.setProperty("webdriver.gecko.driver","../Maven/libraries/geckodriver.exe" );
			
			FirefoxOptions options = new FirefoxOptions();
			options.setLegacy(true);
			
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			
			driver.get(applicationURL);
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);						
		}
	}
	
	public void closeTheBrowser() {
		driver.close();
		driver.quit();
	}
	
	public void waitForElement(WebElement ele) {
		WebDriverWait wait = new WebDriverWait(driver, 100);
		wait.until(ExpectedConditions.elementToBeClickable(ele));
	}

}
