const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");

const leitor = new Reader()
const escritor = new Writer()


async function main(){
    const dados = await leitor.Read("./users.csv");
    const dadosProcessados = Processor.Process(dados);

    const usuarios = new Table(dadosProcessados);

    const html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.Write(Date.now() + ".PDF", html);

}

main();