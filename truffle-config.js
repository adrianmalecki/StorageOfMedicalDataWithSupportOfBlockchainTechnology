module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: 1337, 
      gas: 5000000
    }
  },
  compilers: {
    solc: {
       version: "0.8.3",  
    }
  }
};
