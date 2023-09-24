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
    instance = new EZmaxApiDefinitionFull.UserResponse();
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

  describe('UserResponse', function() {
    it('should create an instance of UserResponse', function() {
      // uncomment below and update the code to test UserResponse
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.UserResponse);
    });

    it('should have the property pkiUserID (base name: "pkiUserID")', function() {
      // uncomment below and update the code to test the property pkiUserID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAgentID (base name: "fkiAgentID")', function() {
      // uncomment below and update the code to test the property fkiAgentID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrokerID (base name: "fkiBrokerID")', function() {
      // uncomment below and update the code to test the property fkiBrokerID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAssistantID (base name: "fkiAssistantID")', function() {
      // uncomment below and update the code to test the property fkiAssistantID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEmployeeID (base name: "fkiEmployeeID")', function() {
      // uncomment below and update the code to test the property fkiEmployeeID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCompanyIDDefault (base name: "fkiCompanyIDDefault")', function() {
      // uncomment below and update the code to test the property fkiCompanyIDDefault
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sCompanyNameX (base name: "sCompanyNameX")', function() {
      // uncomment below and update the code to test the property sCompanyNameX
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiDepartmentIDDefault (base name: "fkiDepartmentIDDefault")', function() {
      // uncomment below and update the code to test the property fkiDepartmentIDDefault
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sDepartmentNameX (base name: "sDepartmentNameX")', function() {
      // uncomment below and update the code to test the property sDepartmentNameX
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiTimezoneID (base name: "fkiTimezoneID")', function() {
      // uncomment below and update the code to test the property fkiTimezoneID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sTimezoneName (base name: "sTimezoneName")', function() {
      // uncomment below and update the code to test the property sTimezoneName
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sLanguageNameX (base name: "sLanguageNameX")', function() {
      // uncomment below and update the code to test the property sLanguageNameX
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property objEmail (base name: "objEmail")', function() {
      // uncomment below and update the code to test the property objEmail
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property objPhoneHome (base name: "objPhoneHome")', function() {
      // uncomment below and update the code to test the property objPhoneHome
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property objPhoneSMS (base name: "objPhoneSMS")', function() {
      // uncomment below and update the code to test the property objPhoneSMS
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSecretquestionID (base name: "fkiSecretquestionID")', function() {
      // uncomment below and update the code to test the property fkiSecretquestionID
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiModuleIDForm (base name: "fkiModuleIDForm")', function() {
      // uncomment below and update the code to test the property fkiModuleIDForm
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sModuleNameX (base name: "sModuleNameX")', function() {
      // uncomment below and update the code to test the property sModuleNameX
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eUserOrigin (base name: "eUserOrigin")', function() {
      // uncomment below and update the code to test the property eUserOrigin
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eUserType (base name: "eUserType")', function() {
      // uncomment below and update the code to test the property eUserType
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eUserLogintype (base name: "eUserLogintype")', function() {
      // uncomment below and update the code to test the property eUserLogintype
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserFirstname (base name: "sUserFirstname")', function() {
      // uncomment below and update the code to test the property sUserFirstname
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserLastname (base name: "sUserLastname")', function() {
      // uncomment below and update the code to test the property sUserLastname
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUserLoginname (base name: "sUserLoginname")', function() {
      // uncomment below and update the code to test the property sUserLoginname
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property eUserEzsignaccess (base name: "eUserEzsignaccess")', function() {
      // uncomment below and update the code to test the property eUserEzsignaccess
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtUserLastlogondate (base name: "dtUserLastlogondate")', function() {
      // uncomment below and update the code to test the property dtUserLastlogondate
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtUserPasswordchanged (base name: "dtUserPasswordchanged")', function() {
      // uncomment below and update the code to test the property dtUserPasswordchanged
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property dtUserEzsignprepaidexpiration (base name: "dtUserEzsignprepaidexpiration")', function() {
      // uncomment below and update the code to test the property dtUserEzsignprepaidexpiration
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bUserIsactive (base name: "bUserIsactive")', function() {
      // uncomment below and update the code to test the property bUserIsactive
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bUserValidatebyadministration (base name: "bUserValidatebyadministration")', function() {
      // uncomment below and update the code to test the property bUserValidatebyadministration
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bUserValidatebydirector (base name: "bUserValidatebydirector")', function() {
      // uncomment below and update the code to test the property bUserValidatebydirector
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bUserAttachmentautoverified (base name: "bUserAttachmentautoverified")', function() {
      // uncomment below and update the code to test the property bUserAttachmentautoverified
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property bUserChangepassword (base name: "bUserChangepassword")', function() {
      // uncomment below and update the code to test the property bUserChangepassword
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.UserResponse();
      //expect(instance).to.be();
    });

  });

}));
