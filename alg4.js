let ay =(prompt("Ay daxil edin"))
switch (ay) {
  case "Dekabr":
  case "Yanvar":
  case "Fevral":
    console.log("Qış fəsili");  
    break;
  case "Mart":
  case "Aprel":
  case "May":
    console.log("Yaz fəsili");  
    break;
  case "Iyun":
  case "Iyul":
  case "Avqust":
    console.log("Yay fəsili");  
    break;
  case "Sentyabr":
  case "Oktyabr":
  case "Noyabr":
    console.log("Payız fəsili");  
    break;

  default:
    console.log("Belə fəsil yoxdu ay məllim ");
    break;
}


// aylarin ilk herfini boyukle daxil edin
// zehmet olmasa her lag acdiqda html de scripti acin