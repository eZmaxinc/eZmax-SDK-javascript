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
import CorsResponse from './CorsResponse';

/**
 * The CorsResponseCompound model module.
 * @module eZmaxAPI/model/CorsResponseCompound
 * @version 1.2.0
 */
class CorsResponseCompound {
    /**
     * Constructs a new <code>CorsResponseCompound</code>.
     * A Cors Object
     * @alias module:eZmaxAPI/model/CorsResponseCompound
     * @implements module:eZmaxAPI/model/CorsResponse
     * @param pkiCorsID {Number} The unique ID of the Cors
     * @param fkiApikeyID {Number} The unique ID of the Apikey
     * @param sCorsEntryurl {String} The entryurl of the Cors
     */
    constructor(pkiCorsID, fkiApikeyID, sCorsEntryurl) { 
        CorsResponse.initialize(this, pkiCorsID, fkiApikeyID, sCorsEntryurl);
        CorsResponseCompound.initialize(this, pkiCorsID, fkiApikeyID, sCorsEntryurl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCorsID, fkiApikeyID, sCorsEntryurl) { 
        obj['pkiCorsID'] = pkiCorsID;
        obj['fkiApikeyID'] = fkiApikeyID;
        obj['sCorsEntryurl'] = sCorsEntryurl;
    }

    /**
     * Constructs a <code>CorsResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CorsResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CorsResponseCompound} The populated <code>CorsResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CorsResponseCompound();
            CorsResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiCorsID')) {
                obj['pkiCorsID'] = ApiClient.convertToType(data['pkiCorsID'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyID')) {
                obj['fkiApikeyID'] = ApiClient.convertToType(data['fkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('sCorsEntryurl')) {
                obj['sCorsEntryurl'] = ApiClient.convertToType(data['sCorsEntryurl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CorsResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CorsResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CorsResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCorsEntryurl'] && !(typeof data['sCorsEntryurl'] === 'string' || data['sCorsEntryurl'] instanceof String)) {
            throw new Error("Expected the field `sCorsEntryurl` to be a primitive type in the JSON string but got " + data['sCorsEntryurl']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Cors
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiCorsID() {
        return this.pkiCorsID;
    }

    /**
     * Sets The unique ID of the Cors
     * @param {Number} pkiCorsID The unique ID of the Cors
     */
    setPkiCorsID(pkiCorsID) {
        this['pkiCorsID'] = pkiCorsID;
    }
/**
     * Returns The unique ID of the Apikey
     * minimum: 0
     * @return {Number}
     */
    getFkiApikeyID() {
        return this.fkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyID The unique ID of the Apikey
     */
    setFkiApikeyID(fkiApikeyID) {
        this['fkiApikeyID'] = fkiApikeyID;
    }
/**
     * Returns The entryurl of the Cors
     * @return {String}
     */
    getSCorsEntryurl() {
        return this.sCorsEntryurl;
    }

    /**
     * Sets The entryurl of the Cors
     * @param {String} sCorsEntryurl The entryurl of the Cors
     */
    setSCorsEntryurl(sCorsEntryurl) {
        this['sCorsEntryurl'] = sCorsEntryurl;
    }

}

CorsResponseCompound.RequiredProperties = ["pkiCorsID", "fkiApikeyID", "sCorsEntryurl"];

/**
 * The unique ID of the Cors
 * @member {Number} pkiCorsID
 */
CorsResponseCompound.prototype['pkiCorsID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
CorsResponseCompound.prototype['fkiApikeyID'] = undefined;

/**
 * The entryurl of the Cors
 * @member {String} sCorsEntryurl
 */
CorsResponseCompound.prototype['sCorsEntryurl'] = undefined;


// Implement CorsResponse interface:
/**
 * The unique ID of the Cors
 * @member {Number} pkiCorsID
 */
CorsResponse.prototype['pkiCorsID'] = undefined;
/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
CorsResponse.prototype['fkiApikeyID'] = undefined;
/**
 * The entryurl of the Cors
 * @member {String} sCorsEntryurl
 */
CorsResponse.prototype['sCorsEntryurl'] = undefined;




export default CorsResponseCompound;
