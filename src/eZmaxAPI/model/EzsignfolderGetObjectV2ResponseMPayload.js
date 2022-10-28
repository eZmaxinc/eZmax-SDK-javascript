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
import EzsignfolderResponseCompound from './EzsignfolderResponseCompound';

/**
 * The EzsignfolderGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload
 * @version 1.1.13
 */
class EzsignfolderGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsignfolder/{pkiEzsignfolderID}
     * @alias module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload
     * @param objEzsignfolder {module:eZmaxAPI/model/EzsignfolderResponseCompound} 
     */
    constructor(objEzsignfolder) { 
        
        EzsignfolderGetObjectV2ResponseMPayload.initialize(this, objEzsignfolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfolder) { 
        obj['objEzsignfolder'] = objEzsignfolder;
    }

    /**
     * Constructs a <code>EzsignfolderGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload} The populated <code>EzsignfolderGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsignfolder')) {
                obj['objEzsignfolder'] = EzsignfolderResponseCompound.constructFromObject(data['objEzsignfolder']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderResponseCompound}
     */
    getObjEzsignfolder() {
        return this.objEzsignfolder;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderResponseCompound} objEzsignfolder
     */
    setObjEzsignfolder(objEzsignfolder) {
        this['objEzsignfolder'] = objEzsignfolder;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfolderResponseCompound} objEzsignfolder
 */
EzsignfolderGetObjectV2ResponseMPayload.prototype['objEzsignfolder'] = undefined;






export default EzsignfolderGetObjectV2ResponseMPayload;

