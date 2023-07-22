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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
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

  describe('EzsigntemplatepackageResponse', function() {
    it('should create an instance of EzsigntemplatepackageResponse', function() {
      // uncomment below and update the code to test EzsigntemplatepackageResponse
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatepackageResponse);
    });

    it('should have the property pkiEzsigntemplatepackageID (base name: "pkiEzsigntemplatepackageID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatepackageID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sLanguageNameX (base name: "sLanguageNameX")', function() {
      // uncomment below and update the code to test the property sLanguageNameX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatepackageDescription (base name: "sEzsigntemplatepackageDescription")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatepackageDescription
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatepackageAdminonly (base name: "bEzsigntemplatepackageAdminonly")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatepackageAdminonly
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatepackageNeedvalidation (base name: "bEzsigntemplatepackageNeedvalidation")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatepackageNeedvalidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatepackageIsactive (base name: "bEzsigntemplatepackageIsactive")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatepackageIsactive
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackageResponse();
      //expect(instance).to.be();
    });

  });

}));
