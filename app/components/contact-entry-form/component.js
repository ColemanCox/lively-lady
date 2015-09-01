import Ember from 'ember';
import Resetable from 'lesson-2/mixins/resetable-form';

export default Ember.Component.extend(Resetable, {
  modelName: 'contact',
  modelProperties: ['firstName', 'lastName', 'emailAddress', 'phoneNumber'],
});
