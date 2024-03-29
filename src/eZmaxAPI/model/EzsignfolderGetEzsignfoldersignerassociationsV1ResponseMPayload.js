/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
 * @version 1.1.18
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
     * Validates the JSON data with respect to <code>EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignfoldersignerassociation']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignfoldersignerassociation'])) {
                throw new Error("Expected the field `a_objEzsignfoldersignerassociation` to be an array in the JSON data but got " + data['a_objEzsignfoldersignerassociation']);
            }
            // validate the optional field `a_objEzsignfoldersignerassociation` (array)
            for (const item of data['a_objEzsignfoldersignerassociation']) {
                CustomEzsignfoldersignerassociationActionableElementResponse.validateJSON(item);
            };
        }

        return true;
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

EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.RequiredProperties = ["a_objEzsignfoldersignerassociation"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationActionableElementResponse>} a_objEzsignfoldersignerassociation
 */
EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.prototype['a_objEzsignfoldersignerassociation'] = undefined;






export default EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload;

