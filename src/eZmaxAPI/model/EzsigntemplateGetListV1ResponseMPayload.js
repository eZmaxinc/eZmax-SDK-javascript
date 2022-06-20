/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import EzsigntemplateGetListV1ResponseMPayloadAllOf from './EzsigntemplateGetListV1ResponseMPayloadAllOf';
import EzsigntemplateListElement from './EzsigntemplateListElement';

/**
 * The EzsigntemplateGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayload
 * @version 1.1.9
 */
class EzsigntemplateGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplate/getList
     * @alias module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objEzsigntemplate {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objEzsigntemplate, iRowReturned, iRowFiltered) { 
        EzsigntemplateGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsigntemplate);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        EzsigntemplateGetListV1ResponseMPayload.initialize(this, a_objEzsigntemplate, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplate, iRowReturned, iRowFiltered) { 
        obj['a_objEzsigntemplate'] = a_objEzsigntemplate;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>EzsigntemplateGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayload} The populated <code>EzsigntemplateGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateGetListV1ResponseMPayload();
            EzsigntemplateGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objEzsigntemplate')) {
                obj['a_objEzsigntemplate'] = ApiClient.convertToType(data['a_objEzsigntemplate'], [EzsigntemplateListElement]);
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
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>}
     */
    getAObjEzsigntemplate() {
        return this.a_objEzsigntemplate;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} a_objEzsigntemplate
     */
    setAObjEzsigntemplate(a_objEzsigntemplate) {
        this['a_objEzsigntemplate'] = a_objEzsigntemplate;
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
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} a_objEzsigntemplate
 */
EzsigntemplateGetListV1ResponseMPayload.prototype['a_objEzsigntemplate'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
EzsigntemplateGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
EzsigntemplateGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement EzsigntemplateGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} a_objEzsigntemplate
 */
EzsigntemplateGetListV1ResponseMPayloadAllOf.prototype['a_objEzsigntemplate'] = undefined;
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




export default EzsigntemplateGetListV1ResponseMPayload;

