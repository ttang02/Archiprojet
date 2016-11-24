//Exigence 
Meteor.methods({
    'addcritSecuExigence': function(idtypeExigence){
       console.log("The method 'addcritSecuExigence' has been called !");
       console.log("\tID type Exigence : "+idtypeExigence);
       
       return CritSecuExigence.insert({typeExigence : idtypeExigence, description : "", createAt: new Date()});
    },
    'updatecritSecuExigence' : function(idSecuExigence, description){
        console.log("The method 'updatecritSecuExigence' has been called !");
        console.log("\tID Secu Exigence : "+idSecuExigence);
        console.log("\tdescription : "+description);
        
        return CritSecuExigence.update({_id : idSecuExigence}, {$set : {description : description}});
    },
    'deletecritSecuExigence' : function(idSecuExigence){
        console.log("The method 'deletecritSecuExigence' has been called !");
        console.log("\tID Secu Exigence : "+idSecuExigence);
        
        return CritSecuExigence.remove({_id : idSecuExigence});
    }
    
});