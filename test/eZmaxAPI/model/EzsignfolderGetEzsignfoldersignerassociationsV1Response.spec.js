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
    instance = new EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response();
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

  describe('EzsignfolderGetEzsignfoldersignerassociationsV1Response', function() {
    it('should create an instance of EzsignfolderGetEzsignfoldersignerassociationsV1Response', function() {
      // uncomment below and update the code to test EzsignfolderGetEzsignfoldersignerassociationsV1Response
      //var instance = new EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response);
    });

    it('should have the property mPayload (base name: "mPayload")', function() {
      // uncomment below and update the code to test the property mPayload
      //var instance = new EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response();
      //expect(instance).to.be();
    });

    it('should have the property objDebugPayload (base name: "objDebugPayload")', function() {
      // uncomment below and update the code to test the property objDebugPayload
      //var instance = new EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response();
      //expect(instance).to.be();
    });

    it('should have the property objDebug (base name: "objDebug")', function() {
      // uncomment below and update the code to test the property objDebug
      //var instance = new EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response();
      //expect(instance).to.be();
    });

  });

}));
