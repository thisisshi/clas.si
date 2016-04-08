Template.Task.events({
  'click .fa-trash':function(){
    Meteor.call('deleteTask', this._id);
  }
})
Template.Task.helpers({
    momentFormate: function(time) {

        if ((moment().unix() - moment(time).unix()) < 3600) {
            return moment(time).fromNow();
        } else {
            return moment(time).format("YYYY-MM-DD HH:mm");
        }
    },

    })
