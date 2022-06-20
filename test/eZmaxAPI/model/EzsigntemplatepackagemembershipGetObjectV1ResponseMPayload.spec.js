/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
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
    instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
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

  describe('EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload', function() {
    it('should create an instance of EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload', function() {
      // uncomment below and update the code to test EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload);
    });

    it('should have the property pkiEzsigntemplatepackagemembershipID (base name: "pkiEzsigntemplatepackagemembershipID")', function() {
      // uncomment below and update the code to test the property pkiEzsigntemplatepackagemembershipID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplatepackageID (base name: "fkiEzsigntemplatepackageID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplatepackageID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntemplateID (base name: "fkiEzsigntemplateID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntemplateID
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigntemplatepackagemembershipOrder (base name: "iEzsigntemplatepackagemembershipOrder")', function() {
      // uncomment below and update the code to test the property iEzsigntemplatepackagemembershipOrder
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property objEzsigntemplate (base name: "objEzsigntemplate")', function() {
      // uncomment below and update the code to test the property objEzsigntemplate
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

    it('should have the property a_objEzsigntemplatepackagesignermembership (base name: "a_objEzsigntemplatepackagesignermembership")', function() {
      // uncomment below and update the code to test the property a_objEzsigntemplatepackagesignermembership
      //var instance = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
      //expect(instance).to.be();
    });

  });

}));
