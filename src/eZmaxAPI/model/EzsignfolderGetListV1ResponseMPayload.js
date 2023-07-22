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
import EzsignfolderGetListV1ResponseMPayloadAllOf from './EzsignfolderGetListV1ResponseMPayloadAllOf';
import EzsignfolderListElement from './EzsignfolderListElement';

/**
 * The EzsignfolderGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayload
 * @version 1.1.18
 */
class EzsignfolderGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfolder/getList
     * @alias module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objEzsignfolder {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objEzsignfolder, iRowReturned, iRowFiltered) { 
        EzsignfolderGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignfolder);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        EzsignfolderGetListV1ResponseMPayload.initialize(this, a_objEzsignfolder, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfolder, iRowReturned, iRowFiltered) { 
        obj['a_objEzsignfolder'] = a_objEzsignfolder;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>EzsignfolderGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayload} The populated <code>EzsignfolderGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetListV1ResponseMPayload();
            EzsignfolderGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objEzsignfolder')) {
                obj['a_objEzsignfolder'] = ApiClient.convertToType(data['a_objEzsignfolder'], [EzsignfolderListElement]);
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
     * Validates the JSON data with respect to <code>EzsignfolderGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderGetListV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignfolder']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignfolder'])) {
                throw new Error("Expected the field `a_objEzsignfolder` to be an array in the JSON data but got " + data['a_objEzsignfolder']);
            }
            // validate the optional field `a_objEzsignfolder` (array)
            for (const item of data['a_objEzsignfolder']) {
                EzsignfolderListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfolderListElement>}
     */
    getAObjEzsignfolder() {
        return this.a_objEzsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} a_objEzsignfolder
     */
    setAObjEzsignfolder(a_objEzsignfolder) {
        this['a_objEzsignfolder'] = a_objEzsignfolder;
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

EzsignfolderGetListV1ResponseMPayload.RequiredProperties = ["a_objEzsignfolder", "iRowReturned", "iRowFiltered"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} a_objEzsignfolder
 */
EzsignfolderGetListV1ResponseMPayload.prototype['a_objEzsignfolder'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
EzsignfolderGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
EzsignfolderGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement EzsignfolderGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} a_objEzsignfolder
 */
EzsignfolderGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignfolder'] = undefined;
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




export default EzsignfolderGetListV1ResponseMPayload;

