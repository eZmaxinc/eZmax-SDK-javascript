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
    instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
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

  describe('CustomWebhookResponse', function() {
    it('should create an instance of CustomWebhookResponse', function() {
      // uncomment below and update the code to test CustomWebhookResponse
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CustomWebhookResponse);
    });

    it('should have the property pkiWebhookID (base name: "pkiWebhookID")', function() {
      // uncomment below and update the code to test the property pkiWebhookID
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookDescription (base name: "sWebhookDescription")', function() {
      // uncomment below and update the code to test the property sWebhookDescription
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookModule (base name: "eWebhookModule")', function() {
      // uncomment below and update the code to test the property eWebhookModule
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookEzsignevent (base name: "eWebhookEzsignevent")', function() {
      // uncomment below and update the code to test the property eWebhookEzsignevent
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookManagementevent (base name: "eWebhookManagementevent")', function() {
      // uncomment below and update the code to test the property eWebhookManagementevent
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookUrl (base name: "sWebhookUrl")', function() {
      // uncomment below and update the code to test the property sWebhookUrl
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookEmailfailed (base name: "sWebhookEmailfailed")', function() {
      // uncomment below and update the code to test the property sWebhookEmailfailed
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookApikey (base name: "sWebhookApikey")', function() {
      // uncomment below and update the code to test the property sWebhookApikey
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookSecret (base name: "sWebhookSecret")', function() {
      // uncomment below and update the code to test the property sWebhookSecret
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property bWebhookIsactive (base name: "bWebhookIsactive")', function() {
      // uncomment below and update the code to test the property bWebhookIsactive
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property bWebhookIssigned (base name: "bWebhookIssigned")', function() {
      // uncomment below and update the code to test the property bWebhookIssigned
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property bWebhookSkipsslvalidation (base name: "bWebhookSkipsslvalidation")', function() {
      // uncomment below and update the code to test the property bWebhookSkipsslvalidation
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookEvent (base name: "sWebhookEvent")', function() {
      // uncomment below and update the code to test the property sWebhookEvent
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property a_objWebhookheader (base name: "a_objWebhookheader")', function() {
      // uncomment below and update the code to test the property a_objWebhookheader
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property pksCustomerCode (base name: "pksCustomerCode")', function() {
      // uncomment below and update the code to test the property pksCustomerCode
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property bWebhookTest (base name: "bWebhookTest")', function() {
      // uncomment below and update the code to test the property bWebhookTest
      //var instance = new EZmaxApiDefinitionFull.CustomWebhookResponse();
      //expect(instance).to.be();
    });

  });

}));
