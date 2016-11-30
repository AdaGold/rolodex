import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';
import Rolodex from 'app/collections/rolodex'



var contactList = [{
  name: "Justin Bieber",
  email: "imma@belieber.com",
  phone: "112-523-3875"
},{
  name: "Selena Gomez",
  email: "s@gomez.com",
  phone: "505-707-3135"
},{
  name: "Mike Easter",
  email: "seat@warmer.com",
  phone: "918-987-7715"
}
];

// var application = new Application();

// var ContactView = new ContactView({
//   el: '#application',
//   model: contact
// });

$(document).ready(function(){
  // var contact = new Contact(contactList[0]);

  var contacts = new Rolodex(contactList)
  var application = new RolodexView({
    el: $('#application'),
    model: contacts
  })


  application.render();
  // var application = new
  // var appView = new ContactView({
  //   // el: $('#contact-cards'),
  //   // model: contact
  // });
  //
  // appView.render()
});
