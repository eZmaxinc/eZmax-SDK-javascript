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
    instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
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

  describe('EzsignelementdependencyResponse', function() {
    it('should create an instance of EzsignelementdependencyResponse', function() {
      // uncomment below and update the code to test EzsignelementdependencyResponse
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignelementdependencyResponse);
    });

    it('should have the property pkiEzsignelementdependencyID (base name: "pkiEzsignelementdependencyID")', function() {
      // uncomment below and update the code to test the property pkiEzsignelementdependencyID
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignformfieldID (base name: "fkiEzsignformfieldID")', function() {
      // uncomment below and update the code to test the property fkiEzsignformfieldID
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignsignatureID (base name: "fkiEzsignsignatureID")', function() {
      // uncomment below and update the code to test the property fkiEzsignsignatureID
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignformfieldIDValidation (base name: "fkiEzsignformfieldIDValidation")', function() {
      // uncomment below and update the code to test the property fkiEzsignformfieldIDValidation
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignformfieldgroupIDValidation (base name: "fkiEzsignformfieldgroupIDValidation")', function() {
      // uncomment below and update the code to test the property fkiEzsignformfieldgroupIDValidation
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignelementdependencyValidation (base name: "eEzsignelementdependencyValidation")', function() {
      // uncomment below and update the code to test the property eEzsignelementdependencyValidation
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignelementdependencySelected (base name: "bEzsignelementdependencySelected")', function() {
      // uncomment below and update the code to test the property bEzsignelementdependencySelected
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignelementdependencyOperator (base name: "eEzsignelementdependencyOperator")', function() {
      // uncomment below and update the code to test the property eEzsignelementdependencyOperator
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignelementdependencyValue (base name: "sEzsignelementdependencyValue")', function() {
      // uncomment below and update the code to test the property sEzsignelementdependencyValue
      //var instance = new EZmaxApiDefinitionFull.EzsignelementdependencyResponse();
      //expect(instance).to.be();
    });

  });

}));