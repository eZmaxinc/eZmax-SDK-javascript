/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
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
    instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
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

  describe('EzsignbulksendtransmissionGetObjectV1ResponseMPayload', function() {
    it('should create an instance of EzsignbulksendtransmissionGetObjectV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsignbulksendtransmissionGetObjectV1ResponseMPayload
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload);
    });

    it('should have the property pkiEzsignbulksendtransmissionID (base name: "pkiEzsignbulksendtransmissionID")', function() {
      // uncomment below and update the code to test the property pkiEzsignbulksendtransmissionID
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignbulksendID (base name: "fkiEzsignbulksendID")', function() {
      // uncomment below and update the code to test the property fkiEzsignbulksendID
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignbulksendtransmissionDescription (base name: "sEzsignbulksendtransmissionDescription")', function() {
      // uncomment below and update the code to test the property sEzsignbulksendtransmissionDescription
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignbulksendtransmissionErrors (base name: "iEzsignbulksendtransmissionErrors")', function() {
      // uncomment below and update the code to test the property iEzsignbulksendtransmissionErrors
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinition.EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));