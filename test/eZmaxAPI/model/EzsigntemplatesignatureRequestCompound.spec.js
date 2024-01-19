/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
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

  describe('EzsigntemplatesignatureRequestCompound', function() {
    it('should create an instance of EzsigntemplatesignatureRequestCompound', function() {
      // uncomment below and update the code to test EzsigntemplatesignatureRequestCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound);
    });

    it('should have the property pkiEzsigntemplatesignatureID (base name: "pkiEzsigntemplatesignatureID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatesignatureID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatedocumentID (base name: "fkiEzsigntemplatedocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatedocumentID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatesignerID (base name: "fkiEzsigntemplatesignerID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatesignerID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatesignerIDValidation (base name: "fkiEzsigntemplatesignerIDValidation")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatesignerIDValidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignaturePositioning (base name: "eEzsigntemplatesignaturePositioning")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignaturePositioning
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatedocumentpagePagenumber (base name: "iEzsigntemplatedocumentpagePagenumber")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatedocumentpagePagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureX (base name: "iEzsigntemplatesignatureX")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureX
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureY (base name: "iEzsigntemplatesignatureY")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureY
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureWidth (base name: "iEzsigntemplatesignatureWidth")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureWidth
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureHeight (base name: "iEzsigntemplatesignatureHeight")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureHeight
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureStep (base name: "iEzsigntemplatesignatureStep")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureStep
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureType (base name: "eEzsigntemplatesignatureType")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureType
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzsigntemplatesignatureTooltip (base name: "tEzsigntemplatesignatureTooltip")', function() {
      // uncomment below and update the code to test the property tEzsigntemplatesignatureTooltip
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureTooltipposition (base name: "eEzsigntemplatesignatureTooltipposition")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureTooltipposition
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureFont (base name: "eEzsigntemplatesignatureFont")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureFont
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatesignatureRequired (base name: "bEzsigntemplatesignatureRequired")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatesignatureRequired
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureAttachmentnamesource (base name: "eEzsigntemplatesignatureAttachmentnamesource")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureAttachmentnamesource
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatesignatureAttachmentdescription (base name: "sEzsigntemplatesignatureAttachmentdescription")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatesignatureAttachmentdescription
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureValidationstep (base name: "iEzsigntemplatesignatureValidationstep")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureValidationstep
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignatureMaxlength (base name: "iEzsigntemplatesignatureMaxlength")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignatureMaxlength
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatesignatureRegexp (base name: "sEzsigntemplatesignatureRegexp")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatesignatureRegexp
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureTextvalidation (base name: "eEzsigntemplatesignatureTextvalidation")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureTextvalidation
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignatureDependencyrequirement (base name: "eEzsigntemplatesignatureDependencyrequirement")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignatureDependencyrequirement
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntemplatesignaturePositioningpattern (base name: "sEzsigntemplatesignaturePositioningpattern")', function() {
      // uncomment below and update the code to test the property sEzsigntemplatesignaturePositioningpattern
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignaturePositioningoffsetx (base name: "iEzsigntemplatesignaturePositioningoffsetx")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignaturePositioningoffsetx
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatesignaturePositioningoffsety (base name: "iEzsigntemplatesignaturePositioningoffsety")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatesignaturePositioningoffsety
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigntemplatesignaturePositioningoccurence (base name: "eEzsigntemplatesignaturePositioningoccurence")', function() {
      // uncomment below and update the code to test the property eEzsigntemplatesignaturePositioningoccurence
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzsigntemplatesignatureCustomdate (base name: "bEzsigntemplatesignatureCustomdate")', function() {
      // uncomment below and update the code to test the property bEzsigntemplatesignatureCustomdate
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsigntemplatesignaturecustomdate (base name: "a_objEzsigntemplatesignaturecustomdate")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplatesignaturecustomdate
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsigntemplateelementdependency (base name: "a_objEzsigntemplateelementdependency")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplateelementdependency
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatesignatureRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
