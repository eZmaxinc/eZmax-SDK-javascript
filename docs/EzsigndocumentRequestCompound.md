# EZmaxApiDefinitionFull.EzsigndocumentRequestCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsigndocumentID** | **Number** | The unique ID of the Ezsigndocument | [optional] 
**fkiEzsignfolderID** | **Number** | The unique ID of the Ezsignfolder | 
**fkiEzsigntemplateID** | **Number** | The unique ID of the Ezsigntemplate | [optional] 
**fkiEzsignfoldersignerassociationID** | **Number** | The unique ID of the Ezsignfoldersignerassociation | [optional] 
**fkiLanguageID** | **Number** | The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English| | 
**eEzsigndocumentSource** | **String** | Indicates where to look for the document binary content. | 
**eEzsigndocumentFormat** | **String** | Indicates the format of the document. | [optional] 
**sEzsigndocumentBase64** | **Blob** | The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource &#x3D; Base64. | [optional] 
**sEzsigndocumentUrl** | **String** | The url where the document content resides.  This field is Required when eEzsigndocumentSource &#x3D; Url. | [optional] 
**bEzsigndocumentForcerepair** | **Boolean** | Try to repair the document or flatten it if it cannot be used for electronic signature.  | [optional] [default to true]
**sEzsigndocumentPassword** | **String** | If the source document is password protected, the password to open/modify it. | [optional] 
**eEzsigndocumentForm** | **String** | If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**  **Discard** removes the form from the document. | [optional] 
**dtEzsigndocumentDuedate** | **String** | The maximum date and time at which the Ezsigndocument can be signed. | 
**sEzsigndocumentName** | **String** | The name of the document that will be presented to Ezsignfoldersignerassociations | 
**sEzsigndocumentExternalid** | **String** | This field can be used to store an External ID from the client&#39;s system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format.  | [optional] 



## Enum: EEzsigndocumentSourceEnum


* `Base64` (value: `"Base64"`)

* `Ezsigntemplate` (value: `"Ezsigntemplate"`)

* `Url` (value: `"Url"`)





## Enum: EEzsigndocumentFormatEnum


* `Pdf` (value: `"Pdf"`)

* `Doc` (value: `"Doc"`)

* `Docx` (value: `"Docx"`)

* `Xls` (value: `"Xls"`)

* `Xlsx` (value: `"Xlsx"`)

* `Ppt` (value: `"Ppt"`)

* `Pptx` (value: `"Pptx"`)





## Enum: EEzsigndocumentFormEnum


* `Keep` (value: `"Keep"`)

* `Convert` (value: `"Convert"`)

* `Discard` (value: `"Discard"`)




