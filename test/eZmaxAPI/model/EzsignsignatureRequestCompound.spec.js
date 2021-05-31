/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
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
    instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
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

  describe('EzsignsignatureRequestCompound', function() {
    it('should create an instance of EzsignsignatureRequestCompound', function() {
      // uncomment below and update the code to test EzsignsignatureRequestCompound
      //var instane = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignsignatureRequestCompound);
    });

    it('should have the property fkiEzsignfoldersignerassociationID (base name: "fkiEzsignfoldersignerassociationID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldersignerassociationID
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpagePagenumber (base name: "iEzsignpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsignpagePagenumber
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureX (base name: "iEzsignsignatureX")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureX
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureY (base name: "iEzsignsignatureY")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureY
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureStep (base name: "iEzsignsignatureStep")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureStep
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignsignatureType (base name: "eEzsignsignatureType")', function() {
      // uncomment below and update the code to test the property eEzsignsignatureType
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinition.EzsignsignatureRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
