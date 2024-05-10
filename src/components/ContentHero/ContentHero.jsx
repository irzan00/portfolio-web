import React from 'react'
import TopContent from './TopContent/TopContent';
import { getSkillData } from '../../utils/dataSkill';
import { getSpotlightData } from '../../utils/dataSpotlight';
import CurrentlySkill from './MySkill/CurrentlySkill';
import ListSpotlight from './Spotlight/ListSpotlight';

class ContentHero extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skills: getSkillData(),
            spotlights: getSpotlightData(),
        }
    }
    render() {
        return (
            <div className='content-hero container-fluid d-flex'>
                <TopContent />
                <CurrentlySkill skills={this.state.skills}/>
                <ListSpotlight spotlights={this.state.spotlights} />
            </div>
        )
    }
}

export default ContentHero;