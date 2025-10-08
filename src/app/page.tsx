'use client';

import { useState } from 'react';

// --- COMPONENTES DE VISUALIZAÇÃO ---

// Componente: Página de Abertura (Home)
const HomeView = ({ setView }) => (
    <div>
        <div className="text-center py-12 md:py-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-deep-purple leading-tight">
                Sua jornada para a fluência<br/>começa com a <span className="text-vibrant-orange">conexão certa.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                Nossa inteligência artificial encontra o professor particular de inglês com o método e a personalidade que mais combinam com você.
            </p>
            <button onClick={() => setView('student')} className="mt-10 bg-vibrant-orange text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-xl">
                Encontrar meu professor ideal
            </button>
        </div>

        <div className="py-12 md:py-20 bg-white rounded-xl shadow-lg px-6">
            <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">Como funciona? Simples assim.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-100 rounded-full p-6 mb-4">
                        <svg className="w-12 h-12 text-deep-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-deep-purple mb-2">1. Descreva seu perfil</h3>
                    <p className="text-gray-600">Preencha um formulário rápido sobre seus objetivos, estilo de aprendizado e o que você busca em um professor.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-orange-100 rounded-full p-6 mb-4">
                        <svg className="w-12 h-12 text-vibrant-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-deep-purple mb-2">2. Receba os matches</h3>
                    <p className="text-gray-600">Nossa IA analisa os perfis e te conecta com os professores mais compatíveis. Eles entrarão em contato com você!</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-purple-100 rounded-full p-6 mb-4">
                        <svg className="w-12 h-12 text-deep-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-deep-purple mb-2">3. Comece a aprender</h3>
                    <p className="text-gray-600">Converse com os professores, escolha o seu favorito e agende sua primeira aula para decolar no inglês.</p>
                </div>
            </div>
        </div>
    </div>
);

// Componente: Página de Login
const LoginView = ({ setView }) => (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg text-center mt-10">
        <h1 className="text-3xl font-bold text-deep-purple mb-2">Acesse sua conta</h1>
        <p className="text-gray-600 mb-8">Bem-vindo(a) de volta!</p>
        
        <form className="space-y-4">
            <input type="email" placeholder="Seu e-mail" className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus-ring-orange transition" />
            <input type="password" placeholder="Sua senha" className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus-ring-orange transition" />
            <button type="submit" className="w-full bg-vibrant-orange text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition">Entrar</button>
        </form>

        <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">ou</span>
            <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.382 36.216 44 30.602 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                Entrar com Google
            </button>
        </div>
        
        <p className="mt-8 text-sm text-gray-600">
            Não tem uma conta?{' '}
            <span onClick={() => setView('student')} className="font-semibold text-vibrant-orange hover:underline cursor-pointer">
                Cadastre-se
            </span>.
        </p>
    </div>
);


