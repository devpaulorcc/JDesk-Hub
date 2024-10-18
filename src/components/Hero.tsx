import "../css/hero.css";

import javaApp from "../download/javaProjeto.jar"

function Hero() {
    return (
        <main className="hero-container">
            <section className="hero-content">
                <h2>Bem-vindo(a) ao projeto JDesk</h2>
                <p>
                    O JDesk é uma solução desenvolvida pela turma 17 do curso técnico em informática de Taboão da Serra que oferece uma experiência intuitiva e poderosa para fazer a mediação entre funcionários e a equipe de TI em uma empresa.
                </p>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Cadastro e Login</h3>
                        <p>Faça seu cadastro e entre de forma segura.</p>
                    </div>
                    <div className="card">
                        <h3>Criar e Modificar Chamados</h3>
                        <p>Abra chamados facilmente e acompanhe o status.</p>
                    </div>
                    <div className="card">
                        <h3>Aceitar e Concluir Chamados</h3>
                        <p>Gestão eficiente para a equipe de TI.</p>
                    </div>
                </div>
                <a href={javaApp} className="download-button">
                    Baixar JDesk
                </a>
                <p className="obs"><span className="text-red">OBS:</span> JDesk está disponível apenas para computadores. <br /> Windows, macOS e Linux.</p>
            </section>
        </main>
    );
}

export default Hero;
