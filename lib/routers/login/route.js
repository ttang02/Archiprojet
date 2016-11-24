Router.route('/login', {
        name :'login',
        template : 'loginBase',
        title : 'Connexion',
        parent : 'home',
        onBeforeAction : function(){
            var currentUserId = Meteor.userId();
		    var currentUser = Meteor.users.findOne({ _id: currentUserId });
		    if (currentUser) {
			    Materialize.toast('Vous êtes déjà connecté !', 4000);
			    var currentUserRole = currentUser.profile.role;
			    switch(currentUserRole){
			      case 'admin' :
			        Router.go("adminBase");
			        break;
			      case 'contributeur':
			        Router.go('contriBase');
			        break;
			      case 'attente':
			        Router.go('attenteBase');
			        Materialize.toast("Veuillez vous reconnecter ultérieurement... Votre compte n\'a pas été validé par l'admin",4000);
		    	}
		    }
			else{
			    this.next();
		}
    }
});
