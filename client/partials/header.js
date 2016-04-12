Template.Header.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});


Template.Header.onRendered(function(){
  console.log('hello');
  $(".button-collapse").sideNav({
    closeOnClick:true
  });
});
