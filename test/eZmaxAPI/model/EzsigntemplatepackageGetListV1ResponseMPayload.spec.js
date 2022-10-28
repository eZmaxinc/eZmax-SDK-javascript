/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload();
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

  describe('EzsigntemplatepackageGetListV1ResponseMPayload', function() {
    it('should create an instance of EzsigntemplatepackageGetListV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsigntemplatepackageGetListV1ResponseMPayload
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload);
    });

    it('should have the property a_objEzsigntemplatepackage (base name: "a_objEzsigntemplatepackage")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplatepackage
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iRowReturned (base name: "iRowReturned")', function() {
      // uncomment below and update the code to test the property iRowReturned
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iRowFiltered (base name: "iRowFiltered")', function() {
      // uncomment below and update the code to test the property iRowFiltered
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageGetListV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
