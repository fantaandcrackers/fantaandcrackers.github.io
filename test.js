$( document ).ready(function() {
  document.body.style.backgroundColor = "red";


    $("#iframe").on("load", function () {
        // var $head = $("#iframe").contents().find("head"); 

        var url = "{% static 'shared/stylesheets/base.css' %}";
        $("head").append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" } ));
    });
});