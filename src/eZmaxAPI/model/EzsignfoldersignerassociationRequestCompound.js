/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldersignerassociationRequest from './EzsignfoldersignerassociationRequest';
import EzsignfoldersignerassociationRequestCompoundAllOf from './EzsignfoldersignerassociationRequestCompoundAllOf';
import EzsignsignerRequestCompound from './EzsignsignerRequestCompound';

/**
 * The EzsignfoldersignerassociationRequestCompound model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound
 * @version 1.1.3
 */
class EzsignfoldersignerassociationRequestCompound {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationRequestCompound</code>.
     * An Ezsignfoldersignerassociation Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompoundAllOf
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationRequest
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     */
    constructor(fkiEzsignfolderID) { 
        EzsignfoldersignerassociationRequestCompoundAllOf.initialize(this);EzsignfoldersignerassociationRequest.initialize(this, fkiEzsignfolderID);
        EzsignfoldersignerassociationRequestCompound.initialize(this, fkiEzsignfolderID);
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
     * Constructs a <code>EzsignfoldersignerassociationRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} The populated <code>EzsignfoldersignerassociationRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationRequestCompound();
            EzsignfoldersignerassociationRequestCompoundAllOf.constructFromObject(data, obj);
            EzsignfoldersignerassociationRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('objEzsignsigner')) {
                obj['objEzsignsigner'] = EzsignsignerRequestCompound.constructFromObject(data['objEzsignsigner']);
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
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
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompound}
     */
    getObjEzsignsigner() {
        return this.objEzsignsigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
     */
    setObjEzsignsigner(objEzsignsigner) {
        this['objEzsignsigner'] = objEzsignsigner;
    }
/**
     * Returns The unique ID of the User
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }
/**
     * Returns The unique ID of the Ezsignfolder
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
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
 */
EzsignfoldersignerassociationRequestCompound.prototype['objEzsignsigner'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignfoldersignerassociationRequestCompound.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationRequestCompound.prototype['fkiEzsignfolderID'] = undefined;

/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationRequestCompound.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;


// Implement EzsignfoldersignerassociationRequestCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
 */
EzsignfoldersignerassociationRequestCompoundAllOf.prototype['objEzsignsigner'] = undefined;
// Implement EzsignfoldersignerassociationRequest interface:
/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignfoldersignerassociationRequest.prototype['fkiUserID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationRequest.prototype['fkiEzsignfolderID'] = undefined;
/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationRequest.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;




export default EzsignfoldersignerassociationRequestCompound;

