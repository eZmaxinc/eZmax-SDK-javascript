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
import EzsignfoldersignerassociationResponseCompoundUser from './EzsignfoldersignerassociationResponseCompoundUser';
import EzsignsignerResponseCompound from './EzsignsignerResponseCompound';

/**
 * The EzsignfoldersignerassociationResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundAllOf
 * @version 1.1.11
 */
class EzsignfoldersignerassociationResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundAllOf
     */
    constructor() { 
        
        EzsignfoldersignerassociationResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundAllOf} The populated <code>EzsignfoldersignerassociationResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationResponseCompoundAllOf();

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
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
 */
EzsignfoldersignerassociationResponseCompoundAllOf.prototype['objUser'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
 */
EzsignfoldersignerassociationResponseCompoundAllOf.prototype['objEzsignsigner'] = undefined;






export default EzsignfoldersignerassociationResponseCompoundAllOf;

