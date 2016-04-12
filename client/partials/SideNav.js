Template.SideNav.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

Template.SideNav.onRendered(function(){
  var self = this;
  self.autorun(function(){
    $(".button-collapse").sideNav();
  });
});
