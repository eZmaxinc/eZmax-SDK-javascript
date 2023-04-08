/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
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
    instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
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

  describe('CommunicationResponseCompound', function() {
    it('should create an instance of CommunicationResponseCompound', function() {
      // uncomment below and update the code to test CommunicationResponseCompound
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommunicationResponseCompound);
    });

    it('should have the property pkiCommunicationID (base name: "pkiCommunicationID")', function() {
      // uncomment below and update the code to test the property pkiCommunicationID
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eCommunicationImportance (base name: "eCommunicationImportance")', function() {
      // uncomment below and update the code to test the property eCommunicationImportance
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eCommunicationType (base name: "eCommunicationType")', function() {
      // uncomment below and update the code to test the property eCommunicationType
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sCommunicationSubject (base name: "sCommunicationSubject")', function() {
      // uncomment below and update the code to test the property sCommunicationSubject
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sCommunicationBodyurl (base name: "sCommunicationBodyurl")', function() {
      // uncomment below and update the code to test the property sCommunicationBodyurl
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eCommunicationDirection (base name: "eCommunicationDirection")', function() {
      // uncomment below and update the code to test the property eCommunicationDirection
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iCommunicationrecipientCount (base name: "iCommunicationrecipientCount")', function() {
      // uncomment below and update the code to test the property iCommunicationrecipientCount
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objDescriptionstaticSender (base name: "objDescriptionstaticSender")', function() {
      // uncomment below and update the code to test the property objDescriptionstaticSender
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objEmailstaticSender (base name: "objEmailstaticSender")', function() {
      // uncomment below and update the code to test the property objEmailstaticSender
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objPhonestaticSender (base name: "objPhonestaticSender")', function() {
      // uncomment below and update the code to test the property objPhonestaticSender
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objCommunicationattachment (base name: "a_objCommunicationattachment")', function() {
      // uncomment below and update the code to test the property a_objCommunicationattachment
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objCommunicationrecipient (base name: "a_objCommunicationrecipient")', function() {
      // uncomment below and update the code to test the property a_objCommunicationrecipient
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objCommunicationexternalrecipient (base name: "a_objCommunicationexternalrecipient")', function() {
      // uncomment below and update the code to test the property a_objCommunicationexternalrecipient
      //var instance = new EZmaxApiDefinitionFull.CommunicationResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
