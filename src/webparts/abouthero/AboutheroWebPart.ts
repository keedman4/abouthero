import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AboutheroWebPartStrings';
import Abouthero from './components/Abouthero';
import { IAboutheroProps } from './components/IAboutheroProps';

export interface IAboutheroWebPartProps {
  description: string;
  Image:string;
  Title:string;  
}

export default class AboutheroWebPart extends BaseClientSideWebPart<IAboutheroWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAboutheroProps> = React.createElement(
      Abouthero,
      {
        description: this.properties.description,
        Image: this.properties.Image,
        Title: this.properties.Title,
        context: this.context 
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
