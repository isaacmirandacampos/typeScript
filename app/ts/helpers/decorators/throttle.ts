export function trhottle(milissegundos = 500){ //impede que o usuário click diversas vezes para disparar o evento
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const metodoOrigital = descriptor.value;
        let timer = 0;
        descriptor.value = function(...args: any[]){
            if(event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOrigital.apply(this, args), milissegundos)
            
            
        }
        return descriptor;
    }
}