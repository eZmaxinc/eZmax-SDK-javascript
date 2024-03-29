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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
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

  describe('EzsigntemplatedocumentRequest', function() {
    it('should create an instance of EzsigntemplatedocumentRequest', function() {
      // uncomment below and update the code to test EzsigntemplatedocumentRequest
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest);
    });

    it('should have the property pkiEzsigntemplatedocumentID (base name: "pkiEzsigntemplatedocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatedocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateID (base name: "fkiEzsigntemplateID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatesignerID (base name: "fkiEzsigntemplatesignerID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatesignerID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatedocumentName (base name: "sEzsigntemplatedocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatedocumentName
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatedocumentSource (base name: "eEzsigntemplatedocumentSource")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatedocumentSource
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatedocumentFormat (base name: "eEzsigntemplatedocumentFormat")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatedocumentFormat
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatedocumentBase64 (base name: "sEzsigntemplatedocumentBase64")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatedocumentBase64
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatedocumentUrl (base name: "sEzsigntemplatedocumentUrl")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatedocumentUrl
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatedocumentForcerepair (base name: "bEzsigntemplatedocumentForcerepair")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatedocumentForcerepair
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatedocumentForm (base name: "eEzsigntemplatedocumentForm")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatedocumentForm
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatedocumentPassword (base name: "sEzsigntemplatedocumentPassword")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatedocumentPassword
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest();
      //expect(instance).to.be();
    });

  });

}));
