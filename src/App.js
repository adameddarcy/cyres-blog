import './App.css'
import Section from './components/Section';
import Title from './components/Title';
import Map from './components/Map'
import industry from './static/Industry breakdown@2x.png'
import Principles from './static/Median/Annotated principles.jpg'
import report_challenges from './static/Median/Low scores on reporting metrics@2x.png'
import annotated from './static/Median/Annotated chart.jpg'
import mean_challenges from './static/Mean/Annotated Mean lowest overall.jpg'
import roles from './static/Role Breakdown@2x.png'
import ResponsiveImageContainer from "./components/ResponsiveImageContainer";
import LocationsTable from "./Tables/LocationsTable";
import Columns from "./components/Columns";
import Reference from "./components/Reference";
import Footer from "./components/Footer";
import VerticalNav from "./components/VerticalNav";

function App() {
  return (
      <>
          <div className='Container'>
              <Section>
                  <Title title={'Organisational Cyber Resilience'} subtitle={'A Global Survey'}
                         introduction={'Adam Edward DArcy'}/>
              </Section>
              <VerticalNav>
                  <VerticalNav.Link id="Intro" label="Introduction" />
                  <VerticalNav.Link id="Pro" label="Profile Breakdown" />
                      <VerticalNav.SubLink id="subsection1-2" label="Industry Breakdown" />
                      <VerticalNav.SubLink id="subsection1-3" label="Roles and Industries Breakdown" />
                      <VerticalNav.SubLink id="subsection1-4" label="Cyber Resilience Principles" />
                  <VerticalNav.Link id="Challenges" label="Challenges" />
                    <VerticalNav.SubLink id="subsection2-2" label="Granular Breakdown" />
                    <VerticalNav.SubLink id="subsection2-3" label="Challenges of Reporting" />
                    <VerticalNav.SubLink id="subsection2-4" label="Challenges by Mean" />

                  <VerticalNav.Section id="Intro">
                      <Section>
                          <Title title={'Introduction'} subtitle={'Research goals and overview'}/>
                          <Columns>
                              <Columns.Left>
                                  <article>
                                      Understanding the current state of cyber resilience is
                                      essential for guiding decision-makers and enabling organisations
                                      to improve resilience. In 2024, 39% of global businesses admit
                                      they “are not adequately prepared” to withstand sophisticated
                                      cyber attacks <Reference
                                      link={'https://www.weforum.org/agenda/2024/04/cybersecurity-key-strategies-cyber-resilience-2024/'}/>.
                                      This research investigates
                                      how organisations prepare to resist these threats in an era when
                                      cyber security breaches are not a possibility but a certainty.
                                  </article>
                              </Columns.Left>
                              <Columns.Right>
                                  <article>
                                      The research summarises a survey of global organisational
                                      leaders, ranging from management to C-suite executives, to ex-
                                      plore their organisations’ cyber resilience postures. The research
                                      attempts to answer two questions:
                                      <b> 1)</b> What is the current state of cyber resilience?
                                      <b> 2)</b> When identified, can a codified method be established to
                                      address challenges?
                                  </article>
                              </Columns.Right>
                          </Columns>
                      </Section>
                  </VerticalNav.Section>

                  <VerticalNav.Section id="Pro">
                      <Section>
                          <Title title={'Breakdown of respondents'} subtitle={'Geographies, Industries and Roles'}
                                 introduction={'A breakdown of the organisation profiles that took part in the survey'}/>
                      </Section>
                      <VerticalNav.SubSection id="subsection1-2">
                          <Section title="Industry Breakdown">
                              <ResponsiveImageContainer src={industry} alt={"Industry Breakdown"}/>
                          </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="subsection1-3">
                        <Section title="Profile Breakdown">
                          <article>
                              The survey garnered respondents globally, ranging from
                              management and individual contributor cyber leaders to C-
                              suite members. As highlighted in Table I, the largest portion
                              of respondents, at 40.80% were leaders with a Director or
                              Senior director-level role.
                              Respondents were located in a variety of locations, with the majority in Europe and the
                              USA. The location breakdown is highlighted in Table I.
                              As can be noted responses where collected from almost every major continent.
                              Many respondents businesses operated in multiple locations or globally.
                          </article>
                          <Columns>
                              <Columns.Left>
                                  <ResponsiveImageContainer src={roles} alt={"Role Breakdown"}/>
                              </Columns.Left>
                              <Columns.Right>
                                  <LocationsTable/>
                              </Columns.Right>
                          </Columns>
                          <Map/>
                      </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="subsection1-4">
                        <Section title="World Economic Forum Cyber Resilience Principles">
                          <article>
                              This research is significant because it has the potential
                              to inform and guide organisations in bolstering their cyber

                              resilience capabilities. The study identifies challenges organ-
                              isations face in implementing cyber resilience strategies by

                              identifying critical global cyber resilience trends, challenge
                              areas and strengths.
                              To investigate cyber resilience across organisations globally,
                              a survey was developed based on the World Economic Forum’s
                              cyber resilience Framework and Index, categorising cyber
                              resilience into principles, practices, and sub-practices <Reference link={'https://www3.weforum.org/docs/WEF_Cyber_Resilience_Index_2022.pdf'}/>. The
                              analysis of this data has enabled the identification of strengths,
                              weaknesses and trends.
                          </article>
                          <ResponsiveImageContainer src={Principles} alt={"Principles of Cyber Resilience"}/>
                      </Section>
                      </VerticalNav.SubSection>
                  </VerticalNav.Section>

                  <VerticalNav.Section id="Challenges">
                      <VerticalNav.SubSection id="subsection2-1">
                          <Section>
                              <Title title={'Challenges'} subtitle={'Where can organisations improve their cyber resilience'}/>
                          </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="subsection2-2">
                          <Section title="Granular breakdown">
                              <ResponsiveImageContainer src={annotated} alt={'Granular Breakdown'}/>
                          </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="subsection2-3">
                          <Section title="Challenges of reporting / communicating">
                              <ResponsiveImageContainer src={report_challenges} alt={'Challenges of Reporting'}/>
                          </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="subsection2-4">
                          <Section title="Challenges by Mean">
                              <ResponsiveImageContainer src={mean_challenges} alt={'Mean Challenges'}/>
                          </Section>
                      </VerticalNav.SubSection>
                  </VerticalNav.Section>
              </VerticalNav>
          </div>
          {/*<Footer/>*/}
      </>
  );
}

export default App;
