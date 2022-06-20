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
import EzsignfoldertypeGetListV1ResponseMPayloadAllOf from './EzsignfoldertypeGetListV1ResponseMPayloadAllOf';
import EzsignfoldertypeListElement from './EzsignfoldertypeListElement';

/**
 * The EzsignfoldertypeGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload
 * @version 1.1.9
 */
class EzsignfoldertypeGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldertypeGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfoldertype/getList
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objEzsignfoldertype {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objEzsignfoldertype, iRowReturned, iRowFiltered) { 
        EzsignfoldertypeGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignfoldertype);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        EzsignfoldertypeGetListV1ResponseMPayload.initialize(this, a_objEzsignfoldertype, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldertype, iRowReturned, iRowFiltered) { 
        obj['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>EzsignfoldertypeGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload} The populated <code>EzsignfoldertypeGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetListV1ResponseMPayload();
            EzsignfoldertypeGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objEzsignfoldertype')) {
                obj['a_objEzsignfoldertype'] = ApiClient.convertToType(data['a_objEzsignfoldertype'], [EzsignfoldertypeListElement]);
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
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>}
     */
    getAObjEzsignfoldertype() {
        return this.a_objEzsignfoldertype;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} a_objEzsignfoldertype 
     */
    setAObjEzsignfoldertype(a_objEzsignfoldertype) {
        this['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
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
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} a_objEzsignfoldertype
 */
EzsignfoldertypeGetListV1ResponseMPayload.prototype['a_objEzsignfoldertype'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
EzsignfoldertypeGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
EzsignfoldertypeGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement EzsignfoldertypeGetListV1ResponseMPayloadAllOf interface:
/**
 * 
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} a_objEzsignfoldertype
 */
EzsignfoldertypeGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignfoldertype'] = undefined;
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




export default EzsignfoldertypeGetListV1ResponseMPayload;

