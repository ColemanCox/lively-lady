import Ember from 'ember';
import DS from 'ember-data';


export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  emailAddress: DS.attr('string'),


fullName: Ember.computed('firstName', 'lastName', function() {
  return `$(this.get('firstName')} ${this.get('lastName')} ${this.get('phoneNumber')} ${this.get('emailAddress')}`;
}),

});

var store = this.store;
var contact = store.createRecord('contact', {
  fullName: '',
  phoneNumber: '',
  emailAddress:'',
});

store.find('contact', 1).then(function(contact) {
  contact.set(contact);
  contact.deleteRecord();
  contact.get('isDeleted');
  contact.save();
});

store.find('contact', 2).then(function (contact) {
  contact.destroyRecord();
});


