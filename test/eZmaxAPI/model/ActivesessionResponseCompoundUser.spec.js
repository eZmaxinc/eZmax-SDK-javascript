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
    instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
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

  describe('ActivesessionResponseCompoundUser', function() {
    it('should create an instance of ActivesessionResponseCompoundUser', function() {
      // uncomment below and update the code to test ActivesessionResponseCompoundUser
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser);
    });

    it('should have the property pkiUserID (base name: "pkiUserID")', function() {
      // uncomment below and update the code to test the property pkiUserID
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property fkiTimezoneID (base name: "fkiTimezoneID")', function() {
      // uncomment below and update the code to test the property fkiTimezoneID
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property sAvatarUrl (base name: "sAvatarUrl")', function() {
      // uncomment below and update the code to test the property sAvatarUrl
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property sUserFirstname (base name: "sUserFirstname")', function() {
      // uncomment below and update the code to test the property sUserFirstname
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property sUserLastname (base name: "sUserLastname")', function() {
      // uncomment below and update the code to test the property sUserLastname
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddress (base name: "sEmailAddress")', function() {
      // uncomment below and update the code to test the property sEmailAddress
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property eUserEzsignsendreminderfrequency (base name: "eUserEzsignsendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eUserEzsignsendreminderfrequency
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property iUserInterfacecolor (base name: "iUserInterfacecolor")', function() {
      // uncomment below and update the code to test the property iUserInterfacecolor
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property bUserInterfacedark (base name: "bUserInterfacedark")', function() {
      // uncomment below and update the code to test the property bUserInterfacedark
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

    it('should have the property iUserListresult (base name: "iUserListresult")', function() {
      // uncomment below and update the code to test the property iUserListresult
      //var instance = new EZmaxApiDefinitionFull.ActivesessionResponseCompoundUser();
      //expect(instance).to.be();
    });

  });

}));
