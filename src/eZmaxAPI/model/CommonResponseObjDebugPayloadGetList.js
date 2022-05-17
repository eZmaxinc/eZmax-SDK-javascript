/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
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
import CommonResponseObjDebugPayloadGetListAllOf from './CommonResponseObjDebugPayloadGetListAllOf';

/**
 * The CommonResponseObjDebugPayloadGetList model module.
 * @module eZmaxAPI/model/CommonResponseObjDebugPayloadGetList
 * @version 1.1.7
 */
class CommonResponseObjDebugPayloadGetList {
    /**
     * Constructs a new <code>CommonResponseObjDebugPayloadGetList</code>.
     * This is a debug object containing debugging information on the actual function
     * @alias module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList
     * @implements module:eZmaxAPI/model/CommonResponseObjDebugPayload
     * @implements module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetListAllOf
     * @param iVersionMin {Number} The minimum version of the function that can be called
     * @param iVersionMax {Number} The maximum version of the function that can be called
     * @param a_RequiredPermission {Array.<Number>} An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     * @param a_Filter {module:eZmaxAPI/model/CommonResponseFilter} 
     * @param a_OrderBy {Object.<String, String>} List of available values for *eOrderBy*
     */
    constructor(iVersionMin, iVersionMax, a_RequiredPermission, a_Filter, a_OrderBy) { 
        CommonResponseObjDebugPayload.initialize(this, iVersionMin, iVersionMax, a_RequiredPermission);CommonResponseObjDebugPayloadGetListAllOf.initialize(this, a_Filter, a_OrderBy);
        CommonResponseObjDebugPayloadGetList.initialize(this, iVersionMin, iVersionMax, a_RequiredPermission, a_Filter, a_OrderBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iVersionMin, iVersionMax, a_RequiredPermission, a_Filter, a_OrderBy) { 
        obj['iVersionMin'] = iVersionMin;
        obj['iVersionMax'] = iVersionMax;
        obj['a_RequiredPermission'] = a_RequiredPermission;
        obj['a_Filter'] = a_Filter;
        obj['a_OrderBy'] = a_OrderBy;
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
            CommonResponseObjDebugPayloadGetListAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('iVersionMin')) {
                obj['iVersionMin'] = ApiClient.convertToType(data['iVersionMin'], 'Number');
            }
            if (data.hasOwnProperty('iVersionMax')) {
                obj['iVersionMax'] = ApiClient.convertToType(data['iVersionMax'], 'Number');
            }
            if (data.hasOwnProperty('a_RequiredPermission')) {
                obj['a_RequiredPermission'] = ApiClient.convertToType(data['a_RequiredPermission'], ['Number']);
            }
            if (data.hasOwnProperty('a_Filter')) {
                obj['a_Filter'] = CommonResponseFilter.constructFromObject(data['a_Filter']);
            }
            if (data.hasOwnProperty('a_OrderBy')) {
                obj['a_OrderBy'] = ApiClient.convertToType(data['a_OrderBy'], {'String': 'String'});
            }
        }
        return obj;
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

}

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
 * @member {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
 */
CommonResponseObjDebugPayloadGetList.prototype['a_Filter'] = undefined;

/**
 * List of available values for *eOrderBy*
 * @member {Object.<String, String>} a_OrderBy
 */
CommonResponseObjDebugPayloadGetList.prototype['a_OrderBy'] = undefined;


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
// Implement CommonResponseObjDebugPayloadGetListAllOf interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
 */
CommonResponseObjDebugPayloadGetListAllOf.prototype['a_Filter'] = undefined;
/**
 * List of available values for *eOrderBy*
 * @member {Object.<String, String>} a_OrderBy
 */
CommonResponseObjDebugPayloadGetListAllOf.prototype['a_OrderBy'] = undefined;




export default CommonResponseObjDebugPayloadGetList;

