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
    instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
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

  describe('EzsigntemplateelementdependencyRequestCompound', function() {
    it('should create an instance of EzsigntemplateelementdependencyRequestCompound', function() {
      // uncomment below and update the code to test EzsigntemplateelementdependencyRequestCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound);
    });

    it('should have the property pkiEzsigntemplateelementdependencyID (base name: "pkiEzsigntemplateelementdependencyID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplateelementdependencyID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateformfieldIDValidation (base name: "fkiEzsigntemplateformfieldIDValidation")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateformfieldIDValidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateformfieldgroupIDValidation (base name: "fkiEzsigntemplateformfieldgroupIDValidation")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateformfieldgroupIDValidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateelementdependencyEzsigntemplateformfieldgrouplabel (base name: "sEzsigntemplateelementdependencyEzsigntemplateformfieldgrouplabel")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateelementdependencyEzsigntemplateformfieldgrouplabel
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateelementdependencyEzsigntemplateformfieldlabel (base name: "sEzsigntemplateelementdependencyEzsigntemplateformfieldlabel")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateelementdependencyEzsigntemplateformfieldlabel
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateelementdependencyValidation (base name: "eEzsigntemplateelementdependencyValidation")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateelementdependencyValidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplateelementdependencySelected (base name: "bEzsigntemplateelementdependencySelected")', function() {
      // uncomment below and update the code to test the property bEzsigntemplateelementdependencySelected
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateelementdependencyOperator (base name: "eEzsigntemplateelementdependencyOperator")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateelementdependencyOperator
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateelementdependencyValue (base name: "sEzsigntemplateelementdependencyValue")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateelementdependencyValue
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateelementdependencyRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
