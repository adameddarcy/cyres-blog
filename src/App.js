import './App.css'
import Section from './components/Section';
import Title from './components/Title';
import Map from './components/Map'
import industry from './static/Industry breakdown@2x.png'
import Principles from './static/Median/Annotated principles.jpg'
import report_challenges from './static/Median/Low scores on reporting metrics@2x.png'
import annotated from './static/Median/Annotated chart.jpg'
import mean_challenges from './static/Mean/Annotated Mean lowest overall.jpg'

function App() {
  return (
    <div className='Container'>
      <Section>
        <Title title={'Organisational Cyber Resilience'} subtitle={'A Global Survey'} introduction={'Adam Edward DArcy'}/>
      </Section>
      <Section>
        <Title title={'Breakdown of respondents'} subtitle={'Geographies, Industries and Roles'} introduction={'A breakdown of the organisation profiles that took part in the survey'}/>
      </Section>
      <Section title="Locations of respondents">
        <Map/>
      </Section>
      <Section title="Industry Breakdown">
        <img src={industry}/>
      </Section>
      <Section title="World Economic Forum Cyber Resilience Principles">
        <img src={Principles}/>
      </Section>
      <Section>
        <Title title={'Challenges'} subtitle={'Where can organisations improve their cyber resilience'}/>
      </Section>
      <Section title="Granular breakdown">
        <img src={annotated}/>
      </Section>
      <Section title="Challenges of reporting / communicating">
        <img src={report_challenges}/>
      </Section>
      <Section title="Challenges by Mean">
        <img src={mean_challenges}/>
      </Section>
    </div>
  );
}

export default App;