// Componente: Cadastro de Aluno
const StudentView = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const navigateStep = (direction) => {
        const newStep = step + direction;
        if (newStep > 0 && newStep <= totalSteps) {
            setStep(newStep);
        }
    };
    
    const StepIndicator = ({ stepNumber }) => (
        <div className={`step-indicator w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${step === stepNumber ? 'active' : ''} ${step > stepNumber ? 'completed' : 'bg-gray-200 text-gray-500'}`}>
            {stepNumber}
        </div>
    );

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-deep-purple">Encontre o professor ideal</h1>
                <p className="text-gray-600 mt-2">Complete seu cadastro para o matching perfeito.</p>
            </div>
            <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-8">
                {[...Array(totalSteps)].map((_, i) => (
                    <>
                        <StepIndicator key={i} stepNumber={i + 1} />
                        {i < totalSteps - 1 && <div className="flex-grow h-1 bg-gray-200 rounded"></div>}
                    </>
                ))}
            </div>
            <form action="#" method="POST" className="space-y-6">
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 1: Contato e Preferências</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome e Sobrenome" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus-ring-orange transition" />
                            <input type="tel" placeholder="Número de WhatsApp" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus-ring-orange transition" />
                            <textarea placeholder="Descreva qual o professor ideal para você (Ex: Eu quero um professor que...)" rows="4" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus-ring-orange transition"></textarea>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 2: Detalhes do Estudo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg"><option disabled selected>Nível de Inglês</option><option>Básico</option><option>Intermediário</option><option>Avançado</option></select>
                            <input type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Data de Nascimento" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                            <input type="text" placeholder="Sua Profissão" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg"><option disabled selected>Turno de Preferência</option><option>Manhã</option><option>Tarde</option><option>Noite</option></select>
                            <input type="text" placeholder="Cidade" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                            <input type="text" placeholder="Estado" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mt-4">
                            <label className="font-medium">Inglês específico:</label>
                            <div className="flex space-x-4 mt-2"><label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-vibrant-orange rounded mr-2" />Para Viagens?</label><label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-vibrant-orange rounded mr-2" />Business English?</label></div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 3: Perfil Complementar</h2>
                        <input type="text" placeholder="Seu tipo psicológico/MBTI (opcional)" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg" />
                        <div className="mt-4 text-sm text-gray-500">
                           <input type="checkbox" id="terms-student" className="h-4 w-4 text-vibrant-orange rounded mr-2" />
                           <label htmlFor="terms-student">Eu li e concordo com os <a href="#" className="text-deep-purple hover:underline">Termos de Uso & Política de Privacidade</a>.</label>
                         </div>
                    </div>
                )}
                <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => navigateStep(-1)} className={`bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition ${step === 1 ? 'hidden' : ''}`}>Anterior</button>
                    <button type="button" onClick={() => navigateStep(1)} className={`bg-vibrant-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition ${step === totalSteps ? 'hidden' : ''}`}>Próximo</button>
                    <button type="submit" className={`bg-deep-purple text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition ${step !== totalSteps ? 'hidden' : ''}`}>Finalizar Cadastro</button>
                </div>
            </form>
        </div>
    );
};


// Componente: Cadastro de Professor
const TeacherView = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const navigateStep = (direction) => {
        const newStep = step + direction;
        if (newStep > 0 && newStep <= totalSteps) {
            setStep(newStep);
        }
    };
    
    const StepIndicator = ({ stepNumber }) => (
        <div className={`step-indicator w-8 h-8 rounded-full flex items-center justify-center ${step === stepNumber ? 'active' : ''} ${step > stepNumber ? 'completed' : 'bg-gray-200 text-gray-500'}`}>
            {stepNumber}
        </div>
    );
    
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-deep-purple">Seja um professor parceiro</h1>
                <p className="text-gray-600 mt-2">Preencha seu perfil para conectar-se com os melhores alunos.</p>
            </div>
             <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-8">
                {[...Array(totalSteps)].map((_, i) => (
                    <>
                        <StepIndicator key={i} stepNumber={i + 1} />
                        {i < totalSteps - 1 && <div className="flex-grow h-1 bg-gray-200 rounded"></div>}
                    </>
                ))}
            </div>
            <form action="#" method="POST" className="space-y-6">
                {step === 1 && (
                     <div>
                        <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 1: Contato e Expectativa</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome e Sobrenome" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                            <input type="tel" placeholder="Número de WhatsApp" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                            <textarea placeholder="Descreva os alunos ideais para você (Ex: Eu quero alunos que...)" rows="4" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                         <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 2: Informações Profissionais</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <select className="w-full px-4 py-3 border border-gray-300 rounded-lg"><option disabled selected>Seu Nível de Inglês</option><option>Avançado</option><option>Fluente</option><option>Nativo</option></select>
                             <input type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Data de Nascimento" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="text" placeholder="Formação (Ex: Letras, USP)" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="text" placeholder="Tempo de Ensino (Ex: 5 anos)" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="text" placeholder="CEP" className="w-full px-4 py-3 border border-gray-300 rounded-lg col-span-2"/>
                         </div>
                          <div className="mt-4">
                            <label className="font-medium">Público-alvo:</label>
                            <div className="flex flex-wrap gap-4 mt-2"><label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-vibrant-orange rounded mr-2"/>Adulto</label><label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-vibrant-orange rounded mr-2"/>Adolescente</label><label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-vibrant-orange rounded mr-2"/>Criança (a partir de...)</label></div>
                         </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                         <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 3: Estilo e Mídia</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <input type="text" placeholder="Seu tipo psicológico/MBTI" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="text" placeholder="Link do seu LinkedIn" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                              <input type="text" placeholder="Link do seu Instagram" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="text" placeholder="Link para vídeo de apresentação (YouTube)" className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Envie 4 fotos de perfil</label>
                                <input type="file" multiple className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-purple-100 file:text-deep-purple hover:file:bg-purple-200 transition"/>
                             </div>
                         </div>
                          <textarea placeholder="Fale sobre suas experiências no exterior, 5 filmes favoritos, gostos musicais, etc." rows="4" className="mt-4 block w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold text-deep-purple mb-4">Etapa 4: Login e Finalização</h2>
                        <p className="text-gray-600 mb-4">Crie suas credenciais de acesso à plataforma.</p>
                        <div className="space-y-4">
                             <input type="email" placeholder="Seu E-mail de Login" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="password" placeholder="Crie uma Senha" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                             <input type="password" placeholder="Confirme a Senha" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg"/>
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                           <input type="checkbox" id="terms-teacher" className="h-4 w-4 text-vibrant-orange rounded mr-2"/>
                           <label htmlFor="terms-teacher">Eu li e concordo com o <a href="#" className="text-deep-purple hover:underline">Termo de Adesão, Termos de Uso & Política de Privacidade</a>.</label>
                         </div>
                    </div>
                )}
                 <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => navigateStep(-1)} className={`bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition ${step === 1 ? 'hidden' : ''}`}>Anterior</button>
                    <button type="button" onClick={() => navigateStep(1)} className={`bg-vibrant-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition ${step === totalSteps ? 'hidden' : ''}`}>Próximo</button>
                    <button type="submit" className={`bg-deep-purple text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition ${step !== totalSteps ? 'hidden' : ''}`}>Concluir e Enviar para Auditoria</button>
                </div>
            </form>
        </div>
    );
};

