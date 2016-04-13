import $ from 'jquery';
import Promise from 'promise';

export default {
  fetch: (url) => {
    var promise = new Promise(function(resolve, reject) {
      $.get(url).done(resolve).fail(reject);
    });

    return promise;
  }
};
