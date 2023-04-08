/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import UsergroupGetListV1ResponseMPayloadAllOf from './UsergroupGetListV1ResponseMPayloadAllOf';
import UsergroupListElement from './UsergroupListElement';

/**
 * The UsergroupGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupGetListV1ResponseMPayload
 * @version 1.1.17
 */
class UsergroupGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/usergroup/getList
     * @alias module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objUsergroup {Array.<module:eZmaxAPI/model/UsergroupListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objUsergroup, iRowReturned, iRowFiltered) { 
        UsergroupGetListV1ResponseMPayloadAllOf.initialize(this, a_objUsergroup);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        UsergroupGetListV1ResponseMPayload.initialize(this, a_objUsergroup, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUsergroup, iRowReturned, iRowFiltered) { 
        obj['a_objUsergroup'] = a_objUsergroup;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>UsergroupGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayload} The populated <code>UsergroupGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupGetListV1ResponseMPayload();
            UsergroupGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objUsergroup')) {
                obj['a_objUsergroup'] = ApiClient.convertToType(data['a_objUsergroup'], [UsergroupListElement]);
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
     * Validates the JSON data with respect to <code>UsergroupGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupGetListV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUsergroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUsergroup'])) {
                throw new Error("Expected the field `a_objUsergroup` to be an array in the JSON data but got " + data['a_objUsergroup']);
            }
            // validate the optional field `a_objUsergroup` (array)
            for (const item of data['a_objUsergroup']) {
                UsergroupListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/UsergroupListElement>}
     */
    getAObjUsergroup() {
        return this.a_objUsergroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UsergroupListElement>} a_objUsergroup
     */
    setAObjUsergroup(a_objUsergroup) {
        this['a_objUsergroup'] = a_objUsergroup;
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

UsergroupGetListV1ResponseMPayload.RequiredProperties = ["a_objUsergroup", "iRowReturned", "iRowFiltered"];

/**
 * @member {Array.<module:eZmaxAPI/model/UsergroupListElement>} a_objUsergroup
 */
UsergroupGetListV1ResponseMPayload.prototype['a_objUsergroup'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
UsergroupGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
UsergroupGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement UsergroupGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/UsergroupListElement>} a_objUsergroup
 */
UsergroupGetListV1ResponseMPayloadAllOf.prototype['a_objUsergroup'] = undefined;
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




export default UsergroupGetListV1ResponseMPayload;

