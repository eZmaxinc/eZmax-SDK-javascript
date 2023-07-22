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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
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

  describe('EzmaxinvoicingsummaryglobalResponseCompound', function() {
    it('should create an instance of EzmaxinvoicingsummaryglobalResponseCompound', function() {
      // uncomment below and update the code to test EzmaxinvoicingsummaryglobalResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound);
    });

    it('should have the property pkiEzmaxinvoicingsummaryglobalID (base name: "pkiEzmaxinvoicingsummaryglobalID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingsummaryglobalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingID (base name: "fkiEzmaxinvoicingID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxproductID (base name: "fkiEzmaxproductID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxproductID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzmaxproductDescriptionX (base name: "sEzmaxproductDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzmaxproductDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzmaxinvoicingsummaryglobalStart (base name: "dtEzmaxinvoicingsummaryglobalStart")', function() {
      // uncomment below and update the code to test the property dtEzmaxinvoicingsummaryglobalStart
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzmaxinvoicingsummaryglobalEnd (base name: "dtEzmaxinvoicingsummaryglobalEnd")', function() {
      // uncomment below and update the code to test the property dtEzmaxinvoicingsummaryglobalEnd
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingsummaryglobalDays (base name: "iEzmaxinvoicingsummaryglobalDays")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingsummaryglobalDays
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalCountreal (base name: "dEzmaxinvoicingsummaryglobalCountreal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalCountreal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalCountbilled (base name: "dEzmaxinvoicingsummaryglobalCountbilled")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalCountbilled
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalSubtotal (base name: "dEzmaxinvoicingsummaryglobalSubtotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalSubtotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalRebateamount (base name: "dEzmaxinvoicingsummaryglobalRebateamount")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalRebateamount
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalRebatepercent (base name: "dEzmaxinvoicingsummaryglobalRebatepercent")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalRebatepercent
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalRebatetotal (base name: "dEzmaxinvoicingsummaryglobalRebatetotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalRebatetotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalTotal (base name: "dEzmaxinvoicingsummaryglobalTotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalTotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalRepresentative (base name: "dEzmaxinvoicingsummaryglobalRepresentative")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalRepresentative
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalPartner (base name: "dEzmaxinvoicingsummaryglobalPartner")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalPartner
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryglobalNet (base name: "dEzmaxinvoicingsummaryglobalNet")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryglobalNet
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingsummaryglobalAdjustment (base name: "bEzmaxinvoicingsummaryglobalAdjustment")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingsummaryglobalAdjustment
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property tEzmaxproductHelpX (base name: "tEzmaxproductHelpX")', function() {
      // uncomment below and update the code to test the property tEzmaxproductHelpX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingcommission (base name: "a_objEzmaxinvoicingcommission")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingcommission
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryglobalResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
