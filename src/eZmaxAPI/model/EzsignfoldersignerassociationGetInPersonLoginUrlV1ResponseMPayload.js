/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
 * @version 1.1.13
 */
class EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfoldersignerassociation/getInPersonLoginUrl
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
     * @param sLoginUrl {String} The Url to login to the signing application.    Url will expire after 30 minutes.  
     */
    constructor(sLoginUrl) { 
        
        EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload.initialize(this, sLoginUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sLoginUrl) { 
        obj['sLoginUrl'] = sLoginUrl;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload} The populated <code>EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload();

            if (data.hasOwnProperty('sLoginUrl')) {
                obj['sLoginUrl'] = ApiClient.convertToType(data['sLoginUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Url to login to the signing application.    Url will expire after 30 minutes.  
     * @return {String}
     */
    getSLoginUrl() {
        return this.sLoginUrl;
    }

    /**
     * Sets The Url to login to the signing application.    Url will expire after 30 minutes.  
     * @param {String} sLoginUrl The Url to login to the signing application.    Url will expire after 30 minutes.  
     */
    setSLoginUrl(sLoginUrl) {
        this['sLoginUrl'] = sLoginUrl;
    }

}

/**
 * The Url to login to the signing application.    Url will expire after 30 minutes.  
 * @member {String} sLoginUrl
 */
EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload.prototype['sLoginUrl'] = undefined;






export default EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload;

