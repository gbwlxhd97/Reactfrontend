import React from 'react';
import './App.css';
import api from './api';
import Postview from './Components/Postview'

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      results: [],
    }
  }

componentDidMount() {
  this.getposts()
}

async getposts() {
  const _results = await api.getAllPosts()
  console.log(_results)
  this.setState({results: _results.data})
   
}


handlingchange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

 handlingSubmit = async (event) => {
   event.preventDefault() //event 기능 막아줌 즉, 새로고침 없애줌
 let result =  await  api.createPost({title:this.state.title, content:this.state.content})
 
console.log("완료됨!", result)
this.setState({title:'',content:''})
this.getposts()
 }

 handlingdelete = async (id) => {
  
   await api.deletePost( id)
   this.getposts()
  }
  render() { 
  return (
    <div className="App">
      <Container maxWidth="lg">
      <div className="PostSection">
        <Paper className="PostingPaper">
      <h2> 한 해 마무리 멋사</h2>
      <form className="PostingForm" onSubmit={this.handlingSubmit}>

      <TextField

          label="title"
          id="outlined-name"
          name="title"
          value={this.state.title}
          onChange={this.handlingchange}
          margin="normal"
          variant="outlined"
        />
    


          <TextField

      label="content"
      id="outlined-name"
      name="content"
      multiline
      rows="4"
      value={this.state.content}
      onChange={this.handlingchange}
      margin="normal"
      variant="outlined"
      />
    

    <button type  ="submit">제출하기</button>
    </form>
    </Paper>
      </div>
        <div className="ViewSection">
        {
            this.state.results.map((post) =>

<Card className={'card'}>
      <CardContent>
        <Typography className={'card-title'} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography  >
          <Postview key ={post.id} id={post.id} title={post.title} content={post.content}/>
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={(event)=>this.handlingdelete(post.id)}>삭제하기 </Button>
      </CardActions>
    </Card>

            ) 
        }
        
        </div>
        </Container>
    </div>
  );
  }
}
export default App;
