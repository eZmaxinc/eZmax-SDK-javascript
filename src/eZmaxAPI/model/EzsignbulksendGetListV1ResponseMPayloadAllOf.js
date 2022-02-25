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
import EzsignbulksendListElement from './EzsignbulksendListElement';

/**
 * The EzsignbulksendGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayloadAllOf
 * @version 1.1.5
 */
class EzsignbulksendGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>EzsignbulksendGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayloadAllOf
     * @param a_objEzsignbulksend {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} 
     */
    constructor(a_objEzsignbulksend) { 
        
        EzsignbulksendGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignbulksend);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksend) { 
        obj['a_objEzsignbulksend'] = a_objEzsignbulksend;
    }

    /**
     * Constructs a <code>EzsignbulksendGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetListV1ResponseMPayloadAllOf} The populated <code>EzsignbulksendGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objEzsignbulksend')) {
                obj['a_objEzsignbulksend'] = ApiClient.convertToType(data['a_objEzsignbulksend'], [EzsignbulksendListElement]);
            }
        }
        return obj;
    }

/**
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>}
     */
    getAObjEzsignbulksend() {
        return this.a_objEzsignbulksend;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} a_objEzsignbulksend 
     */
    setAObjEzsignbulksend(a_objEzsignbulksend) {
        this['a_objEzsignbulksend'] = a_objEzsignbulksend;
    }

}

/**
 * 
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendListElement>} a_objEzsignbulksend
 */
EzsignbulksendGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignbulksend'] = undefined;






export default EzsignbulksendGetListV1ResponseMPayloadAllOf;

