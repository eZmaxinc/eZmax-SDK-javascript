/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonResponseFilter from './CommonResponseFilter';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';

/**
 * The CommonResponseObjDebugPayloadGetList model module.
 * @module eZmaxAPI/model/CommonResponseObjDebugPayloadGetList
 * @version 1.2.0
 */
class CommonResponseObjDebugPayloadGetList {
    /**
     * Constructs a new <code>CommonResponseObjDebugPayloadGetList</code>.
     * This is a debug object containing debugging information on the actual function
     * @alias module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList
     * @implements module:eZmaxAPI/model/CommonResponseObjDebugPayload
     * @param iVersionMin {Number} The minimum version of the function that can be called
     * @param iVersionMax {Number} The maximum version of the function that can be called
     * @param a_RequiredPermission {Array.<Number>} An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     * @param bVersionDeprecated {Boolean} Wheter the current route is deprecated or not
     * @param a_Filter {module:eZmaxAPI/model/CommonResponseFilter} 
     * @param a_OrderBy {Object.<String, String>} List of available values for *eOrderBy*
     * @param iRowMax {Number} The maximum numbers of results to be returned.  When the content-type is **application/json** there is an implicit default of 10 000.  When it's **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** the is no implicit default so if you do not specify iRowMax, all records will be returned.
     * @param iRowOffset {Number} The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     */
    constructor(iVersionMin, iVersionMax, a_RequiredPermission, bVersionDeprecated, a_Filter, a_OrderBy, iRowMax, iRowOffset) { 
        CommonResponseObjDebugPayload.initialize(this, iVersionMin, iVersionMax, a_RequiredPermission, bVersionDeprecated);
        CommonResponseObjDebugPayloadGetList.initialize(this, iVersionMin, iVersionMax, a_RequiredPermission, bVersionDeprecated, a_Filter, a_OrderBy, iRowMax, iRowOffset);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iVersionMin, iVersionMax, a_RequiredPermission, bVersionDeprecated, a_Filter, a_OrderBy, iRowMax, iRowOffset) { 
        obj['iVersionMin'] = iVersionMin;
        obj['iVersionMax'] = iVersionMax;
        obj['a_RequiredPermission'] = a_RequiredPermission;
        obj['bVersionDeprecated'] = bVersionDeprecated;
        obj['a_Filter'] = a_Filter;
        obj['a_OrderBy'] = a_OrderBy;
        obj['iRowMax'] = iRowMax;
        obj['iRowOffset'] = iRowOffset || 0;
    }

    /**
     * Constructs a <code>CommonResponseObjDebugPayloadGetList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} The populated <code>CommonResponseObjDebugPayloadGetList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseObjDebugPayloadGetList();
            CommonResponseObjDebugPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('iVersionMin')) {
                obj['iVersionMin'] = ApiClient.convertToType(data['iVersionMin'], 'Number');
            }
            if (data.hasOwnProperty('iVersionMax')) {
                obj['iVersionMax'] = ApiClient.convertToType(data['iVersionMax'], 'Number');
            }
            if (data.hasOwnProperty('a_RequiredPermission')) {
                obj['a_RequiredPermission'] = ApiClient.convertToType(data['a_RequiredPermission'], ['Number']);
            }
            if (data.hasOwnProperty('bVersionDeprecated')) {
                obj['bVersionDeprecated'] = ApiClient.convertToType(data['bVersionDeprecated'], 'Boolean');
            }
            if (data.hasOwnProperty('a_Filter')) {
                obj['a_Filter'] = CommonResponseFilter.constructFromObject(data['a_Filter']);
            }
            if (data.hasOwnProperty('a_OrderBy')) {
                obj['a_OrderBy'] = ApiClient.convertToType(data['a_OrderBy'], {'String': 'String'});
            }
            if (data.hasOwnProperty('iRowMax')) {
                obj['iRowMax'] = ApiClient.convertToType(data['iRowMax'], 'Number');
            }
            if (data.hasOwnProperty('iRowOffset')) {
                obj['iRowOffset'] = ApiClient.convertToType(data['iRowOffset'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonResponseObjDebugPayloadGetList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonResponseObjDebugPayloadGetList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonResponseObjDebugPayloadGetList.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_RequiredPermission'])) {
            throw new Error("Expected the field `a_RequiredPermission` to be an array in the JSON data but got " + data['a_RequiredPermission']);
        }
        // validate the optional field `a_Filter`
        if (data['a_Filter']) { // data not null
          CommonResponseFilter.validateJSON(data['a_Filter']);
        }

        return true;
    }

/**
     * Returns The minimum version of the function that can be called
     * @return {Number}
     */
    getIVersionMin() {
        return this.iVersionMin;
    }

    /**
     * Sets The minimum version of the function that can be called
     * @param {Number} iVersionMin The minimum version of the function that can be called
     */
    setIVersionMin(iVersionMin) {
        this['iVersionMin'] = iVersionMin;
    }
/**
     * Returns The maximum version of the function that can be called
     * @return {Number}
     */
    getIVersionMax() {
        return this.iVersionMax;
    }

    /**
     * Sets The maximum version of the function that can be called
     * @param {Number} iVersionMax The maximum version of the function that can be called
     */
    setIVersionMax(iVersionMax) {
        this['iVersionMax'] = iVersionMax;
    }
/**
     * Returns An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     * @return {Array.<Number>}
     */
    getARequiredPermission() {
        return this.a_RequiredPermission;
    }

