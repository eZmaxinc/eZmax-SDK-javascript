/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
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
    instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
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

  describe('EzsigndocumentResponseCompoundAllOf', function() {
    it('should create an instance of EzsigndocumentResponseCompoundAllOf', function() {
      // uncomment below and update the code to test EzsigndocumentResponseCompoundAllOf
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf);
    });

    it('should have the property iEzsigndocumentStepformtotal (base name: "iEzsigndocumentStepformtotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepformtotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepformcurrent (base name: "iEzsigndocumentStepformcurrent")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepformcurrent
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepsignaturetotal (base name: "iEzsigndocumentStepsignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepsignaturetotal
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentStepsignatureCurrent (base name: "iEzsigndocumentStepsignatureCurrent")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentStepsignatureCurrent
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsignfoldersignerassociationstatus (base name: "a_objEzsignfoldersignerassociationstatus")', function() {
      // uncomment below and update the code to test the property a_objEzsignfoldersignerassociationstatus
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentResponseCompoundAllOf();
      //expect(instance).to.be();
    });

  });

}));
