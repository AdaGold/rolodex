//contact_view.js <--  This view handles logic for a single contact

import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.contact = options.contact;
  this.template = options.template;
  console.log("making a new view for " + this.model.get("name"))
  },

  render: function() {

    var html = this.template(this.model.toJSON());
    this.delegateEvents();
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
