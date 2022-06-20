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
import EzsigntemplatepackageRequestCompound from './EzsigntemplatepackageRequestCompound';

/**
 * The EzsigntemplatepackageEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Request
 * @version 1.1.9
 */
class EzsigntemplatepackageEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackageEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Request
     * @param objEzsigntemplatepackage {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound} 
     */
    constructor(objEzsigntemplatepackage) { 
        
        EzsigntemplatepackageEditObjectV1Request.initialize(this, objEzsigntemplatepackage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatepackage) { 
        obj['objEzsigntemplatepackage'] = objEzsigntemplatepackage;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Request} The populated <code>EzsigntemplatepackageEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatepackage')) {
                obj['objEzsigntemplatepackage'] = EzsigntemplatepackageRequestCompound.constructFromObject(data['objEzsigntemplatepackage']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound}
     */
    getObjEzsigntemplatepackage() {
        return this.objEzsigntemplatepackage;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound} objEzsigntemplatepackage
     */
    setObjEzsigntemplatepackage(objEzsigntemplatepackage) {
        this['objEzsigntemplatepackage'] = objEzsigntemplatepackage;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound} objEzsigntemplatepackage
 */
EzsigntemplatepackageEditObjectV1Request.prototype['objEzsigntemplatepackage'] = undefined;






export default EzsigntemplatepackageEditObjectV1Request;

