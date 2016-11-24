Template.defaultNavigation.helpers({
	'currentUser' : function () {
		var currentUser = Meteor.userId();

		if (currentUser) {
			return Meteor.users.findOne({ _id: currentUser });
		}
	},
	'isAttente': function (role) {
		return role === "attente";
	},
	'isAdmin': function (role) {
		return role === "admin";
	},
	'isContributeur': function (role) {
		return role === "contributeur";
	}
});
