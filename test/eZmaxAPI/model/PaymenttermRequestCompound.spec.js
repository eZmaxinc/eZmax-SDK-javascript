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
    instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
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

  describe('PaymenttermRequestCompound', function() {
    it('should create an instance of PaymenttermRequestCompound', function() {
      // uncomment below and update the code to test PaymenttermRequestCompound
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.PaymenttermRequestCompound);
    });

    it('should have the property pkiPaymenttermID (base name: "pkiPaymenttermID")', function() {
      // uncomment below and update the code to test the property pkiPaymenttermID
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sPaymenttermCode (base name: "sPaymenttermCode")', function() {
      // uncomment below and update the code to test the property sPaymenttermCode
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property ePaymenttermType (base name: "ePaymenttermType")', function() {
      // uncomment below and update the code to test the property ePaymenttermType
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iPaymenttermDay (base name: "iPaymenttermDay")', function() {
      // uncomment below and update the code to test the property iPaymenttermDay
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property objPaymenttermDescription (base name: "objPaymenttermDescription")', function() {
      // uncomment below and update the code to test the property objPaymenttermDescription
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bPaymenttermIsactive (base name: "bPaymenttermIsactive")', function() {
      // uncomment below and update the code to test the property bPaymenttermIsactive
      //var instance = new EZmaxApiDefinitionFull.PaymenttermRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
