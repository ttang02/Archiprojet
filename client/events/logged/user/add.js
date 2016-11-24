Template.adminAddUser.events({
	'click #addUser': function(event) {
		event.preventDefault();

		//Fetching the form's data
		var username = $('[name=username]').val();
		var password = $('[name=password]').val();
		var repeatpassword = $('[name=repeatPassword]').val();
		var firstname = $('[name=firstname]').val();
		var lastname = $('[name=lastname]').val();
		var email = $('[name=email]').val();
		var dats = [];
		var role = 'attente';

		var existingUser = Meteor.users.findOne({
			'username': username,
			'firstname': firstname,
			'lastname': lastname
		});
		if (existingUser) {
			Materialize.toast("Le compte existe déjà!", 4000);
		}
		else {
			if (password === repeatpassword) {
				var data = {
					username: username,
					password: password,
					profile: {
						firstname: firstname,
						lastname: lastname,
						email: email,
						role: role,
						dats: dats
					}
				};

				//Adding the user
				Meteor.call('createUserFromAdmin', data, function(err, result) {
						if (error) {
							Materialize.toast("The error hasn't been detected or treated yet... : " + error, 4000);
						}
						else {
							Materialize.toast("Le compte a bien été crée !", 4000);
						}
					})
					//Cleaning the form

			}

		}
	}
});