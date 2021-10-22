/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressRequest from './AddressRequest';
import ContactRequestCompound from './ContactRequestCompound';

/**
 * The FranchisereferalincomeRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/FranchisereferalincomeRequestCompoundAllOf
 * @version 1.1.1
 */
class FranchisereferalincomeRequestCompoundAllOf {
    /**
     * Constructs a new <code>FranchisereferalincomeRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/FranchisereferalincomeRequestCompoundAllOf
     * @param a_objContact {Array.<module:eZmaxAPI/model/ContactRequestCompound>} 
     */
    constructor(a_objContact) { 
        
        FranchisereferalincomeRequestCompoundAllOf.initialize(this, a_objContact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objContact) { 
        obj['a_objContact'] = a_objContact;
    }

    /**
     * Constructs a <code>FranchisereferalincomeRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequestCompoundAllOf} The populated <code>FranchisereferalincomeRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeRequestCompoundAllOf();

            if (data.hasOwnProperty('objAddress')) {
                obj['objAddress'] = AddressRequest.constructFromObject(data['objAddress']);
            }
            if (data.hasOwnProperty('a_objContact')) {
                obj['a_objContact'] = ApiClient.convertToType(data['a_objContact'], [ContactRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/AddressRequest}
     */
    getObjAddress() {
        return this.objAddress;
    }

    /**
     * @param {module:eZmaxAPI/model/AddressRequest} objAddress
     */
    setObjAddress(objAddress) {
        this['objAddress'] = objAddress;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/ContactRequestCompound>}
     */
    getAObjContact() {
        return this.a_objContact;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ContactRequestCompound>} a_objContact
     */
    setAObjContact(a_objContact) {
        this['a_objContact'] = a_objContact;
    }

}

/**
 * @member {module:eZmaxAPI/model/AddressRequest} objAddress
 */
FranchisereferalincomeRequestCompoundAllOf.prototype['objAddress'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/ContactRequestCompound>} a_objContact
 */
FranchisereferalincomeRequestCompoundAllOf.prototype['a_objContact'] = undefined;






export default FranchisereferalincomeRequestCompoundAllOf;

