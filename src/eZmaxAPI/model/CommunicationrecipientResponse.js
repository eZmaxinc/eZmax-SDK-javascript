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
import DescriptionstaticResponseCompound from './DescriptionstaticResponseCompound';
import EmailstaticResponseCompound from './EmailstaticResponseCompound';
import FieldECommunicationrecipientObjecttype from './FieldECommunicationrecipientObjecttype';
import FieldECommunicationrecipientType from './FieldECommunicationrecipientType';
import PhonestaticResponseCompound from './PhonestaticResponseCompound';

/**
 * The CommunicationrecipientResponse model module.
 * @module eZmaxAPI/model/CommunicationrecipientResponse
 * @version 1.1.17
 */
class CommunicationrecipientResponse {
    /**
     * Constructs a new <code>CommunicationrecipientResponse</code>.
     * A Communicationrecipient Object
     * @alias module:eZmaxAPI/model/CommunicationrecipientResponse
     * @param pkiCommunicationrecipientID {Number} The unique ID of the Communicationrecipient.
     * @param eCommunicationrecipientType {module:eZmaxAPI/model/FieldECommunicationrecipientType} 
     * @param objDescriptionstatic {module:eZmaxAPI/model/DescriptionstaticResponseCompound} 
     */
    constructor(pkiCommunicationrecipientID, eCommunicationrecipientType, objDescriptionstatic) { 
        
        CommunicationrecipientResponse.initialize(this, pkiCommunicationrecipientID, eCommunicationrecipientType, objDescriptionstatic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationrecipientID, eCommunicationrecipientType, objDescriptionstatic) { 
        obj['pkiCommunicationrecipientID'] = pkiCommunicationrecipientID;
        obj['eCommunicationrecipientType'] = eCommunicationrecipientType;
        obj['objDescriptionstatic'] = objDescriptionstatic;
    }

    /**
     * Constructs a <code>CommunicationrecipientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationrecipientResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationrecipientResponse} The populated <code>CommunicationrecipientResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationrecipientResponse();

            if (data.hasOwnProperty('pkiCommunicationrecipientID')) {
                obj['pkiCommunicationrecipientID'] = ApiClient.convertToType(data['pkiCommunicationrecipientID'], 'Number');
            }
            if (data.hasOwnProperty('eCommunicationrecipientObjecttype')) {
                obj['eCommunicationrecipientObjecttype'] = FieldECommunicationrecipientObjecttype.constructFromObject(data['eCommunicationrecipientObjecttype']);
            }
            if (data.hasOwnProperty('fkiAgentID')) {
                obj['fkiAgentID'] = ApiClient.convertToType(data['fkiAgentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBrokerID')) {
                obj['fkiBrokerID'] = ApiClient.convertToType(data['fkiBrokerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiContactID')) {
                obj['fkiContactID'] = ApiClient.convertToType(data['fkiContactID'], 'Number');
            }
            if (data.hasOwnProperty('fkiCustomerID')) {
                obj['fkiCustomerID'] = ApiClient.convertToType(data['fkiCustomerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEmployeeID')) {
                obj['fkiEmployeeID'] = ApiClient.convertToType(data['fkiEmployeeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignsignerID')) {
                obj['fkiEzsignsignerID'] = ApiClient.convertToType(data['fkiEzsignsignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiFranchiseofficeID')) {
                obj['fkiFranchiseofficeID'] = ApiClient.convertToType(data['fkiFranchiseofficeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiAgentincorporationID')) {
                obj['fkiAgentincorporationID'] = ApiClient.convertToType(data['fkiAgentincorporationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiAssistantID')) {
                obj['fkiAssistantID'] = ApiClient.convertToType(data['fkiAssistantID'], 'Number');
            }
            if (data.hasOwnProperty('fkiExternalbrokerID')) {
                obj['fkiExternalbrokerID'] = ApiClient.convertToType(data['fkiExternalbrokerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzcomagentID')) {
                obj['fkiEzcomagentID'] = ApiClient.convertToType(data['fkiEzcomagentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiNotaryID')) {
                obj['fkiNotaryID'] = ApiClient.convertToType(data['fkiNotaryID'], 'Number');
            }
            if (data.hasOwnProperty('fkiRewardmemberID')) {
                obj['fkiRewardmemberID'] = ApiClient.convertToType(data['fkiRewardmemberID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSupplierID')) {
                obj['fkiSupplierID'] = ApiClient.convertToType(data['fkiSupplierID'], 'Number');
            }
            if (data.hasOwnProperty('eCommunicationrecipientType')) {
                obj['eCommunicationrecipientType'] = FieldECommunicationrecipientType.constructFromObject(data['eCommunicationrecipientType']);
            }
            if (data.hasOwnProperty('objDescriptionstatic')) {
                obj['objDescriptionstatic'] = DescriptionstaticResponseCompound.constructFromObject(data['objDescriptionstatic']);
            }
            if (data.hasOwnProperty('objEmailstatic')) {
                obj['objEmailstatic'] = EmailstaticResponseCompound.constructFromObject(data['objEmailstatic']);
            }
            if (data.hasOwnProperty('objPhonestatic')) {
                obj['objPhonestatic'] = PhonestaticResponseCompound.constructFromObject(data['objPhonestatic']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationrecipientResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationrecipientResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationrecipientResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDescriptionstatic`
        if (data['objDescriptionstatic']) { // data not null
          DescriptionstaticResponseCompound.validateJSON(data['objDescriptionstatic']);
        }
        // validate the optional field `objEmailstatic`
        if (data['objEmailstatic']) { // data not null
          EmailstaticResponseCompound.validateJSON(data['objEmailstatic']);
        }
        // validate the optional field `objPhonestatic`
        if (data['objPhonestatic']) { // data not null
          PhonestaticResponseCompound.validateJSON(data['objPhonestatic']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Communicationrecipient.
     * minimum: 0
     * @return {Number}
     */
    getPkiCommunicationrecipientID() {
        return this.pkiCommunicationrecipientID;
    }

    /**
     * Sets The unique ID of the Communicationrecipient.
     * @param {Number} pkiCommunicationrecipientID The unique ID of the Communicationrecipient.
     */
    setPkiCommunicationrecipientID(pkiCommunicationrecipientID) {
        this['pkiCommunicationrecipientID'] = pkiCommunicationrecipientID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationrecipientObjecttype}
     */
    getECommunicationrecipientObjecttype() {
        return this.eCommunicationrecipientObjecttype;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationrecipientObjecttype} eCommunicationrecipientObjecttype
     */
    setECommunicationrecipientObjecttype(eCommunicationrecipientObjecttype) {
        this['eCommunicationrecipientObjecttype'] = eCommunicationrecipientObjecttype;
    }
/**
     * Returns The unique ID of the Agent.
     * minimum: 0
     * @return {Number}
     */
    getFkiAgentID() {
        return this.fkiAgentID;
    }

    /**
     * Sets The unique ID of the Agent.
     * @param {Number} fkiAgentID The unique ID of the Agent.
     */
    setFkiAgentID(fkiAgentID) {
        this['fkiAgentID'] = fkiAgentID;
    }
/**
     * Returns The unique ID of the Broker.
     * minimum: 0
     * @return {Number}
     */
    getFkiBrokerID() {
        return this.fkiBrokerID;
    }

    /**
     * Sets The unique ID of the Broker.
     * @param {Number} fkiBrokerID The unique ID of the Broker.
     */
    setFkiBrokerID(fkiBrokerID) {
        this['fkiBrokerID'] = fkiBrokerID;
    }
/**
     * Returns The unique ID of the Contact
     * minimum: 0
     * @return {Number}
     */
    getFkiContactID() {
        return this.fkiContactID;
    }

    /**
     * Sets The unique ID of the Contact
     * @param {Number} fkiContactID The unique ID of the Contact
     */
    setFkiContactID(fkiContactID) {
        this['fkiContactID'] = fkiContactID;
    }
/**
     * Returns The unique ID of the Customer.
     * minimum: 0
     * @return {Number}
     */
    getFkiCustomerID() {
        return this.fkiCustomerID;
    }

    /**
     * Sets The unique ID of the Customer.
     * @param {Number} fkiCustomerID The unique ID of the Customer.
     */
    setFkiCustomerID(fkiCustomerID) {
        this['fkiCustomerID'] = fkiCustomerID;
    }
/**
     * Returns The unique ID of the Employee.
     * minimum: 0
     * @return {Number}
     */
    getFkiEmployeeID() {
        return this.fkiEmployeeID;
    }

    /**
     * Sets The unique ID of the Employee.
     * @param {Number} fkiEmployeeID The unique ID of the Employee.
     */
    setFkiEmployeeID(fkiEmployeeID) {
        this['fkiEmployeeID'] = fkiEmployeeID;
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
     * Returns The unique ID of the Franchisereoffice
     * minimum: 0
     * @return {Number}
     */
    getFkiFranchiseofficeID() {
        return this.fkiFranchiseofficeID;
    }

    /**
     * Sets The unique ID of the Franchisereoffice
     * @param {Number} fkiFranchiseofficeID The unique ID of the Franchisereoffice
     */
    setFkiFranchiseofficeID(fkiFranchiseofficeID) {
        this['fkiFranchiseofficeID'] = fkiFranchiseofficeID;
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
     * Returns The unique ID of the Agentincorporation.
     * minimum: 0
     * @return {Number}
     */
    getFkiAgentincorporationID() {
        return this.fkiAgentincorporationID;
    }

    /**
     * Sets The unique ID of the Agentincorporation.
     * @param {Number} fkiAgentincorporationID The unique ID of the Agentincorporation.
     */
    setFkiAgentincorporationID(fkiAgentincorporationID) {
        this['fkiAgentincorporationID'] = fkiAgentincorporationID;
    }
/**
     * Returns The unique ID of the Assistant.
     * minimum: 0
     * @return {Number}
     */
    getFkiAssistantID() {
        return this.fkiAssistantID;
    }

    /**
     * Sets The unique ID of the Assistant.
     * @param {Number} fkiAssistantID The unique ID of the Assistant.
     */
    setFkiAssistantID(fkiAssistantID) {
        this['fkiAssistantID'] = fkiAssistantID;
    }
/**
     * Returns The unique ID of the Externalbroker.
     * minimum: 0
     * @return {Number}
     */
    getFkiExternalbrokerID() {
        return this.fkiExternalbrokerID;
    }

    /**
     * Sets The unique ID of the Externalbroker.
     * @param {Number} fkiExternalbrokerID The unique ID of the Externalbroker.
     */
    setFkiExternalbrokerID(fkiExternalbrokerID) {
        this['fkiExternalbrokerID'] = fkiExternalbrokerID;
    }
/**
     * Returns The unique ID of the Ezcomagent.
     * minimum: 0
     * @return {Number}
     */
    getFkiEzcomagentID() {
        return this.fkiEzcomagentID;
    }

    /**
     * Sets The unique ID of the Ezcomagent.
     * @param {Number} fkiEzcomagentID The unique ID of the Ezcomagent.
     */
    setFkiEzcomagentID(fkiEzcomagentID) {
        this['fkiEzcomagentID'] = fkiEzcomagentID;
    }
/**
     * Returns The unique ID of the Notary.
     * minimum: 0
     * @return {Number}
     */
    getFkiNotaryID() {
        return this.fkiNotaryID;
    }

    /**
     * Sets The unique ID of the Notary.
     * @param {Number} fkiNotaryID The unique ID of the Notary.
     */
    setFkiNotaryID(fkiNotaryID) {
        this['fkiNotaryID'] = fkiNotaryID;
    }
/**
     * Returns The unique ID of the Rewardmember.
     * minimum: 0
     * @return {Number}
     */
    getFkiRewardmemberID() {
        return this.fkiRewardmemberID;
    }

    /**
     * Sets The unique ID of the Rewardmember.
     * @param {Number} fkiRewardmemberID The unique ID of the Rewardmember.
     */
    setFkiRewardmemberID(fkiRewardmemberID) {
        this['fkiRewardmemberID'] = fkiRewardmemberID;
    }
/**
     * Returns The unique ID of the Supplier.
     * minimum: 0
     * @return {Number}
     */
    getFkiSupplierID() {
        return this.fkiSupplierID;
    }

    /**
     * Sets The unique ID of the Supplier.
     * @param {Number} fkiSupplierID The unique ID of the Supplier.
     */
    setFkiSupplierID(fkiSupplierID) {
        this['fkiSupplierID'] = fkiSupplierID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationrecipientType}
     */
    getECommunicationrecipientType() {
        return this.eCommunicationrecipientType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationrecipientType} eCommunicationrecipientType
     */
    setECommunicationrecipientType(eCommunicationrecipientType) {
        this['eCommunicationrecipientType'] = eCommunicationrecipientType;
    }
/**
     * @return {module:eZmaxAPI/model/DescriptionstaticResponseCompound}
     */
    getObjDescriptionstatic() {
        return this.objDescriptionstatic;
    }

    /**
     * @param {module:eZmaxAPI/model/DescriptionstaticResponseCompound} objDescriptionstatic
     */
    setObjDescriptionstatic(objDescriptionstatic) {
        this['objDescriptionstatic'] = objDescriptionstatic;
    }
/**
     * @return {module:eZmaxAPI/model/EmailstaticResponseCompound}
     */
    getObjEmailstatic() {
        return this.objEmailstatic;
    }

    /**
     * @param {module:eZmaxAPI/model/EmailstaticResponseCompound} objEmailstatic
     */
    setObjEmailstatic(objEmailstatic) {
        this['objEmailstatic'] = objEmailstatic;
    }
/**
     * @return {module:eZmaxAPI/model/PhonestaticResponseCompound}
     */
    getObjPhonestatic() {
        return this.objPhonestatic;
    }

    /**
     * @param {module:eZmaxAPI/model/PhonestaticResponseCompound} objPhonestatic
     */
    setObjPhonestatic(objPhonestatic) {
        this['objPhonestatic'] = objPhonestatic;
    }

}

CommunicationrecipientResponse.RequiredProperties = ["pkiCommunicationrecipientID", "eCommunicationrecipientType", "objDescriptionstatic"];

/**
 * The unique ID of the Communicationrecipient.
 * @member {Number} pkiCommunicationrecipientID
 */
CommunicationrecipientResponse.prototype['pkiCommunicationrecipientID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationrecipientObjecttype} eCommunicationrecipientObjecttype
 */
CommunicationrecipientResponse.prototype['eCommunicationrecipientObjecttype'] = undefined;

/**
 * The unique ID of the Agent.
 * @member {Number} fkiAgentID
 */
CommunicationrecipientResponse.prototype['fkiAgentID'] = undefined;

/**
 * The unique ID of the Broker.
 * @member {Number} fkiBrokerID
 */
CommunicationrecipientResponse.prototype['fkiBrokerID'] = undefined;

/**
 * The unique ID of the Contact
 * @member {Number} fkiContactID
 */
CommunicationrecipientResponse.prototype['fkiContactID'] = undefined;

/**
 * The unique ID of the Customer.
 * @member {Number} fkiCustomerID
 */
CommunicationrecipientResponse.prototype['fkiCustomerID'] = undefined;

/**
 * The unique ID of the Employee.
 * @member {Number} fkiEmployeeID
 */
CommunicationrecipientResponse.prototype['fkiEmployeeID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
CommunicationrecipientResponse.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The unique ID of the Franchisereoffice
 * @member {Number} fkiFranchiseofficeID
 */
CommunicationrecipientResponse.prototype['fkiFranchiseofficeID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
CommunicationrecipientResponse.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Agentincorporation.
 * @member {Number} fkiAgentincorporationID
 */
CommunicationrecipientResponse.prototype['fkiAgentincorporationID'] = undefined;

/**
 * The unique ID of the Assistant.
 * @member {Number} fkiAssistantID
 */
CommunicationrecipientResponse.prototype['fkiAssistantID'] = undefined;

/**
 * The unique ID of the Externalbroker.
 * @member {Number} fkiExternalbrokerID
 */
CommunicationrecipientResponse.prototype['fkiExternalbrokerID'] = undefined;

/**
 * The unique ID of the Ezcomagent.
 * @member {Number} fkiEzcomagentID
 */
CommunicationrecipientResponse.prototype['fkiEzcomagentID'] = undefined;

/**
 * The unique ID of the Notary.
 * @member {Number} fkiNotaryID
 */
CommunicationrecipientResponse.prototype['fkiNotaryID'] = undefined;

/**
 * The unique ID of the Rewardmember.
 * @member {Number} fkiRewardmemberID
 */
CommunicationrecipientResponse.prototype['fkiRewardmemberID'] = undefined;

/**
 * The unique ID of the Supplier.
 * @member {Number} fkiSupplierID
 */
CommunicationrecipientResponse.prototype['fkiSupplierID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationrecipientType} eCommunicationrecipientType
 */
CommunicationrecipientResponse.prototype['eCommunicationrecipientType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/DescriptionstaticResponseCompound} objDescriptionstatic
 */
CommunicationrecipientResponse.prototype['objDescriptionstatic'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EmailstaticResponseCompound} objEmailstatic
 */
CommunicationrecipientResponse.prototype['objEmailstatic'] = undefined;

/**
 * @member {module:eZmaxAPI/model/PhonestaticResponseCompound} objPhonestatic
 */
CommunicationrecipientResponse.prototype['objPhonestatic'] = undefined;






export default CommunicationrecipientResponse;

