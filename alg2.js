let reqem=prompt("Reqem daxil edin")
if (reqem<=0) {
    console.log("Bu reqem 2nin quvveti deyil");
    
}
while (reqem>1) {
    if ((reqem%2===0)&&(reqem%3!==0)&&(reqem%5!==0)&&(reqem%7!==0)&&(reqem%11!==0)&&(reqem%13!==0)) {
        console.log("Bu reqem 2nin quvvetidir");
    
    }
    else {
        console.log("Bu reqem 2nin quvveti deyil");
        
    }break;

}


// kod esasen bir yere qeder doqru gedir. 
// Eger sade ededleri tapsa idim o zaman daha rahat olacaqdi. 
// Bu formadada isleyir. Lakin el ile butun sade ededleri daxil etmeliyik.
// Uzun yol olur




// zehmet olmasa her lag acdiqda html de scripti acin
