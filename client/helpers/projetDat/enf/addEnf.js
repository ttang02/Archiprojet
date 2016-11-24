//CRIT SECURITE 
Template.addCritSecurite.helpers({
    'exigence': function() {
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var idcritSecurite = enf.critSecurite;
            var critSecurite = CritSecurite.findOne({
                _id: idcritSecurite
            });

            var critSecuExigence = CritSecuExigence.find().fetch();
            var cseIn = [];
            var isIn = -1;
            for (var i = 0; i < critSecuExigence.length; i++) {
                isIn = critSecurite.exigence.indexOf(critSecuExigence[i]._id);
                if (isIn != -1) {
                    cseIn.push(critSecuExigence[i]);
                }
            }
            return cseIn;
        }
    },
    'etude' : function(){
      var idEnf = Session.get('id_enf');
      if (idEnf) {
          var enf = Enf.findOne({
              _id: idEnf
          });
          if (!enf) {
              return null;
          }
          var idcritSecurite = enf.critSecurite;
          var critSecurite = CritSecurite.findOne({
              _id: idcritSecurite
          });
          return critSecurite;
     }
    }
});

Template.inputcritexigences.helpers({
  'typeexigence' : function(){
    var type = TypecritExigence.findOne({_id : this.typeExigence});
    return type.name;
  }
});
/******************************************************************************/
/********************************CRIT DE DISPONIBILITE ************************/

Template.addCritDispo.helpers({
    'periode' : function(){
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var idcritDispo = enf.critDispo;
            var critDispo = CritDispo.findOne({
                _id: idcritDispo
            });
            var critDispoPeriode = CritDispoPeriode.find().fetch();
            var cdpIn = [];
            var isIn = -1;
            for (var i = 0; i < critDispoPeriode.length; i++) {
                isIn = critDispo.periode.indexOf(critDispoPeriode[i]._id);
                if (isIn != -1) {
                    cdpIn.push(critDispoPeriode[i]);
                }
            }
            return cdpIn;
        }
    },
    'description' : function(){
      var idEnf = Session.get('id_enf');
      if (idEnf) {
          var enf = Enf.findOne({
              _id: idEnf
          });
          if (!enf) {
              return null;
          }
          var idcritDispo = enf.critDispo;
          var critDispo = CritDispo.findOne({
              _id: idcritDispo
          });
          return critDispo;
     }
    },
    'appmetier' : function(){
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var idappmetier = enf.critDispo;
            var critDispo = CritDispo.findOne({
                _id: idappmetier
            });

            var critDispoAppmetier = CritDispoAppMetier.find().fetch();
            var cdapIn = [];
            var isIn = -1;
            for (var i = 0; i < critDispoAppmetier.length; i++) {
                isIn = critDispo.appmetier.indexOf(critDispoAppmetier[i]._id);
                if (isIn != -1) {
                    cdapIn.push(critDispoAppmetier[i]);
                }
            }
            return cdapIn;
        }
    }
});

Template.inputcritDispoPeriode.helpers({
  'typePeriodem' : function(){
    var type = CritTypePerfPeriode.findOne({_id : this.typePeriode});
    return type.name;
  }
});


Template.inputcritDispoAppmetier.helpers({
  'typeAppMetier' : function(){
    var type = CritTypeAppMetier.findOne({_id : this.typeappmetier});
    return type.name;
  }
});

Template.addCritPerf.helpers({
    'performance' : function(){
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var critPerformance = CritPerformance.find().fetch();
            var critPerfIn = [];
            var isIn = -1;

            for (var i = 0; i < critPerformance.length; i++) {
                isIn = enf.critPerformance.indexOf(critPerformance[i]._id);
                if (isIn != -1) {
                    critPerfIn.push(critPerformance[i]);
                }
            }
            return critPerfIn;
        }
   }  
});

Template.inputcritPerf.helpers({
   'typeperf' : function(){
        var type = CritTypeTempsReponse.findOne({_id : this.tdr});
        return type.name;
   } 
});



Template.addCritExploit.helpers({
    'batchs': function(){
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var critExploi = CritExploi.findOne({
                _id : enf.critExploi
            });
            if(!critExploi){
                return null;
            }

            var batchappl = BatchApplicatif.find().fetch();
            var batchapplIn = [];
            var isIn = -1;
            
            for (var i = 0; i < batchappl.length; i++) {
                isIn = critExploi.batchAppl.indexOf(batchappl[i]._id);
                if (isIn != -1) {
                    batchapplIn.push(batchappl[i]);
                }
            }
            return batchapplIn;
        }
    },
    'impact' : function(){
        var idEnf = Session.get('id_enf');
        if (idEnf) {
            var enf = Enf.findOne({
                _id: idEnf
            });
            if (!enf) {
                return null;
            }
            var critExploi = CritExploi.findOne({
                _id : enf.critExploi
            });
            if(!critExploi){
                return null;
            }
            
            var critExploiImpact = CritExploiImpact.find().fetch();
            var critExploiImpactIn = [];
            var isIn = -1;
            
            
            for (var i = 0; i < critExploiImpact.length; i++) {
                isIn = critExploi.impact.indexOf(critExploiImpact[i]._id);
                if (isIn != -1) {
                    critExploiImpactIn.push(critExploiImpact[i]);
                }
            }
            return critExploiImpactIn;
        }
   }  
});

Template.inputcritExploiImpact.helpers({
   'typeImpact' : function(){
        var type = TypecritImpact.findOne({_id : this.typeImpact});
        return type.name;
   } 
});
