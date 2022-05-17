/**
 * eZmax API Definition (Full)
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
    factory(root.expect, root.EZmaxApiDefinitionFull);
  }
}(this, function(expect, EZmaxApiDefinitionFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
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

  describe('EzsigntemplatesignatureRequest', function() {
    it('should create an instance of EzsigntemplatesignatureRequest', function() {
      // uncomment below and update the code to test EzsigntemplatesignatureRequest
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest);
    });

    it('should have the property pkiEzsigntemplatesignatureID (base name: "pkiEzsigntemplatesignatureID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatesignatureID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatedocumentID (base name: "fkiEzsigntemplatedocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatedocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatesignerID (base name: "fkiEzsigntemplatesignerID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatesignerID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpagePagenumber (base name: "iEzsigntemplatedocumentpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureX (base name: "iEzsigntemplatesignatureX")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureY (base name: "iEzsigntemplatesignatureY")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureY
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureStep (base name: "iEzsigntemplatesignatureStep")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureStep
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureType (base name: "eEzsigntemplatesignatureType")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureType
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property tEzsigntemplatesignatureTooltip (base name: "tEzsigntemplatesignatureTooltip")', function() {
      // uncomment below and update the code to test the property tEzsigntemplatesignatureTooltip
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureTooltipposition (base name: "eEzsigntemplatesignatureTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureTooltipposition
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureFont (base name: "eEzsigntemplatesignatureFont")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureFont
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequest();
      //expect(instance).to.be();
    });

  });

}));
