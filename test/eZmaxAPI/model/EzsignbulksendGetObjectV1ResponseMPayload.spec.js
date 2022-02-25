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
    instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
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

  describe('EzsignbulksendGetObjectV1ResponseMPayload', function() {
    it('should create an instance of EzsignbulksendGetObjectV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsignbulksendGetObjectV1ResponseMPayload
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload);
    });

    it('should have the property pkiEzsignbulksendID (base name: "pkiEzsignbulksendID")', function() {
      // uncomment below and update the code to test the property pkiEzsignbulksendID
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignbulksendDescription (base name: "sEzsignbulksendDescription")', function() {
      // uncomment below and update the code to test the property sEzsignbulksendDescription
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignbulksendNote (base name: "tEzsignbulksendNote")', function() {
      // uncomment below and update the code to test the property tEzsignbulksendNote
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignbulksendIsactive (base name: "bEzsignbulksendIsactive")', function() {
      // uncomment below and update the code to test the property bEzsignbulksendIsactive
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
