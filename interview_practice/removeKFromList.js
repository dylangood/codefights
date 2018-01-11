// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  var lastNonKNode = null;
  var head = null;
  var headFound = false;
  var currentNode = l;
  while (currentNode !== null) {
    if (currentNode.value !== k) {
      if (!headFound) {
        head = currentNode;
        headFound = true;
      }
      if (lastNonKNode) { lastNonKNode.next = currentNode; }
      lastNonKNode = currentNode;
    }
    if (currentNode.next === null && lastNonKNode) {
      lastNonKNode.next = null;
    }
    currentNode = currentNode.next;
  }
  return head;
}
