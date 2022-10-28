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
import EzsignbulksendRequestCompound from './EzsignbulksendRequestCompound';

/**
 * The EzsignbulksendCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignbulksendCreateObjectV1Request
 * @version 1.1.13
 */
class EzsignbulksendCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignbulksendCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsignbulksend
     * @alias module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Request
     * @param a_objEzsignbulksend {Array.<module:eZmaxAPI/model/EzsignbulksendRequestCompound>} 
     */
    constructor(a_objEzsignbulksend) { 
        
        EzsignbulksendCreateObjectV1Request.initialize(this, a_objEzsignbulksend);
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
     * Constructs a <code>EzsignbulksendCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Request} The populated <code>EzsignbulksendCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsignbulksend')) {
                obj['a_objEzsignbulksend'] = ApiClient.convertToType(data['a_objEzsignbulksend'], [EzsignbulksendRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendRequestCompound>}
     */
    getAObjEzsignbulksend() {
        return this.a_objEzsignbulksend;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendRequestCompound>} a_objEzsignbulksend
     */
    setAObjEzsignbulksend(a_objEzsignbulksend) {
        this['a_objEzsignbulksend'] = a_objEzsignbulksend;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendRequestCompound>} a_objEzsignbulksend
 */
EzsignbulksendCreateObjectV1Request.prototype['a_objEzsignbulksend'] = undefined;






export default EzsignbulksendCreateObjectV1Request;

