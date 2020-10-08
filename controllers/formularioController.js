const nodemailer = require("nodemailer");
const formidable = require("formidable");
const util = require("util");
const fs = require("fs")
var multerConfig = require("./../config/multer");
var multer = require('multer');


var upload = multer(
    multerConfig
).any();



const formularioController = {
    viewForm: (req, res) => {
        return res.render('acidentesPessoaisPlus');
    },

    sendForm: (req, res, next) => {
        let form = req.body

        upload(req, res, function (err) {
            if (err) {
                console.log(err)
                return res.end("Algo deu errado.");
            } else {
                console.log(form.inputNomeTitular)
                console.log(req.files)
                const obj = JSON.parse(JSON.stringify(req.body));
                var transport = nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: "ce9f4295fc97e0",
                        pass: "f827601a75f686"
                       }
                });


                let mailOption = {
                    from: "Atendimento <atendimento@segurosrapido.com.br>",
                    to: "atendimento@segurosrapido.com.br",

                    subject: "Cotação Acidentes Pessoais Plus",
                    html: `
    <!DOCTYPE html>
    <html lang="pt-BR">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario</title>
    </head>

    <body>
        <div style="margin: 20px;">
            <h1 style="text-align:center; ">
                Acidentes Pessoais Plus
            </h1>
            <table style='width: 100%;' border="3">
                <tr>
                    <th colspan="6" style="text-align: start;">Plano Contratado</th>
                </tr>
                <tr>
                    <td colspan="6">${obj.app}</td>
                </tr>
                <tr>
                    <th colspan="3" style="text-align: start;">Nome Completo</th>
                    <th colspan="3" style="text-align: start;">Email</th>

                </tr>
                <tr>
                    <td colspan="3">${obj.inputNomeTitular}</td>
                    <td colspan="3">${obj.inputEmailTitular}</td>
                </tr>

                <tr>
                    <th colspan="1" style="text-align: start;">Sexo</th>
                    <th colspan="2" style="text-align: start;">Profissão</th>
                    <th colspan="1" style="text-align: start;">Data Nascimento</th>
                    <th colspan="2" style="text-align: start;">Estado civil</th>
                </tr>
                <tr>
                    <td colspan="1"> ${obj.inputSexoTitular}</td>
                    <td colspan="2"> ${obj.inputProfissaoTitular}</td>
                    <td colspan="1"> ${obj.inputDnTitular}</td>
                    <td colspan="2"> ${obj.inputEstadoCivilTitular}</td>
                </tr>
                <tr>
                    <th colspan="1" style="text-align: start;">Rg</th>
                    <th colspan="1" style="text-align: start;">Data expedição</th>
                    <th colspan="1" style="text-align: start;">Órgão expedidor</th>
                    <th colspan="2" style="text-align: start;">CPF</th>
                    <th colspan="1" style="text-align: start;">Nacionalidade</th>
                </tr>
                <tr>
                    <td colspan="1"> ${obj.inputRgTitular}</td>
                    <td colspan="1"> ${obj.inputDataExpedicaoTitular}</td>
                    <td colspan="1"> ${obj.inputOrgaoExpedidorTitular}</td>
                    <td colspan="2"> ${obj.inputCpfTitular}</td>
                    <td colspan="1"> ${obj.inputNacionalidadeTitular}</td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: start;">Tel.Residencial</th>
                    <th colspan="2" style="text-align: start;">Tel.Celular</th>
                    <th colspan="2" style="text-align: start;">Tel.Comercial</th>

                </tr>
                <tr>
                    <td colspan="2"> ${obj.inputTelResidencialTitular}</td>
                    <td colspan="2"> ${obj.inputTelCelularTitular}</td>
                    <td colspan="2"> ${obj.inputTelComercialTitular}</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;">Reside no Brasil?</th>
                </tr>
                <tr>
                    <td colspan="6"> ${obj.inputResideBrasilTitular}</td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: start;">Cep</th>
                    <th colspan="2" style="text-align: start;">Endereço</th>
                    <th colspan="2" style="text-align: start;">Complemento</th>

                </tr>
                <tr>
                    <td colspan="2"> ${obj.inputCepTitular}</td>
                    <td colspan="2"> ${obj.inputEnderecoTitular}</td>
                    <td colspan="2"> ${obj.inputComplementoTitular}</td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: start;">Bairro</th>
                    <th colspan="2" style="text-align: start;">Cidade</th>
                    <th colspan="2" style="text-align: start;">Estado</th>

                </tr>
                <tr>
                    <td colspan="2"> ${obj.inputBairroTitular}</td>
                    <td colspan="2"> ${obj.inputCidadeTitular}</td>
                    <td colspan="2"> ${obj.inputEstadoTitular}</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;">Em caso de acidente comunicar:</th>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: start;">Nome Completo</th>
                    <th colspan="2" style="text-align: start;">Tel.Residencial</th>
                    <th colspan="2" style="text-align: start;">Tel.Celular</th>
                </tr>
                <tr>
                    <td colspan="2"> ${obj.inputNomeContato}</td>
                    <td colspan="2"> ${obj.inputTelResidencialContato}</td>
                    <td colspan="2"> ${obj.inputTelCelularContato}</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;">Questionário de Saúde:</th>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;">Fumante ?</th>
                </tr>
                <tr>
                    <td colspan="6">${obj.fumante}</td>
                </tr>>
                <tr>
                    <th colspan="6" style="text-align: start;">Declaro para todos os fins e efeitos legais, que:</th>
                </tr>
                <tr>
                    <td colspan="6">1-Estou em perfeitas condições de saúde e em plena atividade de trabalho.</td>
                </tr>
                <tr>
                    <td colspan="6">2-Não fui submetido a tratamento médico em regime hospitalar ou intervenções
                        cirúrgicas, incluindo biópsia ou punção, nos últimos 5 (cinco) anos.</td>
                </tr>
                <tr>
                    <td colspan="6">3-Nunca fui submetido a tratamentos com radioterapia ou quimioterapia.</td>
                </tr>
                <tr>
                    <td colspan="6">4-Não sou portador de nenhuma doença crônica ou congênita.</td>
                </tr>
                <tr>
                    <td colspan="6">5-Não realizei exames que tenham apresentado resultados alterados, tais como
                        ressonância magnética, rx, tomografia, ultrassonografia, endoscopia, exames de sangue ou
                        qualquer outro. </td>
                </tr>
                <tr>
                    <td colspan="6">6-Não sou tripulante ou piloto em qualquer tipo de aeronave.</td>
                </tr>
                <tr>
                    <td colspan="6">7-Não pratico esportes aéreos ou subaquáticos.</td>
                </tr>
                <tr>
                    <td colspan="6">8-Não sou piloto em competições automobilísticas ou motociclísticas.</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;"> Há alguma resalva referente a eventos preexistentes para
                        as afirmações acima? </th>
                </tr>
                <tr>
                    <td colspan="6">${obj.questionarioDeSaude}</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;"> Observações: </th>
                </tr>
                <tr>
                    <td colspan="6"> ${obj.observacoes}</td>
                </tr>
                <tr>
                    <th colspan="6" style="text-align: start;"> Lista de beneficiários: </th>
                </tr>
                <tr>
                    <th colspan="2"> Nome </th>
                    <th colspan="1"> Data nascimento </th>
                    <th colspan="2"> CPF </th>
                    <th colspan="1"> % Distribuido </th>
                </tr>
                <tr>
                    <td colspan="2">${obj.inputNomeBeneficiario1}</td>
                    <td colspan="1">${obj.inputDnBeneficiario1}</td>
                    <td colspan="2">${obj.inputCpfBeneficiario1}</td>
                    <td colspan="1">${obj.inputDistribuicaoBeneficiario1}</td>
                </tr>
                <tr>
                    <td colspan="2">${obj.inputNomeBeneficiario2}</td>
                    <td colspan="1">${obj.inputDnBeneficiario2}</td>
                    <td colspan="2">${obj.inputCpfBeneficiario2}</td>
                    <td colspan="1">${obj.inputDistribuicaoBeneficiario2}</td>
                </tr>
                <tr>
                    <td colspan="2">${obj.inputNomeBeneficiario3}</td>
                    <td colspan="1">${obj.inputDnBeneficiario3}</td>
                    <td colspan="2">${obj.inputCpfBeneficiario3}</td>
                    <td colspan="1">${obj.inputDistribuicaoBeneficiario3}</td>
                </tr>
                <tr>
                    <td colspan="2">${obj.inputNomeBeneficiario4}</td>
                    <td colspan="1">${obj.inputDnBeneficiario4}</td>
                    <td colspan="2">${obj.inputCpfBeneficiario4}</td>
                    <td colspan="1">${obj.inputDistribuicaoBeneficiario4}</td>
                </tr>


                <tr>
                    <th colspan="6" style="text-align: start;"> Dados para pagamento: </th>
                </tr>
                <tr>
                    <th colspan="3"> Tipo </th>
                    <th colspan="3"> Parcela </th>
                </tr>
                <tr>
                    <td colspan="3"> ${obj.inputPagamentoForma} </td>
                    <td colspan="3"> ${obj.inputPagamentoParcela} </td>
                </tr>

            </table>
        </div>
    </body>

    </html>`,
                    attachments: req.files,

                }

                transporter.sendMail(mailOption, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email enviado:');
                        //res.send(mailOption);
                        res.redirect('/formulario');
                    }
                })
            }
        })
    }
}
module.exports = formularioController
