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
    instance = new EZmaxApiDefinitionFull.EzmaxinvoicingGetObjectV2ResponseMPayload();
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

  describe('EzmaxinvoicingGetObjectV2ResponseMPayload', function() {
    it('should create an instance of EzmaxinvoicingGetObjectV2ResponseMPayload', function() {
      // uncomment below and update the code to test EzmaxinvoicingGetObjectV2ResponseMPayload
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingGetObjectV2ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzmaxinvoicingGetObjectV2ResponseMPayload);
    });

    it('should have the property objEzmaxinvoicing (base name: "objEzmaxinvoicing")', function() {
      // uncomment below and update the code to test the property objEzmaxinvoicing
      //var instance = new EZmaxApiDefinitionFull.EzmaxinvoicingGetObjectV2ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
