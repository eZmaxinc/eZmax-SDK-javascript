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
import EzsignfoldersignerassociationResponseCompound from './EzsignfoldersignerassociationResponseCompound';

/**
 * The EzsignfoldersignerassociationGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV2ResponseMPayload
 * @version 1.1.13
 */
class EzsignfoldersignerassociationGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV2ResponseMPayload
     * @param objEzsignfoldersignerassociation {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound} 
     */
    constructor(objEzsignfoldersignerassociation) { 
        
        EzsignfoldersignerassociationGetObjectV2ResponseMPayload.initialize(this, objEzsignfoldersignerassociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfoldersignerassociation) { 
        obj['objEzsignfoldersignerassociation'] = objEzsignfoldersignerassociation;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV2ResponseMPayload} The populated <code>EzsignfoldersignerassociationGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsignfoldersignerassociation')) {
                obj['objEzsignfoldersignerassociation'] = EzsignfoldersignerassociationResponseCompound.constructFromObject(data['objEzsignfoldersignerassociation']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound}
     */
    getObjEzsignfoldersignerassociation() {
        return this.objEzsignfoldersignerassociation;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound} objEzsignfoldersignerassociation
     */
    setObjEzsignfoldersignerassociation(objEzsignfoldersignerassociation) {
        this['objEzsignfoldersignerassociation'] = objEzsignfoldersignerassociation;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound} objEzsignfoldersignerassociation
 */
EzsignfoldersignerassociationGetObjectV2ResponseMPayload.prototype['objEzsignfoldersignerassociation'] = undefined;






export default EzsignfoldersignerassociationGetObjectV2ResponseMPayload;

