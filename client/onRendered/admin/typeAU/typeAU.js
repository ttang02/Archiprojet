Template.adminAddTypeAU.onRendered(function () {
    $('#triggerAddAU').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
});

Template.adminRemovetypeAU.onRendered(function () {
	$('#trigger-delete-' + this.data._id).leanModal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
    	opacity: .5, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
		ready: function() { }, // Callback for Modal open
		complete: function() { $('.lean-overlay').remove(); } // Callback for Modal close);
	});
});