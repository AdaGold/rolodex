//rolodex.js <--- will contain the code to represent a collection of Contacts
import Contact from 'app/models/contact';
import Backbone from 'backbone';

const Rolodex = Backbone.Collection.extend({
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
  model: Contact
});

export default Rolodex;
