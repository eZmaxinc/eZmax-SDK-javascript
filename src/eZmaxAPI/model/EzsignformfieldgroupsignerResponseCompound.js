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
import EzsignformfieldgroupsignerResponse from './EzsignformfieldgroupsignerResponse';

/**
 * The EzsignformfieldgroupsignerResponseCompound model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound
 * @version 1.1.9
 */
class EzsignformfieldgroupsignerResponseCompound {
    /**
     * Constructs a new <code>EzsignformfieldgroupsignerResponseCompound</code>.
     * An Ezsignformfieldgroupsigner Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound
     * @implements module:eZmaxAPI/model/EzsignformfieldgroupsignerResponse
     * @param pkiEzsignformfieldgroupsignerID {Number} The unique ID of the Ezsignformfieldgroupsigner
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     */
    constructor(pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID) { 
        EzsignformfieldgroupsignerResponse.initialize(this, pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID);
        EzsignformfieldgroupsignerResponseCompound.initialize(this, pkiEzsignformfieldgroupsignerID, fkiEzsignfoldersignerassociationID);
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
     * Constructs a <code>EzsignformfieldgroupsignerResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound} The populated <code>EzsignformfieldgroupsignerResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupsignerResponseCompound();
            EzsignformfieldgroupsignerResponse.constructFromObject(data, obj);

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

/**
 * The unique ID of the Ezsignformfieldgroupsigner
 * @member {Number} pkiEzsignformfieldgroupsignerID
 */
EzsignformfieldgroupsignerResponseCompound.prototype['pkiEzsignformfieldgroupsignerID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignformfieldgroupsignerResponseCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;


// Implement EzsignformfieldgroupsignerResponse interface:
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




export default EzsignformfieldgroupsignerResponseCompound;

