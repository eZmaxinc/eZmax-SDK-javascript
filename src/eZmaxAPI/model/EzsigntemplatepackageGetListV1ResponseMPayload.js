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
import EzsigntemplatepackageGetListV1ResponseMPayloadAllOf from './EzsigntemplatepackageGetListV1ResponseMPayloadAllOf';
import EzsigntemplatepackageListElement from './EzsigntemplatepackageListElement';

/**
 * The EzsigntemplatepackageGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayload
 * @version 1.1.5
 */
class EzsigntemplatepackageGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackageGetListV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigntemplatepackage/getList API Request
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objEzsigntemplatepackage {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objEzsigntemplatepackage, iRowReturned, iRowFiltered) { 
        EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsigntemplatepackage);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        EzsigntemplatepackageGetListV1ResponseMPayload.initialize(this, a_objEzsigntemplatepackage, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackage, iRowReturned, iRowFiltered) { 
        obj['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayload} The populated <code>EzsigntemplatepackageGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageGetListV1ResponseMPayload();
            EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objEzsigntemplatepackage')) {
                obj['a_objEzsigntemplatepackage'] = ApiClient.convertToType(data['a_objEzsigntemplatepackage'], [EzsigntemplatepackageListElement]);
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
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>}
     */
    getAObjEzsigntemplatepackage() {
        return this.a_objEzsigntemplatepackage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} a_objEzsigntemplatepackage
     */
    setAObjEzsigntemplatepackage(a_objEzsigntemplatepackage) {
        this['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
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
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} a_objEzsigntemplatepackage
 */
EzsigntemplatepackageGetListV1ResponseMPayload.prototype['a_objEzsigntemplatepackage'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
EzsigntemplatepackageGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
EzsigntemplatepackageGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement EzsigntemplatepackageGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} a_objEzsigntemplatepackage
 */
EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.prototype['a_objEzsigntemplatepackage'] = undefined;
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




export default EzsigntemplatepackageGetListV1ResponseMPayload;

