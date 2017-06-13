var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document.body).remove();
$(document.body).append(
  $('<iframe style="height:100%; width:100%;" src="https://secure.web-loans.com/secure.aspx?p=7&u=cornerstone.web-loans.com"></iframe>')
  );