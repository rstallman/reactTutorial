import React from 'react'

function PostButton(props){
  var style = {
      width:24,
      height:24,
      backgroundColor:'lightGray'
  }
  return (
    <button style = {style} onClick = { () => props.handleClick()}>{props.label}</button>
  )
}

function PostText(props){
  var style = {
      border:"1px solid black",
      width: props.width,
      paddingLeft:5,
      backgroundColor:'lightCyan'
  }
  return (
      <div style = {style}><span style={{verticalAlign:'center'}}>{props.text}</span></div>
  )
}

function Post(props){
  var style = {
      display:"flex"
  }
  return (
      <div style = {style}>
          <PostButton label = "x" handleClick = {props.removeItem}/>
          <PostText text = {props.title} width={200}/>
          <PostButton label = "+" handleClick = {props.incrementScore}/>
          <PostText text = {props.score} width={20}/>
          <PostButton label = "-" handleClick = {props.decrementScore}/>
      </div>
  )
}

function PostList(props){
  return (
      <div>
      {
          props.postList.map((item,index) => 
            <Post key = {index} 
            title = {item.title} 
            score = {item.score}
            incrementScore = {() => props.updateScore(index,1)}                         
            decrementScore = {() => props.updateScore(index,-1)} 
            removeItem = {() => props.removeItem(index)}/>
          )
       }
      </div>
  )  
}


export default class VoteApp extends React.Component{
  constructor(props){
      super(props)
      this.state = {value:"", items : []}
  } 
  handleChange(event){
      this.setState({value:event.target.value})
      // console.log(this.state.value)
  }
  addItem(){
    var itemsCopy = this.state.items.slice()
    var truncatedString = this.state.value.substring(0,20);
    itemsCopy.push({"title":truncatedString,"score":0})
    itemsCopy.sort((a,b)=>{
      return b.score - a.score;
    })
    this.setState({items:itemsCopy,value:""})
  } 

  removeItem(index){
    var itemsCopy = this.state.items.slice()
    itemsCopy.splice(index,1);
    itemsCopy.sort((a,b) => {
        return b.score - a.score
    })

    this.setState({items:itemsCopy})
  }

  updateScore(index,val){
    var itemsCopy = this.state.items.slice();
    itemsCopy[index].score += val;
    itemsCopy.sort((a,b) => {
        return b.score - a.score;
    })
    this.setState({items:itemsCopy});
  }

  render(){
      return (
          <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}> 
            <div style={{border:1, borderStyle:'solid', borderRadius:3, marginBottom:2}}>
              <input value = {this.state.value} onChange = {this.handleChange.bind(this)} style={{width:240}}/>
              <button onClick = { () => this.addItem()}>Submit</button>
            </div>
            <PostList postList = {this.state.items}
                    updateScore = {this.updateScore.bind(this)}
                    removeItem = {this.removeItem.bind(this)}/>       
          </div>
      )
  }
}








