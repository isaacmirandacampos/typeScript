class NegociacoesView{
    private _elemento: Element;
    
    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    template(): string {
        return `
        <table class="table table-hover table-bordered>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot>
            </tfoot>
        </table>`
    }
    update(): void{
        this._elemento.innerHTML = this.template();
    }
}