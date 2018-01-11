// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  var current = l;
  var list = [];
  while (current) {
    list.push(current.value);
    current = current.next;
  }
  var firstHalf = list.slice(0, Math.floor(list.length / 2));
  var secondHalf = list.reverse().slice(0, Math.floor(list.length / 2));
  for (var i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] !== secondHalf[i]) { return false; }
  }
  return true;
}
// function isListPalindrome(l, endValue) {
//   if (!l || !l.next) {
//     return endValue === undefined ? true : l.value === endValue;
//   }
//   return isListPalindrome(l.next, l.value);
// }
