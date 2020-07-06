import React, { useState, useEffect } from 'react';
import { Container, 
    GridContainer, 
    AsideContent, 
    MainContent, 
    SkillsContent, 
    RightContent,
    SkillModal,
    GridLine,
    LoreContent,
    Loading
 } from './styles';

import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface AxiosResponse {
        config: string;
        url: string;
    }

interface Skill {
        name: string;
        description: string;
        id: string;    
}
interface Passive {
    description: string;
    name: string;
}
interface Data {
    id: string;
    name: string;
    title: string;
    blurb: string;
    passive: {
        name: string;
        description: string;
    };
    tags: [];

    spells: {
        name: string;
        description: string;
        id: string;
    }[];

    info: Data;
}
const Details: React.FC = () => {
    const [data, setData] = useState<Data>({} as Data);
    const [skill, setSkill] = useState<Skill>({} as Skill);
    const [spell, setSpell] = useState<Skill[]>([]);
    const [passive, setPassive] = useState<Passive>({} as Passive);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            toast.warn('Clicando nas habilidades, voce poderá  visualizar sua descrição!');
        }, 1500);

    },[]);

    useEffect(() => {

        api.get(`10.13.1/data/en_US/champion/${id}.json`).then(response => {

            const champion = response.data.data[id];
            setData(champion);
            console.log(champion)

            const skills = champion.spells
            const passive = champion.passive
            console.log(passive)
            setSpell(skills);
            setPassive(passive)
        });
        
        setTimeout(() => {
            setLoading(false)
        }, 1100);
        
    }, [id, loading]);

    function SelectedPassive() {
        const passives = data.passive
        setPassive(passives)

    }

    function SelectedSkillQ() {

        const skills = data.spells[0]
        setSkill(skills)
        console.log(skills)
        setPassive(skills);

    }
    function SelectedSkillW() {

        const skills = data.spells[1]
        setSkill(skills)
        setPassive(skills);
    
    }
    function SelectedSkillE() {

        const skills = data.spells[2]
        setSkill(skills)
        setPassive(skills);

    }
    function SelectedSkillR() {

        const skills = data.spells[3]
        setSkill(skills)
        setPassive(skills);

    }
  return (
    <Container>
        {loading ? 
        
        <Loading>

            <h1 className="jump">Carregando informações do <span>{id}</span></h1>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="splash"/>
        </Loading> 
            : 
    <>
        <h5>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="splash"/>
        </h5>
        <header>
            <span>DETALHES</span>
            <Link to="/"><FiArrowLeft size={25}/></Link>
        </header>
       <GridContainer>
           <GridLine>
               <div></div>

               <div></div>
           </GridLine>

            <AsideContent>
                <nav>
                    <span>SOBRE</span>
                    <span>NOME</span>
                </nav>
            </AsideContent>

            <MainContent>
                <div>
                    <aside>
                        <h1>{data.name}</h1>
                        <span>{data.title}</span>
                    </aside>
                    
                    <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${id}.png`} alt="icon"/>
                </div>


                <LoreContent>
                    <div>
                        <p>{data.blurb}</p>
                    </div>
                </LoreContent>

                <SkillsContent>
                    <strong>SKILLS</strong>
    
                    <aside>
                         <div onClick={() => SelectedPassive()}>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/passive/${data.id}_P.png`} alt=""/>
                                <span>Passiva</span>
                        </div>
                        <div onClick={() => SelectedSkillQ()}>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${spell[0].id}.png`} alt=""/>
                                <span>(Q)</span>
                        </div>

                        <div onClick={() => SelectedSkillW()}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${spell[1].id}.png`} 
                        alt="Skill"
                        />
                                <span>(W)</span>
                        </div>

                        <div onClick={() => SelectedSkillE()}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${spell[2].id}.png`} alt=""/>
                                <span>(E)</span>
                        </div>

                        <div onClick={() => SelectedSkillR()}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${spell[3].id}.png`} alt=""/>
                                <span>(R)</span>
                        </div>
                    </aside>
            
                </SkillsContent>

                <SkillModal>
                    {/* {passive.description ? 
                    <div className={passive.name ? 'show' : 'SkillModal'}>
                            <span>{passive.name}</span>
                        <aside>
                        <img 
                        // src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/passive/${data.name}_P.png`} 
                        alt="skill"
                        />
                        <p>{passive.description}</p>
                        </aside>
                   </div>
                    : null} */}
                   <div className={skill.id ? 'show' : 'SkillModal'}>
                            <span>{skill.name}</span>
                        <aside>
                        <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${skill.id}.png`} 
                        alt="skill"
                        />
                        <p>{skill.description}</p>
                        </aside>
                   </div>

                </SkillModal>

            </MainContent>

            <RightContent>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`} alt="splash"/>

                <div>
                {/* <span>{data.tags}</span> */}
                
                </div>
            </RightContent>

        </GridContainer> 
        </>
}
    </Container>
  );
}

export default Details;