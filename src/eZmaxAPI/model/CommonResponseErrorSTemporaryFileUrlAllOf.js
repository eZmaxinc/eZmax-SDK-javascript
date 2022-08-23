/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonResponseErrorSTemporaryFileUrlAllOf model module.
 * @module eZmaxAPI/model/CommonResponseErrorSTemporaryFileUrlAllOf
 * @version 1.1.10
 */
class CommonResponseErrorSTemporaryFileUrlAllOf {
    /**
     * Constructs a new <code>CommonResponseErrorSTemporaryFileUrlAllOf</code>.
     * @alias module:eZmaxAPI/model/CommonResponseErrorSTemporaryFileUrlAllOf
     */
    constructor() { 
        
        CommonResponseErrorSTemporaryFileUrlAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommonResponseErrorSTemporaryFileUrlAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseErrorSTemporaryFileUrlAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseErrorSTemporaryFileUrlAllOf} The populated <code>CommonResponseErrorSTemporaryFileUrlAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseErrorSTemporaryFileUrlAllOf();

            if (data.hasOwnProperty('sTemporaryFileUrl')) {
                obj['sTemporaryFileUrl'] = ApiClient.convertToType(data['sTemporaryFileUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Temporary File Url of the document that was uploaded. That url can be reused instead of uploading the file again.
     * @return {String}
     */
    getSTemporaryFileUrl() {
        return this.sTemporaryFileUrl;
    }

    /**
     * Sets The Temporary File Url of the document that was uploaded. That url can be reused instead of uploading the file again.
     * @param {String} sTemporaryFileUrl The Temporary File Url of the document that was uploaded. That url can be reused instead of uploading the file again.
     */
    setSTemporaryFileUrl(sTemporaryFileUrl) {
        this['sTemporaryFileUrl'] = sTemporaryFileUrl;
    }

}

/**
 * The Temporary File Url of the document that was uploaded. That url can be reused instead of uploading the file again.
 * @member {String} sTemporaryFileUrl
 */
CommonResponseErrorSTemporaryFileUrlAllOf.prototype['sTemporaryFileUrl'] = undefined;






export default CommonResponseErrorSTemporaryFileUrlAllOf;

