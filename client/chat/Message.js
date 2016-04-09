Template.Message.helpers({
  getUserEmail: function(userId) {
    var messageAuthor = Meteor.users.findOne({
      _id: userId
    });
    return messageAuthor.emails[0].address;
  },
  momentFormat: function(time) {
      return moment(time).fromNow();
  }
});
Template.Message.onRendered(function(){
  var self=this;
  self.autorun(function(){
    window.scrollTo(0,document.body.scrollHeight);
  })
});
