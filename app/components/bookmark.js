import React from 'react';
import Reflux from 'reflux';
import moment from 'moment';

import BookmarkStore from '../stores/bookmark-store';

export default React.createClass({
  mixins: [Reflux.listenTo(BookmarkStore, 'onMatch')],
  onMatch: function(data) {
    console.log(data);
    this.setState({
      match: data.match
    })
  },
  getInitialState: function() {
    return {
      match: ''
    }
  },
  render: function() {
    var created = new Date(this.props.created * 1000);
    var date = moment(created).format('YYYY-MM-DD');

    var title = this.props.title;

    if (this.state.match.length > 0) {
      title = <span dangerouslySetInnerHTML={{
                __html : this.props.title.replace(new RegExp('('+this.state.match+')', "gi"), '<span class="highlight">$1</span>')
              }} />
    }

    return (
      <li>
        <div className='bookmark'>
          <h5 className='title'>{title}</h5>
          <span className='date'>Created @ {date}</span>
        </div>
      </li>
    );
  }
});
