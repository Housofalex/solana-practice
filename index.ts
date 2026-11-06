import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";

const address = process.argv[2];
if (!address) {
  console.log("Usage: npx tsx index.ts <wallet-address>");
  process.exit(1);
}

let pubkey: PublicKey;
try {
  pubkey = new PublicKey(address);
} catch {
  console.log("That's not a valid Solana address.");
  process.exit(1);
}

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const balance = await connection.getBalance(pubkey);
console.log(`Balance: ${balance / LAMPORTS_PER_SOL} SOL`);