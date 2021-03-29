console.log("HI");

// SETS CREATION 

const ids=new Set([1,2,3,4,5]);

ids.add(2); //NO DUBLICATION

console.log(ids);

console.log(ids.has(1)); //for checking

const ids1= new Set(["HI","From","HEllo"]);

ids1.add(2)

console.log(ids1);

// for iterating in sets we use set.entries() method

for(const entry of ids1.entries()){
    console.log(entry);
}

// to remove elements from sets we use .delete()

if(ids1.has("HI")){
    ids1.delete("HI");
}
console.log(ids1);
