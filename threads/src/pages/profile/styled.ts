import styled, { createGlobalStyle } from "styled-components";

interface TextoCostomizavelType  {
    color: string;
    size: string;
    marginTop?: string;
    marginLeft?: string;
    weight?: string;
};

interface IconeType {
    width?: string;
    marginBottom?: string;
    marginLeft?: string;
}

interface DivThreadsOuRespostasType {
    outlined: string;
};

interface ContainerThreadsType {
    display?: string
};

interface FotoPerfilType {
    maxWidth?: string
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #101010;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
     
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 25px;
    padding: 30px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const DivNome = styled.div`
    display: flex;
    flex: 1;
    color: aliceblue;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;

export const Nome = styled.h1`
    font-size: 25px;
    color: #f3f5f7;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    letter-spacing: 0.5px;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

`;

export const NomeDePerfil = styled.h2`
    font-size: 13px;
    color: #f3f5f7;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const DivFotoPerfil = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;


`;

export const BotaoThreads = styled.button`
    padding: 5px 6px;
    border-radius: 15px;
    border: none;
    background-color: #1e1e1e;
    font-family: 'Roboto', sans-serif;
    color: #616161;
    font-size: 15px;
    letter-spacing: 0.2px;
    cursor: pointer;
`;

export const FotoPerfil = styled.img<FotoPerfilType>`
    border-radius: 50%;
    width: 100%;
    max-width: ${(props) => props.maxWidth ? `${props.maxWidth}px` : '40' };
`;

export const Biografia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-top: 15px;
`;

export const TextoBiografia = styled.h3`
    border: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #f3f5f7;
    font-weight: 300;
    margin-top: 2px;
    
`;

export const ContainerSeguidoresLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    margin-left: 5px;
`;

export const DivseguidoresLink = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 2;
    letter-spacing: 0.5;

    a {
        text-decoration: none;
        color: #616161;
    }
`;

export const DivIconeInstagram = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 5px;
`;

export const TextoCostomizavel = styled.p<TextoCostomizavelType>`
    border: 0;
    margin: 0;
    color: ${(props) => (props.color ? props.color : 'white')};
    font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
    letter-spacing: 0.5px;
    margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
    margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : '0px')};
    font-weight: ${(props) => (props.weight ? props.weight : '300')};
`;

export const Icone = styled.img<IconeType>`
    width: 100%;
    max-width: ${(props) => props.width ? `${props.width}px` : '23px'};
    cursor: pointer;
    margin-right: 1px;
    margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${(props) => props.marginLeft? `${props.marginLeft}px` : '0px'};
`;

export const ContainerThreadsOuRespostas = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 15px 0px;
`;

export const DivThreadsOuRespostas = styled.div<DivThreadsOuRespostasType>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-bottom: ${(props) => props.outlined === "true" ? "1px solid lightgray" : "0px"};
    cursor: pointer;

`;

export const ContainerThreads = styled.div<ContainerThreadsType>`
    display: ${(props) => props.display ? props.display : "flex"};
    width: 100%;
`;

export const DivFotoPerfilContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    max-height: 47px;
`;

export const DivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    width: 100%;
    color: aliceblue;
    margin-left: -8px;
`;

export const DivHeaderPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const PerfilThreads = styled.div`
    display: flex;
    flex-direction: row;
    align-items:flex-start;
    cursor: pointer;
`;

export const TempoDoPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DivInteracaoPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 18px 0px;
    gap: 10px;
    cursor: pointer;
`;

export const ContainerDownload = styled.div`
    background-color: #0a0a0a;
    margin-top: 35px;
    width: 100%;
    border-radius: 15px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`;

export const BotaoBaixarApp = styled.button`
    background-color: transparent;
    border: 1px solid #5d5d5d;
    color: #f3f5f7;
    padding: 6px 12px;
    margin-top: 30px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    cursor: pointer;
    font-weight: 300;
`;