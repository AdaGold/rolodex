//contact.js <-- this model represents a single contact

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
  name: "Anonymous",
  phone: "default phone",
  email: "mystery@email.com"
  },

  initialize: function(options){
    console.log("making a new model for " + this.get("name"));
  },


});

export default Contact;
