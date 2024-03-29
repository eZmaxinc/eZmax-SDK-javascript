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
 * The GlobalEzmaxcustomerGetConfigurationV1Response model module.
 * @module eZmaxAPI/model/GlobalEzmaxcustomerGetConfigurationV1Response
 * @version 1.1.18
 */
class GlobalEzmaxcustomerGetConfigurationV1Response {
    /**
     * Constructs a new <code>GlobalEzmaxcustomerGetConfigurationV1Response</code>.
     * Response for GET /1/ezmaxcustomer/{pksEzmaxcustomerCode}/getConfiguration
     * @alias module:eZmaxAPI/model/GlobalEzmaxcustomerGetConfigurationV1Response
     * @param sInfrastructureregionCode {String} The region code
     * @param sInfrastructureregionCodeWeb {String} The region code
     * @param sInfrastructureenvironmenttypeDescription {String} The environment type Description
     * @param sCognitoClientIDEzmaxpublic {String} The ID of the client in Cognito
     */
    constructor(sInfrastructureregionCode, sInfrastructureregionCodeWeb, sInfrastructureenvironmenttypeDescription, sCognitoClientIDEzmaxpublic) { 
        
        GlobalEzmaxcustomerGetConfigurationV1Response.initialize(this, sInfrastructureregionCode, sInfrastructureregionCodeWeb, sInfrastructureenvironmenttypeDescription, sCognitoClientIDEzmaxpublic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sInfrastructureregionCode, sInfrastructureregionCodeWeb, sInfrastructureenvironmenttypeDescription, sCognitoClientIDEzmaxpublic) { 
        obj['sInfrastructureregionCode'] = sInfrastructureregionCode;
        obj['sInfrastructureregionCodeWeb'] = sInfrastructureregionCodeWeb;
        obj['sInfrastructureenvironmenttypeDescription'] = sInfrastructureenvironmenttypeDescription;
        obj['sCognitoClientIDEzmaxpublic'] = sCognitoClientIDEzmaxpublic;
    }

    /**
     * Constructs a <code>GlobalEzmaxcustomerGetConfigurationV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/GlobalEzmaxcustomerGetConfigurationV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/GlobalEzmaxcustomerGetConfigurationV1Response} The populated <code>GlobalEzmaxcustomerGetConfigurationV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalEzmaxcustomerGetConfigurationV1Response();

            if (data.hasOwnProperty('sInfrastructureregionCode')) {
                obj['sInfrastructureregionCode'] = ApiClient.convertToType(data['sInfrastructureregionCode'], 'String');
            }
            if (data.hasOwnProperty('sInfrastructureregionCodeWeb')) {
                obj['sInfrastructureregionCodeWeb'] = ApiClient.convertToType(data['sInfrastructureregionCodeWeb'], 'String');
            }
            if (data.hasOwnProperty('sInfrastructureenvironmenttypeDescription')) {
                obj['sInfrastructureenvironmenttypeDescription'] = ApiClient.convertToType(data['sInfrastructureenvironmenttypeDescription'], 'String');
            }
            if (data.hasOwnProperty('sCognitoClientIDExternal')) {
                obj['sCognitoClientIDExternal'] = ApiClient.convertToType(data['sCognitoClientIDExternal'], 'String');
            }
            if (data.hasOwnProperty('sCognitoClientIDEzmaxpublic')) {
                obj['sCognitoClientIDEzmaxpublic'] = ApiClient.convertToType(data['sCognitoClientIDEzmaxpublic'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalEzmaxcustomerGetConfigurationV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalEzmaxcustomerGetConfigurationV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GlobalEzmaxcustomerGetConfigurationV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sInfrastructureregionCode'] && !(typeof data['sInfrastructureregionCode'] === 'string' || data['sInfrastructureregionCode'] instanceof String)) {
            throw new Error("Expected the field `sInfrastructureregionCode` to be a primitive type in the JSON string but got " + data['sInfrastructureregionCode']);
        }
        // ensure the json data is a string
        if (data['sInfrastructureregionCodeWeb'] && !(typeof data['sInfrastructureregionCodeWeb'] === 'string' || data['sInfrastructureregionCodeWeb'] instanceof String)) {
            throw new Error("Expected the field `sInfrastructureregionCodeWeb` to be a primitive type in the JSON string but got " + data['sInfrastructureregionCodeWeb']);
        }
        // ensure the json data is a string
        if (data['sInfrastructureenvironmenttypeDescription'] && !(typeof data['sInfrastructureenvironmenttypeDescription'] === 'string' || data['sInfrastructureenvironmenttypeDescription'] instanceof String)) {
            throw new Error("Expected the field `sInfrastructureenvironmenttypeDescription` to be a primitive type in the JSON string but got " + data['sInfrastructureenvironmenttypeDescription']);
        }
        // ensure the json data is a string
        if (data['sCognitoClientIDExternal'] && !(typeof data['sCognitoClientIDExternal'] === 'string' || data['sCognitoClientIDExternal'] instanceof String)) {
            throw new Error("Expected the field `sCognitoClientIDExternal` to be a primitive type in the JSON string but got " + data['sCognitoClientIDExternal']);
        }
        // ensure the json data is a string
        if (data['sCognitoClientIDEzmaxpublic'] && !(typeof data['sCognitoClientIDEzmaxpublic'] === 'string' || data['sCognitoClientIDEzmaxpublic'] instanceof String)) {
            throw new Error("Expected the field `sCognitoClientIDEzmaxpublic` to be a primitive type in the JSON string but got " + data['sCognitoClientIDEzmaxpublic']);
        }

        return true;
    }

/**
     * Returns The region code
     * @return {String}
     */
    getSInfrastructureregionCode() {
        return this.sInfrastructureregionCode;
    }

    /**
     * Sets The region code
     * @param {String} sInfrastructureregionCode The region code
     */
    setSInfrastructureregionCode(sInfrastructureregionCode) {
        this['sInfrastructureregionCode'] = sInfrastructureregionCode;
    }
/**
     * Returns The region code
     * @return {String}
     */
    getSInfrastructureregionCodeWeb() {
        return this.sInfrastructureregionCodeWeb;
    }

    /**
     * Sets The region code
     * @param {String} sInfrastructureregionCodeWeb The region code
     */
    setSInfrastructureregionCodeWeb(sInfrastructureregionCodeWeb) {
        this['sInfrastructureregionCodeWeb'] = sInfrastructureregionCodeWeb;
    }
/**
     * Returns The environment type Description
     * @return {String}
     */
    getSInfrastructureenvironmenttypeDescription() {
        return this.sInfrastructureenvironmenttypeDescription;
    }

    /**
     * Sets The environment type Description
     * @param {String} sInfrastructureenvironmenttypeDescription The environment type Description
     */
    setSInfrastructureenvironmenttypeDescription(sInfrastructureenvironmenttypeDescription) {
        this['sInfrastructureenvironmenttypeDescription'] = sInfrastructureenvironmenttypeDescription;
    }
/**
     * Returns The ID of the client in Cognito
     * @return {String}
     */
    getSCognitoClientIDExternal() {
        return this.sCognitoClientIDExternal;
    }

    /**
     * Sets The ID of the client in Cognito
     * @param {String} sCognitoClientIDExternal The ID of the client in Cognito
     */
    setSCognitoClientIDExternal(sCognitoClientIDExternal) {
        this['sCognitoClientIDExternal'] = sCognitoClientIDExternal;
    }
/**
     * Returns The ID of the client in Cognito
     * @return {String}
     */
    getSCognitoClientIDEzmaxpublic() {
        return this.sCognitoClientIDEzmaxpublic;
    }

    /**
     * Sets The ID of the client in Cognito
     * @param {String} sCognitoClientIDEzmaxpublic The ID of the client in Cognito
     */
    setSCognitoClientIDEzmaxpublic(sCognitoClientIDEzmaxpublic) {
        this['sCognitoClientIDEzmaxpublic'] = sCognitoClientIDEzmaxpublic;
    }

}

GlobalEzmaxcustomerGetConfigurationV1Response.RequiredProperties = ["sInfrastructureregionCode", "sInfrastructureregionCodeWeb", "sInfrastructureenvironmenttypeDescription", "sCognitoClientIDEzmaxpublic"];

/**
 * The region code
 * @member {String} sInfrastructureregionCode
 */
GlobalEzmaxcustomerGetConfigurationV1Response.prototype['sInfrastructureregionCode'] = undefined;

/**
 * The region code
 * @member {String} sInfrastructureregionCodeWeb
 */
GlobalEzmaxcustomerGetConfigurationV1Response.prototype['sInfrastructureregionCodeWeb'] = undefined;

/**
 * The environment type Description
 * @member {String} sInfrastructureenvironmenttypeDescription
 */
GlobalEzmaxcustomerGetConfigurationV1Response.prototype['sInfrastructureenvironmenttypeDescription'] = undefined;

/**
 * The ID of the client in Cognito
 * @member {String} sCognitoClientIDExternal
 */
GlobalEzmaxcustomerGetConfigurationV1Response.prototype['sCognitoClientIDExternal'] = undefined;

/**
 * The ID of the client in Cognito
 * @member {String} sCognitoClientIDEzmaxpublic
 */
GlobalEzmaxcustomerGetConfigurationV1Response.prototype['sCognitoClientIDEzmaxpublic'] = undefined;






export default GlobalEzmaxcustomerGetConfigurationV1Response;