// Componente: Perfil do Professor
const ProfessorProfileView = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-64" src="https://placehold.co/400x500/AFA6E4/4F008D?text=Prof.Joana" alt="Foto da Professora Joana" />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-vibrant-orange font-semibold">Professora Verificada</div>
                <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">Joana Silva</h1>
                <p className="mt-2 text-gray-500">Especialista em Business English e Preparatório para TOEFL. Nível Fluente, MBTI: ENTJ.</p>
                <p className="mt-4 text-dark-gray">"Minha missão é destravar o seu potencial no inglês para o mercado de trabalho. Com aulas dinâmicas e focadas em resultados, vamos alcançar seus objetivos juntos!"</p>
                <div className="mt-6">
                    <h3 className="font-semibold text-deep-purple">Especialidades:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-purple-100 text-deep-purple text-xs font-semibold px-2.5 py-0.5 rounded-full">Business English</span>
                        <span className="bg-purple-100 text-deep-purple text-xs font-semibold px-2.5 py-0.5 rounded-full">Para Viagens</span>
                        <span className="bg-purple-100 text-deep-purple text-xs font-semibold px-2.5 py-0.5 rounded-full">Adultos</span>
                    </div>
                </div>
                 <div className="mt-6">
                    <span className="text-3xl font-bold text-vibrant-orange">R$ 90,00</span>
                    <span className="text-gray-600">/ hora</span>
                </div>
                <button className="mt-8 w-full bg-vibrant-orange text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg">Chamar no WhatsApp</button>
            </div>
        </div>
    </div>
);

