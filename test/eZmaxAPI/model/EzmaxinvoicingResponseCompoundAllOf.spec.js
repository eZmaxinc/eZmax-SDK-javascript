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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
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

  describe('EzmaxinvoicingResponseCompoundAllOf', function() {
    it('should create an instance of EzmaxinvoicingResponseCompoundAllOf', function() {
      // uncomment below and update the code to test EzmaxinvoicingResponseCompoundAllOf
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf);
    });

    it('should have the property objEzmaxinvoicingcontract (base name: "objEzmaxinvoicingcontract")', function() {
      // uncomment below and update the code to test the property objEzmaxinvoicingcontract
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property objEzmaxpricing (base name: "objEzmaxpricing")', function() {
      // uncomment below and update the code to test the property objEzmaxpricing
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingsummaryglobal (base name: "a_objEzmaxinvoicingsummaryglobal")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingsummaryglobal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingsummaryexternal (base name: "a_objEzmaxinvoicingsummaryexternal")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingsummaryexternal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingsummaryinternal (base name: "a_objEzmaxinvoicingsummaryinternal")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingsummaryinternal
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingagent (base name: "a_objEzmaxinvoicingagent")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingagent
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicinguser (base name: "a_objEzmaxinvoicinguser")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicinguser
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingezsignfolder (base name: "a_objEzmaxinvoicingezsignfolder")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingezsignfolder
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzmaxinvoicingezsigndocument (base name: "a_objEzmaxinvoicingezsigndocument")', function() {
      // uncomment below and update the code to test the property a_objEzmaxinvoicingezsigndocument
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingResponseCompoundAllOf();
      //expect(instance).to.be();
    });

  });

}));
