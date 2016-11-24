Meteor.methods({
    'setUserRole' : function(userId, roleId){
        console.log("The method 'setUserRole' has been called !");
        console.log("\tUser Id : " +userId);
        console.log("`\tRole Id : "+ roleId);
        
        var role = Roles.findOne({ _id : roleId});
        if (role) {
		Meteor.users.update({ _id: userId }, {$set: { 'profile.role': role.displayName }});
    	}
    },
    'addDatToUser': function (datId, userId) {
	    console.log("The method 'addDatToUser' has been called !");
	    console.log("\tdat ID : " + datId);
	    console.log("\tUser ID : " + userId);

    	// Add the course to the user which is a teacher
    	var user = Meteor.users.findOne({ _id: userId });
    	if (user) {
		var dats = user.profile.dats;
		var i = dats.indexOf(datId);
		    if (i == -1) {
			dats.push(datId);
			Meteor.users.update({ _id: userId }, {$set: { 'profile.dats': dats }});
		    }
    	}
    },
    
    'removeDatFromUser': function (datId, userId) {
	    console.log("The method 'removeDatFromUser' has been called !");
	    console.log("\tdat ID : " + datId);
	    console.log("\tUser ID : " + userId);

    	// Add the course to the user which is a teacher
    	var user = Meteor.users.findOne({ _id: userId });
    	if (user) {
		var dats = user.profile.dats;
		var i = dats.indexOf(datId);
		    if (i != -1) {
			dats.split(i,1);
			Meteor.users.update({ _id: userId }, {$set: { 'profile.dats': dats }});
		    }
    	}
    },
    'setRoleDisplayName': function (roleId, displayName) {
		console.log("The method 'setRoleDisplayName' has been called !");
		console.log("\tRole ID : " + roleId);
		console.log("\tDisplay name: " + displayName);

		Roles.update({ _id: roleId }, {$set: { displayName: displayName }});
	},
    'createUserFromAdmin': function(data){
    	console.log("The method 'createUserFromAdmin' has been called !");
    	Accounts.createUser(data);
    },
    'updateProfile': function(userId, firstname, lastname, email){
    	console.log("The method 'updateProfile' has been called !");
		Meteor.users.update({ _id: userId }, {$set: { 'profile.firstname': firstname, 'profile.lastname' : lastname, 'profile.email' : email }});
    }
});