import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    console.log("initializing the rolodex")
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a ContactView for each task
    this.cardList = [];
    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    },
    //These let us know if the model has been updated or if a new model has been added

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "remove", this.removeContact);
  },

  render: function() {
    console.log("rendering the rolodex")

    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {

    card.render();

      // Add that HTML to our contact list
    $("#contact-cards").append(card.render().$el);

    }, this);

    return this; // enable chained calls
  },

  events : {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
    'click .contact-card': 'showModal',
    'click #edit' : 'prepEdit',
    'click .btn-update' : 'updateContact'
  },

  prepEdit : function(event){
    console.log("preparing to update");
    $(".btn-save").hide();
    $(".btn-update").show();
    $("#add-or-edit").html("Update Contact")

    //pre-populate the form with the details of that contact
    $('.contact-form input[name="name"]').val($("#name").html()),
    $('.contact-form input[name="phone"]').val($("#phone").html()),
    $('.contact-form input[name="email"]').val($("#email").html())

    //intake the form info.
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    }
  },

  clearInput : function(event) {
    console.log("clearing form input");
    this.input.name.val('');
    this.input.phone.val('');
    this.input.email.val('');
  },

  updateContact : function(event){
    console.log("updating contact");
    console.log($("#name").html())

    //get the model that goes with this info
    for(var i = 0; i< this.cardList.length; i++){

      if (this.cardList[i].model.get("name") == $("#name").html()){
        console.log("found it!")

         this.cardList[i].model.set("name", this.$('.contact-form input[name="name"]').val())
         this.cardList[i].model.set("email", this.$('.contact-form input[name="email"]').val())
         this.cardList[i].model.set("phone", this.$('.contact-form input[name="phone"]').val())
         console.log(this.cardList[i].model.attributes.name)
         this.render();
      }
    }

    $(".btn-save").show();
    $(".btn-update").hide();
    $("#add-or-edit").html("Add a New Contact")

    this.clearInput()
  },

  showModal : function(event) {
    console.log("showing modal")
    $("#contact-details").show();
//Loop through the collection and if the event.target.text == the name of a model in the collection, give me that model
    for(var i = 0; i< this.cardList.length; i++){

      if (this.cardList[i].model.get("name") == $(event.target).text()){
        console.log("found it!")

        var contactOfInterest = this.cardList[i].model.attributes
        //console.log(this.cardList[i].model)
        //console.log(this.cardList[i].model.attributes)

        var contact = new Contact(contactOfInterest);

        var contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

        var contactOfInterestView = new ContactView({
          model: contact,
          template: contactDetailsTemplate
        });

        $("#contact-details").html(contactOfInterestView.render().$el);
      }
    }
  },

  createContact: function(event) {
    console.log('creating a new contact');
    event.preventDefault();

    var contact = new Contact(this.getInput());

    this.model.add(contact);
    this.render()
   // Clear the input form so the user can add another task
    this.clearInput();
  },

  // Build a contact from the data entered in the form
  getInput: function() {
    console.log("getting input from the form");

    var contact = {
    name: this.input.name.val(),
    phone: this.input.phone.val(),
    email: this.input.email.val()
    };
    return contact;
  },

  addContact: function(contact){
    console.log("adding a contact");

    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card)
  },

});

export default RolodexView;
