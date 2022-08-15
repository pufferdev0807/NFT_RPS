import { PRODUCTION } from "./index"
export const BINANCE_TEST = "https://data-seed-prebsc-1-s1.binance.org:8545/";
export const BINANCE_MAIN = "https://bsc-dataseed.binance.org/";
export const BINANCE_TEST_ID = "0x61";
export const BINANCE_MAIN_ID = "0x38";
export const ETHEREUM_TEST = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
export const ETHEREUM_MAIN = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
export const ETHEREUM_TEST_ID = "0x4";
export const ETHEREUM_MAIN_ID = "0x1";

export const BINANCE_TEST_SPS_ADDRESS = "0x44396cDf6a072790F75200b3ae277D6D753E529c";
export const BINANCE_MAIN_SPS_ADDRESS = "";
export const ETHEREUM_TEST_SPS_ADDRESS = "";
export const ETHEREUM_MAIN_SPS_ADDRESS = "";

export const BINANCE_URL = PRODUCTION ? BINANCE_MAIN : BINANCE_TEST;
export const BINANCE_ID = PRODUCTION ? BINANCE_MAIN_ID : BINANCE_TEST_ID;
export const ETHEREUM_URL = PRODUCTION ? ETHEREUM_MAIN : ETHEREUM_TEST;
export const ETHEREUM_ID = PRODUCTION ? ETHEREUM_MAIN_ID : ETHEREUM_TEST_ID;

export const BINANCE_SPS_ADDRESS = PRODUCTION ? BINANCE_MAIN_SPS_ADDRESS : BINANCE_TEST_SPS_ADDRESS;
export const ETHEREUM_SPS_ADDRESS = PRODUCTION ? ETHEREUM_TEST_SPS_ADDRESS : ETHEREUM_MAIN_SPS_ADDRESS;