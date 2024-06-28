
import './App.css';
import React from 'react';
import logo from './img/negativo baba 1.png'
import hiro from './img/319291749_1487037575110029_489935627441710572_n 1.png'
import um from './img/Mask Group (1).png'
import dois from'./img/Group 21.png'
import tres from './img/Group 24.png'
import quatro from './img/Group 23.png'
import imagem from './img/Carousel.png'
import segunda from './img/Rectangle 2742.png'
import treca from './img/Rectangle 2743.png'
import ter from './img/Group 6.png'
import pene from './img/326886596_1022110642525538_4686611885610941165_n 1 - Copy - Copy.png'
import fim from './img/closeup-dj-working-blue-light 1 (1) - Copy - Copy - Copy.png'
import fec from './img/facebook.png'
import ti from './img/twitter.png'
import ut from './img/linkedin (1).png'



const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-black text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logotipo */}
          <div className="flex items-center justify-center">
            <img src={logo} alt="" className="h-8 mt-4" />
          </div>

          {/* Menus e Botões */}
          <div className="flex-1 flex justify-center">
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-400">Babaprod</a></li>
                <li><a href="#" className="hover:text-gray-400">Eventos</a></li>
                <li><a href="#" className="hover:text-gray-400">Sobre nós</a></li>
                <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
              </ul>
            </nav>
          </div>

          {/* Botões */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ background: '#FFFFFF', color: '#851A84' }}>
              Log In
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" style={{ background: '#821385' }}>
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-no-repeat bg-center bg-cover h-96 " style={{ backgroundImage: "url('/img/hiro') " }}>
      <img src={hiro}/>
        <div className="absolute inset-0 flex flex-col justify-center pl-8 space-y-4">
          <h1 className="text-white text-4xl font-bold">Bem-Vindo A Sabor do VerÃo</h1>
          <p className="text-white text-2xl">Aqui encontras tudo sobre o evento</p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="flex justify-center items-center h-screen" style={{ background: '#821385', border: '1px solid #EAE3E3' }}>
        <section className="max-w-4xl w-full p-6 relative">
          {/* Menu */}
          <div className="absolute top-[-20px] right-0 mr-4 flex items-center space-x-4">
            <a href="#" className="text-gray-100 hover:text-white"><img src={um} alt="" /></a>
            <a href="#" className="text-gray-100 hover:text-white"><img src={dois} alt="" /></a>
            <a href="#" className="text-gray-100 hover:text-white"><img src={tres} alt="" /></a>
            <a href="#" className="text-gray-100 hover:text-white"><img src={quatro} alt="" /></a>
          </div>

          {/* Card com Texto à Esquerda e Imagem à Direita */}
          <div className="rounded-lg overflow-hidden flex mt-20 ">
            {/* Texto */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">Sobre</h2>
              <p className="text-gray-700 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            {/* Imagem */}
            <div className="w-1/2 ">
              <img src={imagem} alt="Imagem do card" className="w-full h-full object-cover w-full h-full" />
            </div>
            
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center mt-[-100px]" style={{ background: '#d076d3' }}>
        <section className="max-w-3xl mx-auto my-16 flex items-center justify-center">
          <div className="rounded-lg overflow-hidden flex mb-4">
            {/* Imagem */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold mb-2 text-white">2023</h2>
              <img src={segunda} alt="Imagem do card" className="w-full h-full object-cover rounded-md" />
            </div>
            {/* Texto */}
            <div className="w-1/2 p-4">
              <h1 className="text-gray-700 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center mt-[-100px]" style={{ background: '#d076d3' }}>
        <section className="max-w-4xl w-full p-6">
          <div className="rounded-lg overflow-hidden flex">
            {/* Texto */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">2022</h2>
              <p className="text-gray-700 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            {/* Imagem */}
            <div className="w-1/2">
              <img src={treca} alt="Imagem do card" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>

      <section className="relative bg-no-repeat bg-center bg-cover h-96" style={{ backgroundImage: "url('/img/326886596_1022110642525538_4686611885610941165_n 1.png')" }}>
      <img src= {pene} />
        <div className="absolute inset-0 flex flex-col justify-center pl-8 space-y-4">
          <h1 className="text-white text-4xl font-bold text-center mx-auto mt-8">Próximo Evento</h1>
          <div className="flex items-center justify-center">
            <img src={ter} alt="" className="max-w-xs mx-auto" />
          </div>

          {/* Input e Botão */}
          <div className="flex items-center justify-center mt-4">
            <input type="text" placeholder="Endereco Email..." className="border border-gray-300 px-4 py-2 rounded-l-md outline-none focus:border-blue-500 w-48" />
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-md w-48" style={{ background: '#821385' }}>Notifique me</button>
          </div>
        </div>
        
      </section>
      <div className='mt-64  bg-gray-300'>
      <h1 className="text-2xl font-bold text-center text-white mb-4">De a sua sugestão</h1>
            <p className="text-center text-white mb-6">Lorem ipsum dolor sit amet,</p>

            <section className="flex justify-center items-center p-6 rounded-lg max-w-2xl mx-auto bg-#FFE4E1 mt-32">
      <div className="w-full flex flex-col md:flex-row items-start space-x-6">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-center md:text-left text-white text-lg">
            Aqui você pode enviar uma mensagem ou um comentário. Por favor, preencha seu email e a mensagem desejada.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form action="#">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-white">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="text-right">
              <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
      </div>
      

      <div className="bg-black mb-2">
        <img src={fim} alt="DJ Image" className="w-full h-48 object-cover" />
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Placeholder Text Section */}
                    <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-500"><img src={fec} alt="Facebook" /></a>
                            <a href="#" className="text-blue-400"><img src={ti} alt="Twitter" /></a>
                            <a href="#" className="text-blue-700"><img src={ut} alt="LinkedIn" /></a>
                        </div>
                    </div>

                    {/* Planejar Eventos Section */}
                    <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                        <h2 className="font-bold mb-2">Planejar Eventos</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Criar Conta</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Venda Bilhetes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Confirmação online</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Eventos</a></li>
                        </ul>
                    </div>

                    {/* Links Úteis Section */}
                    <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                        <h2 className="font-bold mb-2">Links Úteis</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Quem somos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contacte-nos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Centro de Ajuda</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Como Funciona</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Termos</a></li>
                        </ul>
                    </div>

                    {/* Manter-se Informado Section */}
                    <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                        <h2 className="font-bold mb-2">Manter-se Informado</h2>
                        <p className="text-gray-400 mb-4">
                            Junte-se à nossa mailing list para ficar a par das novidades para eventos e concertos.
                        </p>
                        
                        <div className="bg-black p-6 rounded-lg mr-8">
                            <form className="flex space-x-">
                                <input type="email" placeholder="Enter your email address.." className="p-1 text-sm rounded-full bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white" />
                                <button className="bg-purple-600 text-white text-sm px-2 py-1 rounded-full">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center text-gray-600 mt-8">
                    <p>Copyright &copy; 2023. Champier.lda</p>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default App;
