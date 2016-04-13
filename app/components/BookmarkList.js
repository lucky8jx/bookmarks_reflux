import React from 'react';
import Reflux from 'reflux';

import BookmarkStore from '../stores/bookmark-store';
import Bookmark from './bookmark';

export default React.createClass({
  mixins: [Reflux.connect(BookmarkStore, 'bookmarks')],

  getInitialState: function() {
    return {
      bookmarks: {
        data: []
      }
    };
  },

  render: function() {
    var list = [];
    this.state.bookmarks.data.forEach(function(item, index) {
      list.push(<Bookmark key={index} title={item.title} created={item.created} />);
    });

    return <ul>{list}</ul>;
  }
});
