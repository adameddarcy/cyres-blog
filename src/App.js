import './App.css'

import industry from './static/Industry breakdown@2x.png'
import Principles from './static/Median/Annotated principles.jpg'
import report_challenges from './static/Median/Low scores on reporting metrics@2x.png'
import annotated from './static/Median/Annotated chart.jpg'
import mean_challenges from './static/Mean/Annotated Mean lowest overall.jpg'
import roles from './static/Role Breakdown@2x.png'
import ttr from './static/TTR v companies and TTE.png'
import ttr_annotated from './static/TTR v TTE annotated.jpg'
import indexes from './static/self guided v pre and post.png'

import Section from './components/Section';
import Title from './components/Title';
import Map from './components/Map'
import ResponsiveImageContainer from "./components/ResponsiveImageContainer";
import LocationsTable from "./Tables/LocationsTable";
import Columns from "./components/Columns";
import Reference from "./components/Reference";
import Footer from "./components/Footer";
import VerticalNav from "./components/VerticalNav";
import HighlightNumber from './components/HighlightNumber'
import HighlightPercentage from './components/HighlightPercentage'

function App() {
  return (
      <>
          <div className='Container'>
              <VerticalNav>
                  <VerticalNav.Link id="Intro" label="Introduction" />
                    <VerticalNav.SubLink id="Cyres" label="Cyber Resilience" />
                    <VerticalNav.SubLink id="importance" label="The Importance of Cyber Resilience in 2024" />
                    <VerticalNav.SubLink id="TTR" label="Prepare, React, Recover, Respond" />
                  <VerticalNav.Link id="Pro" label="Profile Breakdown" />
                    <VerticalNav.SubLink id="subsection1-2" label="Industry Breakdown" />
                    <VerticalNav.SubLink id="subsection1-3" label="Roles & Industries Breakdown" />
                    <VerticalNav.SubLink id="subsection1-4" label="Cyber Resilience Principles" />
                  <VerticalNav.Link id="Results" label="Survey & Results" />
                  <VerticalNav.SubLink id="results.1" label="Method & Survey" />
                    <VerticalNav.SubLink id="results.2" label="Results Discussion" />
                  <VerticalNav.Link id="Challenges" label="Challenges" />
                    <VerticalNav.SubLink id="subsection2-2" label="Granular Breakdown" />
                    <VerticalNav.SubLink id="subsection2-3" label="Challenges of Reporting" />
                    <VerticalNav.SubLink id="subsection2-4" label="Challenges by Mean" />
                  <VerticalNav.Section>
                      <Section>
                          <Title title={'Organisational Cyber Resilience'} subtitle={'A Global Survey'}
                                 introduction={'Adam Edward DArcy'}/>
                      </Section>
                      <VerticalNav.SubSection id="Intro">
                          <Section>
                              <Title title={'Introduction'} subtitle={'Research goals & overview'}/>
                              <Columns>
                                  <Columns.Left>
                                      <article>
                                          Underst&ing the current state of cyber resilience is
                                          essential for guiding decision-makers & enabling organisations
                                          to improve resilience. In 2024, 39% of global businesses admit
                                          they “are not adequately prepared” to withst& sophisticated
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
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="Cyres">
                          <Section>
                              <h1>Cyber Resilience</h1>
                              <article>
                                  Cyber resilience enables achieving mission or business objectives that depend on cyber resources, even in
                                  a contested cyber environment <Reference link={'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-172A.pdf'}/>.
                                  <br/><br/>
                                  Cyber resilience, as defined by the National Institute of
                                  St&ards & Technology, refers to the ability of systems,
                                  networks, & organisations to anticipate, withst&, recover
                                  from, & adapt to adverse cyber events <Reference
                                  link={'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-172A.pdf'}/>.
                                  The World Economic Forum’s
                                  cyber resilience Framework & Index, categorising cyber
                                  resilience into principles, practices, & sub-practices <Reference link={'https://www3.weforum.org/docs/WEF_Cyber_Resilience_Index_2022.pdf'}/>.
                                  The Index identified 6 principles of cyber resilience.
                              </article>
                              <Columns>
                                  <Columns.Left>
                                        <article>
                                            <ul>
                                                <li>Regularly assess & prioritize cyber risk</li>
                                                <li>Establish & maintain core security fundamentals</li>
                                                <li>Incorporate Cyber Resilience governance into business strategy</li>
                                                <li>Encourage systematic resilience & collaboration</li>
                                                <li>Ensure Design Supports Cyber Resilience</li>
                                                <li>Cultivate a culture of resilience</li>
                                            </ul>
                                        </article>
                                  </Columns.Left>
                                  <Columns.Right>
                                      <iframe style={{minHeight:"400px"}} src={'https://www3.weforum.org/docs/WEF_Cyber_Resilience_Index_2022.pdf'}/>
                                  </Columns.Right>
                              </Columns>
                          </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id='importance'>
                        <Section>
                          <h1>The Importance of Cyber Resilience in 2024</h1>
                            <article>
                            In 2023, the global cost of cybercrime
                              reached $8.3 trillion & is projected to surge by approximately 162% between 2024 & 2028 <Reference link={'https://www.statista.com/chart/28878/expected-cost-of-cybercrime-until-2027/'}/>.
                            <br/><br/>
                              The 2024 CrowdStrike Global Threat Report states, “We are entering an
                              era of a cyber arms race where AI will amplify the impact for both the
                              security professional & the adversary. Organisations cannot afford to fall
                              behind, & the legacy technology of yesterday is no match for the speed &
                              sophistication of the modern adversary” <Reference link={'https://go.crowdstrike.com/global-threat-report-2024.html?utm_campaign=br&&utm_content=crwd-br&-eur-uki-en-psp-x-trl-x-tct-x_x_x_reports-x&utm_medium=sem&utm_source=goog&utm_term=crowdstrike%202024%20global%20threat%20report&cq_cmp=19634286389&cq_plac=&gad_source=1&gclid=CjwKCAjw6JS3BhBAEiwAO9waF-HanocnyDJmkRBEMWMEBdvXZkjc4751i2eoi4u6_iCXPlwjGiTW6BoCW3EQAvD_BwE'}/>.
                              <br/><br/>
                              The l&scape of Cyber has shifted. Attackers are more advanced
                              & better equipped, organisations are increasingly reliant on Cyber & in
                              response, the industry is groping toward a new reality based increasingly
                              on a ‘bend, don’t break’ model instead of pure prevention.
                              As stated by Grant Thornton in their 2021 report “The Economic Cost of Cybercrime”,
                              it is not a question of ‘if; but a question of ‘when’ an organisation will be a
                              victim of a cyber attack.
                              The ability of businesses to detect & react to an attack will be the key factor in limiting the impact <Reference link={'https://www.grantthornton.ie/globalassets/1.-member-firms/irel&/insights/publications/grant-thornton---the-economic-cost-of-cybercrime.pdf'}/>.
                              <br/><br/>
                              This knowledge raises the importance of Cyber Resilience & its role in enabling organisations to “anticipate, withst&,
                              recover from, & adapt to adverse cyber events.” <Reference link={'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-172A.pdf'}/>. As legislation is rolled
                              out by Government bodies to protect critical assets hosted by independent
                              organisations, it will become ever more critical for organisations to be able to
                              correctly introspect & self-report on their Cyber Resilience preparedness
                              & capabilities alongside frameworks to enable the growth of the success
                              of these programs. “A mature cyber resilience approach should be flexible,
                              adaptable, & continuously improving. . . [A] framework would describe an
                              approach & attitude towards delivering cyber resilience.” <Reference link={'https://www.weforum.org/agenda/2021/11/why-move-cyber-security-to-cyber-resilience/#:~:text=Jim%20Alkove&text=Frauds%20such%20as%20phishing%2C%20malware,sufficient%3B%20businesses%20need%20cyber%20resilience.'}/>.
                            </article>
                        </Section>
                      </VerticalNav.SubSection>
                      <VerticalNav.SubSection id="TTR">
                          <Section>
                              <h1>Prepare, React, Recover, Respond</h1>
                              <h2>Readiness is critical</h2>
                              <article>
                                  In 2020, the Institute of International Finance & McKinsey
                                  & Company surveyed 50 firms. During this study, 59% of
                                  respondents said it would take one to six months to remediate
                                  a vulnerability, while 15% stated it would take six or more
                                  months to remediate a vulnerability <Reference link={'https://www.mckinsey.com/~/media/mckinsey/business%20functions/risk/our%20insights/the%20cybersecurity%20posture%20of%20financial%20services%20companies%20iif%20mckinsey%20cyber%20resilience%20survey/iif-mckinsey-cyber-resilience-survey-vf.pdf'}/> .
                              </article>
                              <ResponsiveImageContainer src={ttr} alt={"Time to resolve versus Time to execute"}/>
                              <article>
                                  The dangers of these
                                  timelines are made clear when considering that in 2022, the
                                  mean time to exploit a vulnerability was only 32 days, a full
                                  12 days faster than the 2020 data citing a mean time to exploit
                                  of 44 days <Reference link={'https://cloud.google.com/blog/topics/threat-intelligence/time-to-exploit-trends-2021-2022/'}/> .
                                  <br/><br/>
                                  According to Lefton et al., 2024 "As of May 2024, the  average time for exploitation to begin is approximately <b>4 days</b> after a vulnerability is made public" <Reference link={'https://www.akamai.com/blog/security-research/2024-php-exploit-cve-one-day-after-disclosure#:~:text=As%20of%20May%202024%2C%20the,all%20for%20defenders%20to%20prepare.'}/>.                             
                              </article>
                              <ResponsiveImageContainer src={ttr_annotated} alt={"Time to resolve versus Time to execute annotated"}/>
                          </Section>
                      </VerticalNav.SubSection>
                  </VerticalNav.Section>

                  <VerticalNav.Section id="Pro">
                      <Section>
                          <Title title={'Breakdown of respondents'} subtitle={'Geographies, Industries & Roles'}
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
                              management & individual contributor cyber leaders to C-
                              suite members. As highlighted in Table I, the largest portion
                              of respondents, at 40.80% were leaders with a Director or
                              Senior director-level role.
                              Respondents were located in a variety of locations, with the majority in Europe & the
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
                              to inform & guide organisations in bolstering their cyber

                              resilience capabilities. The study identifies challenges organ-
                              isations face in implementing cyber resilience strategies by

                              identifying critical global cyber resilience trends, challenge
                              areas & strengths.
                              To investigate cyber resilience across organisations globally,
                              a survey was developed based on the World Economic Forum’s
                              cyber resilience Framework & Index, categorising cyber
                              resilience into principles, practices, & sub-practices <Reference link={'https://www3.weforum.org/docs/WEF_Cyber_Resilience_Index_2022.pdf'}/>. The
                              analysis of this data has enabled the identification of strengths,
                              weaknesses & trends.
                          </article>
                      </Section>
                      </VerticalNav.SubSection>
                  </VerticalNav.Section>

                  <VerticalNav.Section id={'Results'}>
                  <Section>
                          <Title title={'Survey & Results'} subtitle={'Survey design & survey results discussion'}/>
                      </Section>
                      <VerticalNav.SubSection id={'results.1'}>
                        <Section>
                        <h1>Method & Survey Design</h1>
                          <Columns>
                            <Columns.Left>
                              <article>
                                  This study adopted a mixed-method approach, combining
                                qualitative and quantitative techniques to investigate the research objectives comprehensively. The methodology has been
                                structured into Phase 1, ”Discovery,” and Phase 2, ”Exploring.”
                                In Phase 1, a qualitative approach laid the groundwork for
                                the research by conducting an extensive literature review and
                                a study of the state-of-the-art to analyse existing theories,
                                methodologies, and technologies in the field. The Discovery
                                phase provided essential context and
                            </article>
                            </Columns.Left>
                            <Columns.Right>
                              <article>
                              theoretical frameworks
                                to guide the exploration phase.
                                 To date, the exploration has used a survey to ask, 
                                 “What is the state of organisational cyber resilience in 2024?” The
                                  survey instrument consists of 66 questions divided into four
                                  sections: profile, introspection, index, and retrospection. It has
                                  been designed based on the expertise gathered during the
                                  discovery phase, mainly drawing from <Reference link={'https://www3.weforum.org/docs/WEF_Cyber_Resilience_Index_2022.pdf'}/>. The Index was
                                  chosen due to its simplicity and granular nature: each principle
                                  is broken down by practices and sub-practices, enabling a
                                  granular analysis of the results. Additionally, the Index is an
                                  industry standard.
                            </article>
                            </Columns.Right>
                          </Columns>
                        </Section>
                      </VerticalNav.SubSection>
                    <VerticalNav.SubSection id={'results.2'}>
                      <Section>
                        <h1>Results Discussion</h1>
                        <Columns>
                          <Columns.Left>
                            <article>
                              77.08% of respondents state that promoting cyber security
                              is a primary focus for their organisation, compared to 20.83%
                              who say it is not. All respondents state cyber resilience is at
                              least moderately critical to their organisation, while 66.67%
                              state it is very critical.
                              <br/><br/>
                        
                            </article>
                          </Columns.Left>
                          <Columns.Right>
                            <HighlightPercentage header={'Cyber resilience is critical'} number={80.33}/>
                          </Columns.Right>
                        </Columns>
                        <article>
                          Additionally, 83.33% of respondents
                              believe cyber resilience is critical to their company as a whole
                              rather than the organisation they lead.
                        </article>
                        <br></br>
                        <article>
                          Survey participants indexed themselves across 6 principles of cyber resilience.
                          From this data it challenges and trends have been identified. 
                          At a high level the greatest area of challenge identified has "Cultivating a culture of cyber resilience"
                          across organisations. 
                          <ResponsiveImageContainer src={Principles} alt={"Principles of Cyber Resilience"}/>
                        </article>
                        <article>
                          During the survey, respondents were asked to self-evaluate
                          their cyber resilience on a scale of 1 to 100 before & after
                          completing a self-guided evaluation. From this data, it has
                          been discovered that most respondents rate themselves higher
                          before completing a self-guided evaluation & rate themselves
                          more accurately after completing a self-guided evaluation by
                          approximately 36%,
                        </article>
                        <Columns>
                          <Columns.Left>
                            Organisations reported a Median self guided evaluation score of 66 out of 100.
                            Organisations reported strong results in the areas of reducing exposure, driving risk based decisions,
                            establishing group oversight of cyber resilience & focusing on common critical asets & core operations.
                            Whereas organisation reported challenges in the areas of cultivating
                          
                          </Columns.Left>
                          <Columns.Right>
                          a culture of resilience across their organisations,
                          promoting collaboration in the ecosystem & assuming comprised resources.
                            <h1>Median Self Evaluation Index Score</h1>
                            <HighlightNumber number={66} />
                          </Columns.Right>
                        </Columns>
                        <ResponsiveImageContainer src={indexes} alt={'Indexes pre post & during self evaluation'}/>
                      </Section>
                    </VerticalNav.SubSection>
                  </VerticalNav.Section>

                  <VerticalNav.Section id="Challenges">
                      <Section>
                          <Title title={'Challenges'} subtitle={'Where can organisations improve their cyber resilience'}/>
                      </Section>
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
