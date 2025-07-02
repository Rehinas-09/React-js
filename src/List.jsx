function List(){
   const fruits=[{name:"apple",calories:95},
                 {name:"orange",calories:45},
                 {name:"banana",calories:105},
                 {name:"coconut",calories:159},
                 {name:"pineapple",calories:37}]
   fruits.sort()
   const listItem=fruits.map(fruit=><li>{fruit}</li>)
   return(<ul>{listItem}</ul>)
}                                             
export default List()                              