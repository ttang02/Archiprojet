Template.adminViewUser.helpers({
    'user' : function () {
		var users = Meteor.users.find();

		return users;
	},
});

Template.userEditModal.helpers({
	'dat' : function(){
		return Dat.find();
	},
	'role' : function(){
		return Roles.find();
	}
});

Template.userRoleItem.helpers ({
	'user': function () {
		var user = Template.parentData(1);
		return user;
	}
});

Template.adminViewTypeAU.helpers({
	'typeAU' : function () {
		var typeAU = TypeActeur.find();

		return typeAU;
	}
	
});