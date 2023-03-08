import Button from '../components/Button/Button';

const Home = () => {
  return (
    <article className={'flex flex-col'}>
      <header className={'bg-bgGray'}>header</header>
      <main>
        <Button btnType={'PRIMARY'}>hi</Button>
      </main>
    </article>
  )
}

export default Home;
