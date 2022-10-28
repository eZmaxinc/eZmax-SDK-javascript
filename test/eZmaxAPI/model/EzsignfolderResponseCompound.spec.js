/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
    instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
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

  describe('EzsignfolderResponseCompound', function() {
    it('should create an instance of EzsignfolderResponseCompound', function() {
      // uncomment below and update the code to test EzsignfolderResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignfolderResponseCompound);
    });

    it('should have the property pkiEzsignfolderID (base name: "pkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntsarequirementID (base name: "fkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntsarequirementDescriptionX (base name: "sEzsigntsarequirementDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzsigntsarequirementDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfolderDescription (base name: "sEzsignfolderDescription")', function() {
      // uncomment below and update the code to test the property sEzsignfolderDescription
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignfolderNote (base name: "tEzsignfolderNote")', function() {
      // uncomment below and update the code to test the property tEzsignfolderNote
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfolderIsdisposable (base name: "bEzsignfolderIsdisposable")', function() {
      // uncomment below and update the code to test the property bEzsignfolderIsdisposable
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderSendreminderfrequency (base name: "eEzsignfolderSendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eEzsignfolderSendreminderfrequency
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderDuedate (base name: "dtEzsignfolderDuedate")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderDuedate
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderSentdate (base name: "dtEzsignfolderSentdate")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderSentdate
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderScheduledarchive (base name: "dtEzsignfolderScheduledarchive")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderScheduledarchive
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderScheduleddispose (base name: "dtEzsignfolderScheduleddispose")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderScheduleddispose
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderStep (base name: "eEzsignfolderStep")', function() {
      // uncomment below and update the code to test the property eEzsignfolderStep
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderClose (base name: "dtEzsignfolderClose")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderClose
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignfolderMessage (base name: "tEzsignfolderMessage")', function() {
      // uncomment below and update the code to test the property tEzsignfolderMessage
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
