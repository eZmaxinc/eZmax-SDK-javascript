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

/**
 * The SecretquestionAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/SecretquestionAutocompleteElementResponse
 * @version 1.1.18
 */
class SecretquestionAutocompleteElementResponse {
    /**
     * Constructs a new <code>SecretquestionAutocompleteElementResponse</code>.
     * A Secretquestion AutocompleteElement Response
     * @alias module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse
     * @param sSecretquestionTextX {String} The text of the Secretquestion in the language of the requester
     * @param pkiSecretquestionID {Number} The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * @param bSecretquestionIsactive {Boolean} Whether the Secretquestion is active or not
     */
    constructor(sSecretquestionTextX, pkiSecretquestionID, bSecretquestionIsactive) { 
        
        SecretquestionAutocompleteElementResponse.initialize(this, sSecretquestionTextX, pkiSecretquestionID, bSecretquestionIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sSecretquestionTextX, pkiSecretquestionID, bSecretquestionIsactive) { 
        obj['sSecretquestionTextX'] = sSecretquestionTextX;
        obj['pkiSecretquestionID'] = pkiSecretquestionID;
        obj['bSecretquestionIsactive'] = bSecretquestionIsactive;
    }

    /**
     * Constructs a <code>SecretquestionAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse} The populated <code>SecretquestionAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretquestionAutocompleteElementResponse();

            if (data.hasOwnProperty('sSecretquestionTextX')) {
                obj['sSecretquestionTextX'] = ApiClient.convertToType(data['sSecretquestionTextX'], 'String');
            }
            if (data.hasOwnProperty('pkiSecretquestionID')) {
                obj['pkiSecretquestionID'] = ApiClient.convertToType(data['pkiSecretquestionID'], 'Number');
            }
            if (data.hasOwnProperty('bSecretquestionIsactive')) {
                obj['bSecretquestionIsactive'] = ApiClient.convertToType(data['bSecretquestionIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretquestionAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretquestionAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecretquestionAutocompleteElementResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sSecretquestionTextX'] && !(typeof data['sSecretquestionTextX'] === 'string' || data['sSecretquestionTextX'] instanceof String)) {
            throw new Error("Expected the field `sSecretquestionTextX` to be a primitive type in the JSON string but got " + data['sSecretquestionTextX']);
        }

        return true;
    }

/**
     * Returns The text of the Secretquestion in the language of the requester
     * @return {String}
     */
    getSSecretquestionTextX() {
        return this.sSecretquestionTextX;
    }

    /**
     * Sets The text of the Secretquestion in the language of the requester
     * @param {String} sSecretquestionTextX The text of the Secretquestion in the language of the requester
     */
    setSSecretquestionTextX(sSecretquestionTextX) {
        this['sSecretquestionTextX'] = sSecretquestionTextX;
    }
/**
     * Returns The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * minimum: 0
     * @return {Number}
     */
    getPkiSecretquestionID() {
        return this.pkiSecretquestionID;
    }

    /**
     * Sets The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     * @param {Number} pkiSecretquestionID The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
     */
    setPkiSecretquestionID(pkiSecretquestionID) {
        this['pkiSecretquestionID'] = pkiSecretquestionID;
    }
/**
     * Returns Whether the Secretquestion is active or not
     * @return {Boolean}
     */
    getBSecretquestionIsactive() {
        return this.bSecretquestionIsactive;
    }

    /**
     * Sets Whether the Secretquestion is active or not
     * @param {Boolean} bSecretquestionIsactive Whether the Secretquestion is active or not
     */
    setBSecretquestionIsactive(bSecretquestionIsactive) {
        this['bSecretquestionIsactive'] = bSecretquestionIsactive;
    }

}

SecretquestionAutocompleteElementResponse.RequiredProperties = ["sSecretquestionTextX", "pkiSecretquestionID", "bSecretquestionIsactive"];

/**
 * The text of the Secretquestion in the language of the requester
 * @member {String} sSecretquestionTextX
 */
SecretquestionAutocompleteElementResponse.prototype['sSecretquestionTextX'] = undefined;

/**
 * The unique ID of the Secretquestion.  Valid values:  |Value|Description| |-|-| |1|The name of the hospital in which you were born| |2|The name of your grade school| |3|The last name of your favorite teacher| |4|Your favorite sports team| |5|Your favorite TV show| |6|Your favorite movie| |7|The name of the street on which you grew up| |8|The name of your first employer| |9|Your first car| |10|Your favorite food| |11|The name of your first pet| |12|Favorite musician/band| |13|What instrument you play| |14|Your father's middle name| |15|Your mother's maiden name| |16|Name of your eldest child| |17|Your spouse's middle name| |18|Favorite restaurant| |19|Childhood nickname| |20|Favorite vacation destination| |21|Your boat's name| |22|Date of Birth (YYYY-MM-DD)|
 * @member {Number} pkiSecretquestionID
 */
SecretquestionAutocompleteElementResponse.prototype['pkiSecretquestionID'] = undefined;

/**
 * Whether the Secretquestion is active or not
 * @member {Boolean} bSecretquestionIsactive
 */
SecretquestionAutocompleteElementResponse.prototype['bSecretquestionIsactive'] = undefined;






export default SecretquestionAutocompleteElementResponse;

