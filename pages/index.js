
import React from 'react';

export async function getStaticProps(context) {
    const apiBiblia = await fetch('https://www.abibliadigital.com.br/api/verses/acf/rm/14')
	.then((respostaDoServer)=>{
        if (respostaDoServer.ok) {
            return respostaDoServer.json();
        }
	})
	.then((respostaEmObjeto)=>{
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
		    <h1>Igreja Batista Nikkei - <small>A palavra ministrada com amor.</small></h1>
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
		</div>
	);
}
