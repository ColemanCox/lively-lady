import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(contact, data) {
      contact.setProperties(data);


      contact.save().then(() => {
        this.transitionTo('contacts.show', contact);
      });
    }
  }
});
