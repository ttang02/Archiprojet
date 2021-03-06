Router.route('/admin/typeau/', {
	name: 'admintypeAU',
	template: 'admintypeAU',
	title: 'typeAU',
	parent: 'adminBase',
    onBeforeAction: function () {
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id: currentUserId });
		if (currentUser) {
			var currentUserRole = currentUser.profile.role;

			if (currentUserRole === 'admin') {
				this.next();
			}
			else {
			 	Materialize.toast('Vous n\'avez pas l\'autorisation pour accéder à cette page !', 4000);
				Router.go("login");
			}
		}
		else {
			Materialize.toast('Vous n\'avez pas l\'autorisation pour accéder à cette page !', 4000);
			Router.go("login");
		}
	}
});

