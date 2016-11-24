Router.route('/tdb', {
	name: 'tdbAttente',
	template: 'tdbAttente',
	title: 'attentetdb',
	onBeforeAction : function(){
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.findOne({ _id : currentUserId});
		
		if(currentUser){
			var currentUserRole = currentUser.profile.role;
			
			if(currentUserRole === 'admin'){
				Router.go('tdbAdmin');
			}
			else if(currentUserRole === 'contributeur'){
				Router.go('tdbContrib');
			}
		}
		else{
			this.next();
		}
	}
});
