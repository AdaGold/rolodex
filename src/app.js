import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact'

var contactInfo = [
  {
    name: "Harry",
    phoneNumber: "206-555-1234",
    email: "harry@hogwarts.edu"
  }
];


$(document).ready(function() {
  var adaLovelace = new Contact(contactInfo[0]);
  console.log("ContactInfo", contactInfo[0])


  var contactTemplate = _.template($('#tmpl-contact-card').html());

  var contactElement = $('#contact-cards');

  var adaContact = new ContactView({
    model: adaLovelace,
    template: contactTemplate
  });
  $("#contact-cards").append(adaContact.render().$el);
  // adaContact.render();

  // contactElement.append(adaLovelace.render().$el);
  //
  // var application = new Application(contactInfo);
  //
  // var appView = new ApplicationView({
  //  model: contactInfo
  // });
  //
  // application.render();
});
