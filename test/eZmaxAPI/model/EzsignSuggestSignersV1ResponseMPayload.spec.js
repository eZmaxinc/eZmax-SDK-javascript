/**
 * eZmax API Definition (Full)
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
    factory(root.expect, root.EZmaxApiDefinitionFull);
  }
}(this, function(expect, EZmaxApiDefinitionFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload();
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

  describe('EzsignSuggestSignersV1ResponseMPayload', function() {
    it('should create an instance of EzsignSuggestSignersV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsignSuggestSignersV1ResponseMPayload
      //var instance = new EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload);
    });

    it('should have the property a_objEzsignfoldersignerassociation (base name: "a_objEzsignfoldersignerassociation")', function() {
      // uncomment below and update the code to test the property a_objEzsignfoldersignerassociation
      //var instance = new EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property a_objUserTeam (base name: "a_objUserTeam")', function() {
      // uncomment below and update the code to test the property a_objUserTeam
      //var instance = new EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property a_objUser (base name: "a_objUser")', function() {
      // uncomment below and update the code to test the property a_objUser
      //var instance = new EZmaxApiDefinitionFull.EzsignSuggestSignersV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));