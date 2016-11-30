import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';
import Rolodex from 'app/collections/rolodex.js';


const RolodexView = Backbone.View.extend({
  initialize: function(options){

    console.log(this.$('.btn_save'));
    console.log($('.btn_save'));

    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]'),
    };

    this.listElement = $('#contact-cards');
    this.cardList = [];

    options.model.forEach(function(contact){
      this.addContact(contact);
    }, this);

    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "update", this.render);
  },

  events: {
    'click #save-button': 'createContact'
  },

  createContact: function(event){
    event.preventDefault();
    var contact = new Contact(this.getInput());

    this.model.add(contact);
    
  },
  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    }
    return contact;
  },
  addContact: function(contact){
    var cardList = this.cardList;
    var card = new ContactView({
      el: this.listElement,
      model: contact
    });
    cardList.push(card);
    console.log(cardList);
  },
  render: function(){

    this.listElement.empty();

    this.cardList.forEach(function(card){

      this.listElement.append(card.render().$el);
      }, this);

    return this;

  }

});

export default RolodexView;
