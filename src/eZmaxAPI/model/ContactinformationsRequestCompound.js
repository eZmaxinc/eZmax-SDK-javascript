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
import AddressRequestCompound from './AddressRequestCompound';
import ContactinformationsRequest from './ContactinformationsRequest';
import ContactinformationsRequestCompoundAllOf from './ContactinformationsRequestCompoundAllOf';
import EmailRequestCompound from './EmailRequestCompound';
import PhoneRequestCompound from './PhoneRequestCompound';
import WebsiteRequestCompound from './WebsiteRequestCompound';

/**
 * The ContactinformationsRequestCompound model module.
 * @module eZmaxAPI/model/ContactinformationsRequestCompound
 * @version 1.1.14
 */
class ContactinformationsRequestCompound {
    /**
     * Constructs a new <code>ContactinformationsRequestCompound</code>.
     * A Contactinformations Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/ContactinformationsRequestCompound
     * @implements module:eZmaxAPI/model/ContactinformationsRequest
     * @implements module:eZmaxAPI/model/ContactinformationsRequestCompoundAllOf
     * @param iAddressDefault {Number} The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iPhoneDefault {Number} The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iEmailDefault {Number} The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iWebsiteDefault {Number} The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param a_objAddress {Array.<module:eZmaxAPI/model/AddressRequestCompound>} 
     * @param a_objPhone {Array.<module:eZmaxAPI/model/PhoneRequestCompound>} 
     * @param a_objEmail {Array.<module:eZmaxAPI/model/EmailRequestCompound>} 
     * @param a_objWebsite {Array.<module:eZmaxAPI/model/WebsiteRequestCompound>} 
     */
    constructor(iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault, a_objAddress, a_objPhone, a_objEmail, a_objWebsite) { 
        ContactinformationsRequest.initialize(this, iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault);ContactinformationsRequestCompoundAllOf.initialize(this, a_objAddress, a_objPhone, a_objEmail, a_objWebsite);
        ContactinformationsRequestCompound.initialize(this, iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault, a_objAddress, a_objPhone, a_objEmail, a_objWebsite);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault, a_objAddress, a_objPhone, a_objEmail, a_objWebsite) { 
        obj['iAddressDefault'] = iAddressDefault;
        obj['iPhoneDefault'] = iPhoneDefault;
        obj['iEmailDefault'] = iEmailDefault;
        obj['iWebsiteDefault'] = iWebsiteDefault;
        obj['a_objAddress'] = a_objAddress;
        obj['a_objPhone'] = a_objPhone;
        obj['a_objEmail'] = a_objEmail;
        obj['a_objWebsite'] = a_objWebsite;
    }

