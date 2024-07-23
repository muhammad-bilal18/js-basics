export class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export let root = new TreeNode(1);

let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);
let node9 = new TreeNode(9);
let node10 = new TreeNode(10);
let node11 = new TreeNode(11);
let node12 = new TreeNode(12);
let node13 = new TreeNode(13);
let node14 = new TreeNode(14);
let node15 = new TreeNode(15);

root.left = node2;
root.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node4.left = node8;
node4.right = node9;

node5.left = node10;
node5.right = node11;

node6.left = node12;
node6.right = node13;

node7.left = node14;
node7.right = node15;