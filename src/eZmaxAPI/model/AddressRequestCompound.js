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
import AddressRequest from './AddressRequest';

/**
 * The AddressRequestCompound model module.
 * @module eZmaxAPI/model/AddressRequestCompound
 * @version 1.2.0
 */
class AddressRequestCompound {
    /**
     * Constructs a new <code>AddressRequestCompound</code>.
     * An Address Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/AddressRequestCompound
     * @implements module:eZmaxAPI/model/AddressRequest
     * @param fkiAddresstypeID {Number} The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
     * @param sAddressCivic {String} The Civic number.
     * @param sAddressStreet {String} The Street Name
     * @param sAddressSuite {String} The Suite or appartment number
     * @param sAddressCity {String} The City name
     * @param fkiProvinceID {Number} The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
     * @param fkiCountryID {Number} The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * @param sAddressZip {String} The Postal/Zip Code  The value must be entered without spaces
     */
    constructor(fkiAddresstypeID, sAddressCivic, sAddressStreet, sAddressSuite, sAddressCity, fkiProvinceID, fkiCountryID, sAddressZip) { 
        AddressRequest.initialize(this, fkiAddresstypeID, sAddressCivic, sAddressStreet, sAddressSuite, sAddressCity, fkiProvinceID, fkiCountryID, sAddressZip);
        AddressRequestCompound.initialize(this, fkiAddresstypeID, sAddressCivic, sAddressStreet, sAddressSuite, sAddressCity, fkiProvinceID, fkiCountryID, sAddressZip);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiAddresstypeID, sAddressCivic, sAddressStreet, sAddressSuite, sAddressCity, fkiProvinceID, fkiCountryID, sAddressZip) { 
        obj['fkiAddresstypeID'] = fkiAddresstypeID;
        obj['sAddressCivic'] = sAddressCivic;
        obj['sAddressStreet'] = sAddressStreet;
        obj['sAddressSuite'] = sAddressSuite;
        obj['sAddressCity'] = sAddressCity;
        obj['fkiProvinceID'] = fkiProvinceID;
        obj['fkiCountryID'] = fkiCountryID;
        obj['sAddressZip'] = sAddressZip;
    }

    /**
     * Constructs a <code>AddressRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AddressRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AddressRequestCompound} The populated <code>AddressRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressRequestCompound();
            AddressRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('fkiAddresstypeID')) {
                obj['fkiAddresstypeID'] = ApiClient.convertToType(data['fkiAddresstypeID'], 'Number');
            }
            if (data.hasOwnProperty('sAddressCivic')) {
                obj['sAddressCivic'] = ApiClient.convertToType(data['sAddressCivic'], 'String');
            }
            if (data.hasOwnProperty('sAddressStreet')) {
                obj['sAddressStreet'] = ApiClient.convertToType(data['sAddressStreet'], 'String');
            }
            if (data.hasOwnProperty('sAddressSuite')) {
                obj['sAddressSuite'] = ApiClient.convertToType(data['sAddressSuite'], 'String');
            }
            if (data.hasOwnProperty('sAddressCity')) {
                obj['sAddressCity'] = ApiClient.convertToType(data['sAddressCity'], 'String');
            }
            if (data.hasOwnProperty('fkiProvinceID')) {
                obj['fkiProvinceID'] = ApiClient.convertToType(data['fkiProvinceID'], 'Number');
            }
            if (data.hasOwnProperty('fkiCountryID')) {
                obj['fkiCountryID'] = ApiClient.convertToType(data['fkiCountryID'], 'Number');
            }
            if (data.hasOwnProperty('sAddressZip')) {
                obj['sAddressZip'] = ApiClient.convertToType(data['sAddressZip'], 'String');
            }
            if (data.hasOwnProperty('fAddressLongitude')) {
                obj['fAddressLongitude'] = ApiClient.convertToType(data['fAddressLongitude'], 'String');
            }
            if (data.hasOwnProperty('fAddressLatitude')) {
                obj['fAddressLatitude'] = ApiClient.convertToType(data['fAddressLatitude'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressRequestCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sAddressCivic'] && !(typeof data['sAddressCivic'] === 'string' || data['sAddressCivic'] instanceof String)) {
            throw new Error("Expected the field `sAddressCivic` to be a primitive type in the JSON string but got " + data['sAddressCivic']);
        }
        // ensure the json data is a string
        if (data['sAddressStreet'] && !(typeof data['sAddressStreet'] === 'string' || data['sAddressStreet'] instanceof String)) {
            throw new Error("Expected the field `sAddressStreet` to be a primitive type in the JSON string but got " + data['sAddressStreet']);
        }
        // ensure the json data is a string
        if (data['sAddressSuite'] && !(typeof data['sAddressSuite'] === 'string' || data['sAddressSuite'] instanceof String)) {
            throw new Error("Expected the field `sAddressSuite` to be a primitive type in the JSON string but got " + data['sAddressSuite']);
        }
        // ensure the json data is a string
        if (data['sAddressCity'] && !(typeof data['sAddressCity'] === 'string' || data['sAddressCity'] instanceof String)) {
            throw new Error("Expected the field `sAddressCity` to be a primitive type in the JSON string but got " + data['sAddressCity']);
        }
        // ensure the json data is a string
        if (data['sAddressZip'] && !(typeof data['sAddressZip'] === 'string' || data['sAddressZip'] instanceof String)) {
            throw new Error("Expected the field `sAddressZip` to be a primitive type in the JSON string but got " + data['sAddressZip']);
        }
        // ensure the json data is a string
        if (data['fAddressLongitude'] && !(typeof data['fAddressLongitude'] === 'string' || data['fAddressLongitude'] instanceof String)) {
            throw new Error("Expected the field `fAddressLongitude` to be a primitive type in the JSON string but got " + data['fAddressLongitude']);
        }
        // ensure the json data is a string
        if (data['fAddressLatitude'] && !(typeof data['fAddressLatitude'] === 'string' || data['fAddressLatitude'] instanceof String)) {
            throw new Error("Expected the field `fAddressLatitude` to be a primitive type in the JSON string but got " + data['fAddressLatitude']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
     * minimum: 0
     * @return {Number}
     */
    getFkiAddresstypeID() {
        return this.fkiAddresstypeID;
    }

