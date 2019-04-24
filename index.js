// Code your solution in this file
function findMatching(driver, string){
return driver.filter(function (name) { return name.toLowerCase() === string.toLowerCase() ; })
}
function  fuzzyMatch(driver,string){
  debugger
return driver.filter(function (elment)   {return elment[0] === string }


}
