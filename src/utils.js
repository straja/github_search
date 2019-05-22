
function get(url, body) {
    return fetch(url+'?'+body, {
        method: 'get',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
    })
      .then(function (data) {
        return data.json();
      })
      .catch(function (error) {
        return error.json();
      });
}

module.exports = {
    get
}