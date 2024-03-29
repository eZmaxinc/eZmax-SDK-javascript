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
    instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
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

  describe('ScimServiceProviderConfig', function() {
    it('should create an instance of ScimServiceProviderConfig', function() {
      // uncomment below and update the code to test ScimServiceProviderConfig
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ScimServiceProviderConfig);
    });

    it('should have the property authenticationSchemes (base name: "authenticationSchemes")', function() {
      // uncomment below and update the code to test the property authenticationSchemes
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property bulk (base name: "bulk")', function() {
      // uncomment below and update the code to test the property bulk
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property changePassword (base name: "changePassword")', function() {
      // uncomment below and update the code to test the property changePassword
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property documentationUri (base name: "documentationUri")', function() {
      // uncomment below and update the code to test the property documentationUri
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property etag (base name: "etag")', function() {
      // uncomment below and update the code to test the property etag
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property patch (base name: "patch")', function() {
      // uncomment below and update the code to test the property patch
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new EZmaxApiDefinitionFull.ScimServiceProviderConfig();
      //expect(instance).to.be();
    });

  });

}));
