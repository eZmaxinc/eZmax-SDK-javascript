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
 * The EzsigntemplatesignerEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Request
 * @version 1.1.7
 */
class EzsigntemplatesignerEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatesignerEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Request
     * @param objEzsigntemplatesigner {module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound} 
     */
    constructor(objEzsigntemplatesigner) { 
        
        EzsigntemplatesignerEditObjectV1Request.initialize(this, objEzsigntemplatesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatesigner) { 
        obj['objEzsigntemplatesigner'] = objEzsigntemplatesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Request} The populated <code>EzsigntemplatesignerEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatesigner')) {
                obj['objEzsigntemplatesigner'] = EzsigntemplatesignerRequestCompound.constructFromObject(data['objEzsigntemplatesigner']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound}
     */
    getObjEzsigntemplatesigner() {
        return this.objEzsigntemplatesigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound} objEzsigntemplatesigner
     */
    setObjEzsigntemplatesigner(objEzsigntemplatesigner) {
        this['objEzsigntemplatesigner'] = objEzsigntemplatesigner;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatesignerRequestCompound} objEzsigntemplatesigner
 */
EzsigntemplatesignerEditObjectV1Request.prototype['objEzsigntemplatesigner'] = undefined;






export default EzsigntemplatesignerEditObjectV1Request;

