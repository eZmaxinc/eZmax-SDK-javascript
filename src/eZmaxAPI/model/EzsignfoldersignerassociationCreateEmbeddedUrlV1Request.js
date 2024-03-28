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
 * The EzsignfoldersignerassociationCreateEmbeddedUrlV1Request model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Request
 * @version 1.2.0
 */
class EzsignfoldersignerassociationCreateEmbeddedUrlV1Request {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Request</code>.
     * Request for POST /1/object/ezsignfoldersignerassociation/createEmbeddedUrl
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Request
     */
    constructor() { 
        
        EzsignfoldersignerassociationCreateEmbeddedUrlV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Request} The populated <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateEmbeddedUrlV1Request();

            if (data.hasOwnProperty('sReturnUrl')) {
                obj['sReturnUrl'] = ApiClient.convertToType(data['sReturnUrl'], 'String');
            }
            if (data.hasOwnProperty('sIframedomain')) {
                obj['sIframedomain'] = ApiClient.convertToType(data['sIframedomain'], 'String');
            }
            if (data.hasOwnProperty('bIsiframe')) {
                obj['bIsiframe'] = ApiClient.convertToType(data['bIsiframe'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Request</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sReturnUrl'] && !(typeof data['sReturnUrl'] === 'string' || data['sReturnUrl'] instanceof String)) {
            throw new Error("Expected the field `sReturnUrl` to be a primitive type in the JSON string but got " + data['sReturnUrl']);
        }
        // ensure the json data is a string
        if (data['sIframedomain'] && !(typeof data['sIframedomain'] === 'string' || data['sIframedomain'] instanceof String)) {
            throw new Error("Expected the field `sIframedomain` to be a primitive type in the JSON string but got " + data['sIframedomain']);
        }

        return true;
    }

/**
     * Returns The return Url to redirect after the signing is completed
     * @return {String}
     */
    getSReturnUrl() {
        return this.sReturnUrl;
    }

    /**
     * Sets The return Url to redirect after the signing is completed
     * @param {String} sReturnUrl The return Url to redirect after the signing is completed
     */
    setSReturnUrl(sReturnUrl) {
        this['sReturnUrl'] = sReturnUrl;
    }
/**
     * Returns Domain protection for the iFrame
     * @return {String}
     */
    getSIframedomain() {
        return this.sIframedomain;
    }

    /**
     * Sets Domain protection for the iFrame
     * @param {String} sIframedomain Domain protection for the iFrame
     */
    setSIframedomain(sIframedomain) {
        this['sIframedomain'] = sIframedomain;
    }
/**
     * Returns Whether the url would be in an iFrame or not
     * @return {Boolean}
     */
    getBIsiframe() {
        return this.bIsiframe;
    }

    /**
     * Sets Whether the url would be in an iFrame or not
     * @param {Boolean} bIsiframe Whether the url would be in an iFrame or not
     */
    setBIsiframe(bIsiframe) {
        this['bIsiframe'] = bIsiframe;
    }

}



/**
 * The return Url to redirect after the signing is completed
 * @member {String} sReturnUrl
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Request.prototype['sReturnUrl'] = undefined;

/**
 * Domain protection for the iFrame
 * @member {String} sIframedomain
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Request.prototype['sIframedomain'] = undefined;

/**
 * Whether the url would be in an iFrame or not
 * @member {Boolean} bIsiframe
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Request.prototype['bIsiframe'] = undefined;






export default EzsignfoldersignerassociationCreateEmbeddedUrlV1Request;
