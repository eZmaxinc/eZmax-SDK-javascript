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
import EzsignformfieldgroupsignerRequest from './EzsignformfieldgroupsignerRequest';

/**
 * The EzsignformfieldgroupsignerRequestCompound model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound
 * @version 1.1.7
 */
class EzsignformfieldgroupsignerRequestCompound {
    /**
     * Constructs a new <code>EzsignformfieldgroupsignerRequestCompound</code>.
     * An Ezsignformfieldgroupsigner Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound
     * @implements module:eZmaxAPI/model/EzsignformfieldgroupsignerRequest
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     */
    constructor(fkiEzsignfoldersignerassociationID) { 
        EzsignformfieldgroupsignerRequest.initialize(this, fkiEzsignfoldersignerassociationID);
        EzsignformfieldgroupsignerRequestCompound.initialize(this, fkiEzsignfoldersignerassociationID);
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
     * Constructs a <code>EzsignformfieldgroupsignerRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound} The populated <code>EzsignformfieldgroupsignerRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupsignerRequestCompound();
            EzsignformfieldgroupsignerRequest.constructFromObject(data, obj);

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
EzsignformfieldgroupsignerRequestCompound.prototype['pkiEzsignformfieldgroupsignerID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignformfieldgroupsignerRequestCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;


// Implement EzsignformfieldgroupsignerRequest interface:
/**
 * The unique ID of the Ezsignformfieldgroupsigner
 * @member {Number} pkiEzsignformfieldgroupsignerID
 */
EzsignformfieldgroupsignerRequest.prototype['pkiEzsignformfieldgroupsignerID'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignformfieldgroupsignerRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;




export default EzsignformfieldgroupsignerRequestCompound;