    /**
     * Constructs a <code>ContactinformationsRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ContactinformationsRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ContactinformationsRequestCompound} The populated <code>ContactinformationsRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactinformationsRequestCompound();
            ContactinformationsRequest.constructFromObject(data, obj);
            ContactinformationsRequestCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('iAddressDefault')) {
                obj['iAddressDefault'] = ApiClient.convertToType(data['iAddressDefault'], 'Number');
            }
            if (data.hasOwnProperty('iPhoneDefault')) {
                obj['iPhoneDefault'] = ApiClient.convertToType(data['iPhoneDefault'], 'Number');
            }
            if (data.hasOwnProperty('iEmailDefault')) {
                obj['iEmailDefault'] = ApiClient.convertToType(data['iEmailDefault'], 'Number');
            }
            if (data.hasOwnProperty('iWebsiteDefault')) {
                obj['iWebsiteDefault'] = ApiClient.convertToType(data['iWebsiteDefault'], 'Number');
            }
            if (data.hasOwnProperty('a_objAddress')) {
                obj['a_objAddress'] = ApiClient.convertToType(data['a_objAddress'], [AddressRequestCompound]);
            }
            if (data.hasOwnProperty('a_objPhone')) {
                obj['a_objPhone'] = ApiClient.convertToType(data['a_objPhone'], [PhoneRequestCompound]);
            }
            if (data.hasOwnProperty('a_objEmail')) {
                obj['a_objEmail'] = ApiClient.convertToType(data['a_objEmail'], [EmailRequestCompound]);
            }
            if (data.hasOwnProperty('a_objWebsite')) {
                obj['a_objWebsite'] = ApiClient.convertToType(data['a_objWebsite'], [WebsiteRequestCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIAddressDefault() {
        return this.iAddressDefault;
    }

    /**
     * Sets The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iAddressDefault The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIAddressDefault(iAddressDefault) {
        this['iAddressDefault'] = iAddressDefault;
    }
/**
     * Returns The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIPhoneDefault() {
        return this.iPhoneDefault;
    }

    /**
     * Sets The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iPhoneDefault The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIPhoneDefault(iPhoneDefault) {
        this['iPhoneDefault'] = iPhoneDefault;
    }
/**
     * Returns The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIEmailDefault() {
        return this.iEmailDefault;
    }

    /**
     * Sets The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iEmailDefault The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIEmailDefault(iEmailDefault) {
        this['iEmailDefault'] = iEmailDefault;
    }
/**
     * Returns The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIWebsiteDefault() {
        return this.iWebsiteDefault;
    }

    /**
     * Sets The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iWebsiteDefault The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIWebsiteDefault(iWebsiteDefault) {
        this['iWebsiteDefault'] = iWebsiteDefault;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/AddressRequestCompound>}
     */
    getAObjAddress() {
        return this.a_objAddress;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/AddressRequestCompound>} a_objAddress
     */
    setAObjAddress(a_objAddress) {
        this['a_objAddress'] = a_objAddress;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/PhoneRequestCompound>}
     */
    getAObjPhone() {
        return this.a_objPhone;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/PhoneRequestCompound>} a_objPhone
     */
    setAObjPhone(a_objPhone) {
        this['a_objPhone'] = a_objPhone;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EmailRequestCompound>}
     */
    getAObjEmail() {
        return this.a_objEmail;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EmailRequestCompound>} a_objEmail
     */
    setAObjEmail(a_objEmail) {
        this['a_objEmail'] = a_objEmail;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/WebsiteRequestCompound>}
     */
    getAObjWebsite() {
        return this.a_objWebsite;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/WebsiteRequestCompound>} a_objWebsite
     */
    setAObjWebsite(a_objWebsite) {
        this['a_objWebsite'] = a_objWebsite;
    }

}

/**
 * The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iAddressDefault
 */
ContactinformationsRequestCompound.prototype['iAddressDefault'] = undefined;

/**
 * The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iPhoneDefault
 */
ContactinformationsRequestCompound.prototype['iPhoneDefault'] = undefined;

/**
 * The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iEmailDefault
 */
ContactinformationsRequestCompound.prototype['iEmailDefault'] = undefined;

/**
 * The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iWebsiteDefault
 */
ContactinformationsRequestCompound.prototype['iWebsiteDefault'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/AddressRequestCompound>} a_objAddress
 */
ContactinformationsRequestCompound.prototype['a_objAddress'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/PhoneRequestCompound>} a_objPhone
 */
ContactinformationsRequestCompound.prototype['a_objPhone'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EmailRequestCompound>} a_objEmail
 */
ContactinformationsRequestCompound.prototype['a_objEmail'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/WebsiteRequestCompound>} a_objWebsite
 */
ContactinformationsRequestCompound.prototype['a_objWebsite'] = undefined;


// Implement ContactinformationsRequest interface:
/**
 * The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iAddressDefault
 */
ContactinformationsRequest.prototype['iAddressDefault'] = undefined;
/**
 * The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iPhoneDefault
 */
ContactinformationsRequest.prototype['iPhoneDefault'] = undefined;
/**
 * The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iEmailDefault
 */
ContactinformationsRequest.prototype['iEmailDefault'] = undefined;
/**
 * The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iWebsiteDefault
 */
ContactinformationsRequest.prototype['iWebsiteDefault'] = undefined;
// Implement ContactinformationsRequestCompoundAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/AddressRequestCompound>} a_objAddress
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objAddress'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/PhoneRequestCompound>} a_objPhone
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objPhone'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EmailRequestCompound>} a_objEmail
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objEmail'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/WebsiteRequestCompound>} a_objWebsite
 */
ContactinformationsRequestCompoundAllOf.prototype['a_objWebsite'] = undefined;




export default ContactinformationsRequestCompound;

