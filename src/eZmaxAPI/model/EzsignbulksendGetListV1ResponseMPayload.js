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
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import EzsignbulksendGetListV1ResponseMPayloadAllOf from './EzsignbulksendGetListV1ResponseMPayloadAllOf';
import EzsignbulksendListElement from './EzsignbulksendListElement';

/**
 * The EzsignbulksendGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayload
 * @version 1.1.7
 */
class EzsignbulksendGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignbulksend/getList
     * @alias module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objEzsignbulksend {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objEzsignbulksend, iRowReturned, iRowFiltered) { 
        EzsignbulksendGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignbulksend);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        EzsignbulksendGetListV1ResponseMPayload.initialize(this, a_objEzsignbulksend, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksend, iRowReturned, iRowFiltered) { 
        obj['a_objEzsignbulksend'] = a_objEzsignbulksend;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>EzsignbulksendGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayload} The populated <code>EzsignbulksendGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetListV1ResponseMPayload();
            EzsignbulksendGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objEzsignbulksend')) {
                obj['a_objEzsignbulksend'] = ApiClient.convertToType(data['a_objEzsignbulksend'], [EzsignbulksendListElement]);
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
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>}
     */
    getAObjEzsignbulksend() {
        return this.a_objEzsignbulksend;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} a_objEzsignbulksend
     */
    setAObjEzsignbulksend(a_objEzsignbulksend) {
        this['a_objEzsignbulksend'] = a_objEzsignbulksend;
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
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} a_objEzsignbulksend
 */
EzsignbulksendGetListV1ResponseMPayload.prototype['a_objEzsignbulksend'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
EzsignbulksendGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
EzsignbulksendGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement EzsignbulksendGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} a_objEzsignbulksend
 */
EzsignbulksendGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignbulksend'] = undefined;
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




export default EzsignbulksendGetListV1ResponseMPayload;

