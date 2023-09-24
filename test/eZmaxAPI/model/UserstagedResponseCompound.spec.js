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
    instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
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

  describe('UserstagedResponseCompound', function() {
    it('should create an instance of UserstagedResponseCompound', function() {
      // uncomment below and update the code to test UserstagedResponseCompound
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.UserstagedResponseCompound);
    });

    it('should have the property pkiUserstagedID (base name: "pkiUserstagedID")', function() {
      // uncomment below and update the code to test the property pkiUserstagedID
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEmailID (base name: "fkiEmailID")', function() {
      // uncomment below and update the code to test the property fkiEmailID
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddress (base name: "sEmailAddress")', function() {
      // uncomment below and update the code to test the property sEmailAddress
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sUserstagedFirstname (base name: "sUserstagedFirstname")', function() {
      // uncomment below and update the code to test the property sUserstagedFirstname
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sUserstagedLastname (base name: "sUserstagedLastname")', function() {
      // uncomment below and update the code to test the property sUserstagedLastname
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sUserstagedExternalid (base name: "sUserstagedExternalid")', function() {
      // uncomment below and update the code to test the property sUserstagedExternalid
      //var instance = new EZmaxApiDefinitionFull.UserstagedResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
