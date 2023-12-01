import React from 'react';
import Menu from '../../components/Menu/Menu';
function Home() {
      return (
      <React.Fragment>
        <Menu />
        <main className="content">

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              
              <h1 ClassName="appTitle">Bem-vindo ao Sarnento Bot</h1>
              <h4>Mais que um bot, um amigo que interage no seu chat !</h4>
              
              <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=722913076344782858&scope=bot&permissions=549755289087" 
                className="btn btn-primary">Convidar o Bot</a>
              <p>
                  {' '}

                  {' '}
                </p>

              <p>O Sarneto é um bot do Discord diferente de todos os outros. Além de executar comandos tradicionais,
                ele está aqui para tornar seu servidor ainda mais interativo e divertido.
                Com respostas humanizadas, ele traz informações relevantes e entretenimento diretamente para o chat.</p>

              <p>Quer saber a cotação financeira de moedas? Basta digitar !cotação seguido do nome da moeda desejada, e o Sarneto vai te mostrar a cotação atualizada. Se você quiser saber os resultados da loteria, digite !loteria e aguarde enquanto o Sarneto busca os números sorteados mais recentes.</p>

              <p>Mas não para por aí! O Sarneto também está aqui para bater um papo. Fale com ele sobre qualquer assunto, compartilhe uma piada ou faça uma pergunta curiosa. Ele vai te responder com bom humor e muito carisma.</p>

              <p>Então, traga o Sarneto para o seu servidor do Discord e deixe-o tornar seus momentos de conversa ainda mais animados. Ele está pronto para interagir e surpreender você e seus amigos.</p>

              <p>Digite !ajuda para ver todos os comandos disponíveis e começar a aproveitar tudo o que o Sarneto tem a oferecer.</p>

              <p>Divirta-se e aproveite a presença do Sarneto no seu servidor!</p>

              
            </div>
            <div className="col-lg-6">              
              <img src="img/favicon/favicon.png" />
            </div>
          </div>
        </div>

            
        </main>
      </React.Fragment>
       
      );
};
    

export default Home;