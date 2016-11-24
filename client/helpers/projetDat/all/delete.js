Template.deleteProjet.helpers({
  'deleteProj': function(id) {
    var dat = Dat.findOne({_id : id});
    var currentUser = Meteor.userId();
    if (currentUser) {
      var profil = Meteor.users.findOne({
        _id: currentUser
      });
      if (profil.profile.role === "admin" || dat.userId === currentUser ) {
        return true;
      }
    }
    else {
      return false;
    }
  }
});
