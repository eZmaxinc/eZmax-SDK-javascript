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
import AddressRequest from './AddressRequest';
import EmailRequest from './EmailRequest';
import PhoneRequest from './PhoneRequest';
import WebsiteRequest from './WebsiteRequest';

/**
 * The ContactinformationsRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/ContactinformationsRequestCompoundAllOf
 * @version 1.1.0
 */
class ContactinformationsRequestCompoundAllOf {
    /**
     * Constructs a new <code>ContactinformationsRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/ContactinformationsRequestCompoundAllOf
     * @param a_objAddress {Array.<module:eZmaxAPI/model/AddressRequest>} 
     * @param a_objPhone {Array.<module:eZmaxAPI/model/PhoneRequest>} 
     * @param a_objEmail {Array.<module:eZmaxAPI/model/EmailRequest>} 
     * @param a_objWebsite {Array.<module:eZmaxAPI/model/WebsiteRequest>} 
     */
    constructor(a_objAddress, a_objPhone, a_objEmail, a_objWebsite) { 
        
        ContactinformationsRequestCompoundAllOf.initialize(this, a_objAddress, a_objPhone, a_objEmail, a_objWebsite);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objAddress, a_objPhone, a_objEmail, a_objWebsite) { 
        obj['a_objAddress'] = a_objAddress;
        obj['a_objPhone'] = a_objPhone;
        obj['a_objEmail'] = a_objEmail;
        obj['a_objWebsite'] = a_objWebsite;
    }

    /**
     * Constructs a <code>ContactinformationsRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ContactinformationsRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ContactinformationsRequestCompoundAllOf} The populated <code>ContactinformationsRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactinformationsRequestCompoundAllOf();

            if (data.hasOwnProperty('a_objAddress')) {
                obj['a_objAddress'] = ApiClient.convertToType(data['a_objAddress'], [AddressRequest]);
            }
            if (data.hasOwnProperty('a_objPhone')) {
                obj['a_objPhone'] = ApiClient.convertToType(data['a_objPhone'], [PhoneRequest]);
            }
            if (data.hasOwnProperty('a_objEmail')) {
                obj['a_objEmail'] = ApiClient.convertToType(data['a_objEmail'], [EmailRequest]);
            }
            if (data.hasOwnProperty('a_objWebsite')) {
                obj['a_objWebsite'] = ApiClient.convertToType(data['a_objWebsite'], [WebsiteRequest]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/AddressRequest>}
     */
    getAObjAddress() {
        return this.a_objAddress;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/AddressRequest>} a_objAddress
     */
    setAObjAddress(a_objAddress) {
        this['a_objAddress'] = a_objAddress;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/PhoneRequest>}
     */
    getAObjPhone() {
        return this.a_objPhone;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/PhoneRequest>} a_objPhone
     */
    setAObjPhone(a_objPhone) {
        this['a_objPhone'] = a_objPhone;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EmailRequest>}
     */
    getAObjEmail() {
        return this.a_objEmail;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EmailRequest>} a_objEmail
     */
    setAObjEmail(a_objEmail) {
        this['a_objEmail'] = a_objEmail;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/WebsiteRequest>}
     */
    getAObjWebsite() {
        return this.a_objWebsite;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/WebsiteRequest>} a_objWebsite
     */
    setAObjWebsite(a_objWebsite) {
        this['a_objWebsite'] = a_objWebsite;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/AddressRequest>} a_objAddress
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objAddress'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/PhoneRequest>} a_objPhone
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objPhone'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EmailRequest>} a_objEmail
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objEmail'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/WebsiteRequest>} a_objWebsite
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objWebsite'] = undefined;






export default ContactinformationsRequestCompoundAllOf;
