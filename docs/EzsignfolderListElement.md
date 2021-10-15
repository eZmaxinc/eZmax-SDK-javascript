# EZmaxApiDefinition.EzsignfolderListElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignfolderID** | **Number** | The unique ID of the Ezsignfolder | 
**fkiEzsignfoldertypeID** | **Number** | The unique ID of the Ezsignfoldertype. | 
**sEzsignfoldertypeNameX** | **String** | The name of the Ezsignfoldertype in the language of the requester | 
**sEzsignfolderDescription** | **String** | The description of the Ezsign Folder | 
**eEzsignfolderStep** | [**FieldEEzsignfolderStep**](FieldEEzsignfolderStep.md) |  | 
**dtCreatedDate** | **String** | The date and time at which the object was created | 
**dtEzsignfolderSentdate** | [**OneOfstringnull**](OneOfstringnull.md) |  | 
**dtDueDate** | [**OneOfstringnull**](OneOfstringnull.md) | The date at which no more signature will be accepted on the folder | 
**iTotalDocument** | **Number** | The total number of Ezsigndocument in the folder | 
**iTotalDocumentEdm** | **Number** | The total number of Ezsigndocument in the folder that were saved in the edm system | 
**iTotalSignature** | **Number** | The total number of signature blocks in all Ezsigndocuments in the folder | 
**iTotalSignatureSigned** | **Number** | The total number of already signed signature blocks in all Ezsigndocuments in the folder | 


