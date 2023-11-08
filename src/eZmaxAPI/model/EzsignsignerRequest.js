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
 * The EzsignsignerRequest model module.
 * @module eZmaxAPI/model/EzsignsignerRequest
 * @version 1.2.0
 */
class EzsignsignerRequest {
    /**
     * Constructs a new <code>EzsignsignerRequest</code>.
     * An Ezsignsigner Object
     * @alias module:eZmaxAPI/model/EzsignsignerRequest
     * @param fkiTaxassignmentID {Number} The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     */
    constructor(fkiTaxassignmentID) { 
        
        EzsignsignerRequest.initialize(this, fkiTaxassignmentID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiTaxassignmentID) { 
        obj['fkiTaxassignmentID'] = fkiTaxassignmentID;
    }

    /**
     * Constructs a <code>EzsignsignerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerRequest} The populated <code>EzsignsignerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerRequest();

            if (data.hasOwnProperty('fkiUserlogintypeID')) {
                obj['fkiUserlogintypeID'] = ApiClient.convertToType(data['fkiUserlogintypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiTaxassignmentID')) {
                obj['fkiTaxassignmentID'] = ApiClient.convertToType(data['fkiTaxassignmentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSecretquestionID')) {
                obj['fkiSecretquestionID'] = ApiClient.convertToType(data['fkiSecretquestionID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignsignerLogintype')) {
                obj['eEzsignsignerLogintype'] = ApiClient.convertToType(data['eEzsignsignerLogintype'], 'String');
            }
            if (data.hasOwnProperty('sEzsignsignerSecretanswer')) {
                obj['sEzsignsignerSecretanswer'] = ApiClient.convertToType(data['sEzsignsignerSecretanswer'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignerRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignerRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignerRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eEzsignsignerLogintype'] && !(typeof data['eEzsignsignerLogintype'] === 'string' || data['eEzsignsignerLogintype'] instanceof String)) {
            throw new Error("Expected the field `eEzsignsignerLogintype` to be a primitive type in the JSON string but got " + data['eEzsignsignerLogintype']);
        }
        // ensure the json data is a string
        if (data['sEzsignsignerSecretanswer'] && !(typeof data['sEzsignsignerSecretanswer'] === 'string' || data['sEzsignsignerSecretanswer'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignerSecretanswer` to be a primitive type in the JSON string but got " + data['sEzsignsignerSecretanswer']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * minimum: 0
     * @return {Number}
     */
    getFkiUserlogintypeID() {
        return this.fkiUserlogintypeID;
    }

    /**
     * Sets The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * @param {Number} fkiUserlogintypeID The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     */
    setFkiUserlogintypeID(fkiUserlogintypeID) {
        this['fkiUserlogintypeID'] = fkiUserlogintypeID;
    }
/**
     * Returns The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * minimum: 0
     * maximum: 15
     * @return {Number}
     */
    getFkiTaxassignmentID() {
        return this.fkiTaxassignmentID;
    }

    /**
     * Sets The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * @param {Number} fkiTaxassignmentID The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     */
    setFkiTaxassignmentID(fkiTaxassignmentID) {
        this['fkiTaxassignmentID'] = fkiTaxassignmentID;
    }
/**
     * Returns The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)| |22|Secret Code| |22|Your reference code|
     * minimum: 0
     * @return {Number}
     */
    getFkiSecretquestionID() {
        return this.fkiSecretquestionID;
    }

    /**
     * Sets The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)| |22|Secret Code| |22|Your reference code|
     * @param {Number} fkiSecretquestionID The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)| |22|Secret Code| |22|Your reference code|
     */
    setFkiSecretquestionID(fkiSecretquestionID) {
        this['fkiSecretquestionID'] = fkiSecretquestionID;
    }
/**
     * Returns The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     * @return {module:eZmaxAPI/model/EzsignsignerRequest.EEzsignsignerLogintypeEnum}
     */
    getEEzsignsignerLogintype() {
        return this.eEzsignsignerLogintype;
    }

    /**
     * Sets The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     * @param {module:eZmaxAPI/model/EzsignsignerRequest.EEzsignsignerLogintypeEnum} eEzsignsignerLogintype The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     */
    setEEzsignsignerLogintype(eEzsignsignerLogintype) {
        this['eEzsignsignerLogintype'] = eEzsignsignerLogintype;
    }
/**
     * Returns The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
     * @return {String}
     */
    getSEzsignsignerSecretanswer() {
        return this.sEzsignsignerSecretanswer;
    }

    /**
     * Sets The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
     * @param {String} sEzsignsignerSecretanswer The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
     */
    setSEzsignsignerSecretanswer(sEzsignsignerSecretanswer) {
        this['sEzsignsignerSecretanswer'] = sEzsignsignerSecretanswer;
    }

}

EzsignsignerRequest.RequiredProperties = ["fkiTaxassignmentID"];

/**
 * The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
 * @member {Number} fkiUserlogintypeID
 */
EzsignsignerRequest.prototype['fkiUserlogintypeID'] = undefined;

/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} fkiTaxassignmentID
 */
EzsignsignerRequest.prototype['fkiTaxassignmentID'] = undefined;

/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)| |22|Secret Code| |22|Your reference code|
 * @member {Number} fkiSecretquestionID
 */
EzsignsignerRequest.prototype['fkiSecretquestionID'] = undefined;

/**
 * The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
 * @member {module:eZmaxAPI/model/EzsignsignerRequest.EEzsignsignerLogintypeEnum} eEzsignsignerLogintype
 */
EzsignsignerRequest.prototype['eEzsignsignerLogintype'] = undefined;

/**
 * The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
 * @member {String} sEzsignsignerSecretanswer
 */
EzsignsignerRequest.prototype['sEzsignsignerSecretanswer'] = undefined;





/**
 * Allowed values for the <code>eEzsignsignerLogintype</code> property.
 * @enum {String}
 * @readonly
 */
EzsignsignerRequest['EEzsignsignerLogintypeEnum'] = {

    /**
     * value: "Password"
     * @const
     */
    "Password": "Password",

    /**
     * value: "PasswordPhone"
     * @const
     */
    "PasswordPhone": "PasswordPhone",

    /**
     * value: "PasswordQuestion"
     * @const
     */
    "PasswordQuestion": "PasswordQuestion",

    /**
     * value: "InPersonPhone"
     * @const
     */
    "InPersonPhone": "InPersonPhone",

    /**
     * value: "InPerson"
     * @const
     */
    "InPerson": "InPerson"
};



export default EzsignsignerRequest;

