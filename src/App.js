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

function App() {
  return (
      <>
          <div className='Container'>
              <Section>
                  <Title title={'Organisational Cyber Resilience'} subtitle={'A Global Survey'}
                         introduction={'Adam Edward DArcy'}/>
              </Section>
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
                              The research summarises a survey of 50 global organisational
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
              <Section>
                  <Title title={'Breakdown of respondents'} subtitle={'Geographies, Industries and Roles'}
                         introduction={'A breakdown of the organisation profiles that took part in the survey'}/>
              </Section>
              <Section title="Role Breakdown">
                  <Columns>
                      <Columns.Left>
                          The survey garnered 50 respondents globally, ranging from
                          management and individual contributor cyber leaders to C-
                          suite members. As highlighted in Table I, the largest portion
                          of respondents, at 40.80% were leaders with a Director or
                          Senior director-level role.
                      </Columns.Left>
                      <Columns.Right>
                          <ResponsiveImageContainer src={roles} alt={"Role Breakdown"}/>
                      </Columns.Right>
                  </Columns>
              </Section>
              <Section title="Industry Breakdown">
                  <ResponsiveImageContainer src={industry} alt={"Industry Breakdown"}/>
              </Section>
              <Section title="Locations of respondents">
                  <Columns>
                      <Columns.Left>
                          <article>
                              Respondents were located in a variety of locations, with the majority in Europe and the
                              USA. The location breakdown is highlighted in Table I.
                              As can be noted responses where collected from almost every major continent.
                              Many respondents businesses operated in multiple locations or globally.
                          </article>
                      </Columns.Left>
                      <Columns.Right>
                          <LocationsTable/>
                      </Columns.Right>
                  </Columns>
                  <Map/>
              </Section>
              <Section title="World Economic Forum Cyber Resilience Principles">
                  <ResponsiveImageContainer src={Principles} alt={"Principles of Cyber Resilience"}/>
              </Section>
              <Section>
                  <Title title={'Challenges'} subtitle={'Where can organisations improve their cyber resilience'}/>
              </Section>
              <Section title="Granular breakdown">
                  <ResponsiveImageContainer src={annotated} alt={'Granular Breakdown'}/>
              </Section>
              <Section title="Challenges of reporting / communicating">
                  <ResponsiveImageContainer src={report_challenges} alt={'Challenges of Reporting'}/>
              </Section>
              <Section title="Challenges by Mean">
                  <ResponsiveImageContainer src={mean_challenges} alt={'Mean Challenges'}/>
              </Section>
          </div>
          <Footer/>
      </>
  );
}

export default App;
