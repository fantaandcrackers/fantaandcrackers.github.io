var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = on_resources_load;

function on_resources_load() {
  var hash = $(location).attr('hash');
  if (hash) {
    if (hash.slice(1) == 'loadcookies') {
      $("body").html("<div style='display:flex; align-items:center; justify-content:center;'><h3>Logging you in...</h3></div>");
      closeWindow();
    }
    else if (hash.slice(1) == 'load-forgot-password') {
      $("body").html("<div style='display:flex; align-items:center; justify-content:center;'><h3>Loading...</h3></div>");
      closeWindow();
    }
    else {
      encoded_hash = hash.slice(5);
      credentials = atob(encoded_hash).split(',')
      $('#txtEmailAddress').val(credentials[0]);
      $('#txtPassword').val(credentials[1]);
      $('#butImageLogin').click();
    };
  };
};

function closeWindow() {
  setTimeout(function() {
    window.close();
  }, 600);
};
