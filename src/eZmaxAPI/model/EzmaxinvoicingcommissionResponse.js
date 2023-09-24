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
 * The EzmaxinvoicingcommissionResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingcommissionResponse
 * @version 1.2.0
 */
class EzmaxinvoicingcommissionResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingcommissionResponse</code>.
     * A Ezmaxinvoicingcommission Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingcommissionResponse
     * @param dtEzmaxinvoicingcommissionStart {String} The start date for the Ezmaxinvoicingcommission
     * @param dtEzmaxinvoicingcommissionEnd {String} The end date for the Ezmaxinvoicingcommission
     * @param iEzmaxinvoicingcommissionDays {Number} This is the number of days during the month on which the Ezmaxinvoigcommission applies
     * @param dEzmaxinvoicingcommissionAmount {String} The amount of Ezmaxinvoicingcommission
     */
    constructor(dtEzmaxinvoicingcommissionStart, dtEzmaxinvoicingcommissionEnd, iEzmaxinvoicingcommissionDays, dEzmaxinvoicingcommissionAmount) { 
        
        EzmaxinvoicingcommissionResponse.initialize(this, dtEzmaxinvoicingcommissionStart, dtEzmaxinvoicingcommissionEnd, iEzmaxinvoicingcommissionDays, dEzmaxinvoicingcommissionAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dtEzmaxinvoicingcommissionStart, dtEzmaxinvoicingcommissionEnd, iEzmaxinvoicingcommissionDays, dEzmaxinvoicingcommissionAmount) { 
        obj['dtEzmaxinvoicingcommissionStart'] = dtEzmaxinvoicingcommissionStart;
        obj['dtEzmaxinvoicingcommissionEnd'] = dtEzmaxinvoicingcommissionEnd;
        obj['iEzmaxinvoicingcommissionDays'] = iEzmaxinvoicingcommissionDays;
        obj['dEzmaxinvoicingcommissionAmount'] = dEzmaxinvoicingcommissionAmount;
    }

    /**
     * Constructs a <code>EzmaxinvoicingcommissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingcommissionResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingcommissionResponse} The populated <code>EzmaxinvoicingcommissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingcommissionResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicingcommissionID')) {
                obj['pkiEzmaxinvoicingcommissionID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingcommissionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingsummaryglobalID')) {
                obj['fkiEzmaxinvoicingsummaryglobalID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingsummaryglobalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxpartnerID')) {
                obj['fkiEzmaxpartnerID'] = ApiClient.convertToType(data['fkiEzmaxpartnerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxrepresentativeID')) {
                obj['fkiEzmaxrepresentativeID'] = ApiClient.convertToType(data['fkiEzmaxrepresentativeID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzmaxinvoicingcommissionStart')) {
                obj['dtEzmaxinvoicingcommissionStart'] = ApiClient.convertToType(data['dtEzmaxinvoicingcommissionStart'], 'String');
            }
            if (data.hasOwnProperty('dtEzmaxinvoicingcommissionEnd')) {
                obj['dtEzmaxinvoicingcommissionEnd'] = ApiClient.convertToType(data['dtEzmaxinvoicingcommissionEnd'], 'String');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingcommissionDays')) {
                obj['iEzmaxinvoicingcommissionDays'] = ApiClient.convertToType(data['iEzmaxinvoicingcommissionDays'], 'Number');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingcommissionAmount')) {
                obj['dEzmaxinvoicingcommissionAmount'] = ApiClient.convertToType(data['dEzmaxinvoicingcommissionAmount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingcommissionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingcommissionResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingcommissionResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dtEzmaxinvoicingcommissionStart'] && !(typeof data['dtEzmaxinvoicingcommissionStart'] === 'string' || data['dtEzmaxinvoicingcommissionStart'] instanceof String)) {
            throw new Error("Expected the field `dtEzmaxinvoicingcommissionStart` to be a primitive type in the JSON string but got " + data['dtEzmaxinvoicingcommissionStart']);
        }
        // ensure the json data is a string
        if (data['dtEzmaxinvoicingcommissionEnd'] && !(typeof data['dtEzmaxinvoicingcommissionEnd'] === 'string' || data['dtEzmaxinvoicingcommissionEnd'] instanceof String)) {
            throw new Error("Expected the field `dtEzmaxinvoicingcommissionEnd` to be a primitive type in the JSON string but got " + data['dtEzmaxinvoicingcommissionEnd']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingcommissionAmount'] && !(typeof data['dEzmaxinvoicingcommissionAmount'] === 'string' || data['dEzmaxinvoicingcommissionAmount'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingcommissionAmount` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingcommissionAmount']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingcommission
     * @return {Number}
     */
    getPkiEzmaxinvoicingcommissionID() {
        return this.pkiEzmaxinvoicingcommissionID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingcommission
     * @param {Number} pkiEzmaxinvoicingcommissionID The unique ID of the Ezmaxinvoicingcommission
     */
    setPkiEzmaxinvoicingcommissionID(pkiEzmaxinvoicingcommissionID) {
        this['pkiEzmaxinvoicingcommissionID'] = pkiEzmaxinvoicingcommissionID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryglobal
     * minimum: 0
     * @return {Number}
     */
    getFkiEzmaxinvoicingsummaryglobalID() {
        return this.fkiEzmaxinvoicingsummaryglobalID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryglobal
     * @param {Number} fkiEzmaxinvoicingsummaryglobalID The unique ID of the Ezmaxinvoicingsummaryglobal
     */
    setFkiEzmaxinvoicingsummaryglobalID(fkiEzmaxinvoicingsummaryglobalID) {
        this['fkiEzmaxinvoicingsummaryglobalID'] = fkiEzmaxinvoicingsummaryglobalID;
    }
/**
     * Returns The unique ID of the Ezmaxpartner
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxpartnerID() {
        return this.fkiEzmaxpartnerID;
    }

    /**
     * Sets The unique ID of the Ezmaxpartner
     * @param {Number} fkiEzmaxpartnerID The unique ID of the Ezmaxpartner
     */
    setFkiEzmaxpartnerID(fkiEzmaxpartnerID) {
        this['fkiEzmaxpartnerID'] = fkiEzmaxpartnerID;
    }
/**
     * Returns The unique ID of the Ezmaxrepresentative
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxrepresentativeID() {
        return this.fkiEzmaxrepresentativeID;
    }

    /**
     * Sets The unique ID of the Ezmaxrepresentative
     * @param {Number} fkiEzmaxrepresentativeID The unique ID of the Ezmaxrepresentative
     */
    setFkiEzmaxrepresentativeID(fkiEzmaxrepresentativeID) {
        this['fkiEzmaxrepresentativeID'] = fkiEzmaxrepresentativeID;
    }
/**
     * Returns The start date for the Ezmaxinvoicingcommission
     * @return {String}
     */
    getDtEzmaxinvoicingcommissionStart() {
        return this.dtEzmaxinvoicingcommissionStart;
    }

    /**
     * Sets The start date for the Ezmaxinvoicingcommission
     * @param {String} dtEzmaxinvoicingcommissionStart The start date for the Ezmaxinvoicingcommission
     */
    setDtEzmaxinvoicingcommissionStart(dtEzmaxinvoicingcommissionStart) {
        this['dtEzmaxinvoicingcommissionStart'] = dtEzmaxinvoicingcommissionStart;
    }
/**
     * Returns The end date for the Ezmaxinvoicingcommission
     * @return {String}
     */
    getDtEzmaxinvoicingcommissionEnd() {
        return this.dtEzmaxinvoicingcommissionEnd;
    }

    /**
     * Sets The end date for the Ezmaxinvoicingcommission
     * @param {String} dtEzmaxinvoicingcommissionEnd The end date for the Ezmaxinvoicingcommission
     */
    setDtEzmaxinvoicingcommissionEnd(dtEzmaxinvoicingcommissionEnd) {
        this['dtEzmaxinvoicingcommissionEnd'] = dtEzmaxinvoicingcommissionEnd;
    }
/**
     * Returns This is the number of days during the month on which the Ezmaxinvoigcommission applies
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingcommissionDays() {
        return this.iEzmaxinvoicingcommissionDays;
    }

    /**
     * Sets This is the number of days during the month on which the Ezmaxinvoigcommission applies
     * @param {Number} iEzmaxinvoicingcommissionDays This is the number of days during the month on which the Ezmaxinvoigcommission applies
     */
    setIEzmaxinvoicingcommissionDays(iEzmaxinvoicingcommissionDays) {
        this['iEzmaxinvoicingcommissionDays'] = iEzmaxinvoicingcommissionDays;
    }
/**
     * Returns The amount of Ezmaxinvoicingcommission
     * @return {String}
     */
    getDEzmaxinvoicingcommissionAmount() {
        return this.dEzmaxinvoicingcommissionAmount;
    }

    /**
     * Sets The amount of Ezmaxinvoicingcommission
     * @param {String} dEzmaxinvoicingcommissionAmount The amount of Ezmaxinvoicingcommission
     */
    setDEzmaxinvoicingcommissionAmount(dEzmaxinvoicingcommissionAmount) {
        this['dEzmaxinvoicingcommissionAmount'] = dEzmaxinvoicingcommissionAmount;
    }

}

EzmaxinvoicingcommissionResponse.RequiredProperties = ["dtEzmaxinvoicingcommissionStart", "dtEzmaxinvoicingcommissionEnd", "iEzmaxinvoicingcommissionDays", "dEzmaxinvoicingcommissionAmount"];

/**
 * The unique ID of the Ezmaxinvoicingcommission
 * @member {Number} pkiEzmaxinvoicingcommissionID
 */
EzmaxinvoicingcommissionResponse.prototype['pkiEzmaxinvoicingcommissionID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicingsummaryglobal
 * @member {Number} fkiEzmaxinvoicingsummaryglobalID
 */
EzmaxinvoicingcommissionResponse.prototype['fkiEzmaxinvoicingsummaryglobalID'] = undefined;

/**
 * The unique ID of the Ezmaxpartner
 * @member {Number} fkiEzmaxpartnerID
 */
EzmaxinvoicingcommissionResponse.prototype['fkiEzmaxpartnerID'] = undefined;

/**
 * The unique ID of the Ezmaxrepresentative
 * @member {Number} fkiEzmaxrepresentativeID
 */
EzmaxinvoicingcommissionResponse.prototype['fkiEzmaxrepresentativeID'] = undefined;

/**
 * The start date for the Ezmaxinvoicingcommission
 * @member {String} dtEzmaxinvoicingcommissionStart
 */
EzmaxinvoicingcommissionResponse.prototype['dtEzmaxinvoicingcommissionStart'] = undefined;

/**
 * The end date for the Ezmaxinvoicingcommission
 * @member {String} dtEzmaxinvoicingcommissionEnd
 */
EzmaxinvoicingcommissionResponse.prototype['dtEzmaxinvoicingcommissionEnd'] = undefined;

/**
 * This is the number of days during the month on which the Ezmaxinvoigcommission applies
 * @member {Number} iEzmaxinvoicingcommissionDays
 */
EzmaxinvoicingcommissionResponse.prototype['iEzmaxinvoicingcommissionDays'] = undefined;

/**
 * The amount of Ezmaxinvoicingcommission
 * @member {String} dEzmaxinvoicingcommissionAmount
 */
EzmaxinvoicingcommissionResponse.prototype['dEzmaxinvoicingcommissionAmount'] = undefined;






export default EzmaxinvoicingcommissionResponse;

