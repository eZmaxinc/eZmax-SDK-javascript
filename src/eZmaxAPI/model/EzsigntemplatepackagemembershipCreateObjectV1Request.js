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
import EzsigntemplatepackagemembershipRequestCompound from './EzsigntemplatepackagemembershipRequestCompound';

/**
 * The EzsigntemplatepackagemembershipCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Request
 * @version 1.1.9
 */
class EzsigntemplatepackagemembershipCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatepackagemembership
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Request
     * @param a_objEzsigntemplatepackagemembership {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound>} 
     */
    constructor(a_objEzsigntemplatepackagemembership) { 
        
        EzsigntemplatepackagemembershipCreateObjectV1Request.initialize(this, a_objEzsigntemplatepackagemembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackagemembership) { 
        obj['a_objEzsigntemplatepackagemembership'] = a_objEzsigntemplatepackagemembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Request} The populated <code>EzsigntemplatepackagemembershipCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatepackagemembership')) {
                obj['a_objEzsigntemplatepackagemembership'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagemembership'], [EzsigntemplatepackagemembershipRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound>}
     */
    getAObjEzsigntemplatepackagemembership() {
        return this.a_objEzsigntemplatepackagemembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound>} a_objEzsigntemplatepackagemembership
     */
    setAObjEzsigntemplatepackagemembership(a_objEzsigntemplatepackagemembership) {
        this['a_objEzsigntemplatepackagemembership'] = a_objEzsigntemplatepackagemembership;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound>} a_objEzsigntemplatepackagemembership
 */
EzsigntemplatepackagemembershipCreateObjectV1Request.prototype['a_objEzsigntemplatepackagemembership'] = undefined;






export default EzsigntemplatepackagemembershipCreateObjectV1Request;

