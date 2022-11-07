/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
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
    instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
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

  describe('EzsigndocumentResponseCompound', function() {
    it('should create an instance of EzsigndocumentResponseCompound', function() {
      // uncomment below and update the code to test EzsigndocumentResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigndocumentResponseCompound);
    });

    it('should have the property fkiEzsignfolderID (base name: "fkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentDuedate (base name: "dtEzsigndocumentDuedate")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentDuedate
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignformCompleted (base name: "dtEzsignformCompleted")', function() {
      // uncomment below and update the code to test the property dtEzsignformCompleted
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentName (base name: "sEzsigndocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentName
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property pkiEzsigndocumentID (base name: "pkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentStep (base name: "eEzsigndocumentStep")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentStep
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentFirstsend (base name: "dtEzsigndocumentFirstsend")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentFirstsend
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentLastsend (base name: "dtEzsigndocumentLastsend")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentLastsend
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentOrder (base name: "iEzsigndocumentOrder")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentOrder
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentPagetotal (base name: "iEzsigndocumentPagetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentPagetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentSignaturesigned (base name: "iEzsigndocumentSignaturesigned")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentSignaturesigned
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentSignaturetotal (base name: "iEzsigndocumentSignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentSignaturetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentMD5initial (base name: "sEzsigndocumentMD5initial")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentMD5initial
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentMD5signed (base name: "sEzsigndocumentMD5signed")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentMD5signed
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigndocumentEzsignform (base name: "bEzsigndocumentEzsignform")', function() {
      // uncomment below and update the code to test the property bEzsigndocumentEzsignform
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepformtotal (base name: "iEzsigndocumentStepformtotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepformtotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepformcurrent (base name: "iEzsigndocumentStepformcurrent")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepformcurrent
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepsignaturetotal (base name: "iEzsigndocumentStepsignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepsignaturetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepsignatureCurrent (base name: "iEzsigndocumentStepsignatureCurrent")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepsignatureCurrent
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsignfoldersignerassociationstatus (base name: "a_objEzsignfoldersignerassociationstatus")', function() {
      // uncomment below and update the code to test the property a_objEzsignfoldersignerassociationstatus
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
