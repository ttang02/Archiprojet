Router.route('/contributeur/', {
	name: 'contriBase',
	template: 'contriBase',
	title: 'contributeur',
	onBeforeAction: function () {
		Session.set('id_dat',"");
		Session.set('id_esp', "");
    	Session.set('id_cont',"");
    	Session.set('id_fonc',"");
    	Session.set('id_enf',"");
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id: currentUserId });
		if (currentUser) {
			var currentUserRole = currentUser.profile.role;

			if (currentUserRole === 'contributeur') {
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

Router.route('contributeur/profile',{
	name: 'profileContrib',
	template: 'profileContrib',
	title: 'contributeur',
	parent : 'contriBase',
	onBeforeAction: function () {
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id: currentUserId });
		if (currentUser) {
			var currentUserRole = currentUser.profile.role;

			if (currentUserRole === 'contributeur') {
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

Router.route('/contributeur/tdb', {
	name: 'tdbContrib',
	template: 'tdbContrib',
	title: 'contributeur',
	parent: 'contriBase',
	onBeforeAction: function () {
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id: currentUserId });
		if (currentUser) {
			var currentUserRole = currentUser.profile.role;
			if (currentUserRole === 'contributeur') {
				this.next();
			}
			else {
			 	Router.go("tdbAttente");
			}
		}
		else {
			Materialize.toast('Vous n\'avez pas l\'autorisation pour accéder à cette page !', 4000);
			Router.go("tdbAttente");
		}
	}
});
