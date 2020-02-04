class HelloWorld {

    constructor(firstName:string, lastName: string){
        this.firstName = firstName;
    }
    greeting(){
        console.log('Hello World!'+ 'My name is ' + this.firstName + ' ' + this.lastName); 
        
    }
    
}
const classInstance = new HelloWorld('Xayaphone', 'Salinthone');
classInstance.greeting();