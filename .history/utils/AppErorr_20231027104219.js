class AppError extends Error {
    constructor(){
        super();
    }

    create(message,statusCode,statusText){
         this.message = message;
         
    }
}