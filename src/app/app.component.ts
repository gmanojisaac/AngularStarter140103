import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MermaidAPI } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularStarter140103';
  markdowncode = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;
  markdown!: string | undefined;

  constructor(private mdService: MarkdownService, private http: HttpClient) { 
   
  }

  ngOnInit() {
    this.http.get('../assets/myfile.md', 
    { responseType: 'text' }).subscribe((getdata: any) =>{
      this.markdown = this.mdService.parse(getdata);
    });
  }


  public options: MermaidAPI.Config = {
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    logLevel: MermaidAPI.LogLevel.Info,
    theme: MermaidAPI.Theme.Dark
  };
}


