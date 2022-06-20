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
import EzsigntemplatepackagesignerRequestCompound from './EzsigntemplatepackagesignerRequestCompound';

/**
 * The EzsigntemplatepackagesignerEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Request
 * @version 1.1.9
 */
class EzsigntemplatepackagesignerEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatepackagesigner/{pkiEzsigntemplatepackagesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Request
     * @param objEzsigntemplatepackagesigner {module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound} 
     */
    constructor(objEzsigntemplatepackagesigner) { 
        
        EzsigntemplatepackagesignerEditObjectV1Request.initialize(this, objEzsigntemplatepackagesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatepackagesigner) { 
        obj['objEzsigntemplatepackagesigner'] = objEzsigntemplatepackagesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Request} The populated <code>EzsigntemplatepackagesignerEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatepackagesigner')) {
                obj['objEzsigntemplatepackagesigner'] = EzsigntemplatepackagesignerRequestCompound.constructFromObject(data['objEzsigntemplatepackagesigner']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound}
     */
    getObjEzsigntemplatepackagesigner() {
        return this.objEzsigntemplatepackagesigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound} objEzsigntemplatepackagesigner
     */
    setObjEzsigntemplatepackagesigner(objEzsigntemplatepackagesigner) {
        this['objEzsigntemplatepackagesigner'] = objEzsigntemplatepackagesigner;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound} objEzsigntemplatepackagesigner
 */
EzsigntemplatepackagesignerEditObjectV1Request.prototype['objEzsigntemplatepackagesigner'] = undefined;






export default EzsigntemplatepackagesignerEditObjectV1Request;

