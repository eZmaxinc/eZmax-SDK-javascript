/**
 * eZmax API Definition
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
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

  describe('EzsignformfieldgroupRequestCompound', function() {
    it('should create an instance of EzsignformfieldgroupRequestCompound', function() {
      // uncomment below and update the code to test EzsignformfieldgroupRequestCompound
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignformfieldgroupRequestCompound);
    });

    it('should have the property pkiEzsignformfieldgroupID (base name: "pkiEzsignformfieldgroupID")', function() {
      // uncomment below and update the code to test the property pkiEzsignformfieldgroupID
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupType (base name: "eEzsignformfieldgroupType")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupType
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupSignerrequirement (base name: "eEzsignformfieldgroupSignerrequirement")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupSignerrequirement
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupLabel (base name: "sEzsignformfieldgroupLabel")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupLabel
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupStep (base name: "iEzsignformfieldgroupStep")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupStep
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupDefaultvalue (base name: "sEzsignformfieldgroupDefaultvalue")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupDefaultvalue
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupFilledmin (base name: "iEzsignformfieldgroupFilledmin")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupFilledmin
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupFilledmax (base name: "iEzsignformfieldgroupFilledmax")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupFilledmax
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignformfieldgroupReadonly (base name: "bEzsignformfieldgroupReadonly")', function() {
      // uncomment below and update the code to test the property bEzsignformfieldgroupReadonly
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupMaxlength (base name: "iEzsignformfieldgroupMaxlength")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupMaxlength
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignformfieldgroupEncrypted (base name: "bEzsignformfieldgroupEncrypted")', function() {
      // uncomment below and update the code to test the property bEzsignformfieldgroupEncrypted
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupRegexp (base name: "sEzsignformfieldgroupRegexp")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupRegexp
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignformfieldgroupTooltip (base name: "tEzsignformfieldgroupTooltip")', function() {
      // uncomment below and update the code to test the property tEzsignformfieldgroupTooltip
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupTooltipposition (base name: "eEzsignformfieldgroupTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupTooltipposition
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsignformfieldgroupsigner (base name: "a_objEzsignformfieldgroupsigner")', function() {
      // uncomment below and update the code to test the property a_objEzsignformfieldgroupsigner
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objDropdownElement (base name: "a_objDropdownElement")', function() {
      // uncomment below and update the code to test the property a_objDropdownElement
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsignformfield (base name: "a_objEzsignformfield")', function() {
      // uncomment below and update the code to test the property a_objEzsignformfield
      //var instance = new EZmaxApiDefinition.EzsignformfieldgroupRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
