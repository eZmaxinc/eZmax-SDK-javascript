# EZmaxApiDefinitionFull.CommunicationRequestCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiCommunicationID** | **Number** | The unique ID of the Communication. | [optional] 
**eCommunicationImportance** | [**FieldECommunicationImportance**](FieldECommunicationImportance.md) |  | [optional] 
**eCommunicationType** | [**FieldECommunicationType**](FieldECommunicationType.md) |  | 
**objCommunicationsender** | [**CustomCommunicationsenderRequest**](CustomCommunicationsenderRequest.md) |  | [optional] 
**sCommunicationSubject** | **String** | The subject of the Communication | [optional] 
**tCommunicationBody** | **String** | The Body of the Communication | 
**bCommunicationPrivate** | **Boolean** | Whether the Communication is private or not | 
**eCommunicationAttachmenttype** | **String** | How the attachment should be included in the email.   Only used if eCommunicationType is **Email** | [optional] 
**iCommunicationAttachmentlinkexpiration** | **Number** | The number of days before the attachment link expired.   Only used if eCommunicationType is **Email** and eCommunicationattachmentType is **Link** | [optional] 
**bCommunicationReadreceipt** | **Boolean** | Whether we ask for a read receipt or not. | [optional] 
**a_objCommunicationattachment** | [**[CustomCommunicationattachmentRequest]**](CustomCommunicationattachmentRequest.md) |  | 
**a_objCommunicationrecipient** | [**[CommunicationrecipientRequestCompound]**](CommunicationrecipientRequestCompound.md) |  | 
**a_objCommunicationreference** | [**[CommunicationreferenceRequestCompound]**](CommunicationreferenceRequestCompound.md) |  | 
**a_objCommunicationexternalrecipient** | [**[CommunicationexternalrecipientRequestCompound]**](CommunicationexternalrecipientRequestCompound.md) |  | 



## Enum: ECommunicationAttachmenttypeEnum


* `Attachment` (value: `"Attachment"`)

* `Url` (value: `"Url"`)




