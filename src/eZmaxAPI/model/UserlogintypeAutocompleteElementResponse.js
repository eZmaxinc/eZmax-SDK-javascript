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
 * The UserlogintypeAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/UserlogintypeAutocompleteElementResponse
 * @version 1.2.0
 */
class UserlogintypeAutocompleteElementResponse {
    /**
     * Constructs a new <code>UserlogintypeAutocompleteElementResponse</code>.
     * A Userlogintype AutocompleteElement Response
     * @alias module:eZmaxAPI/model/UserlogintypeAutocompleteElementResponse
     * @param pkiUserlogintypeID {Number} The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * @param sUserlogintypeDescriptionX {String} The description of the Userlogintype in the language of the requester
     * @param bUserlogintypeIsactive {Boolean} Whether the Userlogintype is active or not
     */
    constructor(pkiUserlogintypeID, sUserlogintypeDescriptionX, bUserlogintypeIsactive) { 
        
        UserlogintypeAutocompleteElementResponse.initialize(this, pkiUserlogintypeID, sUserlogintypeDescriptionX, bUserlogintypeIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserlogintypeID, sUserlogintypeDescriptionX, bUserlogintypeIsactive) { 
        obj['pkiUserlogintypeID'] = pkiUserlogintypeID;
        obj['sUserlogintypeDescriptionX'] = sUserlogintypeDescriptionX;
        obj['bUserlogintypeIsactive'] = bUserlogintypeIsactive;
    }

    /**
     * Constructs a <code>UserlogintypeAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserlogintypeAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserlogintypeAutocompleteElementResponse} The populated <code>UserlogintypeAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserlogintypeAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiUserlogintypeID')) {
                obj['pkiUserlogintypeID'] = ApiClient.convertToType(data['pkiUserlogintypeID'], 'Number');
            }
            if (data.hasOwnProperty('sUserlogintypeDescriptionX')) {
                obj['sUserlogintypeDescriptionX'] = ApiClient.convertToType(data['sUserlogintypeDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('bUserlogintypeIsactive')) {
                obj['bUserlogintypeIsactive'] = ApiClient.convertToType(data['bUserlogintypeIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserlogintypeAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserlogintypeAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserlogintypeAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sUserlogintypeDescriptionX'] && !(typeof data['sUserlogintypeDescriptionX'] === 'string' || data['sUserlogintypeDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sUserlogintypeDescriptionX` to be a primitive type in the JSON string but got " + data['sUserlogintypeDescriptionX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * minimum: 0
     * @return {Number}
     */
    getPkiUserlogintypeID() {
        return this.pkiUserlogintypeID;
    }

    /**
     * Sets The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * @param {Number} pkiUserlogintypeID The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     */
    setPkiUserlogintypeID(pkiUserlogintypeID) {
        this['pkiUserlogintypeID'] = pkiUserlogintypeID;
    }
/**
     * Returns The description of the Userlogintype in the language of the requester
     * @return {String}
     */
    getSUserlogintypeDescriptionX() {
        return this.sUserlogintypeDescriptionX;
    }

    /**
     * Sets The description of the Userlogintype in the language of the requester
     * @param {String} sUserlogintypeDescriptionX The description of the Userlogintype in the language of the requester
     */
    setSUserlogintypeDescriptionX(sUserlogintypeDescriptionX) {
        this['sUserlogintypeDescriptionX'] = sUserlogintypeDescriptionX;
    }
/**
     * Returns Whether the Userlogintype is active or not
     * @return {Boolean}
     */
    getBUserlogintypeIsactive() {
        return this.bUserlogintypeIsactive;
    }

    /**
     * Sets Whether the Userlogintype is active or not
     * @param {Boolean} bUserlogintypeIsactive Whether the Userlogintype is active or not
     */
    setBUserlogintypeIsactive(bUserlogintypeIsactive) {
        this['bUserlogintypeIsactive'] = bUserlogintypeIsactive;
    }

}

UserlogintypeAutocompleteElementResponse.RequiredProperties = ["pkiUserlogintypeID", "sUserlogintypeDescriptionX", "bUserlogintypeIsactive"];

/**
 * The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
 * @member {Number} pkiUserlogintypeID
 */
UserlogintypeAutocompleteElementResponse.prototype['pkiUserlogintypeID'] = undefined;

/**
 * The description of the Userlogintype in the language of the requester
 * @member {String} sUserlogintypeDescriptionX
 */
UserlogintypeAutocompleteElementResponse.prototype['sUserlogintypeDescriptionX'] = undefined;

/**
 * Whether the Userlogintype is active or not
 * @member {Boolean} bUserlogintypeIsactive
 */
UserlogintypeAutocompleteElementResponse.prototype['bUserlogintypeIsactive'] = undefined;






export default UserlogintypeAutocompleteElementResponse;
