Template.esp.helpers({
	'currentUser' : function () {
		var currentUser = Meteor.userId();

		if (currentUser) {
			return Meteor.users.findOne({ _id: currentUser });
		}
	},
	'isAttente': function (role) {
		return role === "attente";
	},
	'isAdmin': function (role) {
		return role === "admin";
	},
	'isContributeur': function (role) {
		return role === "contributeur";
	},
	'isMe' : function(dats){
	    var idDat = Session.get('id_dat');
	    if(dats.constructor === Array){
	        var i = dats.indexOf(idDat);
	        if(i != -1){
	            return true;
	        }
	        else{
	            return false;
	        }
	    }
	}
});

Template.fsd.helpers({
	'currentUser' : function () {
		var currentUser = Meteor.userId();

		if (currentUser) {
			return Meteor.users.findOne({ _id: currentUser });
		}
	},
	'isAttente': function (role) {
		return role === "attente";
	},
	'isAdmin': function (role) {
		return role === "admin";
	},
	'isContributeur': function (role) {
		return role === "contributeur";
	},
	'isMe' : function(dats){
	    var idDat = Session.get('id_dat');
	    if(dats.constructor === Array){
	        var i = dats.indexOf(idDat);
	        if(i != -1){
	            return true;
	        }
	        else{
	            return false;
	        }
	    }
	}
});

Template.crt.helpers({
	'currentUser' : function () {
		var currentUser = Meteor.userId();

		if (currentUser) {
			return Meteor.users.findOne({ _id: currentUser });
		}
	},
	'isAttente': function (role) {
		return role === "attente";
	},
	'isAdmin': function (role) {
		return role === "admin";
	},
	'isContributeur': function (role) {
		return role === "contributeur";
	},
	'isMe' : function(dats){
	    var idDat = Session.get('id_dat');
	    if(dats.constructor === Array){
	        var i = dats.indexOf(idDat);
	        if(i != -1){
	            return true;
	        }
	        else{
	            return false;
	        }
	    }
	}
});

Template.enf.helpers({
	'currentUser' : function () {
		var currentUser = Meteor.userId();

		if (currentUser) {
			return Meteor.users.findOne({ _id: currentUser });
		}
	},
	'isAttente': function (role) {
		return role === "attente";
	},
	'isAdmin': function (role) {
		return role === "admin";
	},
	'isContributeur': function (role) {
		return role === "contributeur";
	},
	'isMe' : function(dats){
	    var idDat = Session.get('id_dat');
	    if(dats.constructor === Array){
	        var i = dats.indexOf(idDat);
	        if(i != -1){
	            return true;
	        }
	        else{
	            return false;
	        }
	    }
	}
});