import CardProject from '../../components/CardProject';

import { FlashCards, CaseMaker, MainCases } from '../../assets/index';

import { ProjectsContainer, Title, CardsGroup } from './style';

export const Projects = () => {
  return (
    <ProjectsContainer name="projects">
      <Title />
      <CardsGroup>
        <CardProject
          title="spacetraveling"
          src="https://camo.githubusercontent.com/d40c03f6ee9ed415afc7ea18ab9c93bda72b74f3fea194f56fbcf5add8aaab20/68747470733a2f2f696b2e696d6167656b69742e696f2f77676c757178767469616c2f436170747572615f64655f74656c615f64655f323032312d30372d32375f31322d33372d32365f6b71546a36674d542d2d2e706e673f7570646174656441743d31363237343030363637333031"
          link="https://github.com/marcos-vinicios-dv/spacetraveling"
        >
          Projeto desenvolvido com Next, TypesScript, react-icons, date-fns e
          Prismic CMS...
        </CardProject>
        <CardProject
          title="ig.news"
          src="https://camo.githubusercontent.com/231970608a55e34e951535d5e77e8ddb780daeffe290225a8ab3b6cfb1228322/68747470733a2f2f696b2e696d6167656b69742e696f2f77676c757178767469616c2f436170747572615f64655f74656c615f64655f323032312d30372d32345f31312d34322d34385f4c7479687a54595268472e706e673f7570646174656441743d31363237313337393230323035"
          link="https://github.com/marcos-vinicios-dv/ignews"
        >
          Projeto desenvolvido com Next, TypesScript, next-auth, stripe e
          faunaDB...
        </CardProject>
        <CardProject
          title="dt money"
          src="https://ik.imagekit.io/wgluqxvtial/Captura_de_tela_de_2021-08-24_10-10-06_gEU3NcItrK.png?updatedAt=1629810687270"
          link="https://github.com/marcos-vinicios-dv/dtmoney"
        >
          Projeto desenvolvido com React, TypesScript, styled-components,
          axios...
        </CardProject>
        <CardProject
          title="Flash-Cards"
          src={FlashCards}
          link="https://github.com/marcos-vinicios-dv/react-flash-cards"
        >
          Projeto desenvolvido com React, Javascript, react-tabs e TailWind CSS.
        </CardProject>
        <CardProject
          title="Case - Maker"
          src={CaseMaker}
          link="https://github.com/marcos-vinicios-dv/case-maker"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga,
          Router-dom...
        </CardProject>
        <CardProject
          title="MainCases"
          src={MainCases}
          link="https://github.com/marcos-vinicios-dv/mainCases"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga,
          Router-dom...
        </CardProject>
      </CardsGroup>
    </ProjectsContainer>
  );
};
