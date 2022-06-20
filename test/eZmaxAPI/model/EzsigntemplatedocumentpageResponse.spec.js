/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
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

  describe('EzsigntemplatedocumentpageResponse', function() {
    it('should create an instance of EzsigntemplatedocumentpageResponse', function() {
      // uncomment below and update the code to test EzsigntemplatedocumentpageResponse
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse);
    });

    it('should have the property pkiEzsigntemplatedocumentpageID (base name: "pkiEzsigntemplatedocumentpageID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatedocumentpageID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpageWidthimage (base name: "iEzsigntemplatedocumentpageWidthimage")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpageWidthimage
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpageHeightimage (base name: "iEzsigntemplatedocumentpageHeightimage")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpageHeightimage
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpageWidthpdf (base name: "iEzsigntemplatedocumentpageWidthpdf")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpageWidthpdf
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpageHeightpdf (base name: "iEzsigntemplatedocumentpageHeightpdf")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpageHeightpdf
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpagePagenumber (base name: "iEzsigntemplatedocumentpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sImageUrl (base name: "sImageUrl")', function() {
      // uncomment below and update the code to test the property sImageUrl
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentpageResponse();
      //expect(instance).to.be();
    });

  });

}));
