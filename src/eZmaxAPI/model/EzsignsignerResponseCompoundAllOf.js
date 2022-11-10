/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignerResponseCompoundContact from './EzsignsignerResponseCompoundContact';

/**
 * The EzsignsignerResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignsignerResponseCompoundAllOf
 * @version 1.1.16
 */
class EzsignsignerResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignsignerResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignsignerResponseCompoundAllOf
     * @param objContact {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} 
     */
    constructor(objContact) { 
        
        EzsignsignerResponseCompoundAllOf.initialize(this, objContact);
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
     * Constructs a <code>EzsignsignerResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompoundAllOf} The populated <code>EzsignsignerResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerResponseCompoundAllOf();

            if (data.hasOwnProperty('objContact')) {
                obj['objContact'] = EzsignsignerResponseCompoundContact.constructFromObject(data['objContact']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact}
     */
    getObjContact() {
        return this.objContact;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} objContact
     */
    setObjContact(objContact) {
        this['objContact'] = objContact;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} objContact
 */
EzsignsignerResponseCompoundAllOf.prototype['objContact'] = undefined;






export default EzsignsignerResponseCompoundAllOf;

