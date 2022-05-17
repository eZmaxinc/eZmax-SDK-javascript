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

/**
 * The CustomImportEzsigntemplatepackageRelationRequest model module.
 * @module eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest
 * @version 1.1.7
 */
class CustomImportEzsigntemplatepackageRelationRequest {
    /**
     * Constructs a new <code>CustomImportEzsigntemplatepackageRelationRequest</code>.
     * The object used in /1/object/ezsignfolder/{pkiEzsignfolderID}/importEzsigntemplatepackage Request
     * @alias module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     */
    constructor(fkiEzsignfoldersignerassociationID) { 
        
        CustomImportEzsigntemplatepackageRelationRequest.initialize(this, fkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldersignerassociationID) { 
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>CustomImportEzsigntemplatepackageRelationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest} The populated <code>CustomImportEzsigntemplatepackageRelationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomImportEzsigntemplatepackageRelationRequest();

            if (data.hasOwnProperty('fkiEzsigntemplatepackagesignerID')) {
                obj['fkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackagesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatepackagesignerDescription')) {
                obj['sEzsigntemplatepackagesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackagesignerDescription'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagesigner
     * @return {Number}
     */
    getFkiEzsigntemplatepackagesignerID() {
        return this.fkiEzsigntemplatepackagesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesigner
     * @param {Number} fkiEzsigntemplatepackagesignerID The unique ID of the Ezsigntemplatepackagesigner
     */
    setFkiEzsigntemplatepackagesignerID(fkiEzsigntemplatepackagesignerID) {
        this['fkiEzsigntemplatepackagesignerID'] = fkiEzsigntemplatepackagesignerID;
    }
/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
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
/**
     * Returns The description of the Ezsigntemplatepackagesigner
     * @return {String}
     */
    getSEzsigntemplatepackagesignerDescription() {
        return this.sEzsigntemplatepackagesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatepackagesigner
     * @param {String} sEzsigntemplatepackagesignerDescription The description of the Ezsigntemplatepackagesigner
     */
    setSEzsigntemplatepackagesignerDescription(sEzsigntemplatepackagesignerDescription) {
        this['sEzsigntemplatepackagesignerDescription'] = sEzsigntemplatepackagesignerDescription;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} fkiEzsigntemplatepackagesignerID
 */
CustomImportEzsigntemplatepackageRelationRequest.prototype['fkiEzsigntemplatepackagesignerID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
CustomImportEzsigntemplatepackageRelationRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The description of the Ezsigntemplatepackagesigner
 * @member {String} sEzsigntemplatepackagesignerDescription
 */
CustomImportEzsigntemplatepackageRelationRequest.prototype['sEzsigntemplatepackagesignerDescription'] = undefined;






export default CustomImportEzsigntemplatepackageRelationRequest;

