import Reflux from 'reflux';
import $ from 'jquery';

import BookmarkActions from '../actions/bookmark-actions';
import Utils from '../utils/fetch-client';

export default Reflux.createStore({
  listenables: [BookmarkActions],

  init: function() {
    this.onFetch();
  },

  onFetch: function() {
    const self = this;
    Utils.fetch('http://localhost:3000/bookmarks').then(function(bookmarks) {
      // console.log(bookmarks);
      self.trigger({
        data: bookmarks,
        match: ''
      });
    });
  },

  onSearch: function(keyword) {
    var self = this;
    Utils.fetch('http://localhost:3000/bookmarks?title_like=' + keyword).then(function(bookmarks) {
      // console.log(bookmarks,keyword);
      self.trigger({
        data: bookmarks,
        match: keyword
      });
    });
  }
});
