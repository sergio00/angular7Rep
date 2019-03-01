import { Router } from '@angular/router';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { DynamicComponentsService } from '../dynamic-components.service';
import { ComponentSelectors } from '../component-selectors';

export interface tabClass {
  name?: string,
  visible?: any,
  active?: any,
  isCloseable?: any
}

interface tabTemplate {
  selector?: any,
  hiddenValue?: any,
  selectorName?: any,
  position?: any,
  modulePath?: any
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('containerAll', { read: ViewContainerRef }) containerTemplate: ViewContainerRef;
  queryListComponent: tabClass[] = [];
  collection: HTMLCollection;
  templateLazy: tabTemplate[] = [];
  routerMessage: string = 'Home';
  

  constructor(private authService: AuthService,
              private router: Router,private dynamicComponentSvc: DynamicComponentsService) {
      this.resetTemplateFactory();
   }

   private resetTemplateFactory() {
    this.templateLazy = [
      { selector: ComponentSelectors.DetailTramComponent, hiddenValue: true, selectorName: 'Detalle Tramite', modulePath: 'src/app/procesos/acn.module#AcnModule' },
      { selector: ComponentSelectors.ManteComponent, hiddenValue: true, selectorName: 'Mantenimiento', modulePath: 'src/app/mantenimiento/mantenimiento.module#MantenimientoModule' },
      { selector: ComponentSelectors.BusqDetailComponent, hiddenValue: true, selectorName: 'Detalle Busqueda', modulePath: 'src/app/procesos/acn.module#AcnModule' }
    ];
  }



  onLogout() {
    this.authService.logout();
  }
  procesos(){
   this.router.navigateByUrl('/procesos');

  }

  mantenimientos(){
    this.router.navigateByUrl('/mantenimiento');
  }

  reportes(){
    this.router.navigateByUrl('/');
  }

  consultar(){
    this.router.navigateByUrl('/procesos/detalleBusqueda');
  }

  loadADynamic(nameComponent: any) {
    var templateAux: tabTemplate = null;

    if (this.templateLazy.length === 0) {
      this.resetTemplateFactory();
    }

    this.templateLazy.forEach(element => {
      if (element.selectorName === nameComponent) {
        templateAux = element;
      }
    });

    if (templateAux === null) {
      alert('Vista no creada: ' + nameComponent);
    } else {
      this.createdLoadComponent(templateAux);
    }
  }

  refreshRouting(): any {
    if (this.queryListComponent.length === 0) {
      this.routerMessage = 'Home';
    } else {
      this.queryListComponent.forEach(element => {
        if (element.active) {
          this.routerMessage = 'Home->' + element.name;
        }
      });
    }
  }

  private createdLoadComponent(element: tabTemplate): any {
    const local: tabClass = {};
    if (this.queryListComponent.length === 0) {
      this.createComponentFactory(element).then(() => {
        this.collection = document.getElementById('containerAll').children;
        local.active = true;
        local.isCloseable = true;
        local.name = element.selectorName;
        local.visible = true;
        this.queryListComponent.push(local);
        this.templateLazy.forEach(elemento => {
          if (element === elemento) {
            elemento.position = 0;
          }
        });
        this.refreshRouting();
      });
    } else if (this.queryListComponent.length > 0) {
      if (this.existTab(element) && this.existCollectionTab(element)) {
        console.log('elemento ya creado: ' + element.selectorName);
        this.setCollectionVisibleItems(element);
      } else {
        this.createComponentFactory(element).then(() => {
          this.collection = document.getElementById('containerAll').children;
          local.active = true;
          local.isCloseable = true;
          local.name = element.selectorName;
          local.visible = true;
          this.queryListComponent.push(local);
          this.templateLazy.forEach(elemento => {
            if (element === elemento) {
              elemento.position = this.queryListComponent.length - 1;
              this.setCollectionVisibleItems(elemento);
            }
          });
          this.refreshRouting();
        });
      }
    }
    //console.log(this.templateLazy);
  }

  private createComponentFactory(element: tabTemplate): Promise<void> {
    return this.dynamicComponentSvc.createComponent({
      modulePath: element.modulePath,
      selectorName: element.selector,
      outlet: this.containerTemplate
    });
  }

  private setCollectionVisibleItems(elemento: tabTemplate): any {
    setTimeout(() => {
      for (var i = 0; i < this.collection.length; i++) {
        if (this.collection.item(i).nodeName.toLocaleLowerCase() === elemento.selector) {
          this.collection["" + i + ""].hidden = false;
        } else {
          this.collection["" + i + ""].hidden = true;
        }
      }
      this.setVisibleTabs(elemento.selectorName);
      this.refreshRouting();
    }, 10);

  }

  private setVisibleTabs(selectorName: any): any {
    this.queryListComponent.forEach(tab => (tab.active = false));

    for (let i = 0; i < this.queryListComponent.length; i++) {
      if (this.queryListComponent[i].name === selectorName) {
        this.queryListComponent[i].active = true;
      }
    }

  }

  private existTab(element: tabTemplate): any {
    var resultado = false;
    this.queryListComponent.forEach(element1 => {
      if (element1.name === element.selectorName) {
        resultado = true;
      }
    });
    return resultado;
  }

  private existCollectionTab(element: tabTemplate): any {
    var resultado = false;
    //document.getElementById('containerAll').children.item(0).localName
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection.item(i).localName === element.selector) {
        resultado = true;
      }
    }
    return resultado;
  }

  selectDynamicTab(tab: tabClass) {
    var localTabtemplate: tabTemplate = null;
    this.templateLazy.forEach(element => {
      if (element.selectorName === tab.name) {
        localTabtemplate = element;
      }
    });

    if (localTabtemplate != null) {
      this.setCollectionVisibleItems(localTabtemplate);
    } else {
      console.log('tab no encontrado');
    }
  }

  closeDynamicTab(tab: tabClass) {
    //console.log(tab);
    var localtemplateCol: tabTemplate[] = [];
    for (let i = 0; i < this.queryListComponent.length; i++) {
      if (this.queryListComponent[i] === tab) {
        this.queryListComponent.splice(i, 1);
        this.containerTemplate.remove(i);
        break;
      }
    }
    setTimeout(() => {
      for (var j = 0; j < this.collection.length; j++) {
        this.templateLazy.forEach(element => {
          if (this.collection["" + j + ""].nodeName.toLocaleLowerCase() === element.selector) {
            localtemplateCol.push(element);
          }
        });
      }

      /*console.log('----------------------------------')
      console.log(this.collection);
      console.log(localtemplateCol);*/
      if (localtemplateCol.length > 0) {
        this.setCollectionVisibleItems(localtemplateCol[0]);
      } else {
        this.refreshRouting();
        console.log('No existe elementos');
      }
    }, 10);

  }


}
