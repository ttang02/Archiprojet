Router.route('/', {
   name : 'home',
   template :'homeBase',
   title : 'Accueil',
    onBeforeAction : function(){
       Session.set('id_dat',"");
	   Session.set('id_esp', "");
       Session.set('id_cont',"");
       Session.set('id_fonc',"");
	   Session.set('id_enf',"");
       
       var currentUserId = Meteor.userId();
	   var currentUser = Meteor.users.findOne({ _id : currentUserId});
		
	   if(currentUser){
		    var currentUserRole = currentUser.profile.role;
			
			if(currentUserRole === 'admin'){
				Router.go('adminBase');
			}
			else if(currentUserRole === 'contributeur'){
				Router.go('contriBase');
			}
			else if(currentUserRole === 'attente'){
			    Router.go('attenteBase');
			}
		}
		else{
			this.next();
		}
    }
});
