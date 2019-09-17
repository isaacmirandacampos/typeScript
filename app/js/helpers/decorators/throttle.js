System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function trhottle(milissegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOrigital = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                timer = setTimeout(() => metodoOrigital.apply(this, args), milissegundos);
            };
            return descriptor;
        };
    }
    exports_1("trhottle", trhottle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
