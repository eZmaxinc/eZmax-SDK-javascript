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
    instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
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

  describe('CommunicationexternalrecipientResponseCompound', function() {
    it('should create an instance of CommunicationexternalrecipientResponseCompound', function() {
      // uncomment below and update the code to test CommunicationexternalrecipientResponseCompound
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound);
    });

    it('should have the property pkiCommunicationexternalrecipientID (base name: "pkiCommunicationexternalrecipientID")', function() {
      // uncomment below and update the code to test the property pkiCommunicationexternalrecipientID
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eCommunicationexternalrecipientType (base name: "eCommunicationexternalrecipientType")', function() {
      // uncomment below and update the code to test the property eCommunicationexternalrecipientType
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objDescriptionstatic (base name: "objDescriptionstatic")', function() {
      // uncomment below and update the code to test the property objDescriptionstatic
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objEmailstatic (base name: "objEmailstatic")', function() {
      // uncomment below and update the code to test the property objEmailstatic
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objPhonestatic (base name: "objPhonestatic")', function() {
      // uncomment below and update the code to test the property objPhonestatic
      //var instance = new EZmaxApiDefinitionFull.CommunicationexternalrecipientResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
