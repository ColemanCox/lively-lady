import Ember from 'ember';

export default Ember.Component.extend({
  modelName: 'contact',
  modelProperties: ['firstName', 'lastName', 'emailAddress', 'phoneNumber'],
});
