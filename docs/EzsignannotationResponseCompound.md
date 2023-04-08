# EZmaxApiDefinitionFull.EzsignannotationResponseCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignannotationID** | **Number** | The unique ID of the Ezsignannotation | 
**fkiEzsigndocumentID** | **Number** | The unique ID of the Ezsigndocument | 
**eEzsignannotationHorizontalalignment** | [**EnumHorizontalalignment**](EnumHorizontalalignment.md) |  | [optional] 
**eEzsignannotationVerticalalignment** | [**EnumVerticalalignment**](EnumVerticalalignment.md) |  | [optional] 
**eEzsignannotationType** | [**FieldEEzsignannotationType**](FieldEEzsignannotationType.md) |  | 
**iEzsignannotationX** | **Number** | The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \&quot;200\&quot; for the X coordinate. | 
**iEzsignannotationY** | **Number** | The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \&quot;300\&quot; for the Y coordinate. | 
**iEzsignannotationWidth** | **Number** | The Width of the Ezsignannotation.  Width is calculated at 100dpi (dot per inch). So for example, if you want to have the width of the Ezsignannotation to be 3 inches, you would use \&quot;300\&quot; for the Width. | [optional] 
**iEzsignannotationHeight** | **Number** | The Height of the Ezsignannotation.  Height is calculated at 100dpi (dot per inch). So for example, if you want to have the height of the Ezsignannotation to be 2 inches, you would use \&quot;200\&quot; for the Height.  This can only be set if eEzsignannotationType is **StrikethroughBlock** or **Text** | [optional] 
**sEzsignannotationText** | **String** | The Text of the Ezsignannotation | [optional] 
**iEzsignpagePagenumber** | **Number** | The page number in the Ezsigndocument | 
**objTextstylestatic** | [**TextstylestaticResponseCompound**](TextstylestaticResponseCompound.md) |  | [optional] 


