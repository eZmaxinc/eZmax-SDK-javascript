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
    instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
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

  describe('VersionhistoryResponse', function() {
    it('should create an instance of VersionhistoryResponse', function() {
      // uncomment below and update the code to test VersionhistoryResponse
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.VersionhistoryResponse);
    });

    it('should have the property pkiVersionhistoryID (base name: "pkiVersionhistoryID")', function() {
      // uncomment below and update the code to test the property pkiVersionhistoryID
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiModuleID (base name: "fkiModuleID")', function() {
      // uncomment below and update the code to test the property fkiModuleID
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiModulesectionID (base name: "fkiModulesectionID")', function() {
      // uncomment below and update the code to test the property fkiModulesectionID
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property sModuleNameX (base name: "sModuleNameX")', function() {
      // uncomment below and update the code to test the property sModuleNameX
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property sModulesectionNameX (base name: "sModulesectionNameX")', function() {
      // uncomment below and update the code to test the property sModulesectionNameX
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property eVersionhistoryUsertype (base name: "eVersionhistoryUsertype")', function() {
      // uncomment below and update the code to test the property eVersionhistoryUsertype
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property objVersionhistoryDetail (base name: "objVersionhistoryDetail")', function() {
      // uncomment below and update the code to test the property objVersionhistoryDetail
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtVersionhistoryDate (base name: "dtVersionhistoryDate")', function() {
      // uncomment below and update the code to test the property dtVersionhistoryDate
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtVersionhistoryDateend (base name: "dtVersionhistoryDateend")', function() {
      // uncomment below and update the code to test the property dtVersionhistoryDateend
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property eVersionhistoryType (base name: "eVersionhistoryType")', function() {
      // uncomment below and update the code to test the property eVersionhistoryType
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

    it('should have the property bVersionhistoryDraft (base name: "bVersionhistoryDraft")', function() {
      // uncomment below and update the code to test the property bVersionhistoryDraft
      //var instance = new EZmaxApiDefinitionFull.VersionhistoryResponse();
      //expect(instance).to.be();
    });

  });

}));