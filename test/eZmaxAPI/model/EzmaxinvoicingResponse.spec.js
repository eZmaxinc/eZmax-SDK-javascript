/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
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

  describe('EzmaxinvoicingResponse', function() {
    it('should create an instance of EzmaxinvoicingResponse', function() {
      // uncomment below and update the code to test EzmaxinvoicingResponse
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingResponse);
    });

    it('should have the property pkiEzmaxinvoicingID (base name: "pkiEzmaxinvoicingID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingcontractID (base name: "fkiEzmaxinvoicingcontractID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingcontractID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxpricingID (base name: "fkiEzmaxpricingID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxpricingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSystemconfigurationtypeID (base name: "fkiSystemconfigurationtypeID")', function() {
      // uncomment below and update the code to test the property fkiSystemconfigurationtypeID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property sSystemconfigurationtypeDescriptionX (base name: "sSystemconfigurationtypeDescriptionX")', function() {
      // uncomment below and update the code to test the property sSystemconfigurationtypeDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property yyyymmEzmaxinvoicing (base name: "yyyymmEzmaxinvoicing")', function() {
      // uncomment below and update the code to test the property yyyymmEzmaxinvoicing
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingDays (base name: "iEzmaxinvoicingDays")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingDays
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzmaxinvoicingPaymenttype (base name: "eEzmaxinvoicingPaymenttype")', function() {
      // uncomment below and update the code to test the property eEzmaxinvoicingPaymenttype
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingRebatepaymenttype (base name: "dEzmaxinvoicingRebatepaymenttype")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingRebatepaymenttype
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingContractlength (base name: "iEzmaxinvoicingContractlength")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingContractlength
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingRebatecontractlength (base name: "dEzmaxinvoicingRebatecontractlength")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingRebatecontractlength
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicingRebateEzsignallagents (base name: "bEzmaxinvoicingRebateEzsignallagents")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicingRebateEzsignallagents
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponse();
      //expect(instance).to.be();
    });

  });

}));