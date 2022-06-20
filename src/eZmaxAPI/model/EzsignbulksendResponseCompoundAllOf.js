/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksenddocumentmappingResponseCompound from './EzsignbulksenddocumentmappingResponseCompound';
import EzsignbulksendsignermappingResponse from './EzsignbulksendsignermappingResponse';

/**
 * The EzsignbulksendResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendResponseCompoundAllOf
 * @version 1.1.8
 */
class EzsignbulksendResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignbulksendResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendResponseCompoundAllOf
     * @param a_objEzsignbulksenddocumentmapping {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} 
     * @param a_objEzsignbulksendsignermapping {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} 
     */
    constructor(a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping) { 
        
        EzsignbulksendResponseCompoundAllOf.initialize(this, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping) { 
        obj['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
        obj['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

    /**
     * Constructs a <code>EzsignbulksendResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendResponseCompoundAllOf} The populated <code>EzsignbulksendResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objEzsignbulksenddocumentmapping')) {
                obj['a_objEzsignbulksenddocumentmapping'] = ApiClient.convertToType(data['a_objEzsignbulksenddocumentmapping'], [EzsignbulksenddocumentmappingResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignbulksendsignermapping')) {
                obj['a_objEzsignbulksendsignermapping'] = ApiClient.convertToType(data['a_objEzsignbulksendsignermapping'], [EzsignbulksendsignermappingResponse]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>}
     */
    getAObjEzsignbulksenddocumentmapping() {
        return this.a_objEzsignbulksenddocumentmapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} a_objEzsignbulksenddocumentmapping
     */
    setAObjEzsignbulksenddocumentmapping(a_objEzsignbulksenddocumentmapping) {
        this['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>}
     */
    getAObjEzsignbulksendsignermapping() {
        return this.a_objEzsignbulksendsignermapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} a_objEzsignbulksendsignermapping
     */
    setAObjEzsignbulksendsignermapping(a_objEzsignbulksendsignermapping) {
        this['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} a_objEzsignbulksenddocumentmapping
 */
EzsignbulksendResponseCompoundAllOf.prototype['a_objEzsignbulksenddocumentmapping'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} a_objEzsignbulksendsignermapping
 */
EzsignbulksendResponseCompoundAllOf.prototype['a_objEzsignbulksendsignermapping'] = undefined;






export default EzsignbulksendResponseCompoundAllOf;

