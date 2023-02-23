let customer = {
   fName: "Sakar",
   lName: "Chauhan",
   city: "Dehradun",
   state: "Uttarakhand",
 };
 
 let merchant = {
   fName: "Jetha",
   lName: "Lal",
   city: "Surat",
   state: "Gujrat",
 };
 
 function printBill(name,address) {
     let bill = '';
   if (name) {
     bill+=`${this.fName} ${this.lName}. `;
   }
   if (address) {
     bill+= `Lives in ${this.city}, ${this.state}`;
   }
   return bill
 }
 
 const customerName = printBill.bind(customer, true , false);
 console.log(typeof(customerName))
 console.log(customerName());
 
let abc = printBill.call(customer,false,true)
console.log (typeof(abc));
 console.log(printBill.call(customer,false,true));
 
 console.log(printBill.apply(merchant, [true,true]));