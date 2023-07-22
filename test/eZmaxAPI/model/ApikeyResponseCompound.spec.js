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
    instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
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

  describe('ApikeyResponseCompound', function() {
    it('should create an instance of ApikeyResponseCompound', function() {
      // uncomment below and update the code to test ApikeyResponseCompound
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ApikeyResponseCompound);
    });

    it('should have the property pkiApikeyID (base name: "pkiApikeyID")', function() {
      // uncomment below and update the code to test the property pkiApikeyID
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objApikeyDescription (base name: "objApikeyDescription")', function() {
      // uncomment below and update the code to test the property objApikeyDescription
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sComputedToken (base name: "sComputedToken")', function() {
      // uncomment below and update the code to test the property sComputedToken
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bApikeyIsactive (base name: "bApikeyIsactive")', function() {
      // uncomment below and update the code to test the property bApikeyIsactive
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.ApikeyResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
