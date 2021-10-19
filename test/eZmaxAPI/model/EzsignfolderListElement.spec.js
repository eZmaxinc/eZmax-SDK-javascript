/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.EzsignfolderListElement();
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

  describe('EzsignfolderListElement', function() {
    it('should create an instance of EzsignfolderListElement', function() {
      // uncomment below and update the code to test EzsignfolderListElement
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignfolderListElement);
    });

    it('should have the property pkiEzsignfolderID (base name: "pkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfolderID
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldertypeID (base name: "fkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfolderDescription (base name: "sEzsignfolderDescription")', function() {
      // uncomment below and update the code to test the property sEzsignfolderDescription
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfolderStep (base name: "eEzsignfolderStep")', function() {
      // uncomment below and update the code to test the property eEzsignfolderStep
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property dtCreatedDate (base name: "dtCreatedDate")', function() {
      // uncomment below and update the code to test the property dtCreatedDate
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsignfolderSentdate (base name: "dtEzsignfolderSentdate")', function() {
      // uncomment below and update the code to test the property dtEzsignfolderSentdate
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property dtDueDate (base name: "dtDueDate")', function() {
      // uncomment below and update the code to test the property dtDueDate
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property iTotalDocument (base name: "iTotalDocument")', function() {
      // uncomment below and update the code to test the property iTotalDocument
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property iTotalDocumentEdm (base name: "iTotalDocumentEdm")', function() {
      // uncomment below and update the code to test the property iTotalDocumentEdm
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property iTotalSignature (base name: "iTotalSignature")', function() {
      // uncomment below and update the code to test the property iTotalSignature
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

    it('should have the property iTotalSignatureSigned (base name: "iTotalSignatureSigned")', function() {
      // uncomment below and update the code to test the property iTotalSignatureSigned
      //var instance = new EZmaxApiDefinition.EzsignfolderListElement();
      //expect(instance).to.be();
    });

  });

}));