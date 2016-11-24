Template.profileContrib.events({
    'submit form': function(event){
        // Removing default effects
        event.preventDefault();
        
        // Fetching the form's data
        var firstname = $('[name=firstname]').val();
		var lastname = $('[name=lastname]').val();
		var email = $('[name=email]').val();
		
		if(firstname !== "" && lastname !== "" && email !== ""){
		Meteor.call('updateProfile', Meteor.userId(), firstname, lastname, email);
		Materialize.toast("Votre profil a été mis à jour!",4000);
		}
    }
});
