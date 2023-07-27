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
    instance = new EZmaxApiDefinitionFull.ApikeyResponse();
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

  describe('ApikeyResponse', function() {
    it('should create an instance of ApikeyResponse', function() {
      // uncomment below and update the code to test ApikeyResponse
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ApikeyResponse);
    });

    it('should have the property pkiApikeyID (base name: "pkiApikeyID")', function() {
      // uncomment below and update the code to test the property pkiApikeyID
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property objApikeyDescription (base name: "objApikeyDescription")', function() {
      // uncomment below and update the code to test the property objApikeyDescription
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property objContactName (base name: "objContactName")', function() {
      // uncomment below and update the code to test the property objContactName
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property sApikeyApikey (base name: "sApikeyApikey")', function() {
      // uncomment below and update the code to test the property sApikeyApikey
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property sApikeySecret (base name: "sApikeySecret")', function() {
      // uncomment below and update the code to test the property sApikeySecret
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property bApikeyIsactive (base name: "bApikeyIsactive")', function() {
      // uncomment below and update the code to test the property bApikeyIsactive
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property bApikeyIssigned (base name: "bApikeyIssigned")', function() {
      // uncomment below and update the code to test the property bApikeyIssigned
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponse();
      //expect(instance).to.be();
    });

  });

}));
