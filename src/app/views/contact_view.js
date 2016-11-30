//contact_view.js <--  This view handles logic for a single contact

import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.contact = options.contact;
  this.template = options.template;
  console.log("We made a new view!")
  console.log("this.model for View: ", this.model)

  //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    console.log("Name to render: ", this.model.get("name"))

    //var html = this.template({task: this.model.toJSON()}) <-- example from live code

    var html = this.template(this.model.toJSON());
    console.log("html: ", html)
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
