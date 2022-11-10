/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
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
    instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
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

  describe('EzsigndocumentlogResponseCompound', function() {
    it('should create an instance of EzsigndocumentlogResponseCompound', function() {
      // uncomment below and update the code to test EzsigndocumentlogResponseCompound
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound);
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignsignerID (base name: "fkiEzsignsignerID")', function() {
      // uncomment below and update the code to test the property fkiEzsignsignerID
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentlogDatetime (base name: "dtEzsigndocumentlogDatetime")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentlogDatetime
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentlogType (base name: "eEzsigndocumentlogType")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentlogType
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentlogDetail (base name: "sEzsigndocumentlogDetail")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentlogDetail
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentlogLastname (base name: "sEzsigndocumentlogLastname")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentlogLastname
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentlogFirstname (base name: "sEzsigndocumentlogFirstname")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentlogFirstname
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentlogIP (base name: "sEzsigndocumentlogIP")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentlogIP
      //var instance = new EZmaxApiDefinitionFull.EzsigndocumentlogResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
