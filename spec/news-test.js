'use strict';

describe('News', function() {

    let news;

    beforeEach(function() {
        news = new News();
    });

    it('displays the news', function() {
        expect(news.getCurrentNews()).toBe(true);
    });

});