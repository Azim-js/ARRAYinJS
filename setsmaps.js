console.log("HI");

// SETS CREATION 

const ids=new Set([1,2,3,4,5]);

ids.add(2); //NO DUBLICATION

console.log(ids);

console.log(ids.has(1)); //for checking

const ids1= new Set(["HI","From","HEllo"]);

ids1.add(2);

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



// MAPS()

const person1={name:'Azim'};
const person2={name:"Ummar"};

const personData = new Map([[person1,[{date:'yesterday',price:10}]]]);

console.log(personData);


console.log(personData.get(person1)); //to access the elements in maps keys-> value

personData.set(person2,[{date:"to weeks ago",price:100}]);

console.log(personData);



// .entries() for MAPs

for(const entry of personData.entries()){
    console.log(entry);
   
}

// how to use destrucotrs for Maps for accesiing key and values

for(const [key,value] of personData.entries()){
    console.log(key,value);
}

// keys()

for(const key of personData.keys()){
    console.log(key);
}

// values()

for(const value of personData.values()){
    console.log(value);
}

// size,clear,entries,set

console.log(personData.size);

// WeakSet() used for garbage colletion as for archiving

let person={name:"Azim"};
const persons=new WeakSet();

// .add() .clear as objects used is set ->weak set()

persons.add(person);

// person=null; // checking if freed or not

console.log(persons); //still stays as it is used for garbage collection


// WEAkMAPS() for garbage collection

const personsData= new WeakMap();
personsData.set(person,"is very cool");

person=null;

console.log(personsData); 

