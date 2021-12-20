/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignerRequestCompoundContact from './EzsignsignerRequestCompoundContact';

/**
 * The EzsignsignerRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignsignerRequestCompoundAllOf
 * @version 1.1.4
 */
class EzsignsignerRequestCompoundAllOf {
    /**
     * Constructs a new <code>EzsignsignerRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignsignerRequestCompoundAllOf
     * @param objContact {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} 
     */
    constructor(objContact) { 
        
        EzsignsignerRequestCompoundAllOf.initialize(this, objContact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objContact) { 
        obj['objContact'] = objContact;
    }

    /**
     * Constructs a <code>EzsignsignerRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompoundAllOf} The populated <code>EzsignsignerRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerRequestCompoundAllOf();

            if (data.hasOwnProperty('objContact')) {
                obj['objContact'] = EzsignsignerRequestCompoundContact.constructFromObject(data['objContact']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact}
     */
    getObjContact() {
        return this.objContact;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} objContact
     */
    setObjContact(objContact) {
        this['objContact'] = objContact;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} objContact
 */
EzsignsignerRequestCompoundAllOf.prototype['objContact'] = undefined;






export default EzsignsignerRequestCompoundAllOf;

