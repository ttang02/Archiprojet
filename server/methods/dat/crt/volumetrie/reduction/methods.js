//Réduction Volume
Meteor.methods({
    'addRedVolumEmpty' : function(){
        console.log("The method 'addRedVolumEmpty' has been called !");
        return RedVol.insert({ c1 : false, c2 : false });
    },
    'updateRedVol' : function(idRedVol, c1, c2){
        console.log("The method 'updateRedVolEmpty' has been called!");
        console.log("\tReduction Volume ID : "+idRedVol);
        console.log("\tC1 : "+c1);
        console.log("\tC2 : "+c2);
        if(c1 === "oui"){
            c1 = true;
        }
        else{
            c1 = false;
        }
        
        if(c2 === "oui"){
            c2 = true;
        }
        else{
            c2 = false;
        }
        return RedVol.update({_id : idRedVol}, {$set : {c1 : c1, c2 : c2}});
    },
    'deleteRedVol': function(idRedVol){
        console.log("The method 'deleteRedVol' has been called!");
        console.log("\tID Reduction Volume : "+idRedVol);
        
        
        return RedVol.remove(idRedVol);
    }
});

