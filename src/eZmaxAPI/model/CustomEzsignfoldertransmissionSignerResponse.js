/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomEzsignfoldertransmissionSignerResponse model module.
 * @module eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse
 * @version 1.1.17
 */
class CustomEzsignfoldertransmissionSignerResponse {
    /**
     * Constructs a new <code>CustomEzsignfoldertransmissionSignerResponse</code>.
     * A form Signer Object in the context of an Ezsignfoldertransmissions
     * @alias module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse
     * @param sContactFirstname {String} The First name of the contact
     * @param sContactLastname {String} The Last name of the contact
     */
    constructor(sContactFirstname, sContactLastname) { 
        
        CustomEzsignfoldertransmissionSignerResponse.initialize(this, sContactFirstname, sContactLastname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sContactFirstname, sContactLastname) { 
        obj['sContactFirstname'] = sContactFirstname;
        obj['sContactLastname'] = sContactLastname;
    }

    /**
     * Constructs a <code>CustomEzsignfoldertransmissionSignerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse} The populated <code>CustomEzsignfoldertransmissionSignerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfoldertransmissionSignerResponse();

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('sContactFirstname')) {
                obj['sContactFirstname'] = ApiClient.convertToType(data['sContactFirstname'], 'String');
            }
            if (data.hasOwnProperty('sContactLastname')) {
                obj['sContactLastname'] = ApiClient.convertToType(data['sContactLastname'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignfoldertransmissionSignerResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignfoldertransmissionSignerResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignfoldertransmissionSignerResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sContactFirstname'] && !(typeof data['sContactFirstname'] === 'string' || data['sContactFirstname'] instanceof String)) {
            throw new Error("Expected the field `sContactFirstname` to be a primitive type in the JSON string but got " + data['sContactFirstname']);
        }
        // ensure the json data is a string
        if (data['sContactLastname'] && !(typeof data['sContactLastname'] === 'string' || data['sContactLastname'] instanceof String)) {
            throw new Error("Expected the field `sContactLastname` to be a primitive type in the JSON string but got " + data['sContactLastname']);
        }

        return true;
    }

/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
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

}

CustomEzsignfoldertransmissionSignerResponse.RequiredProperties = ["sContactFirstname", "sContactLastname"];

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
CustomEzsignfoldertransmissionSignerResponse.prototype['fkiUserID'] = undefined;

/**
 * The First name of the contact
 * @member {String} sContactFirstname
 */
CustomEzsignfoldertransmissionSignerResponse.prototype['sContactFirstname'] = undefined;

/**
 * The Last name of the contact
 * @member {String} sContactLastname
 */
CustomEzsignfoldertransmissionSignerResponse.prototype['sContactLastname'] = undefined;






export default CustomEzsignfoldertransmissionSignerResponse;

