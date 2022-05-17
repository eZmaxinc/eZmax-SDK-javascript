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
import EzsigntemplatepackagesignerRequestCompound from './EzsigntemplatepackagesignerRequestCompound';

/**
 * The EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request
 * @version 1.1.7
 */
class EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}/editEzsigntemplatepackagesigners
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request
     * @param a_objEzsigntemplatepackagesigner {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound>} 
     */
    constructor(a_objEzsigntemplatepackagesigner) { 
        
        EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request.initialize(this, a_objEzsigntemplatepackagesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackagesigner) { 
        obj['a_objEzsigntemplatepackagesigner'] = a_objEzsigntemplatepackagesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request} The populated <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatepackagesigner')) {
                obj['a_objEzsigntemplatepackagesigner'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagesigner'], [EzsigntemplatepackagesignerRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound>}
     */
    getAObjEzsigntemplatepackagesigner() {
        return this.a_objEzsigntemplatepackagesigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound>} a_objEzsigntemplatepackagesigner
     */
    setAObjEzsigntemplatepackagesigner(a_objEzsigntemplatepackagesigner) {
        this['a_objEzsigntemplatepackagesigner'] = a_objEzsigntemplatepackagesigner;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerRequestCompound>} a_objEzsigntemplatepackagesigner
 */
EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request.prototype['a_objEzsigntemplatepackagesigner'] = undefined;






export default EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request;
