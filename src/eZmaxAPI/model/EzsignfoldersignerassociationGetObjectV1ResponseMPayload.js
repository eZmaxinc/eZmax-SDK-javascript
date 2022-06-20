/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldersignerassociationResponseCompound from './EzsignfoldersignerassociationResponseCompound';
import EzsignfoldersignerassociationResponseCompoundUser from './EzsignfoldersignerassociationResponseCompoundUser';
import EzsignsignerResponseCompound from './EzsignsignerResponseCompound';

/**
 * The EzsignfoldersignerassociationGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1ResponseMPayload
 * @version 1.1.8
 */
class EzsignfoldersignerassociationGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound
     * @param pkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param bEzsignfoldersignerassociationReceivecopy {Boolean} If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     */
    constructor(pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy) { 
        EzsignfoldersignerassociationResponseCompound.initialize(this, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy);
        EzsignfoldersignerassociationGetObjectV1ResponseMPayload.initialize(this, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy);
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
     * Constructs a <code>EzsignfoldersignerassociationGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1ResponseMPayload} The populated <code>EzsignfoldersignerassociationGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationGetObjectV1ResponseMPayload();
            EzsignfoldersignerassociationResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignfoldersignerassociationID')) {
                obj['pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['pkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignfoldersignerassociationReceivecopy')) {
                obj['bEzsignfoldersignerassociationReceivecopy'] = ApiClient.convertToType(data['bEzsignfoldersignerassociationReceivecopy'], 'Boolean');
            }
            if (data.hasOwnProperty('objUser')) {
                obj['objUser'] = EzsignfoldersignerassociationResponseCompoundUser.constructFromObject(data['objUser']);
            }
            if (data.hasOwnProperty('objEzsignsigner')) {
                obj['objEzsignsigner'] = EzsignsignerResponseCompound.constructFromObject(data['objEzsignsigner']);
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
/**
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser}
     */
    getObjUser() {
        return this.objUser;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
     */
    setObjUser(objUser) {
        this['objUser'] = objUser;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompound}
     */
    getObjEzsignsigner() {
        return this.objEzsignsigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
     */
    setObjEzsignsigner(objEzsignsigner) {
        this['objEzsignsigner'] = objEzsignsigner;
    }

}

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationGetObjectV1ResponseMPayload.prototype['pkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationGetObjectV1ResponseMPayload.prototype['fkiEzsignfolderID'] = undefined;

/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationGetObjectV1ResponseMPayload.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
 */
EzsignfoldersignerassociationGetObjectV1ResponseMPayload.prototype['objUser'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
 */
EzsignfoldersignerassociationGetObjectV1ResponseMPayload.prototype['objEzsignsigner'] = undefined;


// Implement EzsignfoldersignerassociationResponseCompound interface:
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationResponseCompound.prototype['pkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationResponseCompound.prototype['fkiEzsignfolderID'] = undefined;
/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationResponseCompound.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
 */
EzsignfoldersignerassociationResponseCompound.prototype['objUser'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
 */
EzsignfoldersignerassociationResponseCompound.prototype['objEzsignsigner'] = undefined;




export default EzsignfoldersignerassociationGetObjectV1ResponseMPayload;

