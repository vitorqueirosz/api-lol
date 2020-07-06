import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { Container, Content } from './styles';

import logo from '.././uploads/logo.svg';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Champions {
    id: number;
    name: string;
    image: string;


    
    config: string;
    data: string;
}

const Home: React.FC = () => {
    const [champions, setChampions] = useState<Champions[]>([]);
    const [newChamp, setNewChamp] = useState<string>('');
    const [error , setError] = useState(false);

    useEffect(() => {
        toast.warn('Digite um campeão sem espaços e com a primeira letra maiúscula, ex: MasterYi');

    },[]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewChamp(event.target.value);

    };


    async function handleData(event: FormEvent) {
        event.preventDefault();
        
        try {
            
        if (newChamp === '') throw new Error('You have to pick a champion!');


            
        const hasChampion = champions.find((c)=> c.name === newChamp);

        if (hasChampion)  throw new Error('Champion already selected');

        await api.get(`10.13.1/data/en_US/champion/${newChamp}.json`).then(response => {
            
            const champName = newChamp;
            const data  = response.data.data[champName]
            setError(false)
            setChampions([...champions, data]);
            toast.dark("Campeão  encontrado!", { autoClose: 1200});
        });

        } catch (error) {
            setError(true);
            toast.error('Digite um campeão válido ou com a primeira letra maiúscula!');
        }

    }

  return (

    <Container>
        <img src={logo} alt="logo"/>

    
        <div>
            <form action="" onSubmit={handleData}>
                <input  className={error ? 'error' : ''} type="text" placeholder="Pesquise um campeao, ex: LeeSin" onChange={handleInputChange}/>
            </form>
                <button className={error ? 'errorButton' : ''} onClick={handleData}><FiSearch size={25}/></button>
        </div>


        <Content>
             <div >
                 <ul>
                    {champions.map(champion => (
                    <li key={String(champion.id)}>
                        <aside>
                            <span>{champion.name}</span>
                            <img 
                            key={champion.id} 
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} 
                            alt=""
                            />
                        </aside>
                        <Link  to={`details/${encodeURIComponent(champion.id)}`}>Detalhes</Link>
                    </li>
                        ))}
                 </ul>

             </div>

        </Content>

    </Container>
  );
}

export default Home;