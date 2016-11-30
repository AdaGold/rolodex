import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.model = options.model

    this.template = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('.contact-card');
  },
  render: function(){
    this.delegateEvents();
    this.listElement.empty();


    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },


});

export default ContactView;
