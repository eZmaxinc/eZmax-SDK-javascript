/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.EzsignsignerResponse();
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

  describe('EzsignsignerResponse', function() {
    it('should create an instance of EzsignsignerResponse', function() {
      // uncomment below and update the code to test EzsignsignerResponse
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsignsignerResponse);
    });

    it('should have the property pkiEzsignsignerID (base name: "pkiEzsignsignerID")', function() {
      // uncomment below and update the code to test the property pkiEzsignsignerID
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiTaxassignmentID (base name: "fkiTaxassignmentID")', function() {
      // uncomment below and update the code to test the property fkiTaxassignmentID
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSecretquestionID (base name: "fkiSecretquestionID")', function() {
      // uncomment below and update the code to test the property fkiSecretquestionID
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserlogintypeID (base name: "fkiUserlogintypeID")', function() {
      // uncomment below and update the code to test the property fkiUserlogintypeID
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserlogintypeDescriptionX (base name: "sUserlogintypeDescriptionX")', function() {
      // uncomment below and update the code to test the property sUserlogintypeDescriptionX
      //var instance = new EZmaxApiDefinition.EzsignsignerResponse();
      //expect(instance).to.be();
    });

  });

}));
