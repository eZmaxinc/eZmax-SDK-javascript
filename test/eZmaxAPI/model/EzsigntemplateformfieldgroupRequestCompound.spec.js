/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
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

  describe('EzsigntemplateformfieldgroupRequestCompound', function() {
    it('should create an instance of EzsigntemplateformfieldgroupRequestCompound', function() {
      // uncomment below and update the code to test EzsigntemplateformfieldgroupRequestCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound);
    });

    it('should have the property pkiEzsigntemplateformfieldgroupID (base name: "pkiEzsigntemplateformfieldgroupID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplateformfieldgroupID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatedocumentID (base name: "fkiEzsigntemplatedocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatedocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateformfieldgroupType (base name: "eEzsigntemplateformfieldgroupType")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateformfieldgroupType
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateformfieldgroupSignerrequirement (base name: "eEzsigntemplateformfieldgroupSignerrequirement")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateformfieldgroupSignerrequirement
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateformfieldgroupLabel (base name: "sEzsigntemplateformfieldgroupLabel")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateformfieldgroupLabel
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldgroupStep (base name: "iEzsigntemplateformfieldgroupStep")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldgroupStep
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateformfieldgroupDefaultvalue (base name: "sEzsigntemplateformfieldgroupDefaultvalue")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateformfieldgroupDefaultvalue
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldgroupFilledmin (base name: "iEzsigntemplateformfieldgroupFilledmin")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldgroupFilledmin
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldgroupFilledmax (base name: "iEzsigntemplateformfieldgroupFilledmax")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldgroupFilledmax
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplateformfieldgroupReadonly (base name: "bEzsigntemplateformfieldgroupReadonly")', function() {
      // uncomment below and update the code to test the property bEzsigntemplateformfieldgroupReadonly
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplateformfieldgroupMaxlength (base name: "iEzsigntemplateformfieldgroupMaxlength")', function() {
      // uncomment below and update the code to test the property iEzsigntemplateformfieldgroupMaxlength
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplateformfieldgroupEncrypted (base name: "bEzsigntemplateformfieldgroupEncrypted")', function() {
      // uncomment below and update the code to test the property bEzsigntemplateformfieldgroupEncrypted
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplateformfieldgroupRegexp (base name: "sEzsigntemplateformfieldgroupRegexp")', function() {
      // uncomment below and update the code to test the property sEzsigntemplateformfieldgroupRegexp
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsigntemplateformfieldgroupTooltip (base name: "tEzsigntemplateformfieldgroupTooltip")', function() {
      // uncomment below and update the code to test the property tEzsigntemplateformfieldgroupTooltip
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplateformfieldgroupTooltipposition (base name: "eEzsigntemplateformfieldgroupTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsigntemplateformfieldgroupTooltipposition
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsigntemplateformfieldgroupsigner (base name: "a_objEzsigntemplateformfieldgroupsigner")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplateformfieldgroupsigner
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objDropdownElement (base name: "a_objDropdownElement")', function() {
      // uncomment below and update the code to test the property a_objDropdownElement
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsigntemplateformfield (base name: "a_objEzsigntemplateformfield")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplateformfield
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
