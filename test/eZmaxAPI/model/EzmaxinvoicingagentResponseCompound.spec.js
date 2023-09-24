/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/eZmaxAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/eZmaxAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EZmaxApiDefinitionFull);
  }
}(this, function(expect, EZmaxApiDefinitionFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EzmaxinvoicingagentResponseCompound', function() {
    it('should create an instance of EzmaxinvoicingagentResponseCompound', function() {
      // uncomment below and update the code to test EzmaxinvoicingagentResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound);
    });

    it('should have the property pkiEzmaxinvoicingagentID (base name: "pkiEzmaxinvoicingagentID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingagentID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingID (base name: "fkiEzmaxinvoicingID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiAgentID (base name: "fkiAgentID")', function() {
      // uncomment below and update the code to test the property fkiAgentID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrokerID (base name: "fkiBrokerID")', function() {
      // uncomment below and update the code to test the property fkiBrokerID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentSession (base name: "iEzmaxinvoicingagentSession")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentSession
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentCloned (base name: "iEzmaxinvoicingagentCloned")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentCloned
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentInvoice (base name: "iEzmaxinvoicingagentInvoice")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentInvoice
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentInscription (base name: "iEzmaxinvoicingagentInscription")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentInscription
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentInscriptionactive (base name: "iEzmaxinvoicingagentInscriptionactive")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentInscriptionactive
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentSale (base name: "iEzmaxinvoicingagentSale")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentSale
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentOtherincome (base name: "iEzmaxinvoicingagentOtherincome")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentOtherincome
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentCommissioncalculation (base name: "iEzmaxinvoicingagentCommissioncalculation")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentCommissioncalculation
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingagentEzsigndocument (base name: "iEzmaxinvoicingagentEzsigndocument")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingagentEzsigndocument
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingagentEzsignaccount (base name: "bEzmaxinvoicingagentEzsignaccount")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingagentEzsignaccount
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingagentBillableezmax (base name: "bEzmaxinvoicingagentBillableezmax")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingagentBillableezmax
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzmaxinvoicingagentVariationezmax (base name: "eEzmaxinvoicingagentVariationezmax")', function() {
      // uncomment below and update the code to test the property eEzmaxinvoicingagentVariationezmax
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingagentBillableezsign (base name: "bEzmaxinvoicingagentBillableezsign")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingagentBillableezsign
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzmaxinvoicingagentVariationezsign (base name: "eEzmaxinvoicingagentVariationezsign")', function() {
      // uncomment below and update the code to test the property eEzmaxinvoicingagentVariationezsign
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objContactName (base name: "objContactName")', function() {
      // uncomment below and update the code to test the property objContactName
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingagentResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
