// Code your solution in this file
function findMatching(driver, string){
return driver.filter(function (name) { return name.toLowerCase() === string.toLowerCase() ; })
}
