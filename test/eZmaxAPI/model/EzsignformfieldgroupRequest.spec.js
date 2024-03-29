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
    instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
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

  describe('EzsignformfieldgroupRequest', function() {
    it('should create an instance of EzsignformfieldgroupRequest', function() {
      // uncomment below and update the code to test EzsignformfieldgroupRequest
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignformfieldgroupRequest);
    });

    it('should have the property pkiEzsignformfieldgroupID (base name: "pkiEzsignformfieldgroupID")', function() {
      // uncomment below and update the code to test the property pkiEzsignformfieldgroupID
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupType (base name: "eEzsignformfieldgroupType")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupType
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupSignerrequirement (base name: "eEzsignformfieldgroupSignerrequirement")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupSignerrequirement
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupLabel (base name: "sEzsignformfieldgroupLabel")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupLabel
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupStep (base name: "iEzsignformfieldgroupStep")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupStep
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupDefaultvalue (base name: "sEzsignformfieldgroupDefaultvalue")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupDefaultvalue
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupFilledmin (base name: "iEzsignformfieldgroupFilledmin")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupFilledmin
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupFilledmax (base name: "iEzsignformfieldgroupFilledmax")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupFilledmax
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignformfieldgroupReadonly (base name: "bEzsignformfieldgroupReadonly")', function() {
      // uncomment below and update the code to test the property bEzsignformfieldgroupReadonly
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignformfieldgroupMaxlength (base name: "iEzsignformfieldgroupMaxlength")', function() {
      // uncomment below and update the code to test the property iEzsignformfieldgroupMaxlength
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignformfieldgroupEncrypted (base name: "bEzsignformfieldgroupEncrypted")', function() {
      // uncomment below and update the code to test the property bEzsignformfieldgroupEncrypted
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignformfieldgroupRegexp (base name: "sEzsignformfieldgroupRegexp")', function() {
      // uncomment below and update the code to test the property sEzsignformfieldgroupRegexp
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignformfieldgroupTooltip (base name: "tEzsignformfieldgroupTooltip")', function() {
      // uncomment below and update the code to test the property tEzsignformfieldgroupTooltip
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupTooltipposition (base name: "eEzsignformfieldgroupTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupTooltipposition
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignformfieldgroupTextvalidation (base name: "eEzsignformfieldgroupTextvalidation")', function() {
      // uncomment below and update the code to test the property eEzsignformfieldgroupTextvalidation
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupRequest();
      //expect(instance).to.be();
    });

  });

}));
