import { root, TreeNode } from './binaryTree.mjs';

/*
            1
         /     \
       2         3
     /  \      /    \
    4    5    6      7
   / \  / \  / \    / \
  8  9 10 11 12 13 14 15

*/

function preOrderTraversal(root) {
    if(root === null)
        return;

    let preOrder = [];
    let stack = [];
    stack.push(root);
    while(stack.length !== 0) {
        let top = stack.pop();
        preOrder.push(top.value);
        if(top.right !== null) stack.push(top.right);
        if(top.left !== null) stack.push(top.left);
    }

    return preOrder;
}

let preOrder = preOrderTraversal(root);
// console.log(preOrder);

function inOrderTraversal(root) {
    if (root === null) 
        return;

    let stack = [];
    let inOrder = [];
    let currentNode = root;
    while(true) {
        while(currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        if (stack.length === 0) break;

        currentNode = stack.pop();
        inOrder.push(currentNode.value);
        currentNode = currentNode.right;
    }
    return inOrder;
}

let inOrder = inOrderTraversal(root);
// console.log(inOrder);

function postOrderTraversal(root) {
    if(root === null)
        return;

    let postOrder = [];
    let stack = [];
    let stack2 = [];
    stack.push(root);
    while(stack.length !== 0) {
        let top = stack.pop();
        stack2.push(top.value);
        if (top.left !== null) stack.push(top.left);
        if (top.right !== null) stack.push(top.right);
    }
    stack2.reverse();
    return stack2;
}

let postOrder = postOrderTraversal(root);
// console.log(postOrder);

function levelOrderTraversal(root) {
    if(root === null) return;
    let queue = []; queue.push(root);
    let levelOrder = [];
    while(queue.length > 0) {
        let front = queue.shift();
        levelOrder.push(front.value);
        if(front.left !== null) queue.push(front.left);
        if(front.right !== null) queue.push(front.right);
    }
    return levelOrder;
}

let levelOrder = levelOrderTraversal(root);
//console.log(levelOrder);

function insertNode(root, value) {
    if (root === null) {
        root = new TreeNode(value);
        return;
    }
    let queue = []; queue.push(root);
    while(queue.length > 0) {
        let front = queue.shift();
        if(front.left === null) {
            front.left = new TreeNode(value);
            return;
        }
        if(front.right === null) {
            front.right = new TreeNode(value);
            return;
        }
        queue.push(front.left);
        queue.push(front.right);
    }
}

insertNode(root, 16);
insertNode(root, 17);
// console.log(preOrderTraversal(root));

function getSuccessor(root) {
    if (root === null) return null;

    let queue = [root];
    let successor = null;

    while (queue.length > 0) {
        let front = queue.shift();
        if (front.left !== null) {
            queue.push(front.left);
        }
        if (front.right !== null) {
            queue.push(front.right);
        }
        successor = front;
    }

    return successor;
}

function deleteNode(root, value) {
    if (root === null) return;

    let queue = [root];
    let nodeToDelete = null;
    let deepestNode = null;
    let parentOfDeepestNode = null;

    while (queue.length > 0) {
        let front = queue.shift();
        if (front.value === value) {
            nodeToDelete = front;
        }

        if (front.left !== null) {
            queue.push(front.left);
            parentOfDeepestNode = front;
            deepestNode = front.left;
        }
        if (front.right !== null) {
            queue.push(front.right);
            parentOfDeepestNode = front;
            deepestNode = front.right;
        }
    }

    if (nodeToDelete !== null) {
        if (deepestNode !== null) {
            nodeToDelete.value = deepestNode.value;
            if (parentOfDeepestNode.left === deepestNode) {
                parentOfDeepestNode.left = null;
            } else {
                parentOfDeepestNode.right = null;
            }
        } else {
            nodeToDelete = null;
        }
    }
}

deleteNode(root, 5);
// console.log(levelOrderTraversal(root));

function search(root, value) {
    if(root === null) return false;
    let queue = []; queue.push(root);
    while(queue.length > 0) {
        let front = queue.shift();
        if(front.value === value) return true;
        if(front.left !== null) queue.push(front.left);
        if(front.right !== null) queue.push(front.right);
    }
    return false;
}

let num = 5;
// if(search(root, num))
//     console.log(`${num} is present`);
// else
//     console.log(`${num} is not present`);


function update(root, oldval, newval) {
    if(root === null) return;
    let queue = []; queue.push(root);
    while(queue.length > 0) {
        let front = queue.shift();
        if(front.value === oldval) {
            front.value = newval;
        } 
        if(front.left !== null) queue.push(front.left);
        if(front.right !== null) queue.push(front.right);
    }
}

update(root, 1, 100);
console.log(preOrderTraversal(root));