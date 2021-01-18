import * as React from 'react';
import styles from './Abouthero.module.scss';
import { IAboutheroProps } from './IAboutheroProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp, { Web } from 'sp-pnp-js';
import {ClassHeros} from './ClassAboutHero';
import * as jQuery from "jquery";

export default class Abouthero extends React.Component<IAboutheroProps, any> {
  
  public constructor(props:IAboutheroProps,any)
  {
      
      super(props);
      this.state={
          items:[]
      };
      }
      public render() {
        jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
return(
<>
  {
      this.state.items.map(function(item:IAboutheroProps){
  return(
      <div  className={styles.hero}>
         <img src={item.Image} />
      </div>
  )

  
})

}

</>
)
}

public componentDidMount()
{
  
  // debugger;
  this._HerosList();
}
private _HerosList():void
{


let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
web.lists.getByTitle(`Hero`).items.get().then
  ((response)=>{
      let HerosCollection=response.map(item=> new ClassHeros(item)).reverse();
      let HerosCard = HerosCollection.slice(0, 1)
      this.setState({items:HerosCard});
  }

  )
}

}