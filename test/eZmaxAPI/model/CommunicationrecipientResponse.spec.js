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
    instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
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

  describe('CommunicationrecipientResponse', function() {
    it('should create an instance of CommunicationrecipientResponse', function() {
      // uncomment below and update the code to test CommunicationrecipientResponse
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommunicationrecipientResponse);
    });

    it('should have the property pkiCommunicationrecipientID (base name: "pkiCommunicationrecipientID")', function() {
      // uncomment below and update the code to test the property pkiCommunicationrecipientID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAgentID (base name: "fkiAgentID")', function() {
      // uncomment below and update the code to test the property fkiAgentID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrokerID (base name: "fkiBrokerID")', function() {
      // uncomment below and update the code to test the property fkiBrokerID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiContactID (base name: "fkiContactID")', function() {
      // uncomment below and update the code to test the property fkiContactID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCustomerID (base name: "fkiCustomerID")', function() {
      // uncomment below and update the code to test the property fkiCustomerID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEmployeeID (base name: "fkiEmployeeID")', function() {
      // uncomment below and update the code to test the property fkiEmployeeID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignsignerID (base name: "fkiEzsignsignerID")', function() {
      // uncomment below and update the code to test the property fkiEzsignsignerID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchiseofficeID (base name: "fkiFranchiseofficeID")', function() {
      // uncomment below and update the code to test the property fkiFranchiseofficeID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddress (base name: "sEmailAddress")', function() {
      // uncomment below and update the code to test the property sEmailAddress
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property eCommunicationrecipientType (base name: "eCommunicationrecipientType")', function() {
      // uncomment below and update the code to test the property eCommunicationrecipientType
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAgentincorporationID (base name: "fkiAgentincorporationID")', function() {
      // uncomment below and update the code to test the property fkiAgentincorporationID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAssistantID (base name: "fkiAssistantID")', function() {
      // uncomment below and update the code to test the property fkiAssistantID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiExternalbrokerID (base name: "fkiExternalbrokerID")', function() {
      // uncomment below and update the code to test the property fkiExternalbrokerID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzcomagentID (base name: "fkiEzcomagentID")', function() {
      // uncomment below and update the code to test the property fkiEzcomagentID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiNotaryID (base name: "fkiNotaryID")', function() {
      // uncomment below and update the code to test the property fkiNotaryID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiRewardmemberID (base name: "fkiRewardmemberID")', function() {
      // uncomment below and update the code to test the property fkiRewardmemberID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSupplierID (base name: "fkiSupplierID")', function() {
      // uncomment below and update the code to test the property fkiSupplierID
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

    it('should have the property objPhoneSms (base name: "objPhoneSms")', function() {
      // uncomment below and update the code to test the property objPhoneSms
      //var instance = new EZmaxApiDefinitionFull.CommunicationrecipientResponse();
      //expect(instance).to.be();
    });

  });

}));
