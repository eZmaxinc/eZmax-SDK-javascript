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
    instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
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

  describe('CustomEzsignsignaturestatusResponse', function() {
    it('should create an instance of CustomEzsignsignaturestatusResponse', function() {
      // uncomment below and update the code to test CustomEzsignsignaturestatusResponse
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse);
    });

    it('should have the property eEzsignsignaturestatusSteptype (base name: "eEzsignsignaturestatusSteptype")', function() {
      // uncomment below and update the code to test the property eEzsignsignaturestatusSteptype
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignaturestatusStep (base name: "iEzsignsignaturestatusStep")', function() {
      // uncomment below and update the code to test the property iEzsignsignaturestatusStep
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignaturestatusTotal (base name: "iEzsignsignaturestatusTotal")', function() {
      // uncomment below and update the code to test the property iEzsignsignaturestatusTotal
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignsignaturestatusSigned (base name: "iEzsignsignaturestatusSigned")', function() {
      // uncomment below and update the code to test the property iEzsignsignaturestatusSigned
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignsignaturestatusResponse();
      //expect(instance).to.be();
    });

  });

}));
