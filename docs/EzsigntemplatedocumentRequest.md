# EZmaxApiDefinitionFull.EzsigntemplatedocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsigntemplatedocumentID** | **Number** | The unique ID of the Ezsigntemplatedocument | [optional] 
**fkiEzsigntemplateID** | **Number** | The unique ID of the Ezsigntemplate | 
**fkiEzsigndocumentID** | **Number** | The unique ID of the Ezsigndocument | [optional] 
**fkiEzsigntemplatesignerID** | **Number** | The unique ID of the Ezsigntemplatesigner | [optional] 
**sEzsigntemplatedocumentName** | **String** | The name of the Ezsigntemplatedocument. | 
**eEzsigntemplatedocumentSource** | **String** | Indicates where to look for the document binary content. | 
**eEzsigntemplatedocumentFormat** | **String** | Indicates the format of the template. | [optional] 
**sEzsigntemplatedocumentBase64** | **Blob** | The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource &#x3D; Base64. | [optional] 
**sEzsigntemplatedocumentUrl** | **String** | The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource &#x3D; Url. | [optional] 
**bEzsigntemplatedocumentForcerepair** | **Boolean** | Try to repair the document or flatten it if it cannot be used for electronic signature. | [optional] 
**eEzsigntemplatedocumentForm** | **String** | If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**  **Discard** removes the form from the document | [optional] 
**sEzsigntemplatedocumentPassword** | **String** | If the source template is password protected, the password to open/modify it. | [optional] [default to &#39;&#39;]



## Enum: EEzsigntemplatedocumentSourceEnum


* `Base64` (value: `"Base64"`)

* `Url` (value: `"Url"`)

* `Ezsigndocument` (value: `"Ezsigndocument"`)





## Enum: EEzsigntemplatedocumentFormatEnum


* `Pdf` (value: `"Pdf"`)

* `Doc` (value: `"Doc"`)

* `Docx` (value: `"Docx"`)

* `Xls` (value: `"Xls"`)

* `Xlsx` (value: `"Xlsx"`)

* `Ppt` (value: `"Ppt"`)

* `Pptx` (value: `"Pptx"`)





## Enum: EEzsigntemplatedocumentFormEnum


* `Keep` (value: `"Keep"`)

* `Convert` (value: `"Convert"`)

* `Discard` (value: `"Discard"`)




