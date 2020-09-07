const tree = {
    data:1,
    left:{
        data:2,
        left: {
            data:4
        },
        right: {
            data:5
        }
    },
    right:{
        data:3, 
        // left: {
        //     data:6
        // },
        right: {
            data:7,
            // left:{
            //     data:100
            // }
        }
    }
}





function isCompleteBinaryTree(node) {
    const queue = [];
    const output = [];
    let judgeComplete = true;
    let startTest = false;
    
    function visitLoop(node) {
        if( node ) {
            
            if(node.left === undefined && node.right !== undefined) {
                judgeComplete = false;
            } 
  
            if(startTest === true ) {
                if (node.left !== undefined || node.right !== undefined){
                    judgeComplete = false;
                }
            }

            if( node.right === undefined ) {
                startTest = true;
                // console.log(`触发检测 startTest 的结点是:${node.data}`);
            }

            output.push(node.data);

            if(node.left) {
                queue.unshift(node.left);
            }
            if(node.right) {
                queue.unshift(node.right);
            }
            visitLoop(queue.pop());
        }
    }
    visitLoop(node);
    console.log(output);
    console.log(judgeComplete);
    // console.log(`Break Node Is:${breakNode}`)
}

isCompleteBinaryTree(tree);
// console.log(output);