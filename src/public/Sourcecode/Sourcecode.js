import React from 'react';
import Menu from '../../components/Menu/Menu';
function SourceCode() {

  const dados = [
    { nome: 'Core', descricao:"O corção do Sarnento, é aqui que ele escuta e processa os comandos", link: 'https://github.com/mrxcao/sarnento2' },
    { nome: 'Taks', descricao:"Executa tarefas de tempos em tempos para manutenção e atualização do banco de dados", link: 'https://github.com/mrxcao/sarnento_taks' },
    { nome: 'Front', descricao:"Esta pagina, responsável pela manipulação dos dados e divulgação do Bot", link: 'https://github.com/mrxcao/sarnento_front' },
  ];

  const informacoes = [
    { col1: 'bilioteca', col2:"DiscordJs"},
    { col1: 'FrontEnd', col2:"React"},
    { col1: 'BaclEnd', col2:"NodeJS"},
    { col1: 'DataBase', col2:"MongoDB"},
  ];  

      return (
      <React.Fragment>
        <Menu />
        <main className="content">

        <div className="container mt-5">

              
              
              <h3>Código fonte</h3>
              
              <p> Todos os códigos estão disponíveis no GitHub</p>

              <p> <a href="https://discord.bots.gg/bots/722913076344782858" target="_blank">discord.bots.gg Sarnento</a></p>
              <p> <a href="https://discord.gg/zyfruVFVEW" target="_blank">Servidor de Suporte</a>   </p>
    
              
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descriçãoo</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.nome}>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td> <a target='_banck' href={item.link} > 
              <img height="32" width="32" src="https://unpkg.com/simple-icons@v10/icons/github.svg" />
              </a>  </td>
            </tr>
          ))}
        </tbody>
      </table>

            <h4> Informações técnicas:</h4>
            
      <table className="table table-striped">
        <tbody>
          {informacoes.map((item) => (
            <tr key={item.col1}>
              <td>{item.col1}</td>
              <td>{item.col2}</td>              
            </tr>
          ))}
        </tbody>
      </table>

          <p>* Para mais informações, por favor, entre em contato</p>
        </div>

            
        </main>
      </React.Fragment>
       
      );
};
    

export default SourceCode;