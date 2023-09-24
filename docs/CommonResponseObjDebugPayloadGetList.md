# EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iVersionMin** | **Number** | The minimum version of the function that can be called | 
**iVersionMax** | **Number** | The maximum version of the function that can be called | 
**a_RequiredPermission** | **[Number]** | An array of permissions required to access this function.  If the value \&quot;0\&quot; is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don&#39;t need to have all of them. | 
**bVersionDeprecated** | **Boolean** | Wheter the current route is deprecated or not | 
**a_Filter** | [**CommonResponseFilter**](CommonResponseFilter.md) |  | 
**a_OrderBy** | **{String: String}** | List of available values for *eOrderBy* | 
**iRowMax** | **Number** | The maximum numbers of results to be returned | [default to 10000]
**iRowOffset** | **Number** | The starting element from where to start retrieving the results. For example if you started at iRowOffset&#x3D;0 and asked for iRowMax&#x3D;100, to get the next 100 results, you could specify iRowOffset&#x3D;100&amp;iRowMax&#x3D;100, | [default to 0]


