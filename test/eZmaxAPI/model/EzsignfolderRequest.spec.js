/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
    instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
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

  describe('EzsignfolderRequest', function() {
    it('should create an instance of EzsignfolderRequest', function() {
      // uncomment below and update the code to test EzsignfolderRequest
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignfolderRequest);
    });

    it('should have the property pkiEzsignfolderID (base name: "pkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntsarequirementID (base name: "fkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfolderDescription (base name: "sEzsignfolderDescription")', function() {
      // uncomment below and update the code to test the property sEzsignfolderDescription
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignfolderNote (base name: "tEzsignfolderNote")', function() {
      // uncomment below and update the code to test the property tEzsignfolderNote
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderSendreminderfrequency (base name: "eEzsignfolderSendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eEzsignfolderSendreminderfrequency
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfolderExternalid (base name: "sEzsignfolderExternalid")', function() {
      // uncomment below and update the code to test the property sEzsignfolderExternalid
      //var instance = new EZmaxApiDefinitionFull.EzsignfolderRequest();
      //expect(instance).to.be();
    });

  });

}));
