class MensagemView extends View{

    update(model: string) {

        this._elemento.innerHTML = this._template(model);
    }
    _template(model: string){
        return `<p class= "alert alert-info">${model}</p>`
    }
}