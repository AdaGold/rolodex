import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactInfo = [
  {
    name: "Harry",
    phone: "206-867-5309",
    email: "harry@hogwarts.edu"
  },
  {
    name: "Ron",
    phone: "206-555-5656",
    email: "ron@hogwarts.edu"
  },
  {
    name: "Hermione",
    phone: "286-729-0064",
    email: "hermione@hogwarts.edu"
  }
];


$(document).ready(function() {

$("#contact-details").hide();
$(".btn-update").hide();

$(document).mouseup(function (e)
{
    var container = $("#contact-details");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});


  var rolodex = new Rolodex(contactInfo);

  var rolodexView = new RolodexView({
    el: $('#application'),
    model: rolodex
  })

  rolodexView.render();
  //
  // var application = new Application(contactInfo);
  //
  // var appView = new ApplicationView({
  //  model: contactInfo
  // });
  //
  // applicationView.render();


  //----------Wave 1: to render one contact from static data------//
    // var harry = new Contact(contactInfo[0]);
    // var contactTemplate = _.template($('#tmpl-contact-card').html());
    // var contactElement = $('#contact-cards');
    // var harryView = new ContactView({
    //   model: harry,
    //   template: contactTemplate
    // });
    // $("#contact-cards").append(harryView.render().$el);
});
