/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignfoldersignerassociationActionableElementResponse from './CustomEzsignfoldersignerassociationActionableElementResponse';

/**
 * The EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload
 * @version 1.1.10
 */
class EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfolder/{pkiEzsignfolder}/getEzsignfoldersignerassociations
     * @alias module:eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload
     * @param a_objEzsignfoldersignerassociation {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationActionableElementResponse>} 
     */
    constructor(a_objEzsignfoldersignerassociation) { 
        
        EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.initialize(this, a_objEzsignfoldersignerassociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldersignerassociation) { 
        obj['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
    }

    /**
     * Constructs a <code>EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload} The populated <code>EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignfoldersignerassociation')) {
                obj['a_objEzsignfoldersignerassociation'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociation'], [CustomEzsignfoldersignerassociationActionableElementResponse]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationActionableElementResponse>}
     */
    getAObjEzsignfoldersignerassociation() {
        return this.a_objEzsignfoldersignerassociation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationActionableElementResponse>} a_objEzsignfoldersignerassociation
     */
    setAObjEzsignfoldersignerassociation(a_objEzsignfoldersignerassociation) {
        this['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationActionableElementResponse>} a_objEzsignfoldersignerassociation
 */
EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.prototype['a_objEzsignfoldersignerassociation'] = undefined;






export default EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload;

