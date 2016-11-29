//contact.js <-- this model represents a single contact

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
  name: "Anonymous",
  phoneNumber: "206-555-1234",
  email: "mystery@email.com"
  },

  initialize: function(options){
    console.log("Contact created with: " + this.get("name"));
  },


});

export default Contact;
