import _ from 'underscore';
import $ from 'jquery';
import Contact from './app/models/contact.js'
import Yolodex from './app/collections/yolodex.js'

var contact = new Contact({
     name: 'Princess Leia',
     email: 'princess@therebellion.com',
     phone: '+3 (333) 333-3333'
});

// var myTask = new Task({
//      title: 'Create a Model.',
//      description: 'Extend Backbone.Model.',
//      completed: false
// });

var render = function(contact) {
     var template_text = $('#tmpl-contact-details').html();
     var templateObject = _.template(template_text);
     var compiledHTML = templateObject(contact.toJSON());
     $('main').append(compiledHTML);
};
