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
    instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
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

  describe('EzsignbulksendRequest', function() {
    it('should create an instance of EzsignbulksendRequest', function() {
      // uncomment below and update the code to test EzsignbulksendRequest
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignbulksendRequest);
    });

    it('should have the property pkiEzsignbulksendID (base name: "pkiEzsignbulksendID")', function() {
      // uncomment below and update the code to test the property pkiEzsignbulksendID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignbulksendDescription (base name: "sEzsignbulksendDescription")', function() {
      // uncomment below and update the code to test the property sEzsignbulksendDescription
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignbulksendNote (base name: "tEzsignbulksendNote")', function() {
      // uncomment below and update the code to test the property tEzsignbulksendNote
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignbulksendNeedvalidation (base name: "bEzsignbulksendNeedvalidation")', function() {
      // uncomment below and update the code to test the property bEzsignbulksendNeedvalidation
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignbulksendIsactive (base name: "bEzsignbulksendIsactive")', function() {
      // uncomment below and update the code to test the property bEzsignbulksendIsactive
      //var instance = new EZmaxApiDefinitionFull.EzsignbulksendRequest();
      //expect(instance).to.be();
    });

  });

}));