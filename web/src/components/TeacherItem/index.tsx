import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

interface TeacherItemProps {
    teacher: {
        id: number
        avatar: string
        bio: string
        cost: number
        name: string
        subject: string
        whatsapp: string
    }
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher}) => {

    function createNewConnection() {
        api.post('connections',{
            users_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>{teacher.cost}</strong>
                </p>
                <a onClick={createNewConnection} href={` https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}
export default TeacherItem