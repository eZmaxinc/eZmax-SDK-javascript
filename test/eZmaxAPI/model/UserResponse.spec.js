/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
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
    instance = new EZmaxApiDefinition.UserResponse();
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

  describe('UserResponse', function() {
    it('should create an instance of UserResponse', function() {
      // uncomment below and update the code to test UserResponse
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be.a(EZmaxApiDefinition.UserResponse);
    });

    it('should have the property pkiUserID (base name: "pkiUserID")', function() {
      // uncomment below and update the code to test the property pkiUserID
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eUserType (base name: "eUserType")', function() {
      // uncomment below and update the code to test the property eUserType
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserFirstname (base name: "sUserFirstname")', function() {
      // uncomment below and update the code to test the property sUserFirstname
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserLastname (base name: "sUserLastname")', function() {
      // uncomment below and update the code to test the property sUserLastname
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserLoginname (base name: "sUserLoginname")', function() {
      // uncomment below and update the code to test the property sUserLoginname
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinition.UserResponse();
      //expect(instance).to.be();
    });

  });

}));
