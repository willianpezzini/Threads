import React, {useState} from "react";

import { Container, Logo, Header, DivNome, DivFotoPerfil, Nome, NomeDePerfil, BotaoThreads, DivNomePerfil, FotoPerfil, Biografia, TextoBiografia, ContainerSeguidoresLink, DivseguidoresLink, DivIconeInstagram, TextoCostomizavel, LogoRedesSociais, ContainerThreadsOuRespostas, DivThreadsOuRespostas, ContainerThreads} from "./styled";

import LogoSVG from "../../assets/icons/logo.svg";
import FotoDePerfil from "../../assets/images/perfil.jpg";
import LogoInstagram from "../../assets/icons/instagram-logo.svg";
import LogoGitHub from "../../assets/icons/github-logo.svg";
import BotaoMore from "../../assets/icons/more-circle.svg";

const Profile = () => {

    const [ThreadsOuRespostas, setThreadsOuRespostas] = useState("threads");

    return (

        <Container>
            <Logo src={LogoSVG} alt="Logo" />

            <Header>
                <DivNome>
                    <Nome>Willian Pezzini</Nome>
                    <DivNomePerfil>
                        <NomeDePerfil>willianPezzini</NomeDePerfil> 
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>
                </DivNome>
                <DivFotoPerfil>
                    <FotoPerfil src={FotoDePerfil}></FotoPerfil>
                </DivFotoPerfil>
            </Header>

            <Biografia>
                <TextoBiografia>
                    ⛪Católico
                </TextoBiografia>

                <TextoBiografia>
                    ♥️@lisianirosa 👨‍👩‍👦
                </TextoBiografia>
                
                <TextoBiografia>
                    🖥️Desenvolvedor Front-end
                </TextoBiografia>

                <TextoBiografia>
                    ⚖️Bacharel em Direito.
                </TextoBiografia>
                    
                <TextoBiografia>
                    🖥️Projetista 
                </TextoBiografia>
                    
               
            </Biografia>

            <ContainerSeguidoresLink>
                <DivseguidoresLink>
                    <TextoCostomizavel color="#616161" size="14">100 Seguidores . <a href="#">willianpezzini.com</a></TextoCostomizavel>
                </DivseguidoresLink>
                   
                <DivIconeInstagram>
                    <LogoRedesSociais src={LogoInstagram}></LogoRedesSociais>
                    <LogoRedesSociais src={LogoGitHub}></LogoRedesSociais>
                    <LogoRedesSociais src={BotaoMore}></LogoRedesSociais>
                </DivIconeInstagram>
            </ContainerSeguidoresLink>

            <ContainerThreadsOuRespostas>
                <DivThreadsOuRespostas onClick={() => {setThreadsOuRespostas("threads")}} outlined={ThreadsOuRespostas === "threads" ? "true" : "false"}>
                    <TextoCostomizavel color="#ffffff" size="17">Threads</TextoCostomizavel>
                </DivThreadsOuRespostas>

                <DivThreadsOuRespostas onClick={() => {setThreadsOuRespostas("respostas")}} outlined={ThreadsOuRespostas === "respostas" ? "true" : "false"}>
                    <TextoCostomizavel color="#ffffff" size="17">Respostas</TextoCostomizavel>
                </DivThreadsOuRespostas>
            </ContainerThreadsOuRespostas>

            <ContainerThreads display={ThreadsOuRespostas === "threads" ? "flex" : "none"}>
                <TextoCostomizavel color="red" size="20">Teste</TextoCostomizavel>
            </ContainerThreads>
        </Container>

    );

}

export default Profile;