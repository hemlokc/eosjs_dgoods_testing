module.exports = function GetAccount(rpc, account) {
  rpc.get_account(account).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log("ERROR: ", err);
  })
}
