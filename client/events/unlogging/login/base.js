Template.loginBase.events({
   'submit form ' : function(event){
        event.preventDefault();

    var username = $('[name=username]').val();
		var password = $('[name=password]').val();

		// Checking if user exist
		var userAccount = Meteor.users.findOne({ username: username});
		if (userAccount) {
			Meteor.loginWithPassword(username, password, function(error) {
				// Display a flash message specifying if he succesfully connected or not
				if (error) {
					Materialize.toast("The error hasn't been detected or treated yet... : " + error, 4000);
				}
				else {
				 	Materialize.toast('Vous êtes maintenant connecté !', 4000);
				}
			})
		}
		else {
			// Display a flash message specifying that the user doesn't exist
		 	Materialize.toast('L\'utilisateur n\'existe pas.', 4000);
		}
   }
});
