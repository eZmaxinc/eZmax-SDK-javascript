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
    instance = new EZmaxApiDefinitionFull.AttachmentResponse();
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

  describe('AttachmentResponse', function() {
    it('should create an instance of AttachmentResponse', function() {
      // uncomment below and update the code to test AttachmentResponse
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.AttachmentResponse);
    });

    it('should have the property pkiAttachmentID (base name: "pkiAttachmentID")', function() {
      // uncomment below and update the code to test the property pkiAttachmentID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiComputerID (base name: "fkiComputerID")', function() {
      // uncomment below and update the code to test the property fkiComputerID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAdjustmentID (base name: "fkiAdjustmentID")', function() {
      // uncomment below and update the code to test the property fkiAdjustmentID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiAgentID (base name: "fkiAgentID")', function() {
      // uncomment below and update the code to test the property fkiAgentID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBankaccountID (base name: "fkiBankaccountID")', function() {
      // uncomment below and update the code to test the property fkiBankaccountID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBrokerID (base name: "fkiBrokerID")', function() {
      // uncomment below and update the code to test the property fkiBrokerID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCommissionadvanceID (base name: "fkiCommissionadvanceID")', function() {
      // uncomment below and update the code to test the property fkiCommissionadvanceID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCommunicationID (base name: "fkiCommunicationID")', function() {
      // uncomment below and update the code to test the property fkiCommunicationID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCustomerID (base name: "fkiCustomerID")', function() {
      // uncomment below and update the code to test the property fkiCustomerID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiCustomertemplateID (base name: "fkiCustomertemplateID")', function() {
      // uncomment below and update the code to test the property fkiCustomertemplateID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiDepositID (base name: "fkiDepositID")', function() {
      // uncomment below and update the code to test the property fkiDepositID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiDeposittransitchequeID (base name: "fkiDeposittransitchequeID")', function() {
      // uncomment below and update the code to test the property fkiDeposittransitchequeID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiElectronicfundstransferID (base name: "fkiElectronicfundstransferID")', function() {
      // uncomment below and update the code to test the property fkiElectronicfundstransferID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEmployeeID (base name: "fkiEmployeeID")', function() {
      // uncomment below and update the code to test the property fkiEmployeeID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiExternalbrokerID (base name: "fkiExternalbrokerID")', function() {
      // uncomment below and update the code to test the property fkiExternalbrokerID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzcomadvanceserverID (base name: "fkiEzcomadvanceserverID")', function() {
      // uncomment below and update the code to test the property fkiEzcomadvanceserverID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzcomcompanyID (base name: "fkiEzcomcompanyID")', function() {
      // uncomment below and update the code to test the property fkiEzcomcompanyID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentID (base name: "fkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiGhacqcontractID (base name: "fkiGhacqcontractID")', function() {
      // uncomment below and update the code to test the property fkiGhacqcontractID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInscriptionID (base name: "fkiInscriptionID")', function() {
      // uncomment below and update the code to test the property fkiInscriptionID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInscriptiontempID (base name: "fkiInscriptiontempID")', function() {
      // uncomment below and update the code to test the property fkiInscriptiontempID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInscriptionnotauthenticatedID (base name: "fkiInscriptionnotauthenticatedID")', function() {
      // uncomment below and update the code to test the property fkiInscriptionnotauthenticatedID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInvoiceID (base name: "fkiInvoiceID")', function() {
      // uncomment below and update the code to test the property fkiInvoiceID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiBuyercontractID (base name: "fkiBuyercontractID")', function() {
      // uncomment below and update the code to test the property fkiBuyercontractID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisebrokerID (base name: "fkiFranchisebrokerID")', function() {
      // uncomment below and update the code to test the property fkiFranchisebrokerID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchiseagenceID (base name: "fkiFranchiseagenceID")', function() {
      // uncomment below and update the code to test the property fkiFranchiseagenceID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchiseofficeID (base name: "fkiFranchiseofficeID")', function() {
      // uncomment below and update the code to test the property fkiFranchiseofficeID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisefranchiseID (base name: "fkiFranchisefranchiseID")', function() {
      // uncomment below and update the code to test the property fkiFranchisefranchiseID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisecomplaintID (base name: "fkiFranchisecomplaintID")', function() {
      // uncomment below and update the code to test the property fkiFranchisecomplaintID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiLeadID (base name: "fkiLeadID")', function() {
      // uncomment below and update the code to test the property fkiLeadID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiMarketingprogramID (base name: "fkiMarketingprogramID")', function() {
      // uncomment below and update the code to test the property fkiMarketingprogramID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiMarketingfollowID (base name: "fkiMarketingfollowID")', function() {
      // uncomment below and update the code to test the property fkiMarketingfollowID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiNotaryID (base name: "fkiNotaryID")', function() {
      // uncomment below and update the code to test the property fkiNotaryID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiOfficetaxreportID (base name: "fkiOfficetaxreportID")', function() {
      // uncomment below and update the code to test the property fkiOfficetaxreportID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiOtherincomeID (base name: "fkiOtherincomeID")', function() {
      // uncomment below and update the code to test the property fkiOtherincomeID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiPaymentpreparationID (base name: "fkiPaymentpreparationID")', function() {
      // uncomment below and update the code to test the property fkiPaymentpreparationID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiPurchaseID (base name: "fkiPurchaseID")', function() {
      // uncomment below and update the code to test the property fkiPurchaseID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSalaryID (base name: "fkiSalaryID")', function() {
      // uncomment below and update the code to test the property fkiSalaryID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiSupplierID (base name: "fkiSupplierID")', function() {
      // uncomment below and update the code to test the property fkiSupplierID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiTranqcontractID (base name: "fkiTranqcontractID")', function() {
      // uncomment below and update the code to test the property fkiTranqcontractID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiTemplateID (base name: "fkiTemplateID")', function() {
      // uncomment below and update the code to test the property fkiTemplateID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiInscriptionchecklistID (base name: "fkiInscriptionchecklistID")', function() {
      // uncomment below and update the code to test the property fkiInscriptionchecklistID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiFolderID (base name: "fkiFolderID")', function() {
      // uncomment below and update the code to test the property fkiFolderID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiRejectedoffertopurchaseID (base name: "fkiRejectedoffertopurchaseID")', function() {
      // uncomment below and update the code to test the property fkiRejectedoffertopurchaseID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiDisclosureID (base name: "fkiDisclosureID")', function() {
      // uncomment below and update the code to test the property fkiDisclosureID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiReconciliationID (base name: "fkiReconciliationID")', function() {
      // uncomment below and update the code to test the property fkiReconciliationID
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsigndocumentIDReference (base name: "fkiEzsigndocumentIDReference")', function() {
      // uncomment below and update the code to test the property fkiEzsigndocumentIDReference
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property eAttachmentDocumenttype (base name: "eAttachmentDocumenttype")', function() {
      // uncomment below and update the code to test the property eAttachmentDocumenttype
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sAttachmentName (base name: "sAttachmentName")', function() {
      // uncomment below and update the code to test the property sAttachmentName
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property eAttachmentPrivacy (base name: "eAttachmentPrivacy")', function() {
      // uncomment below and update the code to test the property eAttachmentPrivacy
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserIDSpecific (base name: "fkiUserIDSpecific")', function() {
      // uncomment below and update the code to test the property fkiUserIDSpecific
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property eAttachmentType (base name: "eAttachmentType")', function() {
      // uncomment below and update the code to test the property eAttachmentType
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property iAttachmentSize (base name: "iAttachmentSize")', function() {
      // uncomment below and update the code to test the property iAttachmentSize
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property iAttachmentEDMmoduleflag (base name: "iAttachmentEDMmoduleflag")', function() {
      // uncomment below and update the code to test the property iAttachmentEDMmoduleflag
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property sAttachmentMD5 (base name: "sAttachmentMD5")', function() {
      // uncomment below and update the code to test the property sAttachmentMD5
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property bAttachmentDeleted (base name: "bAttachmentDeleted")', function() {
      // uncomment below and update the code to test the property bAttachmentDeleted
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property bAttachmentValid (base name: "bAttachmentValid")', function() {
      // uncomment below and update the code to test the property bAttachmentValid
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property eAttachmentVerified (base name: "eAttachmentVerified")', function() {
      // uncomment below and update the code to test the property eAttachmentVerified
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property tAttachmentRejectioncomment (base name: "tAttachmentRejectioncomment")', function() {
      // uncomment below and update the code to test the property tAttachmentRejectioncomment
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserIDOwner (base name: "fkiUserIDOwner")', function() {
      // uncomment below and update the code to test the property fkiUserIDOwner
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinitionFull.AttachmentResponse();
      //expect(instance).to.be();
    });

  });

}));
