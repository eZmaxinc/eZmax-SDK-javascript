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
    instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
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

  describe('FranchisereferalincomeRequestCompound', function() {
    it('should create an instance of FranchisereferalincomeRequestCompound', function() {
      // uncomment below and update the code to test FranchisereferalincomeRequestCompound
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound);
    });

    it('should have the property pkiFranchisereferalincomeID (base name: "pkiFranchisereferalincomeID")', function() {
      // uncomment below and update the code to test the property pkiFranchisereferalincomeID
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisebrokerID (base name: "fkiFranchisebrokerID")', function() {
      // uncomment below and update the code to test the property fkiFranchisebrokerID
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisereferalincomeprogramID (base name: "fkiFranchisereferalincomeprogramID")', function() {
      // uncomment below and update the code to test the property fkiFranchisereferalincomeprogramID
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiPeriodID (base name: "fkiPeriodID")', function() {
      // uncomment below and update the code to test the property fkiPeriodID
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeLoan (base name: "dFranchisereferalincomeLoan")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeLoan
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeFranchiseamount (base name: "dFranchisereferalincomeFranchiseamount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeFranchiseamount
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeFranchisoramount (base name: "dFranchisereferalincomeFranchisoramount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeFranchisoramount
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeAgentamount (base name: "dFranchisereferalincomeAgentamount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeAgentamount
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtFranchisereferalincomeDisbursed (base name: "dtFranchisereferalincomeDisbursed")', function() {
      // uncomment below and update the code to test the property dtFranchisereferalincomeDisbursed
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property tFranchisereferalincomeComment (base name: "tFranchisereferalincomeComment")', function() {
      // uncomment below and update the code to test the property tFranchisereferalincomeComment
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchiseofficeID (base name: "fkiFranchiseofficeID")', function() {
      // uncomment below and update the code to test the property fkiFranchiseofficeID
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sFranchisereferalincomeRemoteid (base name: "sFranchisereferalincomeRemoteid")', function() {
      // uncomment below and update the code to test the property sFranchisereferalincomeRemoteid
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAddress (base name: "objAddress")', function() {
      // uncomment below and update the code to test the property objAddress
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objContact (base name: "a_objContact")', function() {
      // uncomment below and update the code to test the property a_objContact
      //var instance = new EZmaxApiDefinitionFull.FranchisereferalincomeRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
