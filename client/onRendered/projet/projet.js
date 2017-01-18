import Cleave from 'cleave.js';

Template.datAdd.onRendered(function () {
    $('#triggerAddDat').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});
Template.userEditModal.onRendered(function () {
	$('#trigger-edit-' + this.data._id).leanModal({     
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
    	opacity: .5, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
		ready: function() { }, // Callback for Modal open
		complete: function() { $('.lean-overlay').remove(); } // Callback for Modal close);
	});
});

Template.userDeleteModal.onRendered(function () {
	$('#trigger-delete-' + this.data._id).leanModal({     
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
    	opacity: .5, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
		ready: function() { }, // Callback for Modal open
		complete: function() { $('.lean-overlay').remove(); } // Callback for Modal close);
	});
});

Template.adminAddUser.onRendered(function () {
    $('#triggerAddUser').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});

Template.esp.onRendered(function(){
     $('.modalRed').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});
Template.fsd.onRendered(function(){
     $('.modalRed').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});
Template.crt.onRendered(function(){
     $('.modalRed').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});

Template.enf.onRendered(function(){
     $('.modalRed').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});

Template.inputacteurproj.onRendered(function(){
   $('select').material_select();
});

Template.inputpdt.onRendered(function(){
   $('select').material_select();
});

Template.viewProjet.onRendered(function(){
   $('.tooltipped').tooltip({}); 
});

Template.inputplanning.onRendered(function(){
   new Cleave('.date', {
       date : true,
       datePattern : ['d','m','Y']
   });
});