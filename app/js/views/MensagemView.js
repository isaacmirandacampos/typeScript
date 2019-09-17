class MensagemView extends View {
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
    _template(model) {
        return `<p class= "alert alert-info">${model}</p>`;
    }
}
