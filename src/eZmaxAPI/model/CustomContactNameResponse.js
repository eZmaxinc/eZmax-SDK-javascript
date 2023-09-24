/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomContactNameResponse model module.
 * @module eZmaxAPI/model/CustomContactNameResponse
 * @version 1.2.0
 */
class CustomContactNameResponse {
    /**
     * Constructs a new <code>CustomContactNameResponse</code>.
     * A Custom ContactName Object
     * @alias module:eZmaxAPI/model/CustomContactNameResponse
     */
    constructor() { 
        
        CustomContactNameResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomContactNameResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomContactNameResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomContactNameResponse} The populated <code>CustomContactNameResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomContactNameResponse();

            if (data.hasOwnProperty('sContactFirstname')) {
                obj['sContactFirstname'] = ApiClient.convertToType(data['sContactFirstname'], 'String');
            }
            if (data.hasOwnProperty('sContactLastname')) {
                obj['sContactLastname'] = ApiClient.convertToType(data['sContactLastname'], 'String');
            }
            if (data.hasOwnProperty('sContactCompany')) {
                obj['sContactCompany'] = ApiClient.convertToType(data['sContactCompany'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomContactNameResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomContactNameResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sContactFirstname'] && !(typeof data['sContactFirstname'] === 'string' || data['sContactFirstname'] instanceof String)) {
            throw new Error("Expected the field `sContactFirstname` to be a primitive type in the JSON string but got " + data['sContactFirstname']);
        }
        // ensure the json data is a string
        if (data['sContactLastname'] && !(typeof data['sContactLastname'] === 'string' || data['sContactLastname'] instanceof String)) {
            throw new Error("Expected the field `sContactLastname` to be a primitive type in the JSON string but got " + data['sContactLastname']);
        }
        // ensure the json data is a string
        if (data['sContactCompany'] && !(typeof data['sContactCompany'] === 'string' || data['sContactCompany'] instanceof String)) {
            throw new Error("Expected the field `sContactCompany` to be a primitive type in the JSON string but got " + data['sContactCompany']);
        }

        return true;
    }

/**
     * Returns The First name of the contact
     * @return {String}
     */
    getSContactFirstname() {
        return this.sContactFirstname;
    }

    /**
     * Sets The First name of the contact
     * @param {String} sContactFirstname The First name of the contact
     */
    setSContactFirstname(sContactFirstname) {
        this['sContactFirstname'] = sContactFirstname;
    }
/**
     * Returns The Last name of the contact
     * @return {String}
     */
    getSContactLastname() {
        return this.sContactLastname;
    }

    /**
     * Sets The Last name of the contact
     * @param {String} sContactLastname The Last name of the contact
     */
    setSContactLastname(sContactLastname) {
        this['sContactLastname'] = sContactLastname;
    }
/**
     * Returns The Company name of the contact
     * @return {String}
     */
    getSContactCompany() {
        return this.sContactCompany;
    }

    /**
     * Sets The Company name of the contact
     * @param {String} sContactCompany The Company name of the contact
     */
    setSContactCompany(sContactCompany) {
        this['sContactCompany'] = sContactCompany;
    }

}



/**
 * The First name of the contact
 * @member {String} sContactFirstname
 */
CustomContactNameResponse.prototype['sContactFirstname'] = undefined;

/**
 * The Last name of the contact
 * @member {String} sContactLastname
 */
CustomContactNameResponse.prototype['sContactLastname'] = undefined;

/**
 * The Company name of the contact
 * @member {String} sContactCompany
 */
CustomContactNameResponse.prototype['sContactCompany'] = undefined;






export default CustomContactNameResponse;

