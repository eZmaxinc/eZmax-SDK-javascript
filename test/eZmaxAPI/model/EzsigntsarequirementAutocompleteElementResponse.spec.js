/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
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
    instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
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

  describe('EzsigntsarequirementAutocompleteElementResponse', function() {
    it('should create an instance of EzsigntsarequirementAutocompleteElementResponse', function() {
      // uncomment below and update the code to test EzsigntsarequirementAutocompleteElementResponse
      //var instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse);
    });

    it('should have the property sEzsigntsarequirementDescriptionX (base name: "sEzsigntsarequirementDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzsigntsarequirementDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
      //expect(instance).to.be();
    });

    it('should have the property pkiEzsigntsarequirementID (base name: "pkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntsarequirementIsactive (base name: "bEzsigntsarequirementIsactive")', function() {
      // uncomment below and update the code to test the property bEzsigntsarequirementIsactive
      //var instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
      //expect(instance).to.be();
    });

    it('should have the property bDisabled (base name: "bDisabled")', function() {
      // uncomment below and update the code to test the property bDisabled
      //var instance = new EZmaxApiDefinitionFull.EzsigntsarequirementAutocompleteElementResponse();
      //expect(instance).to.be();
    });

  });

}));
