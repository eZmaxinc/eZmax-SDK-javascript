/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
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

  describe('EzmaxinvoicingsummaryinternaldetailResponseCompound', function() {
    it('should create an instance of EzmaxinvoicingsummaryinternaldetailResponseCompound', function() {
      // uncomment below and update the code to test EzmaxinvoicingsummaryinternaldetailResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound);
    });

    it('should have the property pkiEzmaxinvoicingsummaryinternaldetailID (base name: "pkiEzmaxinvoicingsummaryinternaldetailID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingsummaryinternaldetailID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingsummaryinternalID (base name: "fkiEzmaxinvoicingsummaryinternalID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingsummaryinternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxproductID (base name: "fkiEzmaxproductID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxproductID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzmaxproductDescriptionX (base name: "sEzmaxproductDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzmaxproductDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityexternalID (base name: "fkiBillingentityexternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityexternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityexternalDescription (base name: "sBillingentityexternalDescription")', function() {
      // uncomment below and update the code to test the property sBillingentityexternalDescription
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryinternaldetailCountreal (base name: "dEzmaxinvoicingsummaryinternaldetailCountreal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryinternaldetailCountreal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryinternaldetailSubtotal (base name: "dEzmaxinvoicingsummaryinternaldetailSubtotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryinternaldetailSubtotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryinternaldetailRebate (base name: "dEzmaxinvoicingsummaryinternaldetailRebate")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryinternaldetailRebate
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryinternaldetailTotal (base name: "dEzmaxinvoicingsummaryinternaldetailTotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryinternaldetailTotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingsummaryinternaldetailAdjustment (base name: "bEzmaxinvoicingsummaryinternaldetailAdjustment")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingsummaryinternaldetailAdjustment
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternaldetailResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
