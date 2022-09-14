
  
  ### Mermaid works from html
```typescript
<markdown mermaid  ngPreserveWhitespaces clipboard>
<pre class="mermaid">
  flowchart TD
  id1([Markdown in html])
  id2([Markdown in template])
  id3([Markdown in data])
  id4([Markdown loaded from src])
</pre>
</markdown>
```
  
  # Markdown tag contains mermaid keyword and injected with code using pretty tag and class mermaid
  # Mermaid works from template same way
  ---
   
  ### Mermaid works from file load
```typescript
      <markdown mermaid [src]="'../../assets/stackblitzMermaid.md'"></markdown>
```

  # Mermaid works from file load seamlessly and always check the indentation
  ---   

  ## Mermaid Subgraphs

    <pre class="mermaid">
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
        </pre>
    ```typescript
     <pre class="mermaid">
      flowchart TB
          c1-->a2
          subgraph one
          a1-->a2
          end
          subgraph two
          b1-->b2
          end
          subgraph three
          c1-->c2
          end
      </pre>
    ```

  ## Mermaid Class
  # A shorter form of adding a class is to attach the classname to the node using the :::operator 

    <pre class="mermaid">
    flowchart LR
        A:::someclass --> B
        classDef someclass fill:#f96;
        </pre>
    ```typescript
     <pre class="mermaid">
     flowchart LR
      A:::someclass --> B
      classDef someclass fill:#f96;
      </pre>
    ```

  ## Mermaid Simple Form

    <pre class="mermaid">

    graph LR
%% Nodes
    1([Start])
    2[Look for lost item]
    3{Did I find it?}
    4([Stop])
%% Node links
    1 --> 2 --> 3 -->|Yes| 4
    3 -.->|No| 2 
        </pre>
    ```typescript
     <pre class="mermaid">
    graph LR
%% Nodes
    1([Start])
    2[Look for lost item]
    3{Did I find it?}
    4([Stop])
%% Node links
    1 --> 2 --> 3 -->|Yes| 4
    3 -.->|No| 2 
      </pre>
    ```

 ## Mermaid Basic Flow chart and apply custom colors

    <pre class="mermaid">

    
graph TD
%% Nodes
    0[Key Variable]
    1[Top Variable 1]
    2[Top Variable 2]
    3[Top Variable 3]
    31[Sub Variable 1]
    32[Sub Variable 2]
    321[Element 1]
    322[Element 2]

%% Links
    0 --- 1
    0 --- 2
    0 --- 3
    3 --- 31
    3 --- 32
    32 --- 321
    32 --- 322

    %% Defining the styles
    classDef Red fill:#FF9999;
    classDef Amber fill:#FFDEAD;
    classDef Green fill:#BDFFA4;

%% Assigning styles to nodes
    class 3,32,321 Red;
    class 322 Amber;
    class 1,2,31 Green;

        </pre>
    ```typescript
     <pre class="mermaid">
    
graph TD
%% Nodes
    0[Key Variable]
    1[Top Variable 1]
    2[Top Variable 2]
    3[Top Variable 3]
    31[Sub Variable 1]
    32[Sub Variable 2]
    321[Element 1]
    322[Element 2]

%% Links
    0 --- 1
    0 --- 2
    0 --- 3
    3 --- 31
    3 --- 32
    32 --- 321
    32 --- 322

        %% Defining the styles
    classDef Red fill:#FF9999;
    classDef Amber fill:#FFDEAD;
    classDef Green fill:#BDFFA4;

%% Assigning styles to nodes
    class 3,32,321 Red;
    class 322 Amber;
    class 1,2,31 Green;

      </pre>
    ```



  # Basic Support for FontAwesome - NOT WORKING

  <pre class="mermaid">
    flowchart TD
        B["fab:fa-twitter for peace"]
        B-->C[fa:fa-ban forbidden]
        B-->D(fa:fa-spinner);
        B-->E(A fa:fa-camera-retro perhaps?)
  </pre>

    ```typescript
     <pre class="mermaid">
flowchart TD
    B["fab:fa-twitter for peace"]
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
    B-->E(A fa:fa-camera-retro perhaps?)
      </pre>
    ```

  # Basic Support for Themes
  <pre class="mermaid">
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ff0000'}}}%%
            graph TD
              A[Christmas] -->|Get money| B(Go shopping)
              B --> C{Let me think}
              B --> G[/Another/]
              C ==>|One| D[Laptop]
              C -->|Two| E[iPhone]
              C -->|Three| F[fa:fa-car Car]
              subgraph section
                C
                D
                E
                F
                G
              end
  </pre>