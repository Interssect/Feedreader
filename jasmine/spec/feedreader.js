// feedreader.js

$(function() {
    // first testing suite
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
           allFeeds variable has been defined and that it is not
           empty. */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Tests that loops through each feed
           in the allFeeds object and ensures 
		   it has a URL defined and that the URL is not empty. */
        it('URL defined and not empty', function(){
			allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);		
			});					
		});
          
        /* Tests that loops through each feed
           in the allFeeds object and ensures it has a name defined
           and that the name is not empty. */
        it('name defined and not empty', function(){
			allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);			
		   });		
       });
   });
	
    //test suite: "The menu" 
    describe('The menu', function() {        
        // Test that ensures the menu element is hidden by default.
         it('menu is hidden', function(){
			 expect($('body').hasClass('menu-hidden')).toBe(true);
			  });
         /* Test that ensures the menu changes
            visibility when the menu icon is clicked. */
		 it('visibility on icon click', function(){
			 //show menu
		    $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
			 //hide menu
            $('a.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(true);	 
		 });
	});
    // Test suite "Initial Entries" 
    describe('Initial Entries', function() {    
        /* Test that ensures when the loadFeed
           function is called and completes its work, there is at least
           a single .entry element within the .feed container. */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

	
    // Test suite "New Feed Selection" 
    describe('New Feed Selection', function() { 
		let feed;
        /* Test that ensures when a new feed is loaded
           by the loadFeed function that the content actually changes. */
		beforeEach(function(done){
			loadFeed(0, function(){
				// feed
				feed = $('.feed').html();
				// new feed
				loadFeed(1, done);				
			});
		});
		it('content changes', function(){
			expect($('.feed').html()).not.toBe(feed);		
		 });
	  });		
}());
