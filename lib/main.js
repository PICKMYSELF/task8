
class CodeNum{
    constructor(){
    this.code=['||:::',
        ':::||',
        '::|:|',
        '::||:',
        ':|::|',
        ':|:|:',
        ':||::',
        '|:::|',
        '|::|:',
        '|:|::',
        ];}
        zipCode(numString){
        if(numString.length==10) numString=numString.replace(/-/,'');
        let num=numString.split('');
        let codesum=0;
        for(let index in num){                                       //想要修改值必须for    in
            codesum+=parseInt(num[index]);
            num[index]=this.code[parseInt(num[index])];

        }
        num.push(this.code[Math.ceil(codesum/10)*10-codesum]);
        return `|${num.join("")}|`;

        }
        postCode(codeString){
            codeString=codeString.substr(1,codeString.length-2);
            let num=[];
            for(let i=0;i<codeString.length/5;i++){
               let number=this.code.indexOf(codeString.substr(i*5,5));
               num.push(number);
            }
            num.pop();
            if (num.length==9)num.splice(5,0,'-')
            return num.join("");
        }
    
}


module.exports = CodeNum;
