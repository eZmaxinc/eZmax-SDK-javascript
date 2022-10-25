/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload
 * @version 1.1.11
 */
class EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignfolder/{pkiEzsignfolder}/importEzsignfoldersignerassociations
     * @alias module:eZmaxAPI/model/EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload
     * @param a_pkiEzsignfoldersignerassociationID {Array.<Number>} 
     */
    constructor(a_pkiEzsignfoldersignerassociationID) { 
        
        EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload.initialize(this, a_pkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignfoldersignerassociationID) { 
        obj['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload} The populated <code>EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignfoldersignerassociationID')) {
                obj['a_pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['a_pkiEzsignfoldersignerassociationID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsignfoldersignerassociationID() {
        return this.a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsignfoldersignerassociationID
     */
    setAPkiEzsignfoldersignerassociationID(a_pkiEzsignfoldersignerassociationID) {
        this['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

}

/**
 * @member {Array.<Number>} a_pkiEzsignfoldersignerassociationID
 */
EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload.prototype['a_pkiEzsignfoldersignerassociationID'] = undefined;






export default EzsignfolderImportEzsignfoldersignerassociationsV1ResponseMPayload;
