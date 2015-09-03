App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.storage.findAll(App.Contacts);
  }
});
