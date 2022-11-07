/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
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
    instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
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

  describe('EzsignbulksendsignermappingRequest', function() {
    it('should create an instance of EzsignbulksendsignermappingRequest', function() {
      // uncomment below and update the code to test EzsignbulksendsignermappingRequest
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest);
    });

    it('should have the property pkiEzsignbulksendsignermappingID (base name: "pkiEzsignbulksendsignermappingID")', function() {
      // uncomment below and update the code to test the property pkiEzsignbulksendsignermappingID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignbulksendID (base name: "fkiEzsignbulksendID")', function() {
      // uncomment below and update the code to test the property fkiEzsignbulksendID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignbulksendsignermappingDescription (base name: "sEzsignbulksendsignermappingDescription")', function() {
      // uncomment below and update the code to test the property sEzsignbulksendsignermappingDescription
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendsignermappingRequest();
      //expect(instance).to.be();
    });

  });

}));
