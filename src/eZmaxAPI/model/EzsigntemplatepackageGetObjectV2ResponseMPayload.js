/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackageResponseCompound from './EzsigntemplatepackageResponseCompound';

/**
 * The EzsigntemplatepackageGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageGetObjectV2ResponseMPayload
 * @version 1.1.14
 */
class EzsigntemplatepackageGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackageGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV2ResponseMPayload
     * @param objEzsigntemplatepackage {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} 
     */
    constructor(objEzsigntemplatepackage) { 
        
        EzsigntemplatepackageGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatepackage);
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
     * Constructs a <code>EzsigntemplatepackageGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatepackageGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatepackage')) {
                obj['objEzsigntemplatepackage'] = EzsigntemplatepackageResponseCompound.constructFromObject(data['objEzsigntemplatepackage']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound}
     */
    getObjEzsigntemplatepackage() {
        return this.objEzsigntemplatepackage;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
     */
    setObjEzsigntemplatepackage(objEzsigntemplatepackage) {
        this['objEzsigntemplatepackage'] = objEzsigntemplatepackage;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
 */
EzsigntemplatepackageGetObjectV2ResponseMPayload.prototype['objEzsigntemplatepackage'] = undefined;






export default EzsigntemplatepackageGetObjectV2ResponseMPayload;

