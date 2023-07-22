/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
    instance = new EZmaxApiDefinitionFull.ScimUserList();
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

  describe('ScimUserList', function() {
    it('should create an instance of ScimUserList', function() {
      // uncomment below and update the code to test ScimUserList
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ScimUserList);
    });

    it('should have the property totalResults (base name: "totalResults")', function() {
      // uncomment below and update the code to test the property totalResults
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property itemsPerPage (base name: "itemsPerPage")', function() {
      // uncomment below and update the code to test the property itemsPerPage
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property schemas (base name: "schemas")', function() {
      // uncomment below and update the code to test the property schemas
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property Resources (base name: "Resources")', function() {
      // uncomment below and update the code to test the property Resources
      //var instance = new EZmaxApiDefinitionFull.ScimUserList();
      //expect(instance).to.be();
    });

  });

}));
