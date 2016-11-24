Template.adminRemovetypeAU.events({
   'click #deletetypeAU' : function(event){
       event.preventDefault();
      
       var typeAU = this._id;
       Meteor.call('deleteTypeA', typeAU);
   } 
});