// Componente: Área Administrativa
const AdminView = () => (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold text-dark-gray">Dashboard Administrativo</h1>
            <p className="text-gray-500">Visão geral e indicadores da plataforma.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-xl shadow"><h3 className="font-medium text-gray-500">Total de Alunos</h3><p className="text-2xl font-bold mt-1">1,287</p></div>
            <div className="bg-white p-4 rounded-xl shadow"><h3 className="font-medium text-gray-500">Prof. Ativos</h3><p className="text-2xl font-bold mt-1">152</p></div>
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-vibrant-orange"><h3 className="font-medium text-gray-500">Pendentes</h3><p className="text-2xl font-bold mt-1">8</p></div>
            <div className="bg-white p-4 rounded-xl shadow"><h3 className="font-medium text-gray-500">Matchings</h3><p className="text-2xl font-bold mt-1">312</p></div>
            <div className="bg-white p-4 rounded-xl shadow"><h3 className="font-medium text-gray-500">Taxa Sucesso</h3><p className="text-2xl font-bold mt-1">78%</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-deep-purple mb-4">Auditoria de Novos Professores</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">Nome</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Data Cadastro</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr>
                            <td className="p-4">Carlos Ferreira</td>
                            <td className="p-4 text-gray-600">06/10/2025</td>
                            <td className="p-4 flex justify-center items-center space-x-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">Ver Perfil</button>
                                <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600">Aprovar</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600">Rejeitar</button>
                            </td>
                        </tr>
                         <tr>
                            <td className="p-4">Ana Beatriz</td>
                            <td className="p-4 text-gray-600">05/10/2025</td>
                            <td className="p-4 flex justify-center items-center space-x-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">Ver Perfil</button>
                                <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600">Aprovar</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600">Rejeitar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);


// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export default function Page() {
    const [view, setView] = useState('home');

    const renderView = () => {
        switch (view) {
            case 'login':
                return <LoginView setView={setView} />;
            case 'student':
                return <StudentView />;
            case 'teacher':
                return <TeacherView />;
            case 'professor-profile':
                return <ProfessorProfileView />;
            case 'admin':
                return <AdminView />;
            case 'home':
            default:
                return <HomeView setView={setView} />;
        }
    };
    
    // As classes de cor são definidas aqui para serem usadas globalmente no escopo do componente
    const globalStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .bg-deep-purple { background-color: #4F008D; }
        .text-deep-purple { color: #4F008D; }
        .border-deep-purple { border-color: #4F008D; }
        .bg-vibrant-orange { background-color: #FF6B00; }
        .text-vibrant-orange { color: #FF6B00; }
        .border-vibrant-orange { border-color: #FF6B00; }
        .bg-dark-gray { background-color: #2D2D2D; }
        .text-dark-gray { color: #2D2D2D; }
        .focus-ring-orange:focus { --tw-ring-color: #FF6B00; }
        .step-indicator { transition: all 0.3s ease-in-out; }
        .step-indicator.active { background-color: #4F008D; color: white; font-weight: bold; }
        .step-indicator.completed { background-color: #FF6B00; color: white; }
    `;

    return (
        <>
            <style>{globalStyles}</style>
            
            <div className="bg-gray-50 text-dark-gray">
                <header className="bg-white shadow-md sticky top-0 z-20">
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="text-2xl font-bold text-deep-purple cursor-pointer" onClick={() => setView('home')}>
                            Connect<span className="text-vibrant-orange">English</span>
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-4">
                            <button onClick={() => setView('login')} className="text-sm md:text-base text-deep-purple font-semibold hover:text-vibrant-orange transition-colors">Login</button>
                             <div className="hidden md:block border-l h-6 border-gray-300"></div>
                            <button onClick={() => setView('student')} className="text-sm md:text-base bg-vibrant-orange text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Cadastro Aluno</button>
                            <button onClick={() => setView('teacher')} className="text-sm md:text-base text-deep-purple font-semibold hover:text-vibrant-orange transition-colors">Sou Professor</button>
                            <button onClick={() => setView('professor-profile')} className="text-sm md:text-base text-gray-600 hover:text-vibrant-orange transition-colors">Ver Perfil</button>
                            <button onClick={() => setView('admin')} className="text-sm md:text-base text-gray-600 hover:text-vibrant-orange transition-colors">Admin</button>
                        </div>
                    </nav>
                </header>

                <main className="container mx-auto p-4 md:p-8 min-h-screen">
                    {renderView()}
                </main>
            </div>
        </>
    );
}

