Template.Chat.helpers({
  messages: () => {
    var id = FlowRouter.getParam('id');
    $('input[name="classID"]').val(id);
    return Messages.find({});
  },
  class: ()=>{
    var id = FlowRouter.getParam('id');
    return Classes.findOne({_id: id});
  },
  momentFormat: function(time) {
      return moment(time).fromNow();
  },
  timeStampFormat: function(time) {
      return moment(time).format("MMM DD YYYY HH:mm");
  }
});

Template.Chat.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('messages', id);
    self.subscribe('singleClass',id)
  });
});

Template.Chat.onRendered(function(){
  var self=this;
  window.scrollTo(0,document.body.scrollHeight);
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
