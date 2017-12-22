function variableName(name) {
  const latinsUnderscoreNumerals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz_0123456789';
  return isNaN(1 * name[0]) && name.split('').every( char => {
    return latinsUnderscoreNumerals.includes(char);
  });
}
