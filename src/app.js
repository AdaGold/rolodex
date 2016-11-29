import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';

var contactInfo = [
  {
    name: "Ada Lovelace",
    phoneNumber: "206-555-1234",
    email: "ada@email.com"
  }
];


$(document).ready(function() {
  var contactTemplate = _.template($('#tmpl-contact-card').html());

  var contactElement = $('#contact-cards');

  var oneContact = new ContactView({
  contact: contactInfo[0],
  template: contactTemplate
  });

  contactElement.append(oneContact.render().$el);

  // var application = new Application(contactInfo);
  //
  // var appView = new ApplicationView({
  //   el: '#application',
  //   contactInfo: contactInfo
  // });

  //application.render();
});
