Template.Header.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});
Template.Header.helpers({

});
