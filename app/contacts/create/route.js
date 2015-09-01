import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return this.store.createRecord('contact');
  },

  actions: {
    save: function(contact, data) {
      contact.setProperties(data);

      contact.save().then(() => {
        this.transitionTo('contacts.index');
      });
    }
  }
});

