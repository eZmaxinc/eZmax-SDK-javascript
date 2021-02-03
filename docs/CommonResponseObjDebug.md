# EZmaxApiDefinition.CommonResponseObjDebug

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sMemoryUsage** | **String** | The peak memory allocated during the API request execution. Formatted as a human readable string | 
**sRunTime** | **String** | The total server execution time of the API request execution. Formatted as a human readable string | 
**iSQLSelects** | **Number** | The number of SQL SELECT queries that were sent to the database server during the API request execution | 
**iSQLQueries** | **Number** | The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution | 
**a_objSQLQuery** | [**[CommonResponseObjSQLQuery]**](CommonResponseObjSQLQuery.md) | An array of the SQL Queries that were executed during the API request execution | 


