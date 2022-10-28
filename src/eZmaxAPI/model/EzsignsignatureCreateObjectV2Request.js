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
import EzsignsignatureRequestCompound from './EzsignsignatureRequestCompound';

/**
 * The EzsignsignatureCreateObjectV2Request model module.
 * @module eZmaxAPI/model/EzsignsignatureCreateObjectV2Request
 * @version 1.1.13
 */
class EzsignsignatureCreateObjectV2Request {
    /**
     * Constructs a new <code>EzsignsignatureCreateObjectV2Request</code>.
     * Request for POST /2/object/ezsignsignature
     * @alias module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Request
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} 
     */
    constructor(a_objEzsignsignature) { 
        
        EzsignsignatureCreateObjectV2Request.initialize(this, a_objEzsignsignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignature) { 
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
    }

    /**
     * Constructs a <code>EzsignsignatureCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Request} The populated <code>EzsignsignatureCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureCreateObjectV2Request();

            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [EzsignsignatureRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} a_objEzsignsignature
 */
EzsignsignatureCreateObjectV2Request.prototype['a_objEzsignsignature'] = undefined;






export default EzsignsignatureCreateObjectV2Request;

