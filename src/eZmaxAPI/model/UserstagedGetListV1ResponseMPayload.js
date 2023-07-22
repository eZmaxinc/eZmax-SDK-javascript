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
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import UserstagedGetListV1ResponseMPayloadAllOf from './UserstagedGetListV1ResponseMPayloadAllOf';
import UserstagedListElement from './UserstagedListElement';

/**
 * The UserstagedGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UserstagedGetListV1ResponseMPayload
 * @version 1.1.18
 */
class UserstagedGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>UserstagedGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/userstaged/getList
     * @alias module:eZmaxAPI/model/UserstagedGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/UserstagedGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objUserstaged {Array.<module:eZmaxAPI/model/UserstagedListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objUserstaged, iRowReturned, iRowFiltered) { 
        UserstagedGetListV1ResponseMPayloadAllOf.initialize(this, a_objUserstaged);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        UserstagedGetListV1ResponseMPayload.initialize(this, a_objUserstaged, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUserstaged, iRowReturned, iRowFiltered) { 
        obj['a_objUserstaged'] = a_objUserstaged;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>UserstagedGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserstagedGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserstagedGetListV1ResponseMPayload} The populated <code>UserstagedGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserstagedGetListV1ResponseMPayload();
            UserstagedGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objUserstaged')) {
                obj['a_objUserstaged'] = ApiClient.convertToType(data['a_objUserstaged'], [UserstagedListElement]);
            }
            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserstagedGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserstagedGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserstagedGetListV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUserstaged']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUserstaged'])) {
                throw new Error("Expected the field `a_objUserstaged` to be an array in the JSON data but got " + data['a_objUserstaged']);
            }
            // validate the optional field `a_objUserstaged` (array)
            for (const item of data['a_objUserstaged']) {
                UserstagedListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/UserstagedListElement>}
     */
    getAObjUserstaged() {
        return this.a_objUserstaged;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UserstagedListElement>} a_objUserstaged
     */
    setAObjUserstaged(a_objUserstaged) {
        this['a_objUserstaged'] = a_objUserstaged;
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

}

UserstagedGetListV1ResponseMPayload.RequiredProperties = ["a_objUserstaged", "iRowReturned", "iRowFiltered"];

/**
 * @member {Array.<module:eZmaxAPI/model/UserstagedListElement>} a_objUserstaged
 */
UserstagedGetListV1ResponseMPayload.prototype['a_objUserstaged'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
UserstagedGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
UserstagedGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement UserstagedGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/UserstagedListElement>} a_objUserstaged
 */
UserstagedGetListV1ResponseMPayloadAllOf.prototype['a_objUserstaged'] = undefined;
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




export default UserstagedGetListV1ResponseMPayload;

