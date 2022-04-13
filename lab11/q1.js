/*
Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address.
(Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself*/

const dns = require('dns');
const site = 'www.miu.edu';
dns.lookup(site, (err, address) => {
    if (err) {
        console.log('Error: ', err);
    }
    if (address) {
        console.log('Address: ', address);
    }
});

