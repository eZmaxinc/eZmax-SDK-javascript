/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
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

  describe('EzsignfolderGetObjectV1ResponseMPayload', function() {
    it('should create an instance of EzsignfolderGetObjectV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsignfolderGetObjectV1ResponseMPayload
      //var instane = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload);
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntsarequirementID (base name: "fkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfolderDescription (base name: "sEzsignfolderDescription")', function() {
      // uncomment below and update the code to test the property sEzsignfolderDescription
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignfolderNote (base name: "tEzsignfolderNote")', function() {
      // uncomment below and update the code to test the property tEzsignfolderNote
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderSendreminderfrequency (base name: "eEzsignfolderSendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eEzsignfolderSendreminderfrequency
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property pkiEzsignfolderID (base name: "pkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfolderID
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderSentdate (base name: "dtEzsignfolderSentdate")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderSentdate
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderStep (base name: "eEzsignfolderStep")', function() {
      // uncomment below and update the code to test the property eEzsignfolderStep
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderClose (base name: "dtEzsignfolderClose")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderClose
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
