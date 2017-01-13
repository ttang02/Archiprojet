Template.registerBase.events({
   'submit form' : function(event){
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
		                                        'username' : username
		                                        });
		if(existingUser){
		    Materialize.toast("Le compte existe déjà!",4000);
		}
		else{
		    if(password === repeatpassword){
		        var data = {
		            username : username,
		            password : password,
		            profile : {
		                firstname : firstname,
		                lastname : lastname,
		                email : email,
		                role : role,
		                dats : dats
		            }
		        };

		        //Adding the user
		        Accounts.createUser(data, function(error){
		            if(error){
		                Materialize.toast("The error hasn't been detected or treated yet... : "+error,4000);
		            }
		            else{
		                Materialize.toast("Votre demande a été mise en attente!", 4000);
                    Router.go("/");
		            }
		        });
		        //Cleaning the form
		        $('[name=username]').val("");
				$('[name=password]').val("");
				$('[name=repeatPassword]').val("");
				$('[name=firstname]').val("");
				$('[name=lastname]').val("");
				$('[name=email]').val("");
		    }
		    else{
		        Materialize.toast("Le champ < mot de passe > et < répéter le mot de passe > ne sont pas identique !", 4000);
		    }

		}
   },
   //keypress interdire la saisie des ascii
   'keypress .username' : function(event){
		if((event.charCode < 97 || event.charCode > 122) && (event.charCode < 65 || event.charCode > 90) && (event.charCode < 48 || event.charCode > 57)) return false;
   }
});
