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
    instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
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

  describe('CommunicationattachmentResponse', function() {
    it('should create an instance of CommunicationattachmentResponse', function() {
      // uncomment below and update the code to test CommunicationattachmentResponse
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommunicationattachmentResponse);
    });

    it('should have the property pkiCommunicationattachmentID (base name: "pkiCommunicationattachmentID")', function() {
      // uncomment below and update the code to test the property pkiCommunicationattachmentID
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAttachmentID (base name: "fkiAttachmentID")', function() {
      // uncomment below and update the code to test the property fkiAttachmentID
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInvoiceID (base name: "fkiInvoiceID")', function() {
      // uncomment below and update the code to test the property fkiInvoiceID
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSalarypreparationID (base name: "fkiSalarypreparationID")', function() {
      // uncomment below and update the code to test the property fkiSalarypreparationID
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sCommunicationattachmentName (base name: "sCommunicationattachmentName")', function() {
      // uncomment below and update the code to test the property sCommunicationattachmentName
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sDownloadUrl (base name: "sDownloadUrl")', function() {
      // uncomment below and update the code to test the property sDownloadUrl
      //var instance = new EZmaxApiDefinitionFull.CommunicationattachmentResponse();
      //expect(instance).to.be();
    });

  });

}));