# randstorm
Random values generator for different data types

## Installation
Just clone the repo and copy the file randstorm.js into the folder of your convenience 

## Usage
1. Require it and assign to a variable
```sh
var rs = require('randstorm');
```
2. Call the desired method on it.
```sh
console.log(rs.nativeRandom());
```

## API

nativeRandom():
* Currently a wrapper of Math.random
* Returns: a number between 0 and 1

integerNumber([min], [max]):
* Returns an integer number between min and max.
* min (optional): Minimum desired value (defaults to Number.MIN_SAFE_INTEGER)
* max (optional): Maximum desired value (defaults to Number.MAX_SAFE_INTEGER)
 
naturalNumber([max]):
* Returns a positive integer number up to <max>
* max (optional): Maximum desired value (defaults to Number.MAX_SAFE_INTEGER)
  
bool():
* Returns either true or false randomly

utf8Char();
* Returns a random character from the utf8 range

asciiChar():
* Returns a random ASCII character

alphabetChar():
* Returns a random character from the alphabet, either upper case or lower case

alphaNumericChar():
* Returns a random character from the alphabet and from the 0-9 range

hexChar():
* Returns a random character from the hexadecmal notation [0-9],[a-f]

utf8String(length):
* Returns a sequence of <length> random utf8 characters
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
  
asciiString(length):
* Returns a sequence of <length> random ASCII characters
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
  
alphabetString(length):
* Returns a sequence of <length> random characters from the alphabet using upper case and lower case letters
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
  
alphaNumericString(length):
* Returns a sequence of <length> random characters from the alphabet and the 0-9 range using upper case and lower case letters
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
  
hexString(length):
* Returns a sequence of <length> random characters from the hexadecimal notation
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
  
url(length, [scheme]):
* Returns a url-like string with the following form: scheme+domain_name.top_level_domain/endpoint where:
* scheme (optional): defaults to http:// 
* domain_name: random alphanumeric string of <lenght / 2> charachters
* top_level_domain: randomly picked from the list shown below
* endpoint: random alphanumeric string of <lenght / 2> charachters
* length is mandatory and must be a positive integer number, otherwise "Invalid string length" exception s thrown
* Top-level domains available:
            .example,
            .invalid,
            .local,
            .localhost,
            .onion,
            .test,
            .com,
            .org,
            .net,
            .int,
            .edu,
            .gov,
            .io,
            .mil
