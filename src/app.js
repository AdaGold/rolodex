import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js'
import Yolodex from './app/collections/yolodex.js'
import ContactView from './app/views/contact_view.js'
import YolodexView from './app/views/yolodex_view.js'

var contactData = [
     {
          name: 'Princess Leia',
          email: 'princess@therebellion.com',
          phone: '+3 (333) 333-3333'
     }, {
          name: 'Darth Vadar',
          email: 'Darth@theempire.com',
          phone: '+1 (111) 111-1111'
     }, {
          name: 'Han Solo',
          email: 'han@themilleniumfalcon.com',
          phone: '7+ (777) 777-7777'
     }
];

var firstYolodex = new Yolodex(contactData);

var getFormData = function() {
     var formName = $('#name').val();
     $('#name').val('');

     var formEmail = $('#email').val();
     $('#email').val('');

     var formPhone = $('#phone').val();
     $('#phone').val('');

     return {
          title: formTitle,
          description: formDescription,
          completed: formCompleted
     };
};


$( document ).ready( function() {

     var firstYolodexView = new YolodexView({
          model: firstYolodex,
          template: _.template($('#tmpl-contact-card').html()),
          el: 'main'
     });

     firstYolodexView.render();
});
