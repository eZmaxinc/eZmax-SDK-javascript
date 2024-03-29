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
import FieldEEzsigndocumentlogType from './FieldEEzsigndocumentlogType';

/**
 * The EzsigndocumentlogResponse model module.
 * @module eZmaxAPI/model/EzsigndocumentlogResponse
 * @version 1.1.18
 */
class EzsigndocumentlogResponse {
    /**
     * Constructs a new <code>EzsigndocumentlogResponse</code>.
     * An Ezsigndocumentlog Object
     * @alias module:eZmaxAPI/model/EzsigndocumentlogResponse
     * @param dtEzsigndocumentlogDatetime {String} The date and time at which the event was logged
     * @param eEzsigndocumentlogType {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} 
     * @param sEzsigndocumentlogDetail {String} The detail of the Ezsigndocumentlog
     * @param sEzsigndocumentlogLastname {String} The last name of the User or Ezsignsigner
     * @param sEzsigndocumentlogFirstname {String} The first name of the User or Ezsignsigner
     * @param sEzsigndocumentlogIP {String} Represent an IP address.
     */
    constructor(dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP) { 
        
        EzsigndocumentlogResponse.initialize(this, dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP) { 
        obj['dtEzsigndocumentlogDatetime'] = dtEzsigndocumentlogDatetime;
        obj['eEzsigndocumentlogType'] = eEzsigndocumentlogType;
        obj['sEzsigndocumentlogDetail'] = sEzsigndocumentlogDetail;
        obj['sEzsigndocumentlogLastname'] = sEzsigndocumentlogLastname;
        obj['sEzsigndocumentlogFirstname'] = sEzsigndocumentlogFirstname;
        obj['sEzsigndocumentlogIP'] = sEzsigndocumentlogIP;
    }

    /**
     * Constructs a <code>EzsigndocumentlogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentlogResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentlogResponse} The populated <code>EzsigndocumentlogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentlogResponse();

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignsignerID')) {
                obj['fkiEzsignsignerID'] = ApiClient.convertToType(data['fkiEzsignsignerID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzsigndocumentlogDatetime')) {
                obj['dtEzsigndocumentlogDatetime'] = ApiClient.convertToType(data['dtEzsigndocumentlogDatetime'], 'String');
            }
            if (data.hasOwnProperty('eEzsigndocumentlogType')) {
                obj['eEzsigndocumentlogType'] = FieldEEzsigndocumentlogType.constructFromObject(data['eEzsigndocumentlogType']);
            }
            if (data.hasOwnProperty('sEzsigndocumentlogDetail')) {
                obj['sEzsigndocumentlogDetail'] = ApiClient.convertToType(data['sEzsigndocumentlogDetail'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentlogLastname')) {
                obj['sEzsigndocumentlogLastname'] = ApiClient.convertToType(data['sEzsigndocumentlogLastname'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentlogFirstname')) {
                obj['sEzsigndocumentlogFirstname'] = ApiClient.convertToType(data['sEzsigndocumentlogFirstname'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentlogIP')) {
                obj['sEzsigndocumentlogIP'] = ApiClient.convertToType(data['sEzsigndocumentlogIP'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentlogResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentlogResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentlogResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dtEzsigndocumentlogDatetime'] && !(typeof data['dtEzsigndocumentlogDatetime'] === 'string' || data['dtEzsigndocumentlogDatetime'] instanceof String)) {
            throw new Error("Expected the field `dtEzsigndocumentlogDatetime` to be a primitive type in the JSON string but got " + data['dtEzsigndocumentlogDatetime']);
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentlogDetail'] && !(typeof data['sEzsigndocumentlogDetail'] === 'string' || data['sEzsigndocumentlogDetail'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentlogDetail` to be a primitive type in the JSON string but got " + data['sEzsigndocumentlogDetail']);
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentlogLastname'] && !(typeof data['sEzsigndocumentlogLastname'] === 'string' || data['sEzsigndocumentlogLastname'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentlogLastname` to be a primitive type in the JSON string but got " + data['sEzsigndocumentlogLastname']);
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentlogFirstname'] && !(typeof data['sEzsigndocumentlogFirstname'] === 'string' || data['sEzsigndocumentlogFirstname'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentlogFirstname` to be a primitive type in the JSON string but got " + data['sEzsigndocumentlogFirstname']);
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentlogIP'] && !(typeof data['sEzsigndocumentlogIP'] === 'string' || data['sEzsigndocumentlogIP'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentlogIP` to be a primitive type in the JSON string but got " + data['sEzsigndocumentlogIP']);
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
     * Returns The unique ID of the Ezsignsigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignsignerID() {
        return this.fkiEzsignsignerID;
    }

    /**
     * Sets The unique ID of the Ezsignsigner
     * @param {Number} fkiEzsignsignerID The unique ID of the Ezsignsigner
     */
    setFkiEzsignsignerID(fkiEzsignsignerID) {
        this['fkiEzsignsignerID'] = fkiEzsignsignerID;
    }
/**
     * Returns The date and time at which the event was logged
     * @return {String}
     */
    getDtEzsigndocumentlogDatetime() {
        return this.dtEzsigndocumentlogDatetime;
    }

    /**
     * Sets The date and time at which the event was logged
     * @param {String} dtEzsigndocumentlogDatetime The date and time at which the event was logged
     */
    setDtEzsigndocumentlogDatetime(dtEzsigndocumentlogDatetime) {
        this['dtEzsigndocumentlogDatetime'] = dtEzsigndocumentlogDatetime;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigndocumentlogType}
     */
    getEEzsigndocumentlogType() {
        return this.eEzsigndocumentlogType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} eEzsigndocumentlogType
     */
    setEEzsigndocumentlogType(eEzsigndocumentlogType) {
        this['eEzsigndocumentlogType'] = eEzsigndocumentlogType;
    }
/**
     * Returns The detail of the Ezsigndocumentlog
     * @return {String}
     */
    getSEzsigndocumentlogDetail() {
        return this.sEzsigndocumentlogDetail;
    }

    /**
     * Sets The detail of the Ezsigndocumentlog
     * @param {String} sEzsigndocumentlogDetail The detail of the Ezsigndocumentlog
     */
    setSEzsigndocumentlogDetail(sEzsigndocumentlogDetail) {
        this['sEzsigndocumentlogDetail'] = sEzsigndocumentlogDetail;
    }
/**
     * Returns The last name of the User or Ezsignsigner
     * @return {String}
     */
    getSEzsigndocumentlogLastname() {
        return this.sEzsigndocumentlogLastname;
    }

    /**
     * Sets The last name of the User or Ezsignsigner
     * @param {String} sEzsigndocumentlogLastname The last name of the User or Ezsignsigner
     */
    setSEzsigndocumentlogLastname(sEzsigndocumentlogLastname) {
        this['sEzsigndocumentlogLastname'] = sEzsigndocumentlogLastname;
    }
/**
     * Returns The first name of the User or Ezsignsigner
     * @return {String}
     */
    getSEzsigndocumentlogFirstname() {
        return this.sEzsigndocumentlogFirstname;
    }

    /**
     * Sets The first name of the User or Ezsignsigner
     * @param {String} sEzsigndocumentlogFirstname The first name of the User or Ezsignsigner
     */
    setSEzsigndocumentlogFirstname(sEzsigndocumentlogFirstname) {
        this['sEzsigndocumentlogFirstname'] = sEzsigndocumentlogFirstname;
    }
/**
     * Returns Represent an IP address.
     * @return {String}
     */
    getSEzsigndocumentlogIP() {
        return this.sEzsigndocumentlogIP;
    }

    /**
     * Sets Represent an IP address.
     * @param {String} sEzsigndocumentlogIP Represent an IP address.
     */
    setSEzsigndocumentlogIP(sEzsigndocumentlogIP) {
        this['sEzsigndocumentlogIP'] = sEzsigndocumentlogIP;
    }

}

EzsigndocumentlogResponse.RequiredProperties = ["dtEzsigndocumentlogDatetime", "eEzsigndocumentlogType", "sEzsigndocumentlogDetail", "sEzsigndocumentlogLastname", "sEzsigndocumentlogFirstname", "sEzsigndocumentlogIP"];

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsigndocumentlogResponse.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
EzsigndocumentlogResponse.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The date and time at which the event was logged
 * @member {String} dtEzsigndocumentlogDatetime
 */
EzsigndocumentlogResponse.prototype['dtEzsigndocumentlogDatetime'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} eEzsigndocumentlogType
 */
EzsigndocumentlogResponse.prototype['eEzsigndocumentlogType'] = undefined;

/**
 * The detail of the Ezsigndocumentlog
 * @member {String} sEzsigndocumentlogDetail
 */
EzsigndocumentlogResponse.prototype['sEzsigndocumentlogDetail'] = undefined;

/**
 * The last name of the User or Ezsignsigner
 * @member {String} sEzsigndocumentlogLastname
 */
EzsigndocumentlogResponse.prototype['sEzsigndocumentlogLastname'] = undefined;

/**
 * The first name of the User or Ezsignsigner
 * @member {String} sEzsigndocumentlogFirstname
 */
EzsigndocumentlogResponse.prototype['sEzsigndocumentlogFirstname'] = undefined;

/**
 * Represent an IP address.
 * @member {String} sEzsigndocumentlogIP
 */
EzsigndocumentlogResponse.prototype['sEzsigndocumentlogIP'] = undefined;






export default EzsigndocumentlogResponse;

