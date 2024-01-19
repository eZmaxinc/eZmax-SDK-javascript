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
    instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
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

  describe('EzsigndiscussionResponse', function() {
    it('should create an instance of EzsigndiscussionResponse', function() {
      // uncomment below and update the code to test EzsigndiscussionResponse
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigndiscussionResponse);
    });

    it('should have the property pkiEzsigndiscussionID (base name: "pkiEzsigndiscussionID")', function() {
      // uncomment below and update the code to test the property pkiEzsigndiscussionID
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignpageID (base name: "fkiEzsignpageID")', function() {
      // uncomment below and update the code to test the property fkiEzsignpageID
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiDiscussionID (base name: "fkiDiscussionID")', function() {
      // uncomment below and update the code to test the property fkiDiscussionID
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndiscussionX (base name: "iEzsigndiscussionX")', function() {
      // uncomment below and update the code to test the property iEzsigndiscussionX
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndiscussionY (base name: "iEzsigndiscussionY")', function() {
      // uncomment below and update the code to test the property iEzsigndiscussionY
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndiscussionPagenumber (base name: "iEzsigndiscussionPagenumber")', function() {
      // uncomment below and update the code to test the property iEzsigndiscussionPagenumber
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

    it('should have the property objDiscussion (base name: "objDiscussion")', function() {
      // uncomment below and update the code to test the property objDiscussion
      //var instance = new EZmaxApiDefinitionFull.EzsigndiscussionResponse();
      //expect(instance).to.be();
    });

  });

}));
