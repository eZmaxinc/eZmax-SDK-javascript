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
import MultilingualNotificationtestName from './MultilingualNotificationtestName';

/**
 * The NotificationtestResponse model module.
 * @module eZmaxAPI/model/NotificationtestResponse
 * @version 1.1.18
 */
class NotificationtestResponse {
    /**
     * Constructs a new <code>NotificationtestResponse</code>.
     * A Notificationtest Object
     * @alias module:eZmaxAPI/model/NotificationtestResponse
     * @param pkiNotificationtestID {Number} The unique ID of the Notificationtest
     * @param objNotificationtestName {module:eZmaxAPI/model/MultilingualNotificationtestName} 
     * @param fkiNotificationsubsectionID {Number} The unique ID of the Notificationsubsection
     * @param sNotificationtestFunction {String} The function name of the Notificationtest
     * @param sNotificationtestNameX {String} The name of the Notificationtest in the language of the requester
     */
    constructor(pkiNotificationtestID, objNotificationtestName, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX) { 
        
        NotificationtestResponse.initialize(this, pkiNotificationtestID, objNotificationtestName, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiNotificationtestID, objNotificationtestName, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX) { 
        obj['pkiNotificationtestID'] = pkiNotificationtestID;
        obj['objNotificationtestName'] = objNotificationtestName;
        obj['fkiNotificationsubsectionID'] = fkiNotificationsubsectionID;
        obj['sNotificationtestFunction'] = sNotificationtestFunction;
        obj['sNotificationtestNameX'] = sNotificationtestNameX;
    }

    /**
     * Constructs a <code>NotificationtestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/NotificationtestResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/NotificationtestResponse} The populated <code>NotificationtestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationtestResponse();

            if (data.hasOwnProperty('pkiNotificationtestID')) {
                obj['pkiNotificationtestID'] = ApiClient.convertToType(data['pkiNotificationtestID'], 'Number');
            }
            if (data.hasOwnProperty('objNotificationtestName')) {
                obj['objNotificationtestName'] = MultilingualNotificationtestName.constructFromObject(data['objNotificationtestName']);
            }
            if (data.hasOwnProperty('fkiNotificationsubsectionID')) {
                obj['fkiNotificationsubsectionID'] = ApiClient.convertToType(data['fkiNotificationsubsectionID'], 'Number');
            }
            if (data.hasOwnProperty('sNotificationtestFunction')) {
                obj['sNotificationtestFunction'] = ApiClient.convertToType(data['sNotificationtestFunction'], 'String');
            }
            if (data.hasOwnProperty('sNotificationtestNameX')) {
                obj['sNotificationtestNameX'] = ApiClient.convertToType(data['sNotificationtestNameX'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationtestResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationtestResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationtestResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objNotificationtestName`
        if (data['objNotificationtestName']) { // data not null
          MultilingualNotificationtestName.validateJSON(data['objNotificationtestName']);
        }
        // ensure the json data is a string
        if (data['sNotificationtestFunction'] && !(typeof data['sNotificationtestFunction'] === 'string' || data['sNotificationtestFunction'] instanceof String)) {
            throw new Error("Expected the field `sNotificationtestFunction` to be a primitive type in the JSON string but got " + data['sNotificationtestFunction']);
        }
        // ensure the json data is a string
        if (data['sNotificationtestNameX'] && !(typeof data['sNotificationtestNameX'] === 'string' || data['sNotificationtestNameX'] instanceof String)) {
            throw new Error("Expected the field `sNotificationtestNameX` to be a primitive type in the JSON string but got " + data['sNotificationtestNameX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Notificationtest
     * minimum: 0
     * @return {Number}
     */
    getPkiNotificationtestID() {
        return this.pkiNotificationtestID;
    }

    /**
     * Sets The unique ID of the Notificationtest
     * @param {Number} pkiNotificationtestID The unique ID of the Notificationtest
     */
    setPkiNotificationtestID(pkiNotificationtestID) {
        this['pkiNotificationtestID'] = pkiNotificationtestID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualNotificationtestName}
     */
    getObjNotificationtestName() {
        return this.objNotificationtestName;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualNotificationtestName} objNotificationtestName
     */
    setObjNotificationtestName(objNotificationtestName) {
        this['objNotificationtestName'] = objNotificationtestName;
    }
/**
     * Returns The unique ID of the Notificationsubsection
     * minimum: 0
     * @return {Number}
     */
    getFkiNotificationsubsectionID() {
        return this.fkiNotificationsubsectionID;
    }

    /**
     * Sets The unique ID of the Notificationsubsection
     * @param {Number} fkiNotificationsubsectionID The unique ID of the Notificationsubsection
     */
    setFkiNotificationsubsectionID(fkiNotificationsubsectionID) {
        this['fkiNotificationsubsectionID'] = fkiNotificationsubsectionID;
    }
/**
     * Returns The function name of the Notificationtest
     * @return {String}
     */
    getSNotificationtestFunction() {
        return this.sNotificationtestFunction;
    }

    /**
     * Sets The function name of the Notificationtest
     * @param {String} sNotificationtestFunction The function name of the Notificationtest
     */
    setSNotificationtestFunction(sNotificationtestFunction) {
        this['sNotificationtestFunction'] = sNotificationtestFunction;
    }
/**
     * Returns The name of the Notificationtest in the language of the requester
     * @return {String}
     */
    getSNotificationtestNameX() {
        return this.sNotificationtestNameX;
    }

    /**
     * Sets The name of the Notificationtest in the language of the requester
     * @param {String} sNotificationtestNameX The name of the Notificationtest in the language of the requester
     */
    setSNotificationtestNameX(sNotificationtestNameX) {
        this['sNotificationtestNameX'] = sNotificationtestNameX;
    }

}

NotificationtestResponse.RequiredProperties = ["pkiNotificationtestID", "objNotificationtestName", "fkiNotificationsubsectionID", "sNotificationtestFunction", "sNotificationtestNameX"];

/**
 * The unique ID of the Notificationtest
 * @member {Number} pkiNotificationtestID
 */
NotificationtestResponse.prototype['pkiNotificationtestID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualNotificationtestName} objNotificationtestName
 */
NotificationtestResponse.prototype['objNotificationtestName'] = undefined;

/**
 * The unique ID of the Notificationsubsection
 * @member {Number} fkiNotificationsubsectionID
 */
NotificationtestResponse.prototype['fkiNotificationsubsectionID'] = undefined;

/**
 * The function name of the Notificationtest
 * @member {String} sNotificationtestFunction
 */
NotificationtestResponse.prototype['sNotificationtestFunction'] = undefined;

/**
 * The name of the Notificationtest in the language of the requester
 * @member {String} sNotificationtestNameX
 */
NotificationtestResponse.prototype['sNotificationtestNameX'] = undefined;






export default NotificationtestResponse;

