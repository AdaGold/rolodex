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
     this.$('#contact-cards').empty();
          var that = this;
          this.model.each(function(contact) {
               var contactView = new ContactView({
                    model: contact,
                    template: that.template,
                    tagName: 'li'
               });
          that.$('#contact-cards').append(contactView.render().$el);
     });
          return this;
     },
     events: {
          // 'click #add-task': 'addTask'
     },
     // getFormData: function() {
     //      var formTitle = this.$('#title').val();
     //      this.$('#title').val('');
     //
     //      var formDescription = this.$('#description').val();
     //      this.$('#description').val('');
     //
     //      var formCompleted = this.$('#completed-checkbox').is(":checked");
     //      this.$('#completed-checkbox').prop('checked', false);
     //
     //      return {
     //           title: formTitle,
     //           description: formDescription,
     //           completed: formCompleted
     //      };
     // },
     // addTask: function() {
     //      var task = new Task(this.getFormData());
     //
     //      this.model.add(task);
     // }

});

export default YolodexView;
