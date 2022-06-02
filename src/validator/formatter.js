const str = '  FUNCTIONUP IS THE bEsT coHOrT  '
function trim(){
    console.log("result after trimming",str.trim());
}
function changetoLowerCase(){
    console.log("result of string in lower case",str.toLowerCase());

}
function changetoUpperCase(){
    console.log("result of string in upper case",str.toUpperCase());
}
module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase           