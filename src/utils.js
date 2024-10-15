
function hasInternetConnection() {
    return require('dns').resolve('www.google.com', (err) => !err);
  }
  
  function parseDate(dateStr) {
    return new Date(dateStr.replace(' ', 'T'));
  }
  
  module.exports = {
    hasInternetConnection,
    parseDate,
  };
  