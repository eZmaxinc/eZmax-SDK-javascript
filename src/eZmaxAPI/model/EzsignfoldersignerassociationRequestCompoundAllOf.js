/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignerRequestCompound from './EzsignsignerRequestCompound';

/**
 * The EzsignfoldersignerassociationRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationRequestCompoundAllOf
 * @version 1.1.14
 */
class EzsignfoldersignerassociationRequestCompoundAllOf {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompoundAllOf
     */
    constructor() { 
        
        EzsignfoldersignerassociationRequestCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompoundAllOf} The populated <code>EzsignfoldersignerassociationRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationRequestCompoundAllOf();

            if (data.hasOwnProperty('objEzsignsigner')) {
                obj['objEzsignsigner'] = EzsignsignerRequestCompound.constructFromObject(data['objEzsignsigner']);
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

}

/**
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
 */
EzsignfoldersignerassociationRequestCompoundAllOf.prototype['objEzsignsigner'] = undefined;






export default EzsignfoldersignerassociationRequestCompoundAllOf;

