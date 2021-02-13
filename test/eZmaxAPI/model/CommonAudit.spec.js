/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
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
    instance = new EZmaxApiDefinition.CommonAudit();
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

  describe('CommonAudit', function() {
    it('should create an instance of CommonAudit', function() {
      // uncomment below and update the code to test CommonAudit
      //var instane = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be.a(EZmaxApiDefinition.CommonAudit);
    });

    it('should have the property fkiUserIDCreated (base name: "fkiUserIDCreated")', function() {
      // uncomment below and update the code to test the property fkiUserIDCreated
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserIDModified (base name: "fkiUserIDModified")', function() {
      // uncomment below and update the code to test the property fkiUserIDModified
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

    it('should have the property fkiApikeyIDCreated (base name: "fkiApikeyIDCreated")', function() {
      // uncomment below and update the code to test the property fkiApikeyIDCreated
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

    it('should have the property fkiApikeyIDModified (base name: "fkiApikeyIDModified")', function() {
      // uncomment below and update the code to test the property fkiApikeyIDModified
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

    it('should have the property dtCreatedDate (base name: "dtCreatedDate")', function() {
      // uncomment below and update the code to test the property dtCreatedDate
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

    it('should have the property dtModifiedDate (base name: "dtModifiedDate")', function() {
      // uncomment below and update the code to test the property dtModifiedDate
      //var instance = new EZmaxApiDefinition.CommonAudit();
      //expect(instance).to.be();
    });

  });

}));