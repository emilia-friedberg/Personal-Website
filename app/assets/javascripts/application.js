// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function () {
  $("a[href='#about']").click(function () {
    event.preventDefault();
    $('#about').css({'display': 'block'});
    $('#projects').css({'display': 'none'});
    $('#contact').css({'display': 'none'});
    $("a[href='#about']").addClass("active");
    $("a[href='#projects']").removeClass("active");
    $("a[href='#contact']").removeClass("active");
  });
  $("a[href='#projects']").click(function () {
    event.preventDefault();
    debugger;
    $('#projects').css({'display': 'block'});
    $('#about').css({'display': 'none'});
    $('#contact').css({'display': 'none'});
    $("a[href='#projects']").addClass("active");
    $("a[href='#about']").removeClass("active");
    $("a[href='#contact']").removeClass("active");
  });
  $("a[href='#contact']").click(function () {
    event.preventDefault();
    $('#contact').css({'display': 'block'});
    $('#projects').css({'display': 'none'});
    $('#about').css({'display': 'none'});
    $("a[href='#contact']").addClass("active");
    $("a[href='#projects']").removeClass("active");
    $("a[href='#about']").removeClass("active");
  });
});
