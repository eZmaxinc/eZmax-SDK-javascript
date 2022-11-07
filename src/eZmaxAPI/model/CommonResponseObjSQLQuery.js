/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonResponseObjSQLQuery model module.
 * @module eZmaxAPI/model/CommonResponseObjSQLQuery
 * @version 1.1.15
 */
class CommonResponseObjSQLQuery {
    /**
     * Constructs a new <code>CommonResponseObjSQLQuery</code>.
     * Definition of objSQLQuery Object
     * @alias module:eZmaxAPI/model/CommonResponseObjSQLQuery
     * @param sQuery {String} The SQL Query
     * @param fDuration {Number} Execution time of the SQL Query in seconds
     */
    constructor(sQuery, fDuration) { 
        
        CommonResponseObjSQLQuery.initialize(this, sQuery, fDuration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sQuery, fDuration) { 
        obj['sQuery'] = sQuery;
        obj['fDuration'] = fDuration;
    }

    /**
     * Constructs a <code>CommonResponseObjSQLQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseObjSQLQuery} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseObjSQLQuery} The populated <code>CommonResponseObjSQLQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseObjSQLQuery();

            if (data.hasOwnProperty('sQuery')) {
                obj['sQuery'] = ApiClient.convertToType(data['sQuery'], 'String');
            }
            if (data.hasOwnProperty('fDuration')) {
                obj['fDuration'] = ApiClient.convertToType(data['fDuration'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The SQL Query
     * @return {String}
     */
    getSQuery() {
        return this.sQuery;
    }

    /**
     * Sets The SQL Query
     * @param {String} sQuery The SQL Query
     */
    setSQuery(sQuery) {
        this['sQuery'] = sQuery;
    }
/**
     * Returns Execution time of the SQL Query in seconds
     * @return {Number}
     */
    getFDuration() {
        return this.fDuration;
    }

    /**
     * Sets Execution time of the SQL Query in seconds
     * @param {Number} fDuration Execution time of the SQL Query in seconds
     */
    setFDuration(fDuration) {
        this['fDuration'] = fDuration;
    }

}

/**
 * The SQL Query
 * @member {String} sQuery
 */
CommonResponseObjSQLQuery.prototype['sQuery'] = undefined;

/**
 * Execution time of the SQL Query in seconds
 * @member {Number} fDuration
 */
CommonResponseObjSQLQuery.prototype['fDuration'] = undefined;






export default CommonResponseObjSQLQuery;

