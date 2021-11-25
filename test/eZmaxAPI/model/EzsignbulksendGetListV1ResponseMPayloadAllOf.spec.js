/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
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
    instance = new EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayloadAllOf();
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

  describe('EzsignbulksendGetListV1ResponseMPayloadAllOf', function() {
    it('should create an instance of EzsignbulksendGetListV1ResponseMPayloadAllOf', function() {
      // uncomment below and update the code to test EzsignbulksendGetListV1ResponseMPayloadAllOf
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayloadAllOf();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayloadAllOf);
    });

    it('should have the property a_objEzsignfolder (base name: "a_objEzsignfolder")', function() {
      // uncomment below and update the code to test the property a_objEzsignfolder
      //var instance = new EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayloadAllOf();
      //expect(instance).to.be();
    });

  });

}));