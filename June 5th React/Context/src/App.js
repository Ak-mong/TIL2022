import React, {Component} from 'react'; //{Fragement} 포함됬다가 빠짐
import Button from "./components/Button";
import Title from "./components/Title";
import Message from "./components/Message";
import LangContext from "./LangContext"

class App extends Component {
  state = {lang: "en"};

  toggleLang = () =>{
    this.setState(({lang}) => ({
      lang: lang === "en"? "kr" : "en"
    }));
  };

  render() {
    const {lang} = this.state;
    return (
   /*  <Fragment>
      <Button lang={lang} toggleLang={this.toggleLang} />
      <Title lang={lang} />
      <Message lang={lang} />
     </Fragment> */ 
     <LangContext.Provider value={lang}>
     <Button toggleLang={this.toggleLang} />
      <Title/>
      <Message/>
      </LangContext.Provider>
    );
  }
}

export default App;
