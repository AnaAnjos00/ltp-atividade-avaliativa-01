class Noticia {
  constructor (titulo, dataPubli,resumo,texto) {
    this.dataPubli = dataPubli
     this.titulo = titulo
       this.resumo = resumo
         this.texto = texto;
}

  mostrar() {
    return this.titulo + "\n" + this.dataPubli + "\n" + this.resumo + "\n\n" + this.texto;
  }

}

let noticia = new Noticia("Qual o próximo banner de Genshin Impact?", "30/03/2022", "Parece que a primeira fase terá apenas um Banner de personagem.", "Para a segunda metade de Genshin Impact 2.5, que chega a 9 de março de 2022, estamos a receber duas repetições: Raiden Shogun e Sangonomiya Kokomi.")

console.log(noticia.mostrar())