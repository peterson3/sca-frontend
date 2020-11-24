import { Component, OnInit } from '@angular/core';

declare let WorkflowDesigner: any;

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  wfdesigner: any;

  constructor() { 

    
    
  }

  ngOnInit(): void {
    this.wfDesignRedraw();
  }

   wfDesignRedraw(){
    var data;
    this.wfdesigner = undefined;
    if (this.wfdesigner != undefined) {
        this.wfdesigner.destroy();
    }
    // this.wfdesigner =  new window["WorkflowDesigner"]({

    // this.wfdesigner =  new WorkflowDesigner({
    //   name: 'simpledesigner',
    //   //apiurl: '/Designer/API',
    //   apiurl: 'http://ffc7fad21ad6.ngrok.io/Designer/API',
    //   renderTo: 'wfdesigner',
    //   //imagefolder: '/Images/',
    //   // imagefolder: 'https://workflowengine.io/demo/images/',
    //   imagefolder: '/assets/workflow/images/',

    //   graphwidth: 1200,
    //   graphheight: 600
    //   // ,mode: 'readonly',
    //   // disableobjectmovements : true
    //   // , mode: 'readonly'
    //   // ,templates: '/templates/'
    //   // ,mode: 'printable'
    //   //  ,notrendertoolbar : false
    //   //  ,notshowwindows : true
    //   //  ,disableobjectmovements : true

    // });
    this.wfdesigner =  new WorkflowDesigner({
      name: 'simpledesigner',
      apiurl: 'http://localhost:50686/Designer/API',
      renderTo: 'wfdesigner',
      templatefolder: '/assets/templates/',
      graphwidth: 1200,
      graphheight: 600
    });

  //   this.wfdesigner = new WorkflowDesigner({
  //     name: 'simpledesigner',
  //     apiurl: '/Designer/API',
  //     renderTo: 'wfdesigner',
  //     templatefolder: '/templates/',
  //     graphwidth: 1200,
  //     graphheight: 600
  // });

    var schemecode = 'SimpleWPF';
    var processid = '68D9542B-C54E-4782-AEA5-7FD15743374B';
    var p = {schemecode: schemecode, processid: processid};
    if(this.wfdesigner.exists(p))
    {
      this.wfdesigner.load(p);
    }
    else{
      this.wfdesigner.create();
    }
  }

}
