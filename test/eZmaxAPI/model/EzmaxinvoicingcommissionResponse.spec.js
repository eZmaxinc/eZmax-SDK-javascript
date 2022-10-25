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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
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

  describe('EzmaxinvoicingcommissionResponse', function() {
    it('should create an instance of EzmaxinvoicingcommissionResponse', function() {
      // uncomment below and update the code to test EzmaxinvoicingcommissionResponse
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse);
    });

    it('should have the property pkiEzmaxinvoicingcommissionID (base name: "pkiEzmaxinvoicingcommissionID")', function() {
      // uncomment below and update the code to test the property pkiEzmaxinvoicingcommissionID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxinvoicingsummaryglobalID (base name: "fkiEzmaxinvoicingsummaryglobalID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxinvoicingsummaryglobalID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxpartnerID (base name: "fkiEzmaxpartnerID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxpartnerID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzmaxrepresentativeID (base name: "fkiEzmaxrepresentativeID")', function() {
      // uncomment below and update the code to test the property fkiEzmaxrepresentativeID
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtEzmaxinvoicingcommissionStart (base name: "dtEzmaxinvoicingcommissionStart")', function() {
      // uncomment below and update the code to test the property dtEzmaxinvoicingcommissionStart
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtEzmaxinvoicingcommissionEnd (base name: "dtEzmaxinvoicingcommissionEnd")', function() {
      // uncomment below and update the code to test the property dtEzmaxinvoicingcommissionEnd
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzmaxinvoicingcommissionDays (base name: "iEzmaxinvoicingcommissionDays")', function() {
      // uncomment below and update the code to test the property iEzmaxinvoicingcommissionDays
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property dEzmaxinvoicingcommissionAmount (base name: "dEzmaxinvoicingcommissionAmount")', function() {
      // uncomment below and update the code to test the property dEzmaxinvoicingcommissionAmount
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingcommissionResponse();
      //expect(instance).to.be();
    });

  });

}));
