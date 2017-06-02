import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js'

var YolodexView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.template;
          this.listenTo(this.model, 'update', this.render);
     },
     render: function() {
     this.$('main').empty();
          var that = this;
          this.model.each(function( contact ) {
               var firstContactView = new ContactView({
                    model: contact,
                    template: that.template,
                    tagName: 'li'
               });
          that.$('#contact-cards').append(firstContactView.render().$el);
     });
          return this;
     },
     events: {
          'click #saveContact': 'saveContact'
     },
     getFormData: function() {
          var formName = this.$('#name').val();
          this.$('#name').val('');

          var formEmail = this.$('#email').val();
          this.$('#email').val('');

          var formPhone = this.$('#phone').val();
          this.$('#phone').val('');

          return {
               name: formName,
               email: formEmail,
               phone: formPhone
          };
     },
     saveContact: function() {
          var firstContact = new Contact(this.getFormData());
          this.model.add(firstContact);
     }

});

export default YolodexView;
