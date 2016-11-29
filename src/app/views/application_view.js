import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    //
    // // Compile a template to be shared between the individual contacts
    // this.contactTemplate = _.template($('#tmpl-contact-card').html());
    //
    // // Keep track of the <ul> element
    // this.listElement = this.$('#contact-cards');
    //
    // // Create a ContactView for each task
    // this.cardList = [];
    // this.model.forEach(function(contact) {
    //   this.addContact(contact);
    // }, this);
  },

  render: function() {
    return this;
  },

  addContact: function(contact){
    var card = new ContactView({
      model: contact,
      template: this.taskTemplate
    });
    this.cardList.push(contact)
  },

});

export default ApplicationView;
