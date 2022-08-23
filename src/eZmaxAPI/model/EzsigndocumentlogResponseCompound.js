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
import EzsigndocumentlogResponse from './EzsigndocumentlogResponse';
import FieldEEzsigndocumentlogType from './FieldEEzsigndocumentlogType';

/**
 * The EzsigndocumentlogResponseCompound model module.
 * @module eZmaxAPI/model/EzsigndocumentlogResponseCompound
 * @version 1.1.10
 */
class EzsigndocumentlogResponseCompound {
    /**
     * Constructs a new <code>EzsigndocumentlogResponseCompound</code>.
     * An Ezsigndocumentlog Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigndocumentlogResponseCompound
     * @implements module:eZmaxAPI/model/EzsigndocumentlogResponse
     * @param dtEzsigndocumentlogDatetime {String} The date and time at which the event was logged
     * @param eEzsigndocumentlogType {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} 
     * @param sEzsigndocumentlogDetail {String} The detail of the Ezsigndocumentlog
     * @param sEzsigndocumentlogLastname {String} The last name of the User or Ezsignsigner
     * @param sEzsigndocumentlogFirstname {String} The first name of the User or Ezsignsigner
     * @param sEzsigndocumentlogIP {String} Represent an IP address.
     */
    constructor(dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP) { 
        EzsigndocumentlogResponse.initialize(this, dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP);
        EzsigndocumentlogResponseCompound.initialize(this, dtEzsigndocumentlogDatetime, eEzsigndocumentlogType, sEzsigndocumentlogDetail, sEzsigndocumentlogLastname, sEzsigndocumentlogFirstname, sEzsigndocumentlogIP);
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
     * Constructs a <code>EzsigndocumentlogResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentlogResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentlogResponseCompound} The populated <code>EzsigndocumentlogResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentlogResponseCompound();
            EzsigndocumentlogResponse.constructFromObject(data, obj);

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

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsigndocumentlogResponseCompound.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
EzsigndocumentlogResponseCompound.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The date and time at which the event was logged
 * @member {String} dtEzsigndocumentlogDatetime
 */
EzsigndocumentlogResponseCompound.prototype['dtEzsigndocumentlogDatetime'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} eEzsigndocumentlogType
 */
EzsigndocumentlogResponseCompound.prototype['eEzsigndocumentlogType'] = undefined;

/**
 * The detail of the Ezsigndocumentlog
 * @member {String} sEzsigndocumentlogDetail
 */
EzsigndocumentlogResponseCompound.prototype['sEzsigndocumentlogDetail'] = undefined;

/**
 * The last name of the User or Ezsignsigner
 * @member {String} sEzsigndocumentlogLastname
 */
EzsigndocumentlogResponseCompound.prototype['sEzsigndocumentlogLastname'] = undefined;

/**
 * The first name of the User or Ezsignsigner
 * @member {String} sEzsigndocumentlogFirstname
 */
EzsigndocumentlogResponseCompound.prototype['sEzsigndocumentlogFirstname'] = undefined;

/**
 * Represent an IP address.
 * @member {String} sEzsigndocumentlogIP
 */
EzsigndocumentlogResponseCompound.prototype['sEzsigndocumentlogIP'] = undefined;


// Implement EzsigndocumentlogResponse interface:
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




export default EzsigndocumentlogResponseCompound;

