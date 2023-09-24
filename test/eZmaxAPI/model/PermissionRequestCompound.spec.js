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
    instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
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

  describe('PermissionRequestCompound', function() {
    it('should create an instance of PermissionRequestCompound', function() {
      // uncomment below and update the code to test PermissionRequestCompound
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.PermissionRequestCompound);
    });

    it('should have the property pkiPermissionID (base name: "pkiPermissionID")', function() {
      // uncomment below and update the code to test the property pkiPermissionID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiApikeyID (base name: "fkiApikeyID")', function() {
      // uncomment below and update the code to test the property fkiApikeyID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiUsergroupID (base name: "fkiUsergroupID")', function() {
      // uncomment below and update the code to test the property fkiUsergroupID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiCompanyID (base name: "fkiCompanyID")', function() {
      // uncomment below and update the code to test the property fkiCompanyID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiModulesectionID (base name: "fkiModulesectionID")', function() {
      // uncomment below and update the code to test the property fkiModulesectionID
      //var instance = new EZmaxApiDefinitionFull.PermissionRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
