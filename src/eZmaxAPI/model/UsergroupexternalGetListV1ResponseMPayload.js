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
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import UsergroupexternalListElement from './UsergroupexternalListElement';

/**
 * The UsergroupexternalGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupexternalGetListV1ResponseMPayload
 * @version 1.2.0
 */
class UsergroupexternalGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupexternalGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/usergroupexternal/getList
     * @alias module:eZmaxAPI/model/UsergroupexternalGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     * @param a_objUsergroupexternal {Array.<module:eZmaxAPI/model/UsergroupexternalListElement>} 
     */
    constructor(iRowReturned, iRowFiltered, a_objUsergroupexternal) { 
        CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        UsergroupexternalGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered, a_objUsergroupexternal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iRowReturned, iRowFiltered, a_objUsergroupexternal) { 
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
        obj['a_objUsergroupexternal'] = a_objUsergroupexternal;
    }

    /**
     * Constructs a <code>UsergroupexternalGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupexternalGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupexternalGetListV1ResponseMPayload} The populated <code>UsergroupexternalGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupexternalGetListV1ResponseMPayload();
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
            if (data.hasOwnProperty('a_objUsergroupexternal')) {
                obj['a_objUsergroupexternal'] = ApiClient.convertToType(data['a_objUsergroupexternal'], [UsergroupexternalListElement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupexternalGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupexternalGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupexternalGetListV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUsergroupexternal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUsergroupexternal'])) {
                throw new Error("Expected the field `a_objUsergroupexternal` to be an array in the JSON data but got " + data['a_objUsergroupexternal']);
            }
            // validate the optional field `a_objUsergroupexternal` (array)
            for (const item of data['a_objUsergroupexternal']) {
                UsergroupexternalListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The number of rows returned
     * @return {Number}
     */
    getIRowReturned() {
        return this.iRowReturned;
    }

    /**
     * Sets The number of rows returned
     * @param {Number} iRowReturned The number of rows returned
     */
    setIRowReturned(iRowReturned) {
        this['iRowReturned'] = iRowReturned;
    }
/**
     * Returns The number of rows matching your filters (if any) or the total number of rows
     * @return {Number}
     */
    getIRowFiltered() {
        return this.iRowFiltered;
    }

    /**
     * Sets The number of rows matching your filters (if any) or the total number of rows
     * @param {Number} iRowFiltered The number of rows matching your filters (if any) or the total number of rows
     */
    setIRowFiltered(iRowFiltered) {
        this['iRowFiltered'] = iRowFiltered;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/UsergroupexternalListElement>}
     */
    getAObjUsergroupexternal() {
        return this.a_objUsergroupexternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UsergroupexternalListElement>} a_objUsergroupexternal
     */
    setAObjUsergroupexternal(a_objUsergroupexternal) {
        this['a_objUsergroupexternal'] = a_objUsergroupexternal;
    }

}

UsergroupexternalGetListV1ResponseMPayload.RequiredProperties = ["iRowReturned", "iRowFiltered", "a_objUsergroupexternal"];

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
UsergroupexternalGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
UsergroupexternalGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/UsergroupexternalListElement>} a_objUsergroupexternal
 */
UsergroupexternalGetListV1ResponseMPayload.prototype['a_objUsergroupexternal'] = undefined;


// Implement CommonGetListV1ResponseMPayload interface:
/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
CommonGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;
/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
CommonGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;




export default UsergroupexternalGetListV1ResponseMPayload;

