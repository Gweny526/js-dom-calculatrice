# Calculatrice 

### Outils
- Trello ou Notion obligatoire. Prenez le temps de vous faire une todolist **détaillé** avec toutes les tâches à faire. (max 15/20min pour le faire)
- Github. Faites un commit pour chaque fonctionnalité réalisée. Nom du repo : js_dom_calculatrice

### Design
- Pour le design de base, un exemple se trouve dans le dossier 'exemple design'. Les deux autres images sont des bonus.
- Attention, n'allez pas plus loin que le design de base au risque de perdre beaucoup de temps. La priorité est de faire toutes les fonctionnalités avant la deadline. 

### Consignes et fonctionnalités (voir les vidéos)
- Avoir au minimum 2 fichiers js (import & export)
- Faire les opérations de base : addition, soustraction, division, multiplication. 
- Faire un btn "égale" qui retourne le résultat de votre calcul. 
- Faire un btn "clear", qui nettoie la zone de calcul. 
- Travailler sur des nombres entiers. (pas de chiffre à virgule)

### fonctionnalités supplémentaire (si vous le faites vous gagner d'argent plus lol xD)
- Rajoutez les nombres décimaux. (chiffre à virgule)
- Rajoutez un mode "sombre" pour le design. (comme sur facebook)

<div id="calc">
        <div id="top">
            <span id="titre">Calculatrice</span>
            <span id="switchcol"><span id="moon"></span></span>
        </div>

        <input type="text" name="textcalc" disabled/> 

        <div id="nombres">
            <div class="row">
                <div class="col">
                    <button class="op">C</button>
                    <button class="del">X</button>
                    <button  class="op">%</button>
                    <button  class="op">/</button>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button  class="op">x</button>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button class="op">-</button>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button class="op">+</button>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button>00</button>
                    <button>0</button>
                    <button>.</button>
                    <button class="op">=</button>
                </div>
            </div>
        </div>

    </div>