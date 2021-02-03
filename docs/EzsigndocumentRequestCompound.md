# EZmaxApiDefinition.EzsigndocumentRequestCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eEzsigndocumentSource** | **String** | Indicates where to look for the document binary content. | 
**eEzsigndocumentFormat** | **String** | Indicates the format of the document. | 
**sEzsigndocumentBase64** | **Blob** | The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource &#x3D; Base64. | [optional] 
**fkiEzsignfolderID** | **Number** | A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation. | 
**dtEzsigndocumentDuedate** | **String** | Represent a Date Time. The timezone is the one configured in the User&#39;s profile. | 
**fkiLanguageID** | **Number** | The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English| | 
**sEzsigndocumentFilename** | **String** | The actual file name that will be used when downloading or attaching to an email. | 
**sEzsigndocumentName** | **String** | The name of the document that will be presented to Ezsignfoldersignerassociations | 



## Enum: EEzsigndocumentSourceEnum


* `Base64` (value: `"Base64"`)





## Enum: EEzsigndocumentFormatEnum


* `Pdf` (value: `"Pdf"`)




