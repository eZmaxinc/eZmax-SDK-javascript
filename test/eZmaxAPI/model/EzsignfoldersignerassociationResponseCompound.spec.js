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
    instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
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

  describe('EzsignfoldersignerassociationResponseCompound', function() {
    it('should create an instance of EzsignfoldersignerassociationResponseCompound', function() {
      // uncomment below and update the code to test EzsignfoldersignerassociationResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound);
    });

    it('should have the property pkiEzsignfoldersignerassociationID (base name: "pkiEzsignfoldersignerassociationID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfoldersignerassociationID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfolderID (base name: "fkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfolderID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldersignerassociationDelayedsend (base name: "bEzsignfoldersignerassociationDelayedsend")', function() {
      // uncomment below and update the code to test the property bEzsignfoldersignerassociationDelayedsend
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldersignerassociationReceivecopy (base name: "bEzsignfoldersignerassociationReceivecopy")', function() {
      // uncomment below and update the code to test the property bEzsignfoldersignerassociationReceivecopy
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignfoldersignerassociationMessage (base name: "tEzsignfoldersignerassociationMessage")', function() {
      // uncomment below and update the code to test the property tEzsignfoldersignerassociationMessage
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objEzsignsignergroup (base name: "objEzsignsignergroup")', function() {
      // uncomment below and update the code to test the property objEzsignsignergroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objUser (base name: "objUser")', function() {
      // uncomment below and update the code to test the property objUser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objUsergroup (base name: "objUsergroup")', function() {
      // uncomment below and update the code to test the property objUsergroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objEzsignsigner (base name: "objEzsignsigner")', function() {
      // uncomment below and update the code to test the property objEzsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldersignerassociationResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
