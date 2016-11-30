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
      //this.$('.new-task input[name="title"]')
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    },
    //These let us know if the model has been updated or if a new model has been added
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "remove", this.removeContact);
  },

  render: function() {
    console.log("Rendering the rolodex")

    this.listElement.empty(); //when we do this, it takes all of the events off of those objects as well, so we need to re-assign the events with delegateEvents in the Task View file in the render function

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {

      card.render();

      // Add that HTML to our task list
       $("#contact-cards").append(card.render().$el);
      //this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  },

  events : {
  'submit .contact-form': 'createContact',
  'click .btn-cancel': 'clearInput'
  },

  clearInput : function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    console.log("this.input.name in clearInput", this.input.name )
    this.input.phone.val('');
    this.input.email.val('');
  },

  createContact: function(event) {
    console.log('createContact called');
    event.preventDefault();

      var contact = new Contact(this.getInput());
   // Add the new task to our list of tasks
      // this.addTask(task); <-- we don't need to add the view here because of...the event that fires called "add" that we're listening for, so when that event happens, everything is updated
      this.model.add(contact);

   // Clear the input form so the user can add another task
   this.clearInput();
  },

  // Build a contact from the data entered in the form
  getInput: function() {
    console.log("getting input from the form");
    console.log("Form input name: ", this.input);
    var contact = {
    name: this.input.name.val(),
    phone: this.input.phone.val(),
    email: this.input.email.val()
  };
  return contact;
},

addContact: function(contact){

  var card = new ContactView({
    model: contact,
    template: this.contactTemplate
  });
  this.cardList.push(card)
},

removeContact : function(model){
  //When remove event fires, it sends the model, the collection it was removed from and the options you set
  //Loop through all of the views in cardList and see if the model associated with that model is the same as the model that was passed in from the remove event
  var filteredList = [];

    for(var i = 0; i< this.cardList.length; i++){
      if (this.cardList[i].model == model) {
        console.log("found it!")
      }
      else {
      filteredList.push(this.cardList[i])
      }
    }
  this.cardList = filteredList;
}
});

export default RolodexView;
