# Rolodex
Create a single-page application using Backbone that will track contact information for you about your friends!

## Learning Goals
- Introduction to Backbone
- Using an MVC Framework with JS
- Continue utilizing jQuery, HTML & CSS knowledge
- Create a responsive, dynamic look & feel

## Requirements
Your application shall be a single-page application that has interactive features, allowing the user to view a list of contacts, add new contacts into it, and view the details for a selected contact. Optionally your application will support editing the data for the selected contact.

### Wave 1
When wave 1 is complete your application should:
- Have a Backbone **Model** subclass called `Contact`. This model should have these attributes:
  - Name
  - E-mail address
  - Phone number
- Have a single instance of `Contact` created from static data.
- Have a Backbone **View** subclass called `ContactView`.
- Display a single contact card on the contact list. This contact card should:
  - Be implemented by using `Contact` and `ContactView` together.
  - Show the name only, no other contact details.

### Wave 2
When wave 2 is complete your application should:
- Have a Backbone **Collection** subclass called `Rolodex`. This collection should use the model `Contact`.
- Display a list of contact cards (as in Wave 1) using the `Rolodex` collection. This list should update when a new entry is added to collection.
- Have a form for creating new contacts. The form should:
  - Have inputs fields for each attribute on `Contact`.
  - Have "Save" and "Cancel" buttons.
  - When "Save" is clicked:
    - Create a new `Contact` instance from the inputs.
    - Add that new instance to the `Rolodex` collection.
    - Clear all input fields.
  - When "Cancel" is clicked:
    - Clear all input fields.

### Wave 3
In this wave we will implement a **modal** element for viewing the full details of a single contact selected from the contacts list.

A modal (or modal window) is a section of your UI that appears on top of the rest of the page, and "steals the focus" from the page beneath it. When another section of the page is clicked upon, the modal disappears. One example of a modal is the [user registration/sign-in form on imgur](http://ui-patterns.com/patterns/modal-windows/examples/16841). You can see many more examples of modals [on this webpage](http://ui-patterns.com/patterns/modal-windows/examples).

When wave 3 is complete your application should:
- Allow the user to select a `Contact` by clicking upon its card in the contacts list.
- Have a contact details modal. It should:
  - Be displayed when a contact card is selected.
  - Use the provided template for contact details.
  - Fill in the template with attributes from the selected `Contact`.
  - Be removed from the page when any other part of the page is clicked upon.

### Optional Enhancements
- Add the functionality that will allow you to **edit** the Contact
  - This should be triggered from the contact details modal, using an edit button or some other edit method
  - When a Contact is updated, the contact list should be updated, if necessary

## Project Scaffold
You have been provided with an application that has some of the structure that you will need to get started. Note that Backbone is much less structured than our Rails applications, so we are providing some of this structure for you. You would not normally have this structure when starting a new Backbone application.

Your folder structure is set up with the majority of the files that you will need to edit in the `src` folder. Each folder inside of `src` contains files that will get you started.

`collections` folder: 
- `rolodex.js`: will contain the code to represent a collection of Contacts

`models` folder:
- `application.js`: This model represents the overall application
- `contact.js`: This model represents a single contact

`views` folder:
- `application_view.js`: This view handles logic for the overall application
- `contact_view.js`: This view handles logic for a single contact
- `rolodex_view.js`: This view handles logic for the rolodex collection
