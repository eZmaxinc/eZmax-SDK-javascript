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
    instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
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

  describe('EzsigntemplateListElement', function() {
    it('should create an instance of EzsigntemplateListElement', function() {
      // uncomment below and update the code to test EzsigntemplateListElement
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplateListElement);
    });

    it('should have the property pkiEzsigntemplateID (base name: "pkiEzsigntemplateID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplateID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateDescription (base name: "sEzsigntemplateDescription")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateDescription
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentPagetotal (base name: "iEzsigntemplatedocumentPagetotal")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentPagetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateSignaturetotal (base name: "iEzsigntemplateSignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateSignaturetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateFormfieldtotal (base name: "iEzsigntemplateFormfieldtotal")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateFormfieldtotal
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplateIncomplete (base name: "bEzsigntemplateIncomplete")', function() {
      // uncomment below and update the code to test the property bEzsigntemplateIncomplete
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateType (base name: "eEzsigntemplateType")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateType
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateListElement();
      //expect(instance).to.be();
    });

  });

}));
