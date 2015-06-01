/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    * This test suite includes two three tests:
    * 1) "are defined"
    * 2) "URL defined"
    * 3) "name defined"
    */
    describe('RSS Feeds', function () {
        
        /* Calculate the length of the allFeeds array and assign it
         * to a variable to be used in the following tests
         */
        var allFeedsLen = allFeeds.length;

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeedsLen).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined', function () {
            for (var i = 0; i < allFeedsLen; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };            
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function () {
            for (var i = 0; i <  allFeedsLen; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };            
        });

    });


    /* The menu test suite includes tests verifying to visiblity status
     * of the menu element.  This test suite includes two tests:
     * 1) "is hidden"
     * 2) "is toggled"
     */
    describe('The menu', function () {
        /* This test ensures the menu element is hidden by default by
         * checking if the body tag contains the "menu-hidden" class
         */
         it('is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

        /* test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: 
         * 1) the menu displays when clicked 
         * 2) the menu hides when clicked again.
         */
         it('is toggled', function () {
            
            /* simulate a click by using the trigger function on the menu icon element.
             * The menu icon DOM is accessed through the menu-icon-click class
             */
            $('.menu-icon-link').trigger('click');
            /* Expect menu to be displayed since it's hidden by default*/
            expect($('body').hasClass('menu-hidden')).toBe(false);

            /* Simulate another click on the menu-icon element */
            $('.menu-icon-link').trigger('click');
            /* Expect menu to be hidden since it was already displayed*/
            expect($('body').hasClass('menu-hidden')).toBe(true);

         });

    });         

    /* The "Initial Entries" test suite includes a test to check if an entry is 
     * is loaded and added to the news feed.
     * This suite includes a beforeEach function and one test "are loaded"
     */
    describe('Initial Entries', function () {
        /* The following test ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element 
         * within the .feed container. 
         * since loadFeed() is asynchronous, it will be invoked using Jasmine's 
         * beforeEach function, where the done() function is passed to
         */
        beforeEach(function (done) {
            /* The loadfeed function is called with two parameter passed:
             * the entry element whose value should be between 0 and 3; in
             * this case, the third entry feed (HTML Rocks) is chosen.
             * The second parameter passed is the done function, as the callback, 
             * which will be executed once the feed has been loaded
             */
            loadFeed(2, function () {
                done();
            });
         });

        /* Once the feed has been loaded as signalled by the done() function, 
         * a test is run to ensure that it's not empty by checking the content of
         * the .entry element by accessing the .feed DOM */
         it('are loaded', function (done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
         });

    });      

    /* The "New Feed Selection" includes a test to check if the content of new feeds
     * are loaed.  It includes a beforeEach function as well as a test "is rendered"
     */
    describe('New Feed Selection', function () { 
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var $title1, $content1, $title2, $content2;

         beforeEach(function (done) {
            /* The first entry is loaded by default, here we get save the title
             * and content of the feed
             */
            $title1 = $('.header-title').text();
            $content1 = $('.entry').text();
            /*laod the next feed*/
            loadFeed(1, function () {
                done();
            });      
         });

         /* Once the new feed has been loaded as signalled by the done() function, 
          * a test is run to ensure that the content is not the same as the previous
          * feed
          */
         it('is rendered', function (done) {
            /* Note that the content of the new feed is accessed here to ensure that 
             * the feed has been loaded as indicated by the done() function */
            $title2 = $('.header-title').text();
            $content2 = $('.entry').text();
            /* If both the text of title or content of the old and new feed don't match, 
             * then a new feed was indeed loaded */
            expect($title1 === $title2 || $content1 === $content2).not.toBe(true);
            done();
         });

    });
        
}());
