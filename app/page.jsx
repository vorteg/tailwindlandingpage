import Description from '@/components/Description';
import Recomendations from '@/components/Recomendations';
import Simplify from '@/components/Simplify';
import SiteHeader from '@/components/SiteHeader';
import HeroContent from '@/components/HeroContent';
import CustomFooter from '@/components/CustomFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroContent />
      <figure class="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="bg-tablet-pattern.svg" class="absolute w-full -z-10 -top-24 -right-1/4 max-w-2xl" />
      </figure>
      <main >
        <Description />
        <Recomendations />
        <Simplify />
      </main>
      <footer className='bg-very-dark-blue py-24'>
        <CustomFooter />
      </footer>
    </>

  )
}
