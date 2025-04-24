import React, {useState} from "react";

import { Container, Logo, Header, DivNome, DivFotoPerfil, Nome, NomeDePerfil, BotaoThreads, DivNomePerfil, FotoPerfil, Biografia, TextoBiografia, ContainerSeguidoresLink, DivseguidoresLink, DivIconeInstagram, TextoCostomizavel, Icone, ContainerThreadsOuRespostas, DivThreadsOuRespostas, ContainerThreads, DivFotoPerfilContainer, DivPostThreadsContainer, DivHeaderPostContainer, PerfilThreads, TempoDoPost} from "./styled";

import LogoSVG from "../../assets/icons/logo.svg";
import FotoDePerfil from "../../assets/images/perfil.jpg";
import LogoInstagram from "../../assets/icons/instagram-logo.svg";
import LogoGitHub from "../../assets/icons/github-logo.svg";
import BotaoMore from "../../assets/icons/more-circle.svg";
import More from "../../assets/icons/more-svg.svg";

const Profile = () => {

    const [ThreadsOuRespostas, setThreadsOuRespostas] = useState("threads");

    return (

        <Container>
            <Logo src={LogoSVG} alt="Logo" />

            <Header>
                <DivNome>
                    <Nome>Willian H. Pezzini</Nome>
                    <DivNomePerfil>
                        <NomeDePerfil>willianpezzini</NomeDePerfil> 
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>
                </DivNome>
                <DivFotoPerfil>
                    <FotoPerfil src={FotoDePerfil} maxWidth="80"></FotoPerfil>
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
                    <Icone src={LogoInstagram}></Icone>
                    <Icone src={LogoGitHub}></Icone>
                    <Icone src={BotaoMore}></Icone>
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
                <DivFotoPerfilContainer>
                    <FotoPerfil src={FotoDePerfil} maxWidth='45'></FotoPerfil>
                </DivFotoPerfilContainer>

                <DivPostThreadsContainer>
                    <DivHeaderPostContainer>
                        <PerfilThreads>
                            <TextoCostomizavel color="#ffffff" size="15">willianpezzini</TextoCostomizavel>
                        </PerfilThreads>
                        <TempoDoPost>
                            <TextoCostomizavel color="#616161" size="15">3 sem</TextoCostomizavel>
                            <Icone width='32' src={More}></Icone>
                        </TempoDoPost>
                    </DivHeaderPostContainer>
                </DivPostThreadsContainer>
            </ContainerThreads>
        </Container>

    );

}

export default Profile;