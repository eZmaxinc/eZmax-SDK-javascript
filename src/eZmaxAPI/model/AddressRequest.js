/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddressRequest model module.
 * @module eZmaxAPI/model/AddressRequest
 * @version 1.1.16
 */
class AddressRequest {
    /**
     * Constructs a new <code>AddressRequest</code>.
     * An Address Object
     * @alias module:eZmaxAPI/model/AddressRequest
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
     * Constructs a <code>AddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AddressRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AddressRequest} The populated <code>AddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressRequest();

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
        }
        return obj;
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

}

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






export default AddressRequest;

