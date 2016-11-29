//contact_view.js <--  This view handles logic for a single contact

import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.contact = options.contact;
  console.log(this.contactInfo)
  this.template = options.template;
  //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var html = this.template(this.contact)
    //this.delegateEvents();
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
