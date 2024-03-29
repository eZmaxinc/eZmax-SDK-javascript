/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonResponseObjDebugPayload model module.
 * @module eZmaxAPI/model/CommonResponseObjDebugPayload
 * @version 1.1.18
 */
class CommonResponseObjDebugPayload {
    /**
     * Constructs a new <code>CommonResponseObjDebugPayload</code>.
     * This is a debug object containing debugging information on the actual function
     * @alias module:eZmaxAPI/model/CommonResponseObjDebugPayload
     * @param iVersionMin {Number} The minimum version of the function that can be called
     * @param iVersionMax {Number} The maximum version of the function that can be called
     * @param a_RequiredPermission {Array.<Number>} An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don't need to have all of them.
     */
    constructor(iVersionMin, iVersionMax, a_RequiredPermission) { 
        
        CommonResponseObjDebugPayload.initialize(this, iVersionMin, iVersionMax, a_RequiredPermission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iVersionMin, iVersionMax, a_RequiredPermission) { 
        obj['iVersionMin'] = iVersionMin;
        obj['iVersionMax'] = iVersionMax;
        obj['a_RequiredPermission'] = a_RequiredPermission;
    }

    /**
     * Constructs a <code>CommonResponseObjDebugPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayload} The populated <code>CommonResponseObjDebugPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseObjDebugPayload();

            if (data.hasOwnProperty('iVersionMin')) {
                obj['iVersionMin'] = ApiClient.convertToType(data['iVersionMin'], 'Number');
            }
            if (data.hasOwnProperty('iVersionMax')) {
                obj['iVersionMax'] = ApiClient.convertToType(data['iVersionMax'], 'Number');
            }
            if (data.hasOwnProperty('a_RequiredPermission')) {
                obj['a_RequiredPermission'] = ApiClient.convertToType(data['a_RequiredPermission'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonResponseObjDebugPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonResponseObjDebugPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonResponseObjDebugPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_RequiredPermission'])) {
            throw new Error("Expected the field `a_RequiredPermission` to be an array in the JSON data but got " + data['a_RequiredPermission']);
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

}

CommonResponseObjDebugPayload.RequiredProperties = ["iVersionMin", "iVersionMax", "a_RequiredPermission"];

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






export default CommonResponseObjDebugPayload;

