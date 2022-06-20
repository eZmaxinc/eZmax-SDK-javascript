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
    instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
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

  describe('ActivesessionResponseCompound', function() {
    it('should create an instance of ActivesessionResponseCompound', function() {
      // uncomment below and update the code to test ActivesessionResponseCompound
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ActivesessionResponseCompound);
    });

    it('should have the property eActivesessionUsertype (base name: "eActivesessionUsertype")', function() {
      // uncomment below and update the code to test the property eActivesessionUsertype
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eActivesessionWeekdaystart (base name: "eActivesessionWeekdaystart")', function() {
      // uncomment below and update the code to test the property eActivesessionWeekdaystart
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sCompanyNameX (base name: "sCompanyNameX")', function() {
      // uncomment below and update the code to test the property sCompanyNameX
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sDepartmentNameX (base name: "sDepartmentNameX")', function() {
      // uncomment below and update the code to test the property sDepartmentNameX
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property bActivesessionDebug (base name: "bActivesessionDebug")', function() {
      // uncomment below and update the code to test the property bActivesessionDebug
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property pksCustomerCode (base name: "pksCustomerCode")', function() {
      // uncomment below and update the code to test the property pksCustomerCode
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_pkiPermissionID (base name: "a_pkiPermissionID")', function() {
      // uncomment below and update the code to test the property a_pkiPermissionID
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objUserReal (base name: "objUserReal")', function() {
      // uncomment below and update the code to test the property objUserReal
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objUserCloned (base name: "objUserCloned")', function() {
      // uncomment below and update the code to test the property objUserCloned
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objApikey (base name: "objApikey")', function() {
      // uncomment below and update the code to test the property objApikey
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_eModuleInternalname (base name: "a_eModuleInternalname")', function() {
      // uncomment below and update the code to test the property a_eModuleInternalname
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
