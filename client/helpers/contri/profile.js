Template.profileContrib.helpers({
    'profil': function() {
        var currentUser = Meteor.userId();

        if (currentUser) {
            return Meteor.users.findOne({
                _id: currentUser
            });
        }
    }
});