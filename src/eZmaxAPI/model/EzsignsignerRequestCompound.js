/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignerRequest from './EzsignsignerRequest';
import EzsignsignerRequestCompoundContact from './EzsignsignerRequestCompoundContact';

/**
 * The EzsignsignerRequestCompound model module.
 * @module eZmaxAPI/model/EzsignsignerRequestCompound
 * @version 1.0.44
 */
class EzsignsignerRequestCompound {
    /**
     * Constructs a new <code>EzsignsignerRequestCompound</code>.
     * An Ezsignsigner Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignerRequestCompound
     * @implements module:eZmaxAPI/model/EzsignsignerRequest
     * @param fkiTaxassignmentID {Number} The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * @param eEzsignsignerLogintype {module:eZmaxAPI/model/EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum} The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     */
    constructor(fkiTaxassignmentID, eEzsignsignerLogintype) { 
        EzsignsignerRequest.initialize(this, fkiTaxassignmentID, eEzsignsignerLogintype);
        EzsignsignerRequestCompound.initialize(this, fkiTaxassignmentID, eEzsignsignerLogintype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiTaxassignmentID, eEzsignsignerLogintype) { 
        obj['objContact'] = objContact;
        obj['fkiTaxassignmentID'] = fkiTaxassignmentID;
        obj['eEzsignsignerLogintype'] = eEzsignsignerLogintype;
    }

    /**
     * Constructs a <code>EzsignsignerRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompound} The populated <code>EzsignsignerRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerRequestCompound();
            EzsignsignerRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('objContact')) {
                obj['objContact'] = EzsignsignerRequestCompoundContact.constructFromObject(data['objContact']);
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
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact}
     */
    getObjContact() {
        return this.objContact;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} objContact
     */
    setObjContact(objContact) {
        this['objContact'] = objContact;
    }
/**
     * Returns The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * minimum: 1
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
     * Returns The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * @return {Number}
     */
    getFkiSecretquestionID() {
        return this.fkiSecretquestionID;
    }

    /**
     * Sets The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * @param {Number} fkiSecretquestionID The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     */
    setFkiSecretquestionID(fkiSecretquestionID) {
        this['fkiSecretquestionID'] = fkiSecretquestionID;
    }
/**
     * Returns The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum}
     */
    getEEzsignsignerLogintype() {
        return this.eEzsignsignerLogintype;
    }

    /**
     * Sets The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum} eEzsignsignerLogintype The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
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

/**
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} objContact
 */
EzsignsignerRequestCompound.prototype['objContact'] = undefined;

/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} fkiTaxassignmentID
 */
EzsignsignerRequestCompound.prototype['fkiTaxassignmentID'] = undefined;

/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
 * @member {Number} fkiSecretquestionID
 */
EzsignsignerRequestCompound.prototype['fkiSecretquestionID'] = undefined;

/**
 * The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **InPersonPhone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**. 5. **InPerson** means the Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum} eEzsignsignerLogintype
 */
EzsignsignerRequestCompound.prototype['eEzsignsignerLogintype'] = undefined;

/**
 * The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
 * @member {String} sEzsignsignerSecretanswer
 */
EzsignsignerRequestCompound.prototype['sEzsignsignerSecretanswer'] = undefined;


// Implement EzsignsignerRequest interface:
/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} fkiTaxassignmentID
 */
EzsignsignerRequest.prototype['fkiTaxassignmentID'] = undefined;
/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
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
EzsignsignerRequestCompound['EEzsignsignerLogintypeEnum'] = {

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



export default EzsignsignerRequestCompound;

