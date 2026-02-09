// export default function Todo({task, isDone}) {
 
//     return (
//         <li>Task:{task}</li>
//     )
// }
// Conditional Rendering option:1
// export default function Todo({task, isDone}) {
 
//     if(isDone == true){
//         return<li>Finished: {task}</li>
        
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }
// Conditional Rendering option:2
export default function Todo({task, isDone}) {
 
    if(isDone == true){
        
        return<li>Finished: {task}</li>
    
    }
    return <li>work on: {task}</li>
        
    }