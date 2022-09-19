<pre class="mermaid">
%%{init: {'securityLevel': 'loose', 'theme':'base'}}%%

classDiagram
    Animal "1" <|-- Duck
    Animal <|-- Fish
    Animal <--o Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
</pre>
