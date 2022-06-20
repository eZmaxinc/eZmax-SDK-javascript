/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignerResponse from './EzsignsignerResponse';
import EzsignsignerResponseCompoundAllOf from './EzsignsignerResponseCompoundAllOf';
import EzsignsignerResponseCompoundContact from './EzsignsignerResponseCompoundContact';

/**
 * The EzsignsignerResponseCompound model module.
 * @module eZmaxAPI/model/EzsignsignerResponseCompound
 * @version 1.1.8
 */
class EzsignsignerResponseCompound {
    /**
     * Constructs a new <code>EzsignsignerResponseCompound</code>.
     * An Ezsignsigner Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignerResponseCompound
     * @implements module:eZmaxAPI/model/EzsignsignerResponse
     * @implements module:eZmaxAPI/model/EzsignsignerResponseCompoundAllOf
     * @param pkiEzsignsignerID {Number} The unique ID of the Ezsignsigner
     * @param fkiTaxassignmentID {Number} The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * @param fkiUserlogintypeID {Number} The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
     * @param sUserlogintypeDescriptionX {String} The description of the Userlogintype in the language of the requester
     * @param objContact {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} 
     */
    constructor(pkiEzsignsignerID, fkiTaxassignmentID, fkiUserlogintypeID, sUserlogintypeDescriptionX, objContact) { 
        EzsignsignerResponse.initialize(this, pkiEzsignsignerID, fkiTaxassignmentID, fkiUserlogintypeID, sUserlogintypeDescriptionX);EzsignsignerResponseCompoundAllOf.initialize(this, objContact);
        EzsignsignerResponseCompound.initialize(this, pkiEzsignsignerID, fkiTaxassignmentID, fkiUserlogintypeID, sUserlogintypeDescriptionX, objContact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignerID, fkiTaxassignmentID, fkiUserlogintypeID, sUserlogintypeDescriptionX, objContact) { 
        obj['pkiEzsignsignerID'] = pkiEzsignsignerID;
        obj['fkiTaxassignmentID'] = fkiTaxassignmentID;
        obj['fkiUserlogintypeID'] = fkiUserlogintypeID;
        obj['sUserlogintypeDescriptionX'] = sUserlogintypeDescriptionX;
        obj['objContact'] = objContact;
    }

    /**
     * Constructs a <code>EzsignsignerResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompound} The populated <code>EzsignsignerResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerResponseCompound();
            EzsignsignerResponse.constructFromObject(data, obj);
            EzsignsignerResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignsignerID')) {
                obj['pkiEzsignsignerID'] = ApiClient.convertToType(data['pkiEzsignsignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiTaxassignmentID')) {
                obj['fkiTaxassignmentID'] = ApiClient.convertToType(data['fkiTaxassignmentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSecretquestionID')) {
                obj['fkiSecretquestionID'] = ApiClient.convertToType(data['fkiSecretquestionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserlogintypeID')) {
                obj['fkiUserlogintypeID'] = ApiClient.convertToType(data['fkiUserlogintypeID'], 'Number');
            }
            if (data.hasOwnProperty('sUserlogintypeDescriptionX')) {
                obj['sUserlogintypeDescriptionX'] = ApiClient.convertToType(data['sUserlogintypeDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('objContact')) {
                obj['objContact'] = EzsignsignerResponseCompoundContact.constructFromObject(data['objContact']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignsigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignsignerID() {
        return this.pkiEzsignsignerID;
    }

    /**
     * Sets The unique ID of the Ezsignsigner
     * @param {Number} pkiEzsignsignerID The unique ID of the Ezsignsigner
     */
    setPkiEzsignsignerID(pkiEzsignsignerID) {
        this['pkiEzsignsignerID'] = pkiEzsignsignerID;
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
     * Returns The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * minimum: 0
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
     * Returns The description of the Userlogintype in the language of the requester
     * @return {String}
     */
    getSUserlogintypeDescriptionX() {
        return this.sUserlogintypeDescriptionX;
    }

    /**
     * Sets The description of the Userlogintype in the language of the requester
     * @param {String} sUserlogintypeDescriptionX The description of the Userlogintype in the language of the requester
     */
    setSUserlogintypeDescriptionX(sUserlogintypeDescriptionX) {
        this['sUserlogintypeDescriptionX'] = sUserlogintypeDescriptionX;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact}
     */
    getObjContact() {
        return this.objContact;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} objContact
     */
    setObjContact(objContact) {
        this['objContact'] = objContact;
    }

}

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} pkiEzsignsignerID
 */
EzsignsignerResponseCompound.prototype['pkiEzsignsignerID'] = undefined;

/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} fkiTaxassignmentID
 */
EzsignsignerResponseCompound.prototype['fkiTaxassignmentID'] = undefined;

/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
 * @member {Number} fkiSecretquestionID
 */
EzsignsignerResponseCompound.prototype['fkiSecretquestionID'] = undefined;

/**
 * The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
 * @member {Number} fkiUserlogintypeID
 */
EzsignsignerResponseCompound.prototype['fkiUserlogintypeID'] = undefined;

/**
 * The description of the Userlogintype in the language of the requester
 * @member {String} sUserlogintypeDescriptionX
 */
EzsignsignerResponseCompound.prototype['sUserlogintypeDescriptionX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} objContact
 */
EzsignsignerResponseCompound.prototype['objContact'] = undefined;


// Implement EzsignsignerResponse interface:
/**
 * The unique ID of the Ezsignsigner
 * @member {Number} pkiEzsignsignerID
 */
EzsignsignerResponse.prototype['pkiEzsignsignerID'] = undefined;
/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} fkiTaxassignmentID
 */
EzsignsignerResponse.prototype['fkiTaxassignmentID'] = undefined;
/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
 * @member {Number} fkiSecretquestionID
 */
EzsignsignerResponse.prototype['fkiSecretquestionID'] = undefined;
/**
 * The unique ID of the Userlogintype  Valid values:  |Value|Description|Detail| |-|-|-| |1|**Email Only**|The Ezsignsigner will receive a secure link by email| |2|**Email and phone or SMS**|The Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**| |3|**Email and secret question**|The Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer| |4|**In person only**|The Ezsignsigner will only be able to sign \"In-Person\" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type| |5|**In person with phone or SMS**|The Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**|
 * @member {Number} fkiUserlogintypeID
 */
EzsignsignerResponse.prototype['fkiUserlogintypeID'] = undefined;
/**
 * The description of the Userlogintype in the language of the requester
 * @member {String} sUserlogintypeDescriptionX
 */
EzsignsignerResponse.prototype['sUserlogintypeDescriptionX'] = undefined;
// Implement EzsignsignerResponseCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} objContact
 */
EzsignsignerResponseCompoundAllOf.prototype['objContact'] = undefined;




export default EzsignsignerResponseCompound;

