/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
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
    instance = new EZmaxApiDefinition.ListpresentationRequest();
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

  describe('ListpresentationRequest', function() {
    it('should create an instance of ListpresentationRequest', function() {
      // uncomment below and update the code to test ListpresentationRequest
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be.a(EZmaxApiDefinition.ListpresentationRequest);
    });

    it('should have the property sListpresentationDescription (base name: "sListpresentationDescription")', function() {
      // uncomment below and update the code to test the property sListpresentationDescription
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sListpresentationFilter (base name: "sListpresentationFilter")', function() {
      // uncomment below and update the code to test the property sListpresentationFilter
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sListpresentationOrderby (base name: "sListpresentationOrderby")', function() {
      // uncomment below and update the code to test the property sListpresentationOrderby
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property a_sColumnName (base name: "a_sColumnName")', function() {
      // uncomment below and update the code to test the property a_sColumnName
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property iListpresentationRowMax (base name: "iListpresentationRowMax")', function() {
      // uncomment below and update the code to test the property iListpresentationRowMax
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property iListpresentationRowOffset (base name: "iListpresentationRowOffset")', function() {
      // uncomment below and update the code to test the property iListpresentationRowOffset
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

    it('should have the property bListpresentationDefault (base name: "bListpresentationDefault")', function() {
      // uncomment below and update the code to test the property bListpresentationDefault
      //var instance = new EZmaxApiDefinition.ListpresentationRequest();
      //expect(instance).to.be();
    });

  });

}));
