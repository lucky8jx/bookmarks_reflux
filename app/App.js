import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './components/BookmarkList';
import SearchBox from './components/searchBox';

ReactDOM.render(
  (
    <div>
      <SearchBox />
      <BookmarkList />
    </div>
  ),
  document.getElementById('content')
);
