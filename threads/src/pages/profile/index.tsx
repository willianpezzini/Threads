import { Container, Logo, Header, DivNome, DivFotoPerfil, Nome, NomeDePerfil, BotaoThreads, DivNomePerfil, FotoPerfil, Biografia, TextoBiografia, ContainerSeguidoresLink, DivseguidoresLink, DivIconeInstagram, TextoCostomizavel} from "./styled";

import LogoSVG from "../../assets/icons/logo.svg";
import FotoDePerfil from "../../assets/images/perfil.jpg"

const Profile = () => {
    return (

        <Container>
            <Logo src={LogoSVG} alt="Logo" />

            <Header>
                <DivNome>
                    <Nome>Willian Pezzini</Nome>
                    <DivNomePerfil>
                        <NomeDePerfil>willianPezzini</NomeDePerfil> 
                        <BotaoThreads>threds.net</BotaoThreads>
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
                    <TextoCostomizavel color="#616161" size="14">100 Seguidores . willianpezzini.com</TextoCostomizavel>
                </DivseguidoresLink>

                <DivIconeInstagram>

                </DivIconeInstagram>
            </ContainerSeguidoresLink>
        </Container>

    );

}

export default Profile;