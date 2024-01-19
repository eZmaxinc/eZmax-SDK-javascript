/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
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
    instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
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

  describe('CustomEzsignfoldertypeResponse', function() {
    it('should create an instance of CustomEzsignfoldertypeResponse', function() {
      // uncomment below and update the code to test CustomEzsignfoldertypeResponse
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse);
    });

    it('should have the property pkiEzsignfoldertypeID (base name: "pkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsignfoldertypeNameX (base name: "sEzsignfoldertypeNameX")', function() {
      // uncomment below and update the code to test the property sEzsignfoldertypeNameX
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendproofezsignsigner (base name: "bEzsignfoldertypeSendproofezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendproofezsignsigner
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIncludeproofsigner (base name: "bEzsignfoldertypeIncludeproofsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIncludeproofsigner
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIncludeproofuser (base name: "bEzsignfoldertypeIncludeproofuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIncludeproofuser
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeAllowdownloadattachmentezsignsigner (base name: "bEzsignfoldertypeAllowdownloadattachmentezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeAllowdownloadattachmentezsignsigner
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeAllowdownloadproofezsignsigner (base name: "bEzsignfoldertypeAllowdownloadproofezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeAllowdownloadproofezsignsigner
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeDelegate (base name: "bEzsignfoldertypeDelegate")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeDelegate
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeReassign (base name: "bEzsignfoldertypeReassign")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeReassign
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeReassignezsignsigner (base name: "bEzsignfoldertypeReassignezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeReassignezsignsigner
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeReassignuser (base name: "bEzsignfoldertypeReassignuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeReassignuser
      //var instance = new EZmaxApiDefinitionFull.CustomEzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

  });

}));
