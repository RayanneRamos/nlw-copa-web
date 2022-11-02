//interface HomeProps {
//  pools: number
//}

import Image from 'next/image';
import appPreviewImage from '../assets/app-nlw-copa-preview.png';
import logoImage from '../assets/logo.svg';
import usersAvatarImage from '../assets/users-avatar-example.png';
import iconCheckImage from '../assets/icon-check.svg';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImage} alt='NLW Copa' />
        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
        <div>
          <Image src={usersAvatarImage} alt='Imagem dos avatares do bolão' />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>
        <form>
          <input type='text' required placeholder='Qual o nome do seu bolão?' />
          <button type='submit'>Criar meu bolão</button>
        </form>
        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        <div>
          <div>
            <Image src={iconCheckImage} alt='' />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImage} alt='' />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image 
        src={appPreviewImage} 
        alt='Dois celulares exibindo uma prévia da aplicação móvel da NLW Copa' 
        quality={100}
      />
    </div>
  );
}

//export const getServerSideProps = async () => {
//  const response = await fetch('http://localhost:3333/pools/count');
//  const data = await response.json();

  //return {
  //  props: {
  //    pools: data.pools,
  //  },
//  }
//}