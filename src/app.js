import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';



var contactList = [{
  name: "Justin Bieber",
  email: "imma@belieber.com",
  phone: "585-507-3425"
}];

// var application = new Application();

// var ContactView = new ContactView({
//   el: '#application',
//   model: contact
// });

$(document).ready(function(){
  var contact = new Contact(contactList[0]);

  var appView = new ContactView({
    el: $('#contact-cards'),
    model: contact
  });

  appView.render()
});
