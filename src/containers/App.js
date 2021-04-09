import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component{

    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield: '' 
        }
        console.log('constructor')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users    => this.setState({ robots: users}));
        
        console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log('Render ')
        if(!robots.length){
            console.log(robots.length);
            return <h1 className='f1 tc'>Loaging...</h1>
        }
        else{
            console.log(robots.length)
            return(
            <div>
                
                <h1 className=' f1 tc'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        
         };
    }
}

export default App;