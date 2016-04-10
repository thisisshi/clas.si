Template.NewClass.onRendered(function(){
  var firstEmail = $('input[name="members.0.email"]')
  firstEmail.val(Meteor.user().emails[0].address);
  firstEmail.children.label.addClass("active");
})
