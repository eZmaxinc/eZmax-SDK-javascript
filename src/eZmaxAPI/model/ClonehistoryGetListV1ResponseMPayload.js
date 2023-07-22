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
import ClonehistoryGetListV1ResponseMPayloadAllOf from './ClonehistoryGetListV1ResponseMPayloadAllOf';
import ClonehistoryListElement from './ClonehistoryListElement';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';

/**
 * The ClonehistoryGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload
 * @version 1.1.18
 */
class ClonehistoryGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>ClonehistoryGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/clonehistory/getList
     * @alias module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objClonehistory {Array.<module:eZmaxAPI/model/ClonehistoryListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objClonehistory, iRowReturned, iRowFiltered) { 
        ClonehistoryGetListV1ResponseMPayloadAllOf.initialize(this, a_objClonehistory);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        ClonehistoryGetListV1ResponseMPayload.initialize(this, a_objClonehistory, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objClonehistory, iRowReturned, iRowFiltered) { 
        obj['a_objClonehistory'] = a_objClonehistory;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>ClonehistoryGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} The populated <code>ClonehistoryGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClonehistoryGetListV1ResponseMPayload();
            ClonehistoryGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objClonehistory')) {
                obj['a_objClonehistory'] = ApiClient.convertToType(data['a_objClonehistory'], [ClonehistoryListElement]);
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
     * Validates the JSON data with respect to <code>ClonehistoryGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClonehistoryGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClonehistoryGetListV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objClonehistory']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objClonehistory'])) {
                throw new Error("Expected the field `a_objClonehistory` to be an array in the JSON data but got " + data['a_objClonehistory']);
            }
            // validate the optional field `a_objClonehistory` (array)
            for (const item of data['a_objClonehistory']) {
                ClonehistoryListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ClonehistoryListElement>}
     */
    getAObjClonehistory() {
        return this.a_objClonehistory;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ClonehistoryListElement>} a_objClonehistory
     */
    setAObjClonehistory(a_objClonehistory) {
        this['a_objClonehistory'] = a_objClonehistory;
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

ClonehistoryGetListV1ResponseMPayload.RequiredProperties = ["a_objClonehistory", "iRowReturned", "iRowFiltered"];

/**
 * @member {Array.<module:eZmaxAPI/model/ClonehistoryListElement>} a_objClonehistory
 */
ClonehistoryGetListV1ResponseMPayload.prototype['a_objClonehistory'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
ClonehistoryGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
ClonehistoryGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement ClonehistoryGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/ClonehistoryListElement>} a_objClonehistory
 */
ClonehistoryGetListV1ResponseMPayloadAllOf.prototype['a_objClonehistory'] = undefined;
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




export default ClonehistoryGetListV1ResponseMPayload;

