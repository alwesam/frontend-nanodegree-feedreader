# Overview

A number of test suites with test cases has been added to test the feedreader application.  The test suites test the code

## Requirements

- A web broswer with Javascript enabled
	- This application was tested on the following web browsers:
		- Chrome version 41
		- IE version 11
		- Firefox version version 37

## Running the Application

1. Download the [project files](http://github.com/alwesam/frontend-nanodegree-feedreader).
2. The directory structure should be as follows:
	* css/
		- icommon.css
		- normalize.css
		- style.css
	* fonts/
	* jasmine/
		- lib/
			- jasmine-2.12/
		- spec/
			- feedreader.js
	* js
		- app.js
	* index.html
	* README.md
3. Launch *index.html* in a web browser and check towards bottom of the file.  You should find Jasmine 2.1.2 up and running.
4. You should find 7 specs tested across 4 test suites.   All tests should be passing
5. You may test a single suite or spec by clicking on it. see the following section for more details.

## Test Suites

The following test suites and specs should be displayed as follows
* RSS Feeds
	- are defined : tests that RSS feeds are defined and not empty
	- URL defined: tests that the URL links of the feeds are defined and not empty
	- name defined: tests that the names of the feeds are defined and not empty
* The menu
	- is hidden: tests that the menu is hidden by default
	- is toggled: tests that the menu visibility is toggled by clicking on the menu item
* Initial Entires
	- are loaded: tests that entries are loaded and added to the news feed
* New Feed Selection
	- is rendered: tests that new entries are loaded have different content from previous feed
