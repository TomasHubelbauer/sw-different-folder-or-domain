type AppState = {
  counter: number;
};

export default class App extends React.Component<{}, AppState> {
  public readonly state: AppState = {
    counter: 0,
  };

  render() {
    return (
      <div>
        React!
        <br />
        Counter: <span>{this.state.counter}</span>
        <br />
        <button onClick={this.handleClickButtonClick}>Click</button>
      </div>
    );
  }

  private readonly handleClickButtonClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
}
