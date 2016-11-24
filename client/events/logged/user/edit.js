Template.userRoleItem.events({
	'click .collection-item': function (event) {
		var user = Template.parentData(1);
		var userId = user._id;
		var roleId = this._id;

		/*
		console.log("Clicked on role item :");
		console.log("\tUser ID : " + user._id);
		console.log("\tRole ID : " + this._id);
		*/

		Meteor.call('setUserRole', user._id, this._id);
	}
});