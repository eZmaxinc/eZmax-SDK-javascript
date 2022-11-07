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
    instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
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

  describe('EzsignformfieldResponseCompound', function() {
    it('should create an instance of EzsignformfieldResponseCompound', function() {
      // uncomment below and update the code to test EzsignformfieldResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignformfieldResponseCompound);
    });

    it('should have the property pkiEzsignformfieldID (base name: "pkiEzsignformfieldID")', function() {
      // uncomment below and update the code to test the property pkiEzsignformfieldID
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpagePagenumber (base name: "iEzsignpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsignpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldLabel (base name: "sEzsignformfieldLabel")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldLabel
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldValue (base name: "sEzsignformfieldValue")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldValue
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldX (base name: "iEzsignformfieldX")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldX
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldY (base name: "iEzsignformfieldY")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldY
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldWidth (base name: "iEzsignformfieldWidth")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldWidth
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldHeight (base name: "iEzsignformfieldHeight")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldHeight
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignformfieldSelected (base name: "bEzsignformfieldSelected")', function() {
      // uncomment below and update the code to test the property bEzsignformfieldSelected
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldEnteredvalue (base name: "sEzsignformfieldEnteredvalue")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldEnteredvalue
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
