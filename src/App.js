import './styles.css';

function App() {
  return (
    <div id="page-top" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Mosesy Haritra</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/me.jpg" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">À-propos</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#competences">Compétences</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interet">Intérêts</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="container-fluid p-0">
            
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        RINDRANIAINA
                        <span class="text-primary">Mosesy Haritra</span>
                    </h1>
                    <div class="subheading mb-5">
                        Lot II EY2N Bis Ambohimirary 
                        <a>mosesyharitra@gmail.com</a>
                    </div>
                    <p class="lead mb-5">
                        <ul>
                            <li>
                                Née: 26 Mars 1999 à Toamasina I
                            </li>
                            <li>
                                Nom du Père: RABEMOSESY Andriamirindra (feu) 
                            </li>
                            <li>
                                Nom de le Mère: HANITRINIAINA Jerenalalao Goergette 
                            </li>
                            <li>
                                Profession: Infirmière Anesthésiste 
                            </li>
                        </ul>
                    </p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://github.com/Beloha26/techweb.git"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://www.facebook.com/Mosesy501.Rindra/about"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Developpeur web</h3>
                            <div class="subheading mb-3">Framework</div>
                            <p>Je suis un developpeur amateur en Laravel car il est basé sur le langage PHP vue qu'en 2019, lapupart de mon projet est basé sur le PHP, je m'adapte à ce langage.</p>
                            <p>Pour le ReactJS,je suis un peu nouveau car j'ai utilisé que seulement l'animation du langage JavaScript. Et c'est la même pour AngularJS</p>
                            <div class="subheading mb-3">Designeur</div>
                            <p>Pour le designe je suis un peu flou dans la couleur du thème d'un projet</p>
                        </div>                
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Institut Supérieur Polytechnique de Madagascar Antananarivo</h3>
                            <div class="subheading mb-3">Informatique de Gestion Génie Logiciel et Intelligence Artificielle </div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2019-À nos jours</span></div>
                    </div>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Lycee Notre Dame de Fatima Antananarivo</h3>
                            <div class="subheading mb-3">Bachelier en serie D</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2017-2018</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Lycee Thomas Bevan Toamasina</h3>
                            <div class="subheading mb-3">BEPC en option B</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2013-2014</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Ecole Privee LA Perruche Toamasina</h3>
                            <div class="subheading mb-3">CEPE</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2007-2008</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="competences">
                <div class="resume-section-content">
                    <h2 class="mb-5">Compétences</h2>
                    <div class="subheading mb-3">Langues et Outils de Programmation</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-php"></i></li>
                        <li class="list-inline-item"><i class="fab fa-laravel"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                    </ul>
                    <div class="subheading mb-3">Flux de Travail</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Tests et Débogage Navigateurs
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="interet">
                <div class="resume-section-content">
                    <h2 class="mb-5">Intérêts</h2>
                    <p>En plus d'être développeur Web, j'aime passer la plupart de mon temps à l'extérieur. Pendant les mois les plus chauds, j'aime la natation libre et les marches à pied.
                    </p>
                    <p class="mb-0">Lorsque je suis forcé à l'intérieur, je regarde un certain nombres de films et d'émissions de télévision de genre science-fiction et fantastique, des fois je joue au jeu vidéo et je passe une grande partie de mon temps libre à explorer Internet .</p>
                </div>
            </section>
        </div>

        
    </div>
  );
}

export default App;
