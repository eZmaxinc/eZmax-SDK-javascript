/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignformfieldgroupsignerResponse model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupsignerResponse
 * @version 1.2.0
 */
class EzsignformfieldgroupsignerResponse {
    /**
     * Constructs a new <code>EzsignformfieldgroupsignerResponse</code>.
     * A Ezsignformfieldgroupsigner Object
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupsignerResponse
     * @param pkiEzsignformfieldgroupsignerID {Number} The unique ID of the Ezsignformfieldgroupsigner
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     */
    constructor(pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID) { 
        
        EzsignformfieldgroupsignerResponse.initialize(this, pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID) { 
        obj['pkiEzsignformfieldgroupsignerID'] = pkiEzsignformfieldgroupsignerID;
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupsignerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupsignerResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupsignerResponse} The populated <code>EzsignformfieldgroupsignerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupsignerResponse();

            if (data.hasOwnProperty('pkiEzsignformfieldgroupsignerID')) {
                obj['pkiEzsignformfieldgroupsignerID'] = ApiClient.convertToType(data['pkiEzsignformfieldgroupsignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignformfieldgroupsignerResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignformfieldgroupsignerResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignformfieldgroupsignerResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignformfieldgroupsigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignformfieldgroupsignerID() {
        return this.pkiEzsignformfieldgroupsignerID;
    }

    /**
     * Sets The unique ID of the Ezsignformfieldgroupsigner
     * @param {Number} pkiEzsignformfieldgroupsignerID The unique ID of the Ezsignformfieldgroupsigner
     */
    setPkiEzsignformfieldgroupsignerID(pkiEzsignformfieldgroupsignerID) {
        this['pkiEzsignformfieldgroupsignerID'] = pkiEzsignformfieldgroupsignerID;
    }
/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }

}

EzsignformfieldgroupsignerResponse.RequiredProperties = ["pkiEzsignformfieldgroupsignerID", "fkiEzsignfoldersignerassociationID"];

/**
 * The unique ID of the Ezsignformfieldgroupsigner
 * @member {Number} pkiEzsignformfieldgroupsignerID
 */
EzsignformfieldgroupsignerResponse.prototype['pkiEzsignformfieldgroupsignerID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignformfieldgroupsignerResponse.prototype['fkiEzsignfoldersignerassociationID'] = undefined;






export default EzsignformfieldgroupsignerResponse;

