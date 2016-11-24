Router.route('/admin/', {
	name: 'adminBase',
	template: 'adminBase',
	title: 'admin',
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

Router.route('/admin/tdb', {
	name: 'tdbAdmin',
	template: 'tdbAdmin',
	title: 'tdbAdmin',
	parent: 'adminBase',
	onBeforeAction: function () {
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id: currentUserId });
		if (currentUser) {
			var currentUserRole = currentUser.profile.role;
			if (currentUserRole === 'admin') {
				this.next();
			}
			else{
				Router.go('tdbAttente');
			}
		}
		else {
			//La redirection si on clique le lien par url et 
			Materialize.toast('Vous n\'avez pas l\'autorisation pour accéder à cette page !', 4000);
			Router.go("tdbAttente");
		}
	}
});

