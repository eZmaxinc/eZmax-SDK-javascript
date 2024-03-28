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
import EzsigntemplatesignerResponse from './EzsigntemplatesignerResponse';

/**
 * The EzsigntemplatesignerResponseCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerResponseCompound
 * @version 1.2.0
 */
class EzsigntemplatesignerResponseCompound {
    /**
     * Constructs a new <code>EzsigntemplatesignerResponseCompound</code>.
     * A Ezsigntemplatesigner Object
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatesignerResponse
     * @param pkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatesignerDescription {String} The description of the Ezsigntemplatesigner
     */
    constructor(pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        EzsigntemplatesignerResponse.initialize(this, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription);
        EzsigntemplatesignerResponseCompound.initialize(this, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        obj['pkiEzsigntemplatesignerID'] = pkiEzsigntemplatesignerID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound} The populated <code>EzsigntemplatesignerResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerResponseCompound();
            EzsigntemplatesignerResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatesignerID')) {
                obj['pkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignerDescription')) {
                obj['sEzsigntemplatesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatesignerDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignerResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignerResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignerResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatesignerDescription'] && !(typeof data['sEzsigntemplatesignerDescription'] === 'string' || data['sEzsigntemplatesignerDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatesignerDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplatesignerDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatesignerID() {
        return this.pkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} pkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setPkiEzsigntemplatesignerID(pkiEzsigntemplatesignerID) {
        this['pkiEzsigntemplatesignerID'] = pkiEzsigntemplatesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }
/**
     * Returns The description of the Ezsigntemplatesigner
     * @return {String}
     */
    getSEzsigntemplatesignerDescription() {
        return this.sEzsigntemplatesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatesigner
     * @param {String} sEzsigntemplatesignerDescription The description of the Ezsigntemplatesigner
     */
    setSEzsigntemplatesignerDescription(sEzsigntemplatesignerDescription) {
        this['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

}

EzsigntemplatesignerResponseCompound.RequiredProperties = ["pkiEzsigntemplatesignerID", "fkiEzsigntemplateID", "sEzsigntemplatesignerDescription"];

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerResponseCompound.prototype['pkiEzsigntemplatesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatesignerResponseCompound.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The description of the Ezsigntemplatesigner
 * @member {String} sEzsigntemplatesignerDescription
 */
EzsigntemplatesignerResponseCompound.prototype['sEzsigntemplatesignerDescription'] = undefined;


// Implement EzsigntemplatesignerResponse interface:
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerResponse.prototype['pkiEzsigntemplatesignerID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatesignerResponse.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The description of the Ezsigntemplatesigner
 * @member {String} sEzsigntemplatesignerDescription
 */
EzsigntemplatesignerResponse.prototype['sEzsigntemplatesignerDescription'] = undefined;




export default EzsigntemplatesignerResponseCompound;

