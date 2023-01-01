/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomContactNameResponse from './CustomContactNameResponse';
import FieldECommunicationEmailimportance from './FieldECommunicationEmailimportance';
import FieldECommunicationType from './FieldECommunicationType';

/**
 * The CommunicationResponse model module.
 * @module eZmaxAPI/model/CommunicationResponse
 * @version 1.1.17
 */
class CommunicationResponse {
    /**
     * Constructs a new <code>CommunicationResponse</code>.
     * A Communication Object
     * @alias module:eZmaxAPI/model/CommunicationResponse
     * @param pkiCommunicationID {Number} The unique ID of the Communication.
     * @param eCommunicationType {module:eZmaxAPI/model/FieldECommunicationType} 
     * @param sCommunicationSubject {String} The Subject of the Communication
     * @param dtCommunicationSentdate {String} The send date and time at which the Communication was sent.
     * @param objContactFrom {module:eZmaxAPI/model/CustomContactNameResponse} 
     */
    constructor(pkiCommunicationID, eCommunicationType, sCommunicationSubject, dtCommunicationSentdate, objContactFrom) { 
        
        CommunicationResponse.initialize(this, pkiCommunicationID, eCommunicationType, sCommunicationSubject, dtCommunicationSentdate, objContactFrom);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationID, eCommunicationType, sCommunicationSubject, dtCommunicationSentdate, objContactFrom) { 
        obj['pkiCommunicationID'] = pkiCommunicationID;
        obj['eCommunicationType'] = eCommunicationType;
        obj['sCommunicationSubject'] = sCommunicationSubject;
        obj['dtCommunicationSentdate'] = dtCommunicationSentdate;
        obj['objContactFrom'] = objContactFrom;
    }

    /**
     * Constructs a <code>CommunicationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationResponse} The populated <code>CommunicationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationResponse();

            if (data.hasOwnProperty('pkiCommunicationID')) {
                obj['pkiCommunicationID'] = ApiClient.convertToType(data['pkiCommunicationID'], 'Number');
            }
            if (data.hasOwnProperty('eCommunicationEmailimportance')) {
                obj['eCommunicationEmailimportance'] = FieldECommunicationEmailimportance.constructFromObject(data['eCommunicationEmailimportance']);
            }
            if (data.hasOwnProperty('eCommunicationType')) {
                obj['eCommunicationType'] = FieldECommunicationType.constructFromObject(data['eCommunicationType']);
            }
            if (data.hasOwnProperty('sCommunicationSubject')) {
                obj['sCommunicationSubject'] = ApiClient.convertToType(data['sCommunicationSubject'], 'String');
            }
            if (data.hasOwnProperty('dtCommunicationSentdate')) {
                obj['dtCommunicationSentdate'] = ApiClient.convertToType(data['dtCommunicationSentdate'], 'String');
            }
            if (data.hasOwnProperty('objContactFrom')) {
                obj['objContactFrom'] = CustomContactNameResponse.constructFromObject(data['objContactFrom']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCommunicationSubject'] && !(typeof data['sCommunicationSubject'] === 'string' || data['sCommunicationSubject'] instanceof String)) {
            throw new Error("Expected the field `sCommunicationSubject` to be a primitive type in the JSON string but got " + data['sCommunicationSubject']);
        }
        // ensure the json data is a string
        if (data['dtCommunicationSentdate'] && !(typeof data['dtCommunicationSentdate'] === 'string' || data['dtCommunicationSentdate'] instanceof String)) {
            throw new Error("Expected the field `dtCommunicationSentdate` to be a primitive type in the JSON string but got " + data['dtCommunicationSentdate']);
        }
        // validate the optional field `objContactFrom`
        if (data['objContactFrom']) { // data not null
          CustomContactNameResponse.validateJSON(data['objContactFrom']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Communication.
     * minimum: 0
     * @return {Number}
     */
    getPkiCommunicationID() {
        return this.pkiCommunicationID;
    }

    /**
     * Sets The unique ID of the Communication.
     * @param {Number} pkiCommunicationID The unique ID of the Communication.
     */
    setPkiCommunicationID(pkiCommunicationID) {
        this['pkiCommunicationID'] = pkiCommunicationID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationEmailimportance}
     */
    getECommunicationEmailimportance() {
        return this.eCommunicationEmailimportance;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationEmailimportance} eCommunicationEmailimportance
     */
    setECommunicationEmailimportance(eCommunicationEmailimportance) {
        this['eCommunicationEmailimportance'] = eCommunicationEmailimportance;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationType}
     */
    getECommunicationType() {
        return this.eCommunicationType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationType} eCommunicationType
     */
    setECommunicationType(eCommunicationType) {
        this['eCommunicationType'] = eCommunicationType;
    }
/**
     * Returns The Subject of the Communication
     * @return {String}
     */
    getSCommunicationSubject() {
        return this.sCommunicationSubject;
    }

    /**
     * Sets The Subject of the Communication
     * @param {String} sCommunicationSubject The Subject of the Communication
     */
    setSCommunicationSubject(sCommunicationSubject) {
        this['sCommunicationSubject'] = sCommunicationSubject;
    }
/**
     * Returns The send date and time at which the Communication was sent.
     * @return {String}
     */
    getDtCommunicationSentdate() {
        return this.dtCommunicationSentdate;
    }

    /**
     * Sets The send date and time at which the Communication was sent.
     * @param {String} dtCommunicationSentdate The send date and time at which the Communication was sent.
     */
    setDtCommunicationSentdate(dtCommunicationSentdate) {
        this['dtCommunicationSentdate'] = dtCommunicationSentdate;
    }
/**
     * @return {module:eZmaxAPI/model/CustomContactNameResponse}
     */
    getObjContactFrom() {
        return this.objContactFrom;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomContactNameResponse} objContactFrom
     */
    setObjContactFrom(objContactFrom) {
        this['objContactFrom'] = objContactFrom;
    }

}

CommunicationResponse.RequiredProperties = ["pkiCommunicationID", "eCommunicationType", "sCommunicationSubject", "dtCommunicationSentdate", "objContactFrom"];

/**
 * The unique ID of the Communication.
 * @member {Number} pkiCommunicationID
 */
CommunicationResponse.prototype['pkiCommunicationID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationEmailimportance} eCommunicationEmailimportance
 */
CommunicationResponse.prototype['eCommunicationEmailimportance'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationType} eCommunicationType
 */
CommunicationResponse.prototype['eCommunicationType'] = undefined;

/**
 * The Subject of the Communication
 * @member {String} sCommunicationSubject
 */
CommunicationResponse.prototype['sCommunicationSubject'] = undefined;

/**
 * The send date and time at which the Communication was sent.
 * @member {String} dtCommunicationSentdate
 */
CommunicationResponse.prototype['dtCommunicationSentdate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomContactNameResponse} objContactFrom
 */
CommunicationResponse.prototype['objContactFrom'] = undefined;






export default CommunicationResponse;

