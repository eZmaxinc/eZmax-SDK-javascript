/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
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
    instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
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

  describe('EzsignsignatureGetObjectV1ResponseMPayload', function() {
    it('should create an instance of EzsignsignatureGetObjectV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsignsignatureGetObjectV1ResponseMPayload
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload);
    });

    it('should have the property pkiEzsignsignatureID (base name: "pkiEzsignsignatureID")', function() {
      // uncomment below and update the code to test the property pkiEzsignsignatureID
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldersignerassociationID (base name: "fkiEzsignfoldersignerassociationID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldersignerassociationID
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignpagePagenumber (base name: "iEzsignpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsignpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureX (base name: "iEzsignsignatureX")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureX
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureY (base name: "iEzsignsignatureY")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureY
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignatureStep (base name: "iEzsignsignatureStep")', function() {
      // uncomment below and update the code to test the property iEzsignsignatureStep
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignsignatureType (base name: "eEzsignsignatureType")', function() {
      // uncomment below and update the code to test the property eEzsignsignatureType
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property tEzsignsignatureTooltip (base name: "tEzsignsignatureTooltip")', function() {
      // uncomment below and update the code to test the property tEzsignsignatureTooltip
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignsignatureTooltipposition (base name: "eEzsignsignatureTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsignsignatureTooltipposition
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignsignatureFont (base name: "eEzsignsignatureFont")', function() {
      // uncomment below and update the code to test the property eEzsignsignatureFont
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignsignatureCustomdate (base name: "bEzsignsignatureCustomdate")', function() {
      // uncomment below and update the code to test the property bEzsignsignatureCustomdate
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsignsignaturecustomdate (base name: "a_objEzsignsignaturecustomdate")', function() {
      // uncomment below and update the code to test the property a_objEzsignsignaturecustomdate
      //var instance = new EZmaxApiDefinitionFull.EzsignsignatureGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
