Router.route('/attente/', {
	name: 'attenteBase',
	template: 'attenteBase',
	title: 'attenteBase',
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

			if (currentUserRole === 'attente') {
				this.next();
			}
		}
		else {
			Router.go("login");
		}
	}
});
