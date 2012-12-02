function changeSrc() {
  var new_url = document.getElementById("url").value;
  if (new_url.match(/http:\/\/.+/)) {
    new_url;
  } else if (new_url.match(/\w+\.\w{3}/)) {
    new_url = "http://" + new_url;
  } else {
    var search_params = new_url.split(' ').join('+');
    new_url = "http://www.bing.com/search?q=" + search_params;
  };
  document.getElementById("display").src = new_url
  document.getElementById("url").value = new_url
}
