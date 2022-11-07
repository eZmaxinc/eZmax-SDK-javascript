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
    instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
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

  describe('EzsignpageResponse', function() {
    it('should create an instance of EzsignpageResponse', function() {
      // uncomment below and update the code to test EzsignpageResponse
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignpageResponse);
    });

    it('should have the property pkiEzsignpageID (base name: "pkiEzsignpageID")', function() {
      // uncomment below and update the code to test the property pkiEzsignpageID
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpageWidthimage (base name: "iEzsignpageWidthimage")', function() {
      // uncomment below and update the code to test the property iEzsignpageWidthimage
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpageHeightimage (base name: "iEzsignpageHeightimage")', function() {
      // uncomment below and update the code to test the property iEzsignpageHeightimage
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpageWidthpdf (base name: "iEzsignpageWidthpdf")', function() {
      // uncomment below and update the code to test the property iEzsignpageWidthpdf
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpageHeightpdf (base name: "iEzsignpageHeightpdf")', function() {
      // uncomment below and update the code to test the property iEzsignpageHeightpdf
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpagePagenumber (base name: "iEzsignpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsignpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sComputedImageurl (base name: "sComputedImageurl")', function() {
      // uncomment below and update the code to test the property sComputedImageurl
      //var instance = new EZmaxApiDefinitionFull.EzsignpageResponse();
      //expect(instance).to.be();
    });

  });

}));
