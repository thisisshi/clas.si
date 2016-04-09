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
  $(window).resize(function(){
    function fixDiv() {
        var $cache = $('.new-message-container');
        var $width = $('.main-layout').width();
        console.log("Main-Layout: " + $width);
        $cache.css({
            'position': 'fixed',
            'width': $width
        });
    }
    fixDiv();
  });
  self.autorun(function(){
    window.scrollTo(0,document.body.scrollHeight);
    function fixDiv() {
        var $cache = $('.new-message-container');
        var $width = $('.main-layout').width();
        console.log("Main-Layout: " + $width);
        $cache.css({
            'position': 'fixed',
            'width': $width
        });
    }
    fixDiv();
    });
});
