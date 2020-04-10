import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Subject from './Subject';
import Content from './Content';


class TOC extends Component{
  render() {
    var lists = [];
    var data = this.props.data;
    var i =0;
    while(i<data.length){
      lists.push(<li key={data[i].id}><a href={'/content/' + data[i].id}>{data[i].title}</a></li>)
      i=i+1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World wid Web'},
      welcome: { title: 'Welcome', desc: 'Hello, React!!' }, 
      contents:[{id:1,title:'HTML',desc:'HTML is for information'},
              { id: 2, title: 'CSS', desc: 'CSS is for design' },
              { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }]  
    }
  }
  render() {
    var _title, _desc=null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode ==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App" >
        <Subject  title={this.state.subject.title} 
                  sub={this.state.subject.sub} 
                  onChangePage={()=>{
                    this.setState({mode:'welcome'});
                  }}
        />
        <TOC data={this.state.contents} /> 
        <Content title={_title} desc={_desc} />
      </div>
    )
  }
}
export default App;
