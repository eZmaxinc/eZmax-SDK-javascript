/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
    instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
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

  describe('EzsignfoldertypeResponse', function() {
    it('should create an instance of EzsignfoldertypeResponse', function() {
      // uncomment below and update the code to test EzsignfoldertypeResponse
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignfoldertypeResponse);
    });

    it('should have the property pkiEzsignfoldertypeID (base name: "pkiEzsignfoldertypeID")', function() {
      // uncomment below and update the code to test the property pkiEzsignfoldertypeID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property objEzsignfoldertypeName (base name: "objEzsignfoldertypeName")', function() {
      // uncomment below and update the code to test the property objEzsignfoldertypeName
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrandingID (base name: "fkiBrandingID")', function() {
      // uncomment below and update the code to test the property fkiBrandingID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBillingentityinternalID (base name: "fkiBillingentityinternalID")', function() {
      // uncomment below and update the code to test the property fkiBillingentityinternalID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUsergroupID (base name: "fkiUsergroupID")', function() {
      // uncomment below and update the code to test the property fkiUsergroupID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUsergroupIDRestricted (base name: "fkiUsergroupIDRestricted")', function() {
      // uncomment below and update the code to test the property fkiUsergroupIDRestricted
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigntsarequirementID (base name: "fkiEzsigntsarequirementID")', function() {
      // uncomment below and update the code to test the property fkiEzsigntsarequirementID
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sBrandingDescriptionX (base name: "sBrandingDescriptionX")', function() {
      // uncomment below and update the code to test the property sBrandingDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sBillingentityinternalDescriptionX (base name: "sBillingentityinternalDescriptionX")', function() {
      // uncomment below and update the code to test the property sBillingentityinternalDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigntsarequirementDescriptionX (base name: "sEzsigntsarequirementDescriptionX")', function() {
      // uncomment below and update the code to test the property sEzsigntsarequirementDescriptionX
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddressSigned (base name: "sEmailAddressSigned")', function() {
      // uncomment below and update the code to test the property sEmailAddressSigned
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sEmailAddressSummary (base name: "sEmailAddressSummary")', function() {
      // uncomment below and update the code to test the property sEmailAddressSummary
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUsergroupNameX (base name: "sUsergroupNameX")', function() {
      // uncomment below and update the code to test the property sUsergroupNameX
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property sUsergroupNameXRestricted (base name: "sUsergroupNameXRestricted")', function() {
      // uncomment below and update the code to test the property sUsergroupNameXRestricted
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypePrivacylevel (base name: "eEzsignfoldertypePrivacylevel")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypePrivacylevel
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypeSendreminderfrequency (base name: "eEzsignfoldertypeSendreminderfrequency")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypeSendreminderfrequency
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeArchivaldays (base name: "iEzsignfoldertypeArchivaldays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeArchivaldays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property eEzsignfoldertypeDisposal (base name: "eEzsignfoldertypeDisposal")', function() {
      // uncomment below and update the code to test the property eEzsignfoldertypeDisposal
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeDisposaldays (base name: "iEzsignfoldertypeDisposaldays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeDisposaldays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property iEzsignfoldertypeDeadlinedays (base name: "iEzsignfoldertypeDeadlinedays")', function() {
      // uncomment below and update the code to test the property iEzsignfoldertypeDeadlinedays
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendattatchmentsigner (base name: "bEzsignfoldertypeSendattatchmentsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendattatchmentsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtodocumentowner (base name: "bEzsignfoldertypeSendsignedtodocumentowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtodocumentowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtofolderowner (base name: "bEzsignfoldertypeSendsignedtofolderowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtofolderowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtofullgroup (base name: "bEzsignfoldertypeSendsignedtofullgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtofullgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtolimitedgroup (base name: "bEzsignfoldertypeSendsignedtolimitedgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtolimitedgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsignedtocolleague (base name: "bEzsignfoldertypeSendsignedtocolleague")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsignedtocolleague
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytodocumentowner (base name: "bEzsignfoldertypeSendsummarytodocumentowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytodocumentowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytofolderowner (base name: "bEzsignfoldertypeSendsummarytofolderowner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytofolderowner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytofullgroup (base name: "bEzsignfoldertypeSendsummarytofullgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytofullgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytolimitedgroup (base name: "bEzsignfoldertypeSendsummarytolimitedgroup")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytolimitedgroup
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeSendsummarytocolleague (base name: "bEzsignfoldertypeSendsummarytocolleague")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeSendsummarytocolleague
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIncludeproofsigner (base name: "bEzsignfoldertypeIncludeproofsigner")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIncludeproofsigner
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIncludeproofuser (base name: "bEzsignfoldertypeIncludeproofuser")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIncludeproofuser
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

    it('should have the property bEzsignfoldertypeIsactive (base name: "bEzsignfoldertypeIsactive")', function() {
      // uncomment below and update the code to test the property bEzsignfoldertypeIsactive
      //var instance = new EZmaxApiDefinitionFull.EzsignfoldertypeResponse();
      //expect(instance).to.be();
    });

  });

}));
