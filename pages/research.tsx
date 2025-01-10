import CommonDivider from "../utils/components/common/commonDivider";
import DescriptionList from "../utils/components/common/descriptionList";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import ProjectSection from "../utils/components/pages/projects/projectSection";
import PublicationsSection from "../utils/components/pages/publications/publicationsSection";
import projectsConfig from "../utils/data/research.json";

export default function Projects() {
    return (
        <>
            <NavBar />
            <Title title={ projectsConfig.publication.pageTitle } />
            <MainGrid>
                <PublicationsSection publications={ projectsConfig.publication.publications }/>
            </MainGrid>

 

            <CommonDivider />
            
            <Title title={ projectsConfig.research.pageTitle } />
            <MainGrid>
                <ProjectSection researches={ projectsConfig.research.projects }/>
            </MainGrid>
        </>
    );
}
