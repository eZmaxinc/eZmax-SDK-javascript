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
    instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
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

  describe('EzsignfoldertypeRequest', function() {
    it('should create an instance of EzsignfoldertypeRequest', function() {
      // uncomment below and update the code to test EzsignfoldertypeRequest
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignfoldertypeRequest);
    });

    it('should have the property pkiEzsignfoldertypeID (base name: "pkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property objEzsignfoldertypeName (base name: "objEzsignfoldertypeName")', function() {
      // uncomment below and update the code to test the property objEzsignfoldertypeName
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrandingID (base name: "fkiBrandingID")', function() {
      // uncomment below and update the code to test the property fkiBrandingID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiUsergroupID (base name: "fkiUsergroupID")', function() {
      // uncomment below and update the code to test the property fkiUsergroupID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiUsergroupIDRestricted (base name: "fkiUsergroupIDRestricted")', function() {
      // uncomment below and update the code to test the property fkiUsergroupIDRestricted
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntsarequirementID (base name: "fkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddressSigned (base name: "sEmailAddressSigned")', function() {
      // uncomment below and update the code to test the property sEmailAddressSigned
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddressSummary (base name: "sEmailAddressSummary")', function() {
      // uncomment below and update the code to test the property sEmailAddressSummary
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypePrivacylevel (base name: "eEzsignfoldertypePrivacylevel")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypePrivacylevel
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypeSendreminderfrequency (base name: "eEzsignfoldertypeSendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypeSendreminderfrequency
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeArchivaldays (base name: "iEzsignfoldertypeArchivaldays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeArchivaldays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypeDisposal (base name: "eEzsignfoldertypeDisposal")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypeDisposal
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypeCompletion (base name: "eEzsignfoldertypeCompletion")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypeCompletion
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeDisposaldays (base name: "iEzsignfoldertypeDisposaldays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeDisposaldays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeDeadlinedays (base name: "iEzsignfoldertypeDeadlinedays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeDeadlinedays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeDelegate (base name: "bEzsignfoldertypeDelegate")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeDelegate
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeDiscussion (base name: "bEzsignfoldertypeDiscussion")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeDiscussion
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeReassignezsignsigner (base name: "bEzsignfoldertypeReassignezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeReassignezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeReassignuser (base name: "bEzsignfoldertypeReassignuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeReassignuser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtoezsignsigner (base name: "bEzsignfoldertypeSendsignedtoezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtoezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtouser (base name: "bEzsignfoldertypeSendsignedtouser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtouser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendattachmentezsignsigner (base name: "bEzsignfoldertypeSendattachmentezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendattachmentezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendproofezsignsigner (base name: "bEzsignfoldertypeSendproofezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendproofezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendattachmentuser (base name: "bEzsignfoldertypeSendattachmentuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendattachmentuser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendproofuser (base name: "bEzsignfoldertypeSendproofuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendproofuser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendproofemail (base name: "bEzsignfoldertypeSendproofemail")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendproofemail
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeAllowdownloadattachmentezsignsigner (base name: "bEzsignfoldertypeAllowdownloadattachmentezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeAllowdownloadattachmentezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeAllowdownloadproofezsignsigner (base name: "bEzsignfoldertypeAllowdownloadproofezsignsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeAllowdownloadproofezsignsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendproofreceivealldocument (base name: "bEzsignfoldertypeSendproofreceivealldocument")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendproofreceivealldocument
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtodocumentowner (base name: "bEzsignfoldertypeSendsignedtodocumentowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtodocumentowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtofolderowner (base name: "bEzsignfoldertypeSendsignedtofolderowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtofolderowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtofullgroup (base name: "bEzsignfoldertypeSendsignedtofullgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtofullgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtolimitedgroup (base name: "bEzsignfoldertypeSendsignedtolimitedgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtolimitedgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtocolleague (base name: "bEzsignfoldertypeSendsignedtocolleague")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtocolleague
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytodocumentowner (base name: "bEzsignfoldertypeSendsummarytodocumentowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytodocumentowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytofolderowner (base name: "bEzsignfoldertypeSendsummarytofolderowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytofolderowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytofullgroup (base name: "bEzsignfoldertypeSendsummarytofullgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytofullgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytolimitedgroup (base name: "bEzsignfoldertypeSendsummarytolimitedgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytolimitedgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytocolleague (base name: "bEzsignfoldertypeSendsummarytocolleague")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytocolleague
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIsactive (base name: "bEzsignfoldertypeIsactive")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIsactive
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeRequest();
      //expect(instance).to.be();
    });

  });

}));