    /**
     * Sets The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
     * @param {Number} fkiAddresstypeID The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
     */
    setFkiAddresstypeID(fkiAddresstypeID) {
        this['fkiAddresstypeID'] = fkiAddresstypeID;
    }
/**
     * Returns The Civic number.
     * @return {String}
     */
    getSAddressCivic() {
        return this.sAddressCivic;
    }

    /**
     * Sets The Civic number.
     * @param {String} sAddressCivic The Civic number.
     */
    setSAddressCivic(sAddressCivic) {
        this['sAddressCivic'] = sAddressCivic;
    }
/**
     * Returns The Street Name
     * @return {String}
     */
    getSAddressStreet() {
        return this.sAddressStreet;
    }

    /**
     * Sets The Street Name
     * @param {String} sAddressStreet The Street Name
     */
    setSAddressStreet(sAddressStreet) {
        this['sAddressStreet'] = sAddressStreet;
    }
/**
     * Returns The Suite or appartment number
     * @return {String}
     */
    getSAddressSuite() {
        return this.sAddressSuite;
    }

    /**
     * Sets The Suite or appartment number
     * @param {String} sAddressSuite The Suite or appartment number
     */
    setSAddressSuite(sAddressSuite) {
        this['sAddressSuite'] = sAddressSuite;
    }
/**
     * Returns The City name
     * @return {String}
     */
    getSAddressCity() {
        return this.sAddressCity;
    }

    /**
     * Sets The City name
     * @param {String} sAddressCity The City name
     */
    setSAddressCity(sAddressCity) {
        this['sAddressCity'] = sAddressCity;
    }
/**
     * Returns The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
     * minimum: 0
     * @return {Number}
     */
    getFkiProvinceID() {
        return this.fkiProvinceID;
    }

    /**
     * Sets The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
     * @param {Number} fkiProvinceID The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
     */
    setFkiProvinceID(fkiProvinceID) {
        this['fkiProvinceID'] = fkiProvinceID;
    }
/**
     * Returns The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * minimum: 0
     * @return {Number}
     */
    getFkiCountryID() {
        return this.fkiCountryID;
    }

    /**
     * Sets The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * @param {Number} fkiCountryID The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     */
    setFkiCountryID(fkiCountryID) {
        this['fkiCountryID'] = fkiCountryID;
    }
/**
     * Returns The Postal/Zip Code  The value must be entered without spaces
     * @return {String}
     */
    getSAddressZip() {
        return this.sAddressZip;
    }

