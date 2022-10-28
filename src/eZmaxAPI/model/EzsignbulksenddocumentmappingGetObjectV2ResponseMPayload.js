/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksenddocumentmappingResponseCompound from './EzsignbulksenddocumentmappingResponseCompound';

/**
 * The EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload
 * @version 1.1.13
 */
class EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsignbulksenddocumentmapping/{pkiEzsignbulksenddocumentmappingID}
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload
     * @param objEzsignbulksenddocumentmapping {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound} 
     */
    constructor(objEzsignbulksenddocumentmapping) { 
        
        EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload.initialize(this, objEzsignbulksenddocumentmapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignbulksenddocumentmapping) { 
        obj['objEzsignbulksenddocumentmapping'] = objEzsignbulksenddocumentmapping;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload} The populated <code>EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsignbulksenddocumentmapping')) {
                obj['objEzsignbulksenddocumentmapping'] = EzsignbulksenddocumentmappingResponseCompound.constructFromObject(data['objEzsignbulksenddocumentmapping']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound}
     */
    getObjEzsignbulksenddocumentmapping() {
        return this.objEzsignbulksenddocumentmapping;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound} objEzsignbulksenddocumentmapping
     */
    setObjEzsignbulksenddocumentmapping(objEzsignbulksenddocumentmapping) {
        this['objEzsignbulksenddocumentmapping'] = objEzsignbulksenddocumentmapping;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound} objEzsignbulksenddocumentmapping
 */
EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload.prototype['objEzsignbulksenddocumentmapping'] = undefined;






export default EzsignbulksenddocumentmappingGetObjectV2ResponseMPayload;

