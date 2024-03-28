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
import ActivesessionListElement from './ActivesessionListElement';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';

/**
 * The ActivesessionGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ActivesessionGetListV1ResponseMPayload
 * @version 1.2.0
 */
class ActivesessionGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>ActivesessionGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/activesession/getList
     * @alias module:eZmaxAPI/model/ActivesessionGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     * @param a_objActivesession {Array.<module:eZmaxAPI/model/ActivesessionListElement>} 
     */
    constructor(iRowReturned, iRowFiltered, a_objActivesession) { 
        CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        ActivesessionGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered, a_objActivesession);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iRowReturned, iRowFiltered, a_objActivesession) { 
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
        obj['a_objActivesession'] = a_objActivesession;
    }

    /**
     * Constructs a <code>ActivesessionGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionGetListV1ResponseMPayload} The populated <code>ActivesessionGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionGetListV1ResponseMPayload();
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
            if (data.hasOwnProperty('a_objActivesession')) {
                obj['a_objActivesession'] = ApiClient.convertToType(data['a_objActivesession'], [ActivesessionListElement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivesessionGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivesessionGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActivesessionGetListV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objActivesession']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objActivesession'])) {
                throw new Error("Expected the field `a_objActivesession` to be an array in the JSON data but got " + data['a_objActivesession']);
            }
            // validate the optional field `a_objActivesession` (array)
            for (const item of data['a_objActivesession']) {
                ActivesessionListElement.validateJSON(item);
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
     * @return {Array.<module:eZmaxAPI/model/ActivesessionListElement>}
     */
    getAObjActivesession() {
        return this.a_objActivesession;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ActivesessionListElement>} a_objActivesession
     */
    setAObjActivesession(a_objActivesession) {
        this['a_objActivesession'] = a_objActivesession;
    }

}

ActivesessionGetListV1ResponseMPayload.RequiredProperties = ["iRowReturned", "iRowFiltered", "a_objActivesession"];

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
ActivesessionGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
ActivesessionGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/ActivesessionListElement>} a_objActivesession
 */
ActivesessionGetListV1ResponseMPayload.prototype['a_objActivesession'] = undefined;


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




export default ActivesessionGetListV1ResponseMPayload;

