System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOrigital = descriptor.value;
            descriptor.value = function (...args) {
                console.log('-------------------');
                console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOrigital.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertyKey} demorou ${t2 - t1} ms`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
