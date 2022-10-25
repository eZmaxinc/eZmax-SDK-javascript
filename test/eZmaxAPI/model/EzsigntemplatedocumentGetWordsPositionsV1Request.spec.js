/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request();
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

  describe('EzsigntemplatedocumentGetWordsPositionsV1Request', function() {
    it('should create an instance of EzsigntemplatedocumentGetWordsPositionsV1Request', function() {
      // uncomment below and update the code to test EzsigntemplatedocumentGetWordsPositionsV1Request
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request);
    });

    it('should have the property eGet (base name: "eGet")', function() {
      // uncomment below and update the code to test the property eGet
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request();
      //expect(instance).to.be();
    });

    it('should have the property bWordCaseSensitive (base name: "bWordCaseSensitive")', function() {
      // uncomment below and update the code to test the property bWordCaseSensitive
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request();
      //expect(instance).to.be();
    });

    it('should have the property a_sWord (base name: "a_sWord")', function() {
      // uncomment below and update the code to test the property a_sWord
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatedocumentGetWordsPositionsV1Request();
      //expect(instance).to.be();
    });

  });

}));
