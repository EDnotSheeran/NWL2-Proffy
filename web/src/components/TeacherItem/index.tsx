import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export default () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/55529750?s=460&u=0e15dd129323700c7f38a0e5e1fe9e84f763ee6d&v=4" alt=""/>
                <div>
                    <strong>EDnotSheeran</strong>
                    <span>Matematica</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis voluptatem perspiciatis deserunt quasi cupiditate voluptate provident ex ad aliquid tempora maiores impedit harum dolorem, ipsam recusandae. Accusamus, officia qui.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sed qui cupiditate, amet culpa dolor tenetur dolore mollitia nisi magni laboriosam odit nostrum, voluptatibus a explicabo quia similique! Neque, nobis.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    )
}