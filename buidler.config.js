// For unit test
usePlugin("@nomiclabs/buidler-truffle5");
// usePlugin("@nomiclabs/builder-ganache");
usePlugin("buidler-gas-reporter");

// // For scripts
// // usePlugin("@nomiclabs/builder-ethers");

// // Faster compilation
// usePlugin("@nomiclabs/builder-docker-solc");

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
    buidlerevm: {
        throwOnTransactionFailures: true
    },
    // This is a sample solc configuration that specifies which version of solc to use
    solc: {
        version: "0.5.12",
        optimizer: {
            enabled: true,
            runs: 200
        },
    },
    paths: {
        sources: "./contracts/5",
    },
    gasReporter: {
        // enabled: (process.env.REPORT_GAS) ? true : false
        enabled: true,
        currency: 'USD'
    },
};
