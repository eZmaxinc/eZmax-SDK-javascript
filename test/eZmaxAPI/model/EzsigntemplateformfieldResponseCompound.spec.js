/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
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

  describe('EzsigntemplateformfieldResponseCompound', function() {
    it('should create an instance of EzsigntemplateformfieldResponseCompound', function() {
      // uncomment below and update the code to test EzsigntemplateformfieldResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound);
    });

    it('should have the property pkiEzsigntemplateformfieldID (base name: "pkiEzsigntemplateformfieldID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplateformfieldID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpagePagenumber (base name: "iEzsigntemplatedocumentpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateformfieldLabel (base name: "sEzsigntemplateformfieldLabel")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateformfieldLabel
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateformfieldValue (base name: "sEzsigntemplateformfieldValue")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateformfieldValue
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldX (base name: "iEzsigntemplateformfieldX")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldY (base name: "iEzsigntemplateformfieldY")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldY
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldWidth (base name: "iEzsigntemplateformfieldWidth")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldWidth
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldHeight (base name: "iEzsigntemplateformfieldHeight")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldHeight
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplateformfieldSelected (base name: "bEzsigntemplateformfieldSelected")', function() {
      // uncomment below and update the code to test the property bEzsigntemplateformfieldSelected
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
