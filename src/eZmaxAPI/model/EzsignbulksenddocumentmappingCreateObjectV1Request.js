/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksenddocumentmappingRequestCompound from './EzsignbulksenddocumentmappingRequestCompound';

/**
 * The EzsignbulksenddocumentmappingCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Request
 * @version 1.1.12
 */
class EzsignbulksenddocumentmappingCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsignbulksenddocumentmapping
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Request
     * @param a_objEzsignbulksenddocumentmapping {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound>} 
     */
    constructor(a_objEzsignbulksenddocumentmapping) { 
        
        EzsignbulksenddocumentmappingCreateObjectV1Request.initialize(this, a_objEzsignbulksenddocumentmapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksenddocumentmapping) { 
        obj['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Request} The populated <code>EzsignbulksenddocumentmappingCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsignbulksenddocumentmapping')) {
                obj['a_objEzsignbulksenddocumentmapping'] = ApiClient.convertToType(data['a_objEzsignbulksenddocumentmapping'], [EzsignbulksenddocumentmappingRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound>}
     */
    getAObjEzsignbulksenddocumentmapping() {
        return this.a_objEzsignbulksenddocumentmapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound>} a_objEzsignbulksenddocumentmapping
     */
    setAObjEzsignbulksenddocumentmapping(a_objEzsignbulksenddocumentmapping) {
        this['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound>} a_objEzsignbulksenddocumentmapping
 */
EzsignbulksenddocumentmappingCreateObjectV1Request.prototype['a_objEzsignbulksenddocumentmapping'] = undefined;






export default EzsignbulksenddocumentmappingCreateObjectV1Request;

