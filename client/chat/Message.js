Template.Message.helpers({
  getUserEmail: function(userId) {
    var messageAuthor = Meteor.users.findOne({
      _id: userId
    });
    return messageAuthor.emails[0].address;
  },
  momentFormat: function(time) {
      return moment(time).fromNow();
  },
  timeStampFormat: function(time) {
      return moment(time).format("MMM DD YYYY HH:mm");
  }

});