    /**
     * Sets An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     * @param {Array.<Number>} a_RequiredPermission An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     */
    setARequiredPermission(a_RequiredPermission) {
        this['a_RequiredPermission'] = a_RequiredPermission;
    }
/**
     * Returns Wheter the current route is deprecated or not
     * @return {Boolean}
     */
    getBVersionDeprecated() {
        return this.bVersionDeprecated;
    }

    /**
     * Sets Wheter the current route is deprecated or not
     * @param {Boolean} bVersionDeprecated Wheter the current route is deprecated or not
     */
    setBVersionDeprecated(bVersionDeprecated) {
        this['bVersionDeprecated'] = bVersionDeprecated;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseFilter}
     */
    getAFilter() {
        return this.a_Filter;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
     */
    setAFilter(a_Filter) {
        this['a_Filter'] = a_Filter;
    }
/**
     * Returns List of available values for *eOrderBy*
     * @return {Object.<String, String>}
     */
    getAOrderBy() {
        return this.a_OrderBy;
    }

    /**
     * Sets List of available values for *eOrderBy*
     * @param {Object.<String, String>} a_OrderBy List of available values for *eOrderBy*
     */
    setAOrderBy(a_OrderBy) {
        this['a_OrderBy'] = a_OrderBy;
    }
/**
     * Returns The maximum numbers of results to be returned.  When the content-type is **application/json** there is an implicit default of 10 000.  When it's **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** the is no implicit default so if you do not specify iRowMax, all records will be returned.
     * minimum: 1
     * maximum: 10000
     * @return {Number}
     */
    getIRowMax() {
        return this.iRowMax;
    }

    /**
     * Sets The maximum numbers of results to be returned.  When the content-type is **application/json** there is an implicit default of 10 000.  When it's **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** the is no implicit default so if you do not specify iRowMax, all records will be returned.
     * @param {Number} iRowMax The maximum numbers of results to be returned.  When the content-type is **application/json** there is an implicit default of 10 000.  When it's **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** the is no implicit default so if you do not specify iRowMax, all records will be returned.
     */
    setIRowMax(iRowMax) {
        this['iRowMax'] = iRowMax;
    }
/**
     * Returns The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     * minimum: 0
     * @return {Number}
     */
    getIRowOffset() {
        return this.iRowOffset;
    }

    /**
     * Sets The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     * @param {Number} iRowOffset The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     */
    setIRowOffset(iRowOffset) {
        this['iRowOffset'] = iRowOffset;
    }

}

CommonResponseObjDebugPayloadGetList.RequiredProperties = ["iVersionMin", "iVersionMax", "a_RequiredPermission", "bVersionDeprecated", "a_Filter", "a_OrderBy", "iRowMax", "iRowOffset"];

/**
 * The minimum version of the function that can be called
 * @member {Number} iVersionMin
 */
CommonResponseObjDebugPayloadGetList.prototype['iVersionMin'] = undefined;

/**
 * The maximum version of the function that can be called
 * @member {Number} iVersionMax
 */
CommonResponseObjDebugPayloadGetList.prototype['iVersionMax'] = undefined;

/**
 * An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
 * @member {Array.<Number>} a_RequiredPermission
 */
CommonResponseObjDebugPayloadGetList.prototype['a_RequiredPermission'] = undefined;

/**
 * Wheter the current route is deprecated or not
 * @member {Boolean} bVersionDeprecated
 */
CommonResponseObjDebugPayloadGetList.prototype['bVersionDeprecated'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
 */
CommonResponseObjDebugPayloadGetList.prototype['a_Filter'] = undefined;

/**
 * List of available values for *eOrderBy*
 * @member {Object.<String, String>} a_OrderBy
 */
CommonResponseObjDebugPayloadGetList.prototype['a_OrderBy'] = undefined;

/**
 * The maximum numbers of results to be returned.  When the content-type is **application/json** there is an implicit default of 10 000.  When it's **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** the is no implicit default so if you do not specify iRowMax, all records will be returned.
 * @member {Number} iRowMax
 */
CommonResponseObjDebugPayloadGetList.prototype['iRowMax'] = undefined;

/**
 * The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
 * @member {Number} iRowOffset
 * @default 0
 */
CommonResponseObjDebugPayloadGetList.prototype['iRowOffset'] = 0;


// Implement CommonResponseObjDebugPayload interface:
/**
 * The minimum version of the function that can be called
 * @member {Number} iVersionMin
 */
CommonResponseObjDebugPayload.prototype['iVersionMin'] = undefined;
/**
 * The maximum version of the function that can be called
 * @member {Number} iVersionMax
 */
CommonResponseObjDebugPayload.prototype['iVersionMax'] = undefined;
/**
 * An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
 * @member {Array.<Number>} a_RequiredPermission
 */
CommonResponseObjDebugPayload.prototype['a_RequiredPermission'] = undefined;
/**
 * Wheter the current route is deprecated or not
 * @member {Boolean} bVersionDeprecated
 */
CommonResponseObjDebugPayload.prototype['bVersionDeprecated'] = undefined;




export default CommonResponseObjDebugPayloadGetList;

