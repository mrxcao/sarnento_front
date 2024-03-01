import React from 'react';
import Menu from '../../components/Menu/Menu';
function Home() {
      return (
      <React.Fragment>
        
        <header>
        <Menu />
        </header>
        <main className="content">
        <section class="sec-1">
        <div className="container mt-5">
          <div className="row">
            <d  iv className="col-lg-6">
              
              <br />
              <br />
              <br />
              
              <h1>Mais que um bot do <strong>​Discord</strong>, um companheiro ​para o seu servidor!</h1>
              <br />
              <br /> 
              <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=722913076344782858&scope=bot&permissions=549755289087" 
                className="btn btn-primary invite-button">Convidar o Bot</a>


              
            </d>
            <div className="col-lg-6">              
              <img src="img/sarnento/1.png" />
            </div>
          </div>
        </div>
        </section>
        <br />

        <section>        
          <h3>Co​mo assim?</h3>
          <div class="section">                      
              <div class="column">      
                <img src="img/sarnento/2.png" />
              </div>
              <div class="column">              
                <p>
                Além dos comandos de bot que ​todos tem, ele ainda fica atento ao ​que está acontecendo no seu ​servidor e reage aos comentários. ​Em breve, você poderá cadastrar ​suas​ ​próprias reações
                </p>
                <p>
                Para saber mais​, visite​ a página Reação.
                </p>
            </div>
          </div>  
        </section>

        <h3>O que mais?</h3>
        <section class="sec-1">        
        
          <div class="section">                      
            <div class="column">
              <img src="img/sarnento/3.png" /><br />
              <br />
              <h4>Co​mandos</h4>
os tradicionais comandos de ​todos os bots e ainda uns com ​informações como cotação ​financei​ra e resultados de loteria</div>
            <div class="column">
              <img src="img/sarnento/4.png" /><br />
              <br />
              <h4>  No​tificação de ações</h4>
Informe aos seus amigos quando ​alguém entrar numa call ou ​começar a transmitir a tela no ​Discor​d</div>
            <div class="column">
              <img src="img/sarnento/5.png" /><br />
              <br />
              <h4> Se​mpre online</h4>
Ele sempre te responderá se ​chamar​ por ele (em construção) </div>
          </div>
        </section>



        <section>
          <h3>Depoimentos</h3>

            <div class="testimonial-section">
              <div class="testimonial-name">@MRXCAO </div>
              <div class="testimonial-text">“Meu bot favorito que já fiz até hoje”</div>
            </div>

            <div class="testimonial-section">
              <div class="testimonial-name">MARIANA CRUZ </div>
              <div class="testimonial-text">“Depois que usei o Sarnento,, nunca mais meu ​servidor do Discord foi de F”</div>
            </div>          


            <div class="testimonial-section">
              <div class="testimonial-name">FERNANDO SOUZA </div>
              <div class="testimonial-text">“Às vezes fico conversando com ele … e ás vezes ​ele responde”</div>
            </div>
        </section>
        <br />
        <section class="sec-2"> 
          <img src="img/sarnento/6.png" /><br />
          <br />
          Como podemos melhorar?<br />
          <br />
          Suas ideias e opiniões são muito ​bem-​vindas!<br />
          <br />
        </section>

        <section class="sec-3">
        <div class="section">                      
            <div class="column">
            <img src="img/sarnento/7.png" />
            </div>
            <div class="column">
              <h3>Quer saber mais?</h3>
              <br />              
              <ul className="ul-items">
                <li><a href="/sourcecode">có​digo aberto</a></li>
                <li>E-mail: contato@sarnento.app​.br</li>
                <li><a href="google.com">Di​scord oficial do bot </a> </li>
              </ul>
              <br />
              <h3>Ou mande uma mensagem pra gente:</h3>
              <br />
              <form action="https://formspree.io/f/moqgwbjv" method="POST">
                
                <input type="text" id="name" name="name" placeholder="Nome" /><br />
                <br />
                
                <input type="email" id="email" name="_replyto" placeholder="E-mail" /><br />
                <br />
                
                <textarea id="message" name="message" placeholder="Mensagem"></textarea><br />
                <br />
                <button className="btn btn-primary invite-button"
                type="submit">Enviar</button>
              </form>
              

              </div>
          </div>
        </section>                        

        </main>
      </React.Fragment>
       
      );
};
    

export default Home;
