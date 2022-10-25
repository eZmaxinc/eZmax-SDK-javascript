# EZmaxApiDefinitionFull.EzmaxinvoicingGetProvisionalV1ResponseMPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzmaxinvoicingID** | **Number** | The unique ID of the Ezmaxinvoicing | [optional] 
**fkiEzmaxinvoicingcontractID** | **Number** | The unique ID of the Ezmaxinvoicingcontract | 
**fkiEzmaxpricingID** | **Number** | The unique ID of the Ezmaxpricing | 
**fkiSystemconfigurationtypeID** | **Number** | The unique ID of the Systemconfigurationtype | 
**sSystemconfigurationtypeDescriptionX** | **String** | The description of the Systemconfigurationtype in the language of the requester | 
**yyyymmEzmaxinvoicing** | **String** | The YYYYMM period of the Ezmaxinvoicing | 
**iEzmaxinvoicingDays** | **Number** | The number of days invoiced | 
**eEzmaxinvoicingPaymenttype** | [**FieldEEzmaxinvoicingPaymenttype**](FieldEEzmaxinvoicingPaymenttype.md) |  | 
**dEzmaxinvoicingRebatepaymenttype** | **String** | The percentage of rebate depending of the payment type | 
**iEzmaxinvoicingContractlength** | **Number** | The length of the contract in years | 
**dEzmaxinvoicingRebatecontractlength** | **String** | The percentage of rebate depending of the contract length | 
**bEzmaxinvoicingRebateEzsignallagents** | **Boolean** | Whether the rebate for eZsign is for all agents | 
**objAudit** | [**CommonAudit**](CommonAudit.md) |  | [optional] 
**objEzmaxinvoicingcontract** | [**EzmaxinvoicingcontractResponseCompound**](EzmaxinvoicingcontractResponseCompound.md) |  | 
**objEzmaxpricing** | [**CustomEzmaxpricingResponse**](CustomEzmaxpricingResponse.md) |  | 
**a_objEzmaxinvoicingsummaryglobal** | [**[EzmaxinvoicingsummaryglobalResponseCompound]**](EzmaxinvoicingsummaryglobalResponseCompound.md) |  | 
**a_objEzmaxinvoicingsummaryexternal** | [**[EzmaxinvoicingsummaryexternalResponseCompound]**](EzmaxinvoicingsummaryexternalResponseCompound.md) |  | 
**a_objEzmaxinvoicingsummaryinternal** | [**[EzmaxinvoicingsummaryinternalResponseCompound]**](EzmaxinvoicingsummaryinternalResponseCompound.md) |  | 
**a_objEzmaxinvoicingagent** | [**[EzmaxinvoicingagentResponseCompound]**](EzmaxinvoicingagentResponseCompound.md) |  | 
**a_objEzmaxinvoicinguser** | [**[EzmaxinvoicinguserResponseCompound]**](EzmaxinvoicinguserResponseCompound.md) |  | 
**a_objEzmaxinvoicingezsignfolder** | [**[CustomEzmaxinvoicingEzsignfolderResponse]**](CustomEzmaxinvoicingEzsignfolderResponse.md) |  | 
**a_objEzmaxinvoicingezsigndocument** | [**[CustomEzmaxinvoicingEzsigndocumentResponse]**](CustomEzmaxinvoicingEzsigndocumentResponse.md) |  | 


