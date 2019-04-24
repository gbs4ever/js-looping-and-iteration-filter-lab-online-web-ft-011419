// Code your solution in this file
function findMatching(driver, string){
return driver.filter(function (name) { return name.toLowerCase() === string.toLowerCase() ; })
}
function  fuzzyMatch(driver,name){
return driver.filter(function (elment)   {elment[0] === name[0]}

  
}