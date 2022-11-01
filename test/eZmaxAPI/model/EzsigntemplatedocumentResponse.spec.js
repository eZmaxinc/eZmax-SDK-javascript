/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
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

  describe('EzsigntemplatedocumentResponse', function() {
    it('should create an instance of EzsigntemplatedocumentResponse', function() {
      // uncomment below and update the code to test EzsigntemplatedocumentResponse
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse);
    });

    it('should have the property pkiEzsigntemplatedocumentID (base name: "pkiEzsigntemplatedocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatedocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateID (base name: "fkiEzsigntemplateID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatedocumentName (base name: "sEzsigntemplatedocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatedocumentName
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentPagetotal (base name: "iEzsigntemplatedocumentPagetotal")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentPagetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentSignaturetotal (base name: "iEzsigntemplatedocumentSignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentSignaturetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentResponse();
      //expect(instance).to.be();
    });

  });

}));
