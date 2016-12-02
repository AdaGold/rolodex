import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
      
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
