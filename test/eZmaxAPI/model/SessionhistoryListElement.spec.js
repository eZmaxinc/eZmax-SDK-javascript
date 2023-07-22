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
    instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
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

  describe('SessionhistoryListElement', function() {
    it('should create an instance of SessionhistoryListElement', function() {
      // uncomment below and update the code to test SessionhistoryListElement
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.SessionhistoryListElement);
    });

    it('should have the property pkiSessionhistoryID (base name: "pkiSessionhistoryID")', function() {
      // uncomment below and update the code to test the property pkiSessionhistoryID
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property fkiComputerID (base name: "fkiComputerID")', function() {
      // uncomment below and update the code to test the property fkiComputerID
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property dtSessionhistoryFirsthit (base name: "dtSessionhistoryFirsthit")', function() {
      // uncomment below and update the code to test the property dtSessionhistoryFirsthit
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property dtSessionhistoryLasthit (base name: "dtSessionhistoryLasthit")', function() {
      // uncomment below and update the code to test the property dtSessionhistoryLasthit
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property eSessionhistoryEndby (base name: "eSessionhistoryEndby")', function() {
      // uncomment below and update the code to test the property eSessionhistoryEndby
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property sComputerDescription (base name: "sComputerDescription")', function() {
      // uncomment below and update the code to test the property sComputerDescription
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property sSessionhistoryDuration (base name: "sSessionhistoryDuration")', function() {
      // uncomment below and update the code to test the property sSessionhistoryDuration
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property sSessionhistoryIP (base name: "sSessionhistoryIP")', function() {
      // uncomment below and update the code to test the property sSessionhistoryIP
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

    it('should have the property sUserLoginname (base name: "sUserLoginname")', function() {
      // uncomment below and update the code to test the property sUserLoginname
      //var instance = new EZmaxApiDefinitionFull.SessionhistoryListElement();
      //expect(instance).to.be();
    });

  });

}));
