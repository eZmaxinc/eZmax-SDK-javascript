/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
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

  describe('EzmaxinvoicingsummaryinternalResponse', function() {
    it('should create an instance of EzmaxinvoicingsummaryinternalResponse', function() {
      // uncomment below and update the code to test EzmaxinvoicingsummaryinternalResponse
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse);
    });

    it('should have the property pkiEzmaxinvoicingsummaryinternalID (base name: "pkiEzmaxinvoicingsummaryinternalID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingsummaryinternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

    it('should have the property objEzmaxinvoicingsummaryinternalDescription (base name: "objEzmaxinvoicingsummaryinternalDescription")', function() {
      // uncomment below and update the code to test the property objEzmaxinvoicingsummaryinternalDescription
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzmaxinvoicingsummaryinternalDescriptionX (base name: "sEzmaxinvoicingsummaryinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzmaxinvoicingsummaryinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingID (base name: "fkiEzmaxinvoicingID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingsummaryinternalResponse();
      //expect(instance).to.be();
    });

  });

}));
