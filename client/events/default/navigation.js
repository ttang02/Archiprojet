Template.defaultNavigation.events({
	'click .logout': function (event) {
		// Remove default actions
		event.preventDefault();

		// Disconnect the user
		Meteor.logout();

		// Send a confirmation message
		Materialize.toast('Vous vous êtes déconnecté avec succès !', 4000);
	},

});