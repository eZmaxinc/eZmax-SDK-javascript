/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksendsignermappingRequestCompound from './EzsignbulksendsignermappingRequestCompound';

/**
 * The EzsignbulksendsignermappingCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Request
 * @version 1.1.11
 */
class EzsignbulksendsignermappingCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignbulksendsignermappingCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsignbulksendsignermapping
     * @alias module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Request
     * @param a_objEzsignbulksendsignermapping {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingRequestCompound>} 
     */
    constructor(a_objEzsignbulksendsignermapping) { 
        
        EzsignbulksendsignermappingCreateObjectV1Request.initialize(this, a_objEzsignbulksendsignermapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksendsignermapping) { 
        obj['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

    /**
     * Constructs a <code>EzsignbulksendsignermappingCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Request} The populated <code>EzsignbulksendsignermappingCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendsignermappingCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsignbulksendsignermapping')) {
                obj['a_objEzsignbulksendsignermapping'] = ApiClient.convertToType(data['a_objEzsignbulksendsignermapping'], [EzsignbulksendsignermappingRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingRequestCompound>}
     */
    getAObjEzsignbulksendsignermapping() {
        return this.a_objEzsignbulksendsignermapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingRequestCompound>} a_objEzsignbulksendsignermapping
     */
    setAObjEzsignbulksendsignermapping(a_objEzsignbulksendsignermapping) {
        this['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingRequestCompound>} a_objEzsignbulksendsignermapping
 */
EzsignbulksendsignermappingCreateObjectV1Request.prototype['a_objEzsignbulksendsignermapping'] = undefined;






export default EzsignbulksendsignermappingCreateObjectV1Request;

