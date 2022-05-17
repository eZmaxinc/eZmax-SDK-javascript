/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatesignerRequestCompound from './EzsigntemplatesignerRequestCompound';

/**
 * The EzsigntemplatesignerCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Request
 * @version 1.1.7
 */
class EzsigntemplatesignerCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatesignerCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatesigner
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Request
     * @param a_objEzsigntemplatesigner {Array.<module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound>} 
     */
    constructor(a_objEzsigntemplatesigner) { 
        
        EzsigntemplatesignerCreateObjectV1Request.initialize(this, a_objEzsigntemplatesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatesigner) { 
        obj['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Request} The populated <code>EzsigntemplatesignerCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatesigner')) {
                obj['a_objEzsigntemplatesigner'] = ApiClient.convertToType(data['a_objEzsigntemplatesigner'], [EzsigntemplatesignerRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound>}
     */
    getAObjEzsigntemplatesigner() {
        return this.a_objEzsigntemplatesigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound>} a_objEzsigntemplatesigner
     */
    setAObjEzsigntemplatesigner(a_objEzsigntemplatesigner) {
        this['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound>} a_objEzsigntemplatesigner
 */
EzsigntemplatesignerCreateObjectV1Request.prototype['a_objEzsigntemplatesigner'] = undefined;






export default EzsigntemplatesignerCreateObjectV1Request;

