/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldersignerassociationRequest from './EzsignfoldersignerassociationRequest';

/**
 * The EzsignfolderRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignfolderRequestCompoundAllOf
 * @version 1.1.0
 */
class EzsignfolderRequestCompoundAllOf {
    /**
     * Constructs a new <code>EzsignfolderRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfolderRequestCompoundAllOf
     * @param a_Ezsignfoldersignerassociation {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequest>} An array of signers that will be invited to sign the Ezsigndocuments
     */
    constructor(a_Ezsignfoldersignerassociation) { 
        
        EzsignfolderRequestCompoundAllOf.initialize(this, a_Ezsignfoldersignerassociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_Ezsignfoldersignerassociation) { 
        obj['a_Ezsignfoldersignerassociation'] = a_Ezsignfoldersignerassociation;
    }

    /**
     * Constructs a <code>EzsignfolderRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderRequestCompoundAllOf} The populated <code>EzsignfolderRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderRequestCompoundAllOf();

            if (data.hasOwnProperty('a_Ezsignfoldersignerassociation')) {
                obj['a_Ezsignfoldersignerassociation'] = ApiClient.convertToType(data['a_Ezsignfoldersignerassociation'], [EzsignfoldersignerassociationRequest]);
            }
        }
        return obj;
    }

/**
     * Returns An array of signers that will be invited to sign the Ezsigndocuments
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequest>}
     */
    getAEzsignfoldersignerassociation() {
        return this.a_Ezsignfoldersignerassociation;
    }

    /**
     * Sets An array of signers that will be invited to sign the Ezsigndocuments
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequest>} a_Ezsignfoldersignerassociation An array of signers that will be invited to sign the Ezsigndocuments
     */
    setAEzsignfoldersignerassociation(a_Ezsignfoldersignerassociation) {
        this['a_Ezsignfoldersignerassociation'] = a_Ezsignfoldersignerassociation;
    }

}

/**
 * An array of signers that will be invited to sign the Ezsigndocuments
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequest>} a_Ezsignfoldersignerassociation
 */
EzsignfolderRequestCompoundAllOf.prototype['a_Ezsignfoldersignerassociation'] = undefined;






export default EzsignfolderRequestCompoundAllOf;
