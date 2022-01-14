const bls = require('@noble/bls12-381');
const privateKey = '67d53f170b908cabb9eb326c3c337762d59289a8fec79f7bc9254b584b73265c';

const message = '30';

(async () => {
  const publicKey = bls.getPublicKey(privateKey);
  const signature = await bls.sign(message, privateKey);

  let hexPK = Buffer.from(publicKey).toString('hex');
  let hexSig = Buffer.from(signature).toString('hex');
   
  console.log(hexPK);
  console.log(hexSig);

})();