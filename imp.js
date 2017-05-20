var p = require("./dsa.js");


for (var i = 0; i < 10; i++) {
    p.add(i);
}
console.log("printLikeList");
p.printLikeList();
console.log("printLikePile");
p.printLikePile();
console.log("getFirstList"); 
console.log(p.getFirst());
console.log("getLast or first on 'pile model'");
console.log(p.getLast());
console.log("get index 5 (6th item)");
console.log(p.getItem(5));
console.log("delFirst");
p.delFirst();
p.printLikeList();
console.log("delLast");
p.delLast();
p.printLikeList();
console.log("delItem 3 (4th Item)");
p.delItem(3);
p.printLikeList();
