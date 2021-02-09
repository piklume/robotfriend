import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

const App = () => {

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchfield: ''
//     }
//   }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => setRobots(users));
  },[])

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  if (!(robots.length)) {
    return <h1 className='tc'>Loading...</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>RobotFriends</h1>
        <SearchBox searchChange = {onSearchChange} />
        <Scroll>
          <CardList robots = { filteredRobots } />
        </Scroll>
      </div>
    )
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  // onSearchChange = (event) => {
  //   setSearchfield(event.target.value);
  // }

  
    // const { robots, searchfield } = this.state;
    // const filteredRobots = robots.filter(robot =>{
    //   return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    // })
    // if (!(robots.length)) {
    //   return <h1 className='tc'>Loading...</h1>
    // } else {
    //   return (
    //     <div className='tc'>
    //       <h1 className='f1'>RobotFriends</h1>
    //       <SearchBox searchChange = {this.onSearchChange} />
    //       <Scroll>
    //         <CardList robots = { filteredRobots } />
    //       </Scroll>
    //     </div>
    //   )
    // }
  }

export default App;
