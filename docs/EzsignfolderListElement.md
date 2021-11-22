# EZmaxApiDefinition.EzsignfolderListElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignfolderID** | **Number** | The unique ID of the Ezsignfolder | 
**fkiEzsignfoldertypeID** | **Number** | The unique ID of the Ezsignfoldertype. | 
**eEzsignfoldertypePrivacylevel** | [**FieldEEzsignfoldertypePrivacylevel**](FieldEEzsignfoldertypePrivacylevel.md) |  | 
**sEzsignfoldertypeNameX** | **String** | The name of the Ezsignfoldertype in the language of the requester | 
**sEzsignfolderDescription** | **String** | The description of the Ezsignfolder | 
**eEzsignfolderStep** | [**FieldEEzsignfolderStep**](FieldEEzsignfolderStep.md) |  | 
**dtCreatedDate** | **String** | The date and time at which the object was created | 
**dtEzsignfolderSentdate** | [**OneOfstringobject**](OneOfstringobject.md) |  | 
**dtDueDate** | [**OneOfstringobject**](OneOfstringobject.md) | The date at which no more signature will be accepted on the folder | 
**iEzsigndocument** | **Number** | The total number of Ezsigndocument in the folder | 
**iEzsigndocumentEdm** | **Number** | The total number of Ezsigndocument in the folder that were saved in the edm system | 
**iEzsignsignature** | **Number** | The total number of signature blocks in all Ezsigndocuments in the folder | 
**iEzsignsignatureSigned** | **Number** | The total number of already signed signature blocks in all Ezsigndocuments in the folder | 


