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
import EzsigntemplatepackagesignermembershipRequestCompound from './EzsigntemplatepackagesignermembershipRequestCompound';

/**
 * The EzsigntemplatepackagesignermembershipCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Request
 * @version 1.1.13
 */
class EzsigntemplatepackagesignermembershipCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignermembershipCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatepackagesignermembership
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Request
     * @param a_objEzsigntemplatepackagesignermembership {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequestCompound>} 
     */
    constructor(a_objEzsigntemplatepackagesignermembership) { 
        
        EzsigntemplatepackagesignermembershipCreateObjectV1Request.initialize(this, a_objEzsigntemplatepackagesignermembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackagesignermembership) { 
        obj['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignermembershipCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Request} The populated <code>EzsigntemplatepackagesignermembershipCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignermembershipCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatepackagesignermembership')) {
                obj['a_objEzsigntemplatepackagesignermembership'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagesignermembership'], [EzsigntemplatepackagesignermembershipRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequestCompound>}
     */
    getAObjEzsigntemplatepackagesignermembership() {
        return this.a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequestCompound>} a_objEzsigntemplatepackagesignermembership
     */
    setAObjEzsigntemplatepackagesignermembership(a_objEzsigntemplatepackagesignermembership) {
        this['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequestCompound>} a_objEzsigntemplatepackagesignermembership
 */
EzsigntemplatepackagesignermembershipCreateObjectV1Request.prototype['a_objEzsigntemplatepackagesignermembership'] = undefined;






export default EzsigntemplatepackagesignermembershipCreateObjectV1Request;

