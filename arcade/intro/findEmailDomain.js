function findEmailDomain(address) {
  return address.slice(1 + address.lastIndexOf('@'));
}
