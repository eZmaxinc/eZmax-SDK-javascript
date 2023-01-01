/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
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
    instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
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

  describe('EzsigndocumentRequestCompound', function() {
    it('should create an instance of EzsigndocumentRequestCompound', function() {
      // uncomment below and update the code to test EzsigndocumentRequestCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigndocumentRequestCompound);
    });

    it('should have the property pkiEzsigndocumentID (base name: "pkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfolderID (base name: "fkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateID (base name: "fkiEzsigntemplateID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldersignerassociationID (base name: "fkiEzsignfoldersignerassociationID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldersignerassociationID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentSource (base name: "eEzsigndocumentSource")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentSource
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentFormat (base name: "eEzsigndocumentFormat")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentFormat
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentBase64 (base name: "sEzsigndocumentBase64")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentBase64
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentUrl (base name: "sEzsigndocumentUrl")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentUrl
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigndocumentForcerepair (base name: "bEzsigndocumentForcerepair")', function() {
      // uncomment below and update the code to test the property bEzsigndocumentForcerepair
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentPassword (base name: "sEzsigndocumentPassword")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentPassword
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentForm (base name: "eEzsigndocumentForm")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentForm
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentDuedate (base name: "dtEzsigndocumentDuedate")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentDuedate
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentName (base name: "sEzsigndocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentName
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
