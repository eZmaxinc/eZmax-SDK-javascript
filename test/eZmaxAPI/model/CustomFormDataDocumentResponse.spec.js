/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
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
    instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
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

  describe('CustomFormDataDocumentResponse', function() {
    it('should create an instance of CustomFormDataDocumentResponse', function() {
      // uncomment below and update the code to test CustomFormDataDocumentResponse
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CustomFormDataDocumentResponse);
    });

    it('should have the property pkiEzsigndocumentID (base name: "pkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfolderID (base name: "fkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentName (base name: "sEzsigndocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentName
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtModifiedDate (base name: "dtModifiedDate")', function() {
      // uncomment below and update the code to test the property dtModifiedDate
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be();
    });

    it('should have the property a_objFormDataSigner (base name: "a_objFormDataSigner")', function() {
      // uncomment below and update the code to test the property a_objFormDataSigner
      //var instance = new EZmaxApiDefinitionFull.CustomFormDataDocumentResponse();
      //expect(instance).to.be();
    });

  });

}));