    /**
     * Sets The Postal/Zip Code  The value must be entered without spaces
     * @param {String} sAddressZip The Postal/Zip Code  The value must be entered without spaces
     */
    setSAddressZip(sAddressZip) {
        this['sAddressZip'] = sAddressZip;
    }
/**
     * Returns The Longitude of the Address
     * @return {String}
     */
    getFAddressLongitude() {
        return this.fAddressLongitude;
    }

    /**
     * Sets The Longitude of the Address
     * @param {String} fAddressLongitude The Longitude of the Address
     */
    setFAddressLongitude(fAddressLongitude) {
        this['fAddressLongitude'] = fAddressLongitude;
    }
/**
     * Returns The Latitude of the Address
     * @return {String}
     */
    getFAddressLatitude() {
        return this.fAddressLatitude;
    }

    /**
     * Sets The Latitude of the Address
     * @param {String} fAddressLatitude The Latitude of the Address
     */
    setFAddressLatitude(fAddressLatitude) {
        this['fAddressLatitude'] = fAddressLatitude;
    }

}

AddressRequestCompound.RequiredProperties = ["fkiAddresstypeID", "sAddressCivic", "sAddressStreet", "sAddressSuite", "sAddressCity", "fkiProvinceID", "fkiCountryID", "sAddressZip"];

/**
 * The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
 * @member {Number} fkiAddresstypeID
 */
AddressRequestCompound.prototype['fkiAddresstypeID'] = undefined;

/**
 * The Civic number.
 * @member {String} sAddressCivic
 */
AddressRequestCompound.prototype['sAddressCivic'] = undefined;

/**
 * The Street Name
 * @member {String} sAddressStreet
 */
AddressRequestCompound.prototype['sAddressStreet'] = undefined;

/**
 * The Suite or appartment number
 * @member {String} sAddressSuite
 */
AddressRequestCompound.prototype['sAddressSuite'] = undefined;

/**
 * The City name
 * @member {String} sAddressCity
 */
AddressRequestCompound.prototype['sAddressCity'] = undefined;

/**
 * The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
 * @member {Number} fkiProvinceID
 */
AddressRequestCompound.prototype['fkiProvinceID'] = undefined;

/**
 * The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
 * @member {Number} fkiCountryID
 */
AddressRequestCompound.prototype['fkiCountryID'] = undefined;

/**
 * The Postal/Zip Code  The value must be entered without spaces
 * @member {String} sAddressZip
 */
AddressRequestCompound.prototype['sAddressZip'] = undefined;

/**
 * The Longitude of the Address
 * @member {String} fAddressLongitude
 */
AddressRequestCompound.prototype['fAddressLongitude'] = undefined;

/**
 * The Latitude of the Address
 * @member {String} fAddressLatitude
 */
AddressRequestCompound.prototype['fAddressLatitude'] = undefined;


// Implement AddressRequest interface:
/**
 * The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
 * @member {Number} fkiAddresstypeID
 */
AddressRequest.prototype['fkiAddresstypeID'] = undefined;
/**
 * The Civic number.
 * @member {String} sAddressCivic
 */
AddressRequest.prototype['sAddressCivic'] = undefined;
/**
 * The Street Name
 * @member {String} sAddressStreet
 */
AddressRequest.prototype['sAddressStreet'] = undefined;
/**
 * The Suite or appartment number
 * @member {String} sAddressSuite
 */
AddressRequest.prototype['sAddressSuite'] = undefined;
/**
 * The City name
 * @member {String} sAddressCity
 */
AddressRequest.prototype['sAddressCity'] = undefined;
/**
 * The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
 * @member {Number} fkiProvinceID
 */
AddressRequest.prototype['fkiProvinceID'] = undefined;
/**
 * The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
 * @member {Number} fkiCountryID
 */
AddressRequest.prototype['fkiCountryID'] = undefined;
/**
 * The Postal/Zip Code  The value must be entered without spaces
 * @member {String} sAddressZip
 */
AddressRequest.prototype['sAddressZip'] = undefined;
/**
 * The Longitude of the Address
 * @member {String} fAddressLongitude
 */
AddressRequest.prototype['fAddressLongitude'] = undefined;
/**
 * The Latitude of the Address
 * @member {String} fAddressLatitude
 */
AddressRequest.prototype['fAddressLatitude'] = undefined;




export default AddressRequestCompound;

