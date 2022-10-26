/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
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

  describe('EzmaxinvoicinguserResponse', function() {
    it('should create an instance of EzmaxinvoicinguserResponse', function() {
      // uncomment below and update the code to test EzmaxinvoicinguserResponse
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse);
    });

    it('should have the property pkiEzmaxinvoicinguserID (base name: "pkiEzmaxinvoicinguserID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicinguserID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingID (base name: "fkiEzmaxinvoicingID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicinguserEzsigndocument (base name: "iEzmaxinvoicinguserEzsigndocument")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicinguserEzsigndocument
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicinguserEzsignaccount (base name: "bEzmaxinvoicinguserEzsignaccount")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicinguserEzsignaccount
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzmaxinvoicinguserBillableezsign (base name: "bEzmaxinvoicinguserBillableezsign")', function() {
      // uncomment below and update the code to test the property bEzmaxinvoicinguserBillableezsign
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzmaxinvoicinguserVariationezsign (base name: "eEzmaxinvoicinguserVariationezsign")', function() {
      // uncomment below and update the code to test the property eEzmaxinvoicinguserVariationezsign
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicinguserResponse();
      //expect(instance).to.be();
    });

  });

}));
