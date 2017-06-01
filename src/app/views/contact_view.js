import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
     initialize: function( params ) {
     this.template = params.template;
     this.listenTo( this.model, 'change', this.render );
     // this.$el.addClass('task-item column column-block')
},
render: function() {
     var compiledTemplate = this.template(this.model.toJSON());
     this.$el.html( compiledTemplate );
     return this;
},
events: {
     // 'click button.alert': 'deleteTask',
     // 'click button.success': 'completeTask'
},
deleteContact: function( event ) {
     this.model.destroy();
},
// completeTask: function(e) {
//      console.log('test');
//      this.model.toggleComplete();
// }
});

export default ContactView;
