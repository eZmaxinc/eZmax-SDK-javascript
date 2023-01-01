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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
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

  describe('EzmaxinvoicingsummaryexternaldetailResponseCompound', function() {
    it('should create an instance of EzmaxinvoicingsummaryexternaldetailResponseCompound', function() {
      // uncomment below and update the code to test EzmaxinvoicingsummaryexternaldetailResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound);
    });

    it('should have the property pkiEzmaxinvoicingsummaryexternaldetailID (base name: "pkiEzmaxinvoicingsummaryexternaldetailID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingsummaryexternaldetailID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingsummaryexternalID (base name: "fkiEzmaxinvoicingsummaryexternalID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingsummaryexternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxproductID (base name: "fkiEzmaxproductID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxproductID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzmaxproductDescriptionX (base name: "sEzmaxproductDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzmaxproductDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryexternaldetailCountreal (base name: "dEzmaxinvoicingsummaryexternaldetailCountreal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryexternaldetailCountreal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryexternaldetailSubtotal (base name: "dEzmaxinvoicingsummaryexternaldetailSubtotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryexternaldetailSubtotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryexternaldetailRebate (base name: "dEzmaxinvoicingsummaryexternaldetailRebate")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryexternaldetailRebate
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingsummaryexternaldetailTotal (base name: "dEzmaxinvoicingsummaryexternaldetailTotal")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingsummaryexternaldetailTotal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingsummaryexternaldetailAdjustment (base name: "bEzmaxinvoicingsummaryexternaldetailAdjustment")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingsummaryexternaldetailAdjustment
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryexternaldetailResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
