/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfoldersignerassociationRequest model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationRequest
 * @version 1.0.39
 */
class EzsignfoldersignerassociationRequest {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationRequest</code>.
     * An Ezsignfoldersignerassociation Object
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationRequest
     * @param fkiEzsignfolderID {Number} A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     */
    constructor(fkiEzsignfolderID) { 
        
        EzsignfoldersignerassociationRequest.initialize(this, fkiEzsignfolderID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest} The populated <code>EzsignfoldersignerassociationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationRequest();

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns A reference to a valid User.  This is only used if the signatory will be a user from the system.
     * minimum: 1
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets A reference to a valid User.  This is only used if the signatory will be a user from the system.
     * @param {Number} fkiUserID A reference to a valid User.  This is only used if the signatory will be a user from the system.
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }
/**
     * Returns A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * minimum: 1
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * @param {Number} fkiEzsignfolderID A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }

}

/**
 * A reference to a valid User.  This is only used if the signatory will be a user from the system.
 * @member {Number} fkiUserID
 */
EzsignfoldersignerassociationRequest.prototype['fkiUserID'] = undefined;

/**
 * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationRequest.prototype['fkiEzsignfolderID'] = undefined;






export default EzsignfoldersignerassociationRequest;

