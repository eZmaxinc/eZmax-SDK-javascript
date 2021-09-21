/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.48
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContactinformationsRequestCompound from './ContactinformationsRequestCompound';

/**
 * The ContactRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/ContactRequestCompoundAllOf
 * @version 1.0.48
 */
class ContactRequestCompoundAllOf {
    /**
     * Constructs a new <code>ContactRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/ContactRequestCompoundAllOf
     * @param objContactinformations {module:eZmaxAPI/model/ContactinformationsRequestCompound} 
     */
    constructor(objContactinformations) { 
        
        ContactRequestCompoundAllOf.initialize(this, objContactinformations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objContactinformations) { 
        obj['objContactinformations'] = objContactinformations;
    }

    /**
     * Constructs a <code>ContactRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ContactRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ContactRequestCompoundAllOf} The populated <code>ContactRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRequestCompoundAllOf();

            if (data.hasOwnProperty('objContactinformations')) {
                obj['objContactinformations'] = ContactinformationsRequestCompound.constructFromObject(data['objContactinformations']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/ContactinformationsRequestCompound}
     */
    getObjContactinformations() {
        return this.objContactinformations;
    }

    /**
     * @param {module:eZmaxAPI/model/ContactinformationsRequestCompound} objContactinformations
     */
    setObjContactinformations(objContactinformations) {
        this['objContactinformations'] = objContactinformations;
    }

}

/**
 * @member {module:eZmaxAPI/model/ContactinformationsRequestCompound} objContactinformations
 */
ContactRequestCompoundAllOf.prototype['objContactinformations'] = undefined;






export default ContactRequestCompoundAllOf;

