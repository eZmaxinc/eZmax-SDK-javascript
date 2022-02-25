/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
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
 * @version 1.1.5
 */
class EzsignfolderGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetListV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsignfolder/getList API Request
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
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/EzsignfolderListElement>}
     */
    getAObjEzsignfolder() {
        return this.a_objEzsignfolder;
    }

    /**
     * Sets 
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

/**
 * 
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
 * 
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

