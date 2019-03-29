var randstormUtils = {
    validateLength: function validateLength(length) {
        if( !(Number.isInteger(length) && length > 0) ) {
            throw "Invalid string length";
        }
    },

    generateSequence: function generateSequence(length, generator) {
        var arr = [];
        var i = 0;

        this.validateLength(length);

        while(i < length) {
            arr.push(generator());
            i ++;
        }

        return arr.join('');
    }
};

var randstorm = {
    // numbers
    nativeRandom: function nativeRandom() {
        return Math.random();
    },

    integerNumber: function integerNumber(min, max) {
        min = min == null? Number.MIN_SAFE_INTEGER : min;
        max = max == null? Number.MAX_SAFE_INTEGER : max;

        return Math.floor(this.nativeRandom()*(max-min+1)+min);
    },

    naturalNumber: function naturalNumber(max) {
        max = max == null? Number.MAX_SAFE_INTEGER : max;

        return this.integerNumber(0, max);
    },

	// booleans
	bool: function bool() {
	    var range = [true, false];

        return range[this.naturalNumber(1)];
    },

    // characters
    utf8Char: function utf8Char() {
        return String.fromCharCode(this.naturalNumber(0x27BF));
    },

    asciiChar: function asciiChar() {
        return String.fromCharCode(this.naturalNumber(0x7F));
    },

    alphabetChar: function alphabetChar() {
        var range = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return range.charAt(this.naturalNumber(range.length - 1));
    },

    alphaNumericChar: function alphaNumericChar() {
        var range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return range.charAt(this.naturalNumber(range.length - 1));
    },

    hexChar: function hexChar() {
        var range = 'abcdef0123456789';

        return range.charAt(this.naturalNumber(range.length - 1));
    },

    // strings
    utf8String: function utf8String(length) {
        return randstormUtils.generateSequence(length, this.utf8Char.bind(this));
    },

    asciiString: function asciiString(length) {
        return randstormUtils.generateSequence(length, this.asciiChar.bind(this));
    },

    alphabetString: function alphabetString(length) {
        return randstormUtils.generateSequence(length, this.alphabetChar.bind(this));
    },

    alphaNumericString: function alphaNumericString(length) {
        return randstormUtils.generateSequence(length, this.alphaNumericChar.bind(this));
    },

    hexString: function hexString(length) {
        return randstormUtils.generateSequence(length, this.hexChar.bind(this));
    },

    url: function url(length, protocol) {
        var domains = [
            '.example',
            '.invalid',
            '.local',
            '.localhost',
            '.onion',
            '.test',
            '.com',
            '.org',
            '.net',
            '.int',
            '.edu',
            '.gov',
            '.io',
            '.mil'
        ];

        var partLength = Math.ceil(length / 2);
        var domain = this.alphaNumericString(partLength) + domains[this.naturalNumber(domains.length - 1)];
        var endpoint = this.alphaNumericString(partLength);

        if(protocol == null) {
            protocol = 'http://';
        }

        return protocol + domain + '/' + endpoint;
    }
};


module.exports = randstorm;

