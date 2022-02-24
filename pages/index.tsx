import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';

import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';


const StyledCounter = styled.div`
   margin: 15px;
   padding: 15px;
`;

const GlobalStyle = createGlobalStyle`
   *{
       font-family: sans-serif;
    }

    body{
    	margin: 15px;
    	padding: 15px;
    }
`;


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({theme}) => {return theme.colors.primary}};
  small{
      font-size: 0.8rem;
  }
`;


export async function getStaticProps(context) {
    const apiBiblia = await fetch('https://www.abibliadigital.com.br/api/verses/acf/rm/14')
	.then((respostaDoServer)=>{
        if (respostaDoServer.ok) {
            return respostaDoServer.json();
        }
	}).then((respostaEmObjeto)=>{
        return respostaEmObjeto;
	});

	return {
	    props: {
	    	apiBiblia
	    }, 
	}
}



export default function Home(props)
{
	const {apiBiblia} = props;

	return (
        <div>
        <GlobalStyle />
            <Head title="IBN - Igreja Batista Nikkei" />
            <Header />
            <Image 
                src="/img/ibn-logo.png"
                alt="ibn-logo"
                width={150}
                height={100}
                priority
            />
            <Title>
                Igreja Batista Nikkei - <small>A palavra ministrada com amor.</small>
            </Title>
            <main>
                <Typography>
                    <b> Presidente:</b> Bispo Daniel dos Santos Jr. 
                </Typography>
            </main>    
    		<StyledCounter>
                <h2>{apiBiblia.book.name} {apiBiblia.chapter.number}</h2>
                <p><b>Author:</b> {apiBiblia.book.author}
                 - <b>Group:</b> {apiBiblia.book.group}
                 - <b>version:</b> {apiBiblia.book.version}</p>
                <ol>
                  {apiBiblia.verses.map((api)=>(
                  	  <li key={api.number}>
                           {api.text}
                  	  </li>
                  	))}
                </ol>
                <p><b> IBN Brisamar </b> </p>
                <p><b>Rua Margarida Santos Silva, Quadra 23 Lote 22 - Ao lado da Rede Ferraz em Brisamar.</b></p>
    		</StyledCounter>
            <Footer />
        </div>
	);
}