/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
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
    instance = new EZmaxApiDefinition.EmailRequest();
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

  describe('EmailRequest', function() {
    it('should create an instance of EmailRequest', function() {
      // uncomment below and update the code to test EmailRequest
      //var instane = new EZmaxApiDefinition.EmailRequest();
      //expect(instance).to.be.a(EZmaxApiDefinition.EmailRequest);
    });

    it('should have the property fkiEmailtypeID (base name: "fkiEmailtypeID")', function() {
      // uncomment below and update the code to test the property fkiEmailtypeID
      //var instance = new EZmaxApiDefinition.EmailRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddress (base name: "sEmailAddress")', function() {
      // uncomment below and update the code to test the property sEmailAddress
      //var instance = new EZmaxApiDefinition.EmailRequest();
      //expect(instance).to.be();
    });

  });

}));
