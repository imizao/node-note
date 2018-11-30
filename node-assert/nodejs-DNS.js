const dns = require('dns')
// console.log(dns)
// dns.lookup('isjs.net', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address,family)
// })

// dns.resolve4('isjs.net', (err, addresses) => {
//   if (err) throw err;

//   console.log(`addresses: ${JSON.stringify(addresses)}`);

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }

//       console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//     })
//   })
// })

const dnsPromises = dns.promises;
dnsPromises.lookupService('127.0.0.1',22).then((result) => {
  console.log(result.hostname,result.service)
})