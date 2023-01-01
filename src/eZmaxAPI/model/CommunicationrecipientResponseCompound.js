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
import CommunicationrecipientResponse from './CommunicationrecipientResponse';
import FieldECommunicationrecipientType from './FieldECommunicationrecipientType';
import PhoneResponseCompound from './PhoneResponseCompound';

/**
 * The CommunicationrecipientResponseCompound model module.
 * @module eZmaxAPI/model/CommunicationrecipientResponseCompound
 * @version 1.1.17
 */
class CommunicationrecipientResponseCompound {
    /**
     * Constructs a new <code>CommunicationrecipientResponseCompound</code>.
     * A Communicationreciient Object
     * @alias module:eZmaxAPI/model/CommunicationrecipientResponseCompound
     * @implements module:eZmaxAPI/model/CommunicationrecipientResponse
     * @param pkiCommunicationrecipientID {Number} The unique ID of the Communicationrecipient.
     */
    constructor(pkiCommunicationrecipientID) { 
        CommunicationrecipientResponse.initialize(this, pkiCommunicationrecipientID);
        CommunicationrecipientResponseCompound.initialize(this, pkiCommunicationrecipientID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationrecipientID) { 
        obj['pkiCommunicationrecipientID'] = pkiCommunicationrecipientID;
    }

    /**
     * Constructs a <code>CommunicationrecipientResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationrecipientResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationrecipientResponseCompound} The populated <code>CommunicationrecipientResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationrecipientResponseCompound();
            CommunicationrecipientResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiCommunicationrecipientID')) {
                obj['pkiCommunicationrecipientID'] = ApiClient.convertToType(data['pkiCommunicationrecipientID'], 'Number');
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
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('eCommunicationrecipientType')) {
                obj['eCommunicationrecipientType'] = FieldECommunicationrecipientType.constructFromObject(data['eCommunicationrecipientType']);
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
            if (data.hasOwnProperty('objPhoneSms')) {
                obj['objPhoneSms'] = PhoneResponseCompound.constructFromObject(data['objPhoneSms']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationrecipientResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationrecipientResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationrecipientResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }
        // validate the optional field `objPhoneSms`
        if (data['objPhoneSms']) { // data not null
          PhoneResponseCompound.validateJSON(data['objPhoneSms']);
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
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
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
     * @return {module:eZmaxAPI/model/PhoneResponseCompound}
     */
    getObjPhoneSms() {
        return this.objPhoneSms;
    }

    /**
     * @param {module:eZmaxAPI/model/PhoneResponseCompound} objPhoneSms
     */
    setObjPhoneSms(objPhoneSms) {
        this['objPhoneSms'] = objPhoneSms;
    }

}

CommunicationrecipientResponseCompound.RequiredProperties = ["pkiCommunicationrecipientID"];

/**
 * The unique ID of the Communicationrecipient.
 * @member {Number} pkiCommunicationrecipientID
 */
CommunicationrecipientResponseCompound.prototype['pkiCommunicationrecipientID'] = undefined;

/**
 * The unique ID of the Agent.
 * @member {Number} fkiAgentID
 */
CommunicationrecipientResponseCompound.prototype['fkiAgentID'] = undefined;

/**
 * The unique ID of the Broker.
 * @member {Number} fkiBrokerID
 */
CommunicationrecipientResponseCompound.prototype['fkiBrokerID'] = undefined;

/**
 * The unique ID of the Contact
 * @member {Number} fkiContactID
 */
CommunicationrecipientResponseCompound.prototype['fkiContactID'] = undefined;

/**
 * The unique ID of the Customer.
 * @member {Number} fkiCustomerID
 */
CommunicationrecipientResponseCompound.prototype['fkiCustomerID'] = undefined;

/**
 * The unique ID of the Employee.
 * @member {Number} fkiEmployeeID
 */
CommunicationrecipientResponseCompound.prototype['fkiEmployeeID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
CommunicationrecipientResponseCompound.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The unique ID of the Franchisereoffice
 * @member {Number} fkiFranchiseofficeID
 */
CommunicationrecipientResponseCompound.prototype['fkiFranchiseofficeID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
CommunicationrecipientResponseCompound.prototype['fkiUserID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
CommunicationrecipientResponseCompound.prototype['sEmailAddress'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationrecipientType} eCommunicationrecipientType
 */
CommunicationrecipientResponseCompound.prototype['eCommunicationrecipientType'] = undefined;

/**
 * The unique ID of the Agentincorporation.
 * @member {Number} fkiAgentincorporationID
 */
CommunicationrecipientResponseCompound.prototype['fkiAgentincorporationID'] = undefined;

/**
 * The unique ID of the Assistant.
 * @member {Number} fkiAssistantID
 */
CommunicationrecipientResponseCompound.prototype['fkiAssistantID'] = undefined;

/**
 * The unique ID of the Externalbroker.
 * @member {Number} fkiExternalbrokerID
 */
CommunicationrecipientResponseCompound.prototype['fkiExternalbrokerID'] = undefined;

/**
 * The unique ID of the Ezcomagent.
 * @member {Number} fkiEzcomagentID
 */
CommunicationrecipientResponseCompound.prototype['fkiEzcomagentID'] = undefined;

/**
 * The unique ID of the Notary.
 * @member {Number} fkiNotaryID
 */
CommunicationrecipientResponseCompound.prototype['fkiNotaryID'] = undefined;

/**
 * The unique ID of the Rewardmember.
 * @member {Number} fkiRewardmemberID
 */
CommunicationrecipientResponseCompound.prototype['fkiRewardmemberID'] = undefined;

/**
 * The unique ID of the Supplier.
 * @member {Number} fkiSupplierID
 */
CommunicationrecipientResponseCompound.prototype['fkiSupplierID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/PhoneResponseCompound} objPhoneSms
 */
CommunicationrecipientResponseCompound.prototype['objPhoneSms'] = undefined;


// Implement CommunicationrecipientResponse interface:
/**
 * The unique ID of the Communicationrecipient.
 * @member {Number} pkiCommunicationrecipientID
 */
CommunicationrecipientResponse.prototype['pkiCommunicationrecipientID'] = undefined;
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
 * The email address.
 * @member {String} sEmailAddress
 */
CommunicationrecipientResponse.prototype['sEmailAddress'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldECommunicationrecipientType} eCommunicationrecipientType
 */
CommunicationrecipientResponse.prototype['eCommunicationrecipientType'] = undefined;
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
 * @member {module:eZmaxAPI/model/PhoneResponseCompound} objPhoneSms
 */
CommunicationrecipientResponse.prototype['objPhoneSms'] = undefined;




export default CommunicationrecipientResponseCompound;

