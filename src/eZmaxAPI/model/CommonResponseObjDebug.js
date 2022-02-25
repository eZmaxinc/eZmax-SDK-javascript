/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonResponseObjSQLQuery from './CommonResponseObjSQLQuery';

/**
 * The CommonResponseObjDebug model module.
 * @module eZmaxAPI/model/CommonResponseObjDebug
 * @version 1.1.5
 */
class CommonResponseObjDebug {
    /**
     * Constructs a new <code>CommonResponseObjDebug</code>.
     * This is a generic debug object that is returned by all API requests
     * @alias module:eZmaxAPI/model/CommonResponseObjDebug
     * @param sMemoryUsage {String} The peak memory allocated during the API request execution. Formatted as a human readable string
     * @param sRunTime {String} The total server execution time of the API request execution. Formatted as a human readable string
     * @param iSQLSelects {Number} The number of SQL SELECT queries that were sent to the database server during the API request execution
     * @param iSQLQueries {Number} The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     * @param a_objSQLQuery {Array.<module:eZmaxAPI/model/CommonResponseObjSQLQuery>} An array of the SQL Queries that were executed during the API request execution
     */
    constructor(sMemoryUsage, sRunTime, iSQLSelects, iSQLQueries, a_objSQLQuery) { 
        
        CommonResponseObjDebug.initialize(this, sMemoryUsage, sRunTime, iSQLSelects, iSQLQueries, a_objSQLQuery);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sMemoryUsage, sRunTime, iSQLSelects, iSQLQueries, a_objSQLQuery) { 
        obj['sMemoryUsage'] = sMemoryUsage;
        obj['sRunTime'] = sRunTime;
        obj['iSQLSelects'] = iSQLSelects;
        obj['iSQLQueries'] = iSQLQueries;
        obj['a_objSQLQuery'] = a_objSQLQuery;
    }

    /**
     * Constructs a <code>CommonResponseObjDebug</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseObjDebug} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseObjDebug} The populated <code>CommonResponseObjDebug</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseObjDebug();

            if (data.hasOwnProperty('sMemoryUsage')) {
                obj['sMemoryUsage'] = ApiClient.convertToType(data['sMemoryUsage'], 'String');
            }
            if (data.hasOwnProperty('sRunTime')) {
                obj['sRunTime'] = ApiClient.convertToType(data['sRunTime'], 'String');
            }
            if (data.hasOwnProperty('iSQLSelects')) {
                obj['iSQLSelects'] = ApiClient.convertToType(data['iSQLSelects'], 'Number');
            }
            if (data.hasOwnProperty('iSQLQueries')) {
                obj['iSQLQueries'] = ApiClient.convertToType(data['iSQLQueries'], 'Number');
            }
            if (data.hasOwnProperty('a_objSQLQuery')) {
                obj['a_objSQLQuery'] = ApiClient.convertToType(data['a_objSQLQuery'], [CommonResponseObjSQLQuery]);
            }
        }
        return obj;
    }

/**
     * Returns The peak memory allocated during the API request execution. Formatted as a human readable string
     * @return {String}
     */
    getSMemoryUsage() {
        return this.sMemoryUsage;
    }

    /**
     * Sets The peak memory allocated during the API request execution. Formatted as a human readable string
     * @param {String} sMemoryUsage The peak memory allocated during the API request execution. Formatted as a human readable string
     */
    setSMemoryUsage(sMemoryUsage) {
        this['sMemoryUsage'] = sMemoryUsage;
    }
/**
     * Returns The total server execution time of the API request execution. Formatted as a human readable string
     * @return {String}
     */
    getSRunTime() {
        return this.sRunTime;
    }

    /**
     * Sets The total server execution time of the API request execution. Formatted as a human readable string
     * @param {String} sRunTime The total server execution time of the API request execution. Formatted as a human readable string
     */
    setSRunTime(sRunTime) {
        this['sRunTime'] = sRunTime;
    }
/**
     * Returns The number of SQL SELECT queries that were sent to the database server during the API request execution
     * @return {Number}
     */
    getISQLSelects() {
        return this.iSQLSelects;
    }

    /**
     * Sets The number of SQL SELECT queries that were sent to the database server during the API request execution
     * @param {Number} iSQLSelects The number of SQL SELECT queries that were sent to the database server during the API request execution
     */
    setISQLSelects(iSQLSelects) {
        this['iSQLSelects'] = iSQLSelects;
    }
/**
     * Returns The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     * @return {Number}
     */
    getISQLQueries() {
        return this.iSQLQueries;
    }

    /**
     * Sets The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     * @param {Number} iSQLQueries The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     */
    setISQLQueries(iSQLQueries) {
        this['iSQLQueries'] = iSQLQueries;
    }
/**
     * Returns An array of the SQL Queries that were executed during the API request execution
     * @return {Array.<module:eZmaxAPI/model/CommonResponseObjSQLQuery>}
     */
    getAObjSQLQuery() {
        return this.a_objSQLQuery;
    }

    /**
     * Sets An array of the SQL Queries that were executed during the API request execution
     * @param {Array.<module:eZmaxAPI/model/CommonResponseObjSQLQuery>} a_objSQLQuery An array of the SQL Queries that were executed during the API request execution
     */
    setAObjSQLQuery(a_objSQLQuery) {
        this['a_objSQLQuery'] = a_objSQLQuery;
    }

}

/**
 * The peak memory allocated during the API request execution. Formatted as a human readable string
 * @member {String} sMemoryUsage
 */
CommonResponseObjDebug.prototype['sMemoryUsage'] = undefined;

/**
 * The total server execution time of the API request execution. Formatted as a human readable string
 * @member {String} sRunTime
 */
CommonResponseObjDebug.prototype['sRunTime'] = undefined;

/**
 * The number of SQL SELECT queries that were sent to the database server during the API request execution
 * @member {Number} iSQLSelects
 */
CommonResponseObjDebug.prototype['iSQLSelects'] = undefined;

/**
 * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
 * @member {Number} iSQLQueries
 */
CommonResponseObjDebug.prototype['iSQLQueries'] = undefined;

/**
 * An array of the SQL Queries that were executed during the API request execution
 * @member {Array.<module:eZmaxAPI/model/CommonResponseObjSQLQuery>} a_objSQLQuery
 */
CommonResponseObjDebug.prototype['a_objSQLQuery'] = undefined;






export default CommonResponseObjDebug;

