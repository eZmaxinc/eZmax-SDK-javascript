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

/**
 * The EzsignfoldersignerassociationResponse model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationResponse
 * @version 1.1.9
 */
class EzsignfoldersignerassociationResponse {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationResponse</code>.
     * An Ezsignfoldersignerassociation Object
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationResponse
     * @param pkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param bEzsignfoldersignerassociationReceivecopy {Boolean} If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     */
    constructor(pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy) { 
        
        EzsignfoldersignerassociationResponse.initialize(this, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy) { 
        obj['pkiEzsignfoldersignerassociationID'] = pkiEzsignfoldersignerassociationID;
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['bEzsignfoldersignerassociationReceivecopy'] = bEzsignfoldersignerassociationReceivecopy;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponse} The populated <code>EzsignfoldersignerassociationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationResponse();

            if (data.hasOwnProperty('pkiEzsignfoldersignerassociationID')) {
                obj['pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['pkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignfoldersignerassociationReceivecopy')) {
                obj['bEzsignfoldersignerassociationReceivecopy'] = ApiClient.convertToType(data['bEzsignfoldersignerassociationReceivecopy'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignfoldersignerassociationID() {
        return this.pkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setPkiEzsignfoldersignerassociationID(pkiEzsignfoldersignerassociationID) {
        this['pkiEzsignfoldersignerassociationID'] = pkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} fkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * Returns If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     * @return {Boolean}
     */
    getBEzsignfoldersignerassociationReceivecopy() {
        return this.bEzsignfoldersignerassociationReceivecopy;
    }

    /**
     * Sets If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     * @param {Boolean} bEzsignfoldersignerassociationReceivecopy If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     */
    setBEzsignfoldersignerassociationReceivecopy(bEzsignfoldersignerassociationReceivecopy) {
        this['bEzsignfoldersignerassociationReceivecopy'] = bEzsignfoldersignerassociationReceivecopy;
    }

}

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationResponse.prototype['pkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationResponse.prototype['fkiEzsignfolderID'] = undefined;

/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationResponse.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;






export default EzsignfoldersignerassociationResponse;

