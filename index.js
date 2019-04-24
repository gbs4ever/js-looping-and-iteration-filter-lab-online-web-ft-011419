// Code your solution in this file
function findMatching(driver, string){
return driver.filter(function (name) { return name.tolowercase() === string.lowercase() ; })
}

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}