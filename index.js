'use strict';

var kobo_bitcore = module.exports;

// module information
kobo_bitcore.version = 'v' + require('./package.json').version;
kobo_bitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of kobo-bitcore-lib found. ' + 
      'Please make sure to require kobo-bitcore-lib and check that submodules do' +
      ' not also include their own kobo-bitcore-lib dependency.';
    throw new Error(message);
  }
};
kobo_bitcore.versionGuard(global._kobo_bitcore);
global._kobo_bitcore = kobo_bitcore.version;

// crypto
kobo_bitcore.crypto = {};
kobo_bitcore.crypto.BN = require('./lib/crypto/bn');
kobo_bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
kobo_bitcore.crypto.Hash = require('./lib/crypto/hash');
kobo_bitcore.crypto.Random = require('./lib/crypto/random');
kobo_bitcore.crypto.Point = require('./lib/crypto/point');
kobo_bitcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
kobo_bitcore.encoding = {};
kobo_bitcore.encoding.Base58 = require('./lib/encoding/base58');
kobo_bitcore.encoding.Base58Check = require('./lib/encoding/base58check');
kobo_bitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
kobo_bitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
kobo_bitcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
kobo_bitcore.util = {};
kobo_bitcore.util.buffer = require('./lib/util/buffer');
kobo_bitcore.util.js = require('./lib/util/js');
kobo_bitcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
kobo_bitcore.errors = require('./lib/errors');

// main bitcoin library
kobo_bitcore.Address = require('./lib/address');
kobo_bitcore.Block = require('./lib/block');
kobo_bitcore.MerkleBlock = require('./lib/block/merkleblock');
kobo_bitcore.BlockHeader = require('./lib/block/blockheader');
kobo_bitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
kobo_bitcore.HDPublicKey = require('./lib/hdpublickey.js');
kobo_bitcore.Networks = require('./lib/networks');
kobo_bitcore.Opcode = require('./lib/opcode');
kobo_bitcore.PrivateKey = require('./lib/privatekey');
kobo_bitcore.PublicKey = require('./lib/publickey');
kobo_bitcore.Script = require('./lib/script');
kobo_bitcore.Transaction = require('./lib/transaction');
kobo_bitcore.URI = require('./lib/uri');
kobo_bitcore.Unit = require('./lib/unit');

// dependencies, subject to change
kobo_bitcore.deps = {};
kobo_bitcore.deps.bnjs = require('bn.js');
kobo_bitcore.deps.bs58 = require('bs58');
kobo_bitcore.deps.Buffer = Buffer;
kobo_bitcore.deps.elliptic = require('elliptic');
kobo_bitcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
kobo_bitcore._HDKeyCache = require('./lib/hdkeycache');
kobo_bitcore.Transaction.sighash = require('./lib/transaction/sighash');
