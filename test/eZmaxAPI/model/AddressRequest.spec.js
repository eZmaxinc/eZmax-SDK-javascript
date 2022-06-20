/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
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
    instance = new EZmaxApiDefinitionFull.AddressRequest();
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

  describe('AddressRequest', function() {
    it('should create an instance of AddressRequest', function() {
      // uncomment below and update the code to test AddressRequest
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.AddressRequest);
    });

    it('should have the property fkiAddresstypeID (base name: "fkiAddresstypeID")', function() {
      // uncomment below and update the code to test the property fkiAddresstypeID
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sAddressCivic (base name: "sAddressCivic")', function() {
      // uncomment below and update the code to test the property sAddressCivic
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sAddressStreet (base name: "sAddressStreet")', function() {
      // uncomment below and update the code to test the property sAddressStreet
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sAddressSuite (base name: "sAddressSuite")', function() {
      // uncomment below and update the code to test the property sAddressSuite
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sAddressCity (base name: "sAddressCity")', function() {
      // uncomment below and update the code to test the property sAddressCity
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiProvinceID (base name: "fkiProvinceID")', function() {
      // uncomment below and update the code to test the property fkiProvinceID
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiCountryID (base name: "fkiCountryID")', function() {
      // uncomment below and update the code to test the property fkiCountryID
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sAddressZip (base name: "sAddressZip")', function() {
      // uncomment below and update the code to test the property sAddressZip
      //var instance = new EZmaxApiDefinitionFull.AddressRequest();
      //expect(instance).to.be();
    });

  });

}));
