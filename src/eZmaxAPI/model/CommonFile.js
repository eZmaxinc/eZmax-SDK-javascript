/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonFile model module.
 * @module eZmaxAPI/model/CommonFile
 * @version 1.1.18
 */
class CommonFile {
    /**
     * Constructs a new <code>CommonFile</code>.
     * Object representing a file used in a request or response context 
     * @alias module:eZmaxAPI/model/CommonFile
     * @param sFileName {String} The name of the file
     * @param eFileSource {module:eZmaxAPI/model/CommonFile.EFileSourceEnum} The source of the File
     */
    constructor(sFileName, eFileSource) { 
        
        CommonFile.initialize(this, sFileName, eFileSource);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sFileName, eFileSource) { 
        obj['sFileName'] = sFileName;
        obj['eFileSource'] = eFileSource;
    }

    /**
     * Constructs a <code>CommonFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonFile} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonFile} The populated <code>CommonFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonFile();

            if (data.hasOwnProperty('sFileName')) {
                obj['sFileName'] = ApiClient.convertToType(data['sFileName'], 'String');
            }
            if (data.hasOwnProperty('sFileUrl')) {
                obj['sFileUrl'] = ApiClient.convertToType(data['sFileUrl'], 'String');
            }
            if (data.hasOwnProperty('sFileBase64')) {
                obj['sFileBase64'] = ApiClient.convertToType(data['sFileBase64'], 'Blob');
            }
            if (data.hasOwnProperty('eFileSource')) {
                obj['eFileSource'] = ApiClient.convertToType(data['eFileSource'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonFile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonFile.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sFileName'] && !(typeof data['sFileName'] === 'string' || data['sFileName'] instanceof String)) {
            throw new Error("Expected the field `sFileName` to be a primitive type in the JSON string but got " + data['sFileName']);
        }
        // ensure the json data is a string
        if (data['sFileUrl'] && !(typeof data['sFileUrl'] === 'string' || data['sFileUrl'] instanceof String)) {
            throw new Error("Expected the field `sFileUrl` to be a primitive type in the JSON string but got " + data['sFileUrl']);
        }
        // ensure the json data is a string
        if (data['eFileSource'] && !(typeof data['eFileSource'] === 'string' || data['eFileSource'] instanceof String)) {
            throw new Error("Expected the field `eFileSource` to be a primitive type in the JSON string but got " + data['eFileSource']);
        }

        return true;
    }

/**
     * Returns The name of the file
     * @return {String}
     */
    getSFileName() {
        return this.sFileName;
    }

    /**
     * Sets The name of the file
     * @param {String} sFileName The name of the file
     */
    setSFileName(sFileName) {
        this['sFileName'] = sFileName;
    }
/**
     * Returns The URL used to reach the File
     * @return {String}
     */
    getSFileUrl() {
        return this.sFileUrl;
    }

    /**
     * Sets The URL used to reach the File
     * @param {String} sFileUrl The URL used to reach the File
     */
    setSFileUrl(sFileUrl) {
        this['sFileUrl'] = sFileUrl;
    }
/**
     * Returns The Base64 encoded binary content of the File
     * @return {Blob}
     */
    getSFileBase64() {
        return this.sFileBase64;
    }

    /**
     * Sets The Base64 encoded binary content of the File
     * @param {Blob} sFileBase64 The Base64 encoded binary content of the File
     */
    setSFileBase64(sFileBase64) {
        this['sFileBase64'] = sFileBase64;
    }
/**
     * Returns The source of the File
     * @return {module:eZmaxAPI/model/CommonFile.EFileSourceEnum}
     */
    getEFileSource() {
        return this.eFileSource;
    }

    /**
     * Sets The source of the File
     * @param {module:eZmaxAPI/model/CommonFile.EFileSourceEnum} eFileSource The source of the File
     */
    setEFileSource(eFileSource) {
        this['eFileSource'] = eFileSource;
    }

}

CommonFile.RequiredProperties = ["sFileName", "eFileSource"];

/**
 * The name of the file
 * @member {String} sFileName
 */
CommonFile.prototype['sFileName'] = undefined;

/**
 * The URL used to reach the File
 * @member {String} sFileUrl
 */
CommonFile.prototype['sFileUrl'] = undefined;

/**
 * The Base64 encoded binary content of the File
 * @member {Blob} sFileBase64
 */
CommonFile.prototype['sFileBase64'] = undefined;

/**
 * The source of the File
 * @member {module:eZmaxAPI/model/CommonFile.EFileSourceEnum} eFileSource
 */
CommonFile.prototype['eFileSource'] = undefined;





/**
 * Allowed values for the <code>eFileSource</code> property.
 * @enum {String}
 * @readonly
 */
CommonFile['EFileSourceEnum'] = {

    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64",

    /**
     * value: "Url"
     * @const
     */
    "Url": "Url"
};



export default CommonFile;
