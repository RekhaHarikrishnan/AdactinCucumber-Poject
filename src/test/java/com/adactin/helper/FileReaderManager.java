package com.adactin.helper;

public class FileReaderManager {
	public FileReaderManager() {
		 
	}
	public static FileReaderManager getInstanceFR() {
		FileReaderManager fr = new FileReaderManager();
		return fr;
		
	}
	
	//ConfigurationReader constructor Object

	public ConfigurationReader getInstanceCR() throws Throwable {
		ConfigurationReader cr = new ConfigurationReader();
        return cr; 
	}
}
