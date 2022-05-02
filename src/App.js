class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component{
    constructor(props){
      super(props);
      this.state = { value: null,
      };
    }
  render(){
    return(
      <button className="square"
      onClick={()=> useState({value: 'X'})}
      >
      {this.state.value}
      </button>
    );
  }
}



}
