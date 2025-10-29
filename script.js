// 🎓 BTS SIO SLAM - QUIZ INTERACTIFS
// Script pour la gestion des quiz randomisés
// Version: 2025 - Compatible ES6+

// Données des quiz avec réponses équilibrées en longueur
const quizData = {
    quiz1: {
        title: "Quiz 1 : Risques du déploiement direct",
        questions: [
            {
                question: "Quelle est la principale conséquence d'un déploiement direct en production sans test préalable ?",
                answers: [
                    "Amélioration automatique des performances du site web",
                    "Risque élevé de dysfonctionnements affectant tous les utilisateurs réels",
                    "Optimisation instantanée de la base de données et réduction des temps de chargement",
                    "Activation automatique des fonctionnalités de sécurité avancées"
                ],
                correct: 1,
                explanation: "Le déploiement direct en production sans test expose tous les utilisateurs réels aux bugs et dysfonctionnements. C'est comme servir un plat non testé à tous les clients d'un restaurant - les conséquences peuvent être désastreuses pour l'expérience utilisateur et la réputation."
            },
            {
                question: "Pourquoi l'expression 'Ça marche sur ma machine' est-elle problématique en développement ?",
                answers: [
                    "Elle garantit que le code fonctionnera parfaitement en production",
                    "Elle indique que le développeur utilise les meilleurs outils disponibles",
                    "Les environnements de développement et de production ont des configurations différentes",
                    "Elle prouve que le code est optimisé pour tous les navigateurs"
                ],
                correct: 2,
                explanation: "Chaque environnement (développement vs production) a ses propres spécificités : système d'exploitation, versions de logiciels, configurations, données. Ce qui fonctionne dans un environnement peut échouer dans un autre, d'où l'importance de tester dans des conditions similaires à la production."
            },
            {
                question: "Quel impact business peut avoir un déploiement raté ?",
                answers: [
                    "Augmentation immédiate du chiffre d'affaires de l'entreprise",
                    "Amélioration de la satisfaction client et fidélisation",
                    "Perte de confiance des utilisateurs et impact sur la réputation",
                    "Optimisation automatique des processus internes"
                ],
                correct: 2,
                explanation: "Un déploiement raté peut entraîner une perte de confiance des utilisateurs, une atteinte à la réputation de l'entreprise, et potentiellement une perte de chiffre d'affaires. Les statistiques montrent que 88% des utilisateurs ne reviendront pas après une mauvaise expérience."
            },
            {
                question: "Quelle analogie décrit le mieux le déploiement direct en production ?",
                answers: [
                    "Servir un nouveau plat directement aux clients sans l'avoir testé en cuisine",
                    "Utiliser une recette éprouvée avec des ingrédients de qualité",
                    "Proposer un menu varié avec des options pour tous les goûts",
                    "Organiser une dégustation privée avant l'ouverture officielle"
                ],
                correct: 0,
                explanation: "L'analogie du restaurant est parfaite : comme un chef ne servirait jamais un plat non testé à ses clients, un développeur ne devrait jamais déployer du code non testé en production. Les deux mettent en jeu la satisfaction client et la réputation."
            },
            {
                question: "Quelle est la responsabilité principale d'un développeur vis-à-vis des utilisateurs finaux ?",
                answers: [
                    "Déployer le plus rapidement possible pour respecter les délais",
                    "Garantir la disponibilité et la fiabilité du service avant tout déploiement",
                    "Utiliser uniquement les technologies les plus récentes du marché",
                    "Minimiser le temps de développement en sautant les étapes de validation"
                ],
                correct: 1,
                explanation: "Le développeur a la responsabilité de garantir que le service reste disponible et fiable pour les utilisateurs. Cette responsabilité implique de suivre des processus rigoureux et de ne jamais prendre de risques inconsidérés avec la production."
            }
        ]
    },
    quiz2: {
        title: "Quiz 2 : Les 3 environnements",
        questions: [
            {
                question: "Quel est le rôle principal de l'environnement de développement (DEV) ?",
                answers: [
                    "Servir l'application aux utilisateurs finaux en conditions réelles",
                    "Créer, modifier et déboguer le code en toute sécurité",
                    "Tester les performances sous charge avec de vraies données clients",
                    "Valider l'intégration avec les systèmes externes de production"
                ],
                correct: 1,
                explanation: "L'environnement de développement est votre 'atelier' personnel où vous pouvez créer, expérimenter et corriger votre code sans aucun risque. C'est là que vous avez tous les droits et où vous pouvez tout casser sans conséquence sur les utilisateurs."
            },
            {
                question: "Pourquoi l'environnement de test doit-il ressembler le plus possible à la production ?",
                answers: [
                    "Pour réduire les coûts de développement et optimiser les ressources",
                    "Pour détecter les problèmes qui pourraient survenir en conditions réelles",
                    "Pour permettre aux développeurs de travailler plus rapidement",
                    "Pour automatiser complètement le processus de déploiement"
                ],
                correct: 1,
                explanation: "Si l'environnement de test est trop différent de la production, les tests ne seront pas représentatifs. C'est comme répéter une pièce de théâtre dans un petit studio alors qu'elle sera jouée dans un grand auditorium - les conditions différentes peuvent révéler des problèmes inattendus."
            },
            {
                question: "Quelle règle fondamentale doit-on respecter dans la progression entre environnements ?",
                answers: [
                    "Déployer directement de DEV vers PROD pour gagner du temps",
                    "Suivre obligatoirement la séquence DEV → TEST → PROD sans exception",
                    "Utiliser uniquement l'environnement de développement pour tous les tests",
                    "Alterner aléatoirement entre les différents environnements selon les besoins"
                ],
                correct: 1,
                explanation: "La progression DEV → TEST → PROD est une règle absolue, même pour les corrections mineures. Chaque environnement a son rôle spécifique dans la validation du code, et sauter une étape expose à des risques inutiles."
            },
            {
                question: "Quelle caractéristique distingue l'environnement de production des autres ?",
                answers: [
                    "Il permet d'expérimenter librement avec de nouvelles technologies",
                    "Il contient uniquement des données de test pour éviter les risques",
                    "Il sert les vrais utilisateurs avec des données réelles et critiques",
                    "Il offre un accès complet à tous les développeurs de l'équipe"
                ],
                correct: 2,
                explanation: "L'environnement de production est unique car il traite de vraies données business et sert de vrais utilisateurs. C'est pourquoi il nécessite des contraintes strictes : accès limité, sauvegardes automatiques, monitoring permanent et procédures d'urgence."
            },
            {
                question: "Quelles données doit-on utiliser dans l'environnement de test ?",
                answers: [
                    "Uniquement des données fictives créées par les développeurs",
                    "Des copies des vraies données de production, anonymisées pour la sécurité",
                    "Les mêmes données que l'environnement de développement",
                    "Aucune donnée pour éviter tout risque de corruption"
                ],
                correct: 1,
                explanation: "L'environnement de test doit utiliser des copies des vraies données de production (anonymisées pour respecter la confidentialité) afin que les tests soient représentatifs des conditions réelles. Des données fictives peuvent masquer des problèmes qui apparaîtront uniquement avec de vraies données."
            }
        ]
    },
    quiz3: {
        title: "Quiz 3 : Plan de déploiement",
        questions: [
            {
                question: "Que doit-on faire OBLIGATOIREMENT avant tout déploiement en production ?",
                answers: [
                    "Créer une sauvegarde complète de l'état actuel de la production",
                    "Informer tous les utilisateurs individuellement par email",
                    "Désactiver temporairement toutes les fonctionnalités du site",
                    "Attendre une période de faible trafic pendant les vacances"
                ],
                correct: 0,
                explanation: "La sauvegarde pré-déploiement est OBLIGATOIRE. C'est votre filet de sécurité qui vous permet de revenir à l'état précédent si quelque chose se passe mal. Sans sauvegarde, un déploiement raté peut devenir une catastrophe irréversible."
            },
            {
                question: "Que sont les 'smoke tests' (tests de fumée) ?",
                answers: [
                    "Des tests de sécurité avancés pour détecter les intrusions",
                    "Vérifications rapides post-déploiement pour s'assurer que tout fonctionne",
                    "Tests de performance intensive sur plusieurs heures consécutives",
                    "Procédures complexes de validation de la base de données"
                ],
                correct: 1,
                explanation: "Les smoke tests sont des vérifications rapides (5-10 minutes) effectuées juste après le déploiement pour s'assurer que les fonctionnalités critiques marchent. Comme un pilote qui vérifie ses instruments après le décollage, vous contrôlez que tout fonctionne normalement."
            },
            {
                question: "Dans quels cas doit-on déclencher un rollback (retour arrière) ?",
                answers: [
                    "Uniquement si le site est complètement inaccessible pendant plus d'une heure",
                    "Dès qu'une fonctionnalité critique est cassée ou que des erreurs massives apparaissent",
                    "Seulement si le client ou la direction en fait explicitement la demande",
                    "Jamais, il vaut mieux corriger les problèmes directement en production"
                ],
                correct: 1,
                explanation: "Le rollback doit être déclenché rapidement dès qu'un problème critique est détecté : site inaccessible, fonctionnalité essentielle cassée, erreurs massives, ou perte de données. Plus on attend, plus l'impact sur les utilisateurs est important."
            },
            {
                question: "Pourquoi est-il important de communiquer avec les utilisateurs lors des déploiements ?",
                answers: [
                    "Pour respecter les utilisateurs et maintenir leur confiance en cas d'interruption",
                    "Pour éviter les obligations légales liées aux interruptions de service",
                    "Pour réduire la charge serveur pendant la maintenance",
                    "Pour tester la réactivité de la communauté d'utilisateurs"
                ],
                correct: 0,
                explanation: "La communication est une marque de respect et de professionnalisme. Informer les utilisateurs à l'avance des interruptions prévues et les tenir au courant en cas de problème maintient leur confiance et montre que vous vous souciez de leur expérience."
            },
            {
                question: "Quand doit-on tester le plan de rollback ?",
                answers: [
                    "Uniquement après un déploiement raté pour voir s'il fonctionne",
                    "À l'avance sur l'environnement de test pour s'assurer qu'il est opérationnel",
                    "Seulement quand le client le demande explicitement par contrat",
                    "Jamais, car cela risque d'endommager l'environnement de production"
                ],
                correct: 1,
                explanation: "Le plan de rollback doit être testé à l'avance sur l'environnement de test pour vérifier qu'il fonctionne correctement. Un plan de rollback non testé est comme un parachute de secours qu'on n'a jamais déplié - on ne sait pas s'il marchera quand on en aura vraiment besoin !"
            }
        ]
    }
};

// Classe pour gérer un quiz
class Quiz {
    constructor(quizId, data) {
        this.quizId = quizId;
        this.data = data;
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.completed = false;
        this.container = document.getElementById(quizId);
        this.init();
    }

    init() {
        this.render();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    render() {
        if (this.completed) {
            this.renderResults();
            return;
        }

        const question = this.data.questions[this.currentQuestion];
        
        // Créer un array avec les réponses et leurs indices originaux
        const answersWithIndex = question.answers.map((answer, index) => ({
            text: answer,
            originalIndex: index
        }));
        
        // Mélanger les réponses
        const shuffledAnswers = this.shuffleArray(answersWithIndex);

        const html = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${((this.currentQuestion + 1) / this.data.questions.length) * 100}%"></div>
            </div>
            
            <div class="quiz-question">
                <p><strong>Question ${this.currentQuestion + 1}/${this.data.questions.length}</strong></p>
                <p>${question.question}</p>
            </div>
            
            <div class="quiz-answers">
                ${shuffledAnswers.map((answer, index) => `
                    <button class="quiz-answer" data-index="${answer.originalIndex}">
                        ${answer.text}
                    </button>
                `).join('')}
            </div>
            
            <button class="quiz-btn" id="validate-${this.quizId}" disabled>
                Valider la réponse
            </button>
            
            <div class="quiz-result" id="result-${this.quizId}" style="display: none;"></div>
        `;

        this.container.querySelector('.quiz-content').innerHTML = html;
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Gestion de la sélection des réponses
        const answers = this.container.querySelectorAll('.quiz-answer');
        answers.forEach(answer => {
            answer.addEventListener('click', () => {
                // Retirer la sélection des autres réponses
                answers.forEach(a => a.classList.remove('selected'));
                
                // Sélectionner la réponse cliquée
                answer.classList.add('selected');
                this.selectedAnswer = parseInt(answer.dataset.index);
                
                // Activer le bouton de validation
                document.getElementById(`validate-${this.quizId}`).disabled = false;
            });
        });

        // Gestion de la validation
        document.getElementById(`validate-${this.quizId}`).addEventListener('click', () => {
            this.validateAnswer();
        });
    }

    validateAnswer() {
        const question = this.data.questions[this.currentQuestion];
        const answers = this.container.querySelectorAll('.quiz-answer');
        const resultDiv = document.getElementById(`result-${this.quizId}`);
        
        // Afficher les bonnes et mauvaises réponses
        answers.forEach(answer => {
            const answerIndex = parseInt(answer.dataset.index);
            if (answerIndex === question.correct) {
                answer.classList.add('correct');
            } else if (answerIndex === this.selectedAnswer) {
                answer.classList.add('incorrect');
            }
            answer.disabled = true;
        });

        // Calculer le score
        const isCorrect = this.selectedAnswer === question.correct;
        if (isCorrect) {
            this.score++;
        }

        // Afficher le résultat et l'explication
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <strong>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</strong>
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>Explication :</strong><br>
                ${question.explanation}
            </div>
            <button class="quiz-btn" id="next-${this.quizId}">
                ${this.currentQuestion < this.data.questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
            </button>
        `;

        // Gérer le bouton suivant
        document.getElementById(`next-${this.quizId}`).addEventListener('click', () => {
            if (this.currentQuestion < this.data.questions.length - 1) {
                this.currentQuestion++;
                this.selectedAnswer = null;
                this.render();
            } else {
                this.completed = true;
                this.render();
            }
        });

        // Désactiver le bouton de validation
        document.getElementById(`validate-${this.quizId}`).disabled = true;
    }

    renderResults() {
        const percentage = Math.round((this.score / this.data.questions.length) * 100);
        let message = '';
        let messageClass = '';

        if (percentage >= 80) {
            message = '🎉 Excellent ! Vous maîtrisez parfaitement le sujet.';
            messageClass = 'alert-success';
        } else if (percentage >= 60) {
            message = '👍 Bien ! Vous avez compris les concepts principaux.';
            messageClass = 'alert-info';
        } else {
            message = '📚 Il serait bénéfique de relire le chapitre pour consolider vos connaissances.';
            messageClass = 'alert-warning';
        }

        const html = `
            <div class="quiz-score">
                <div style="font-size: 2rem; margin-bottom: 1rem;">
                    Score : ${this.score}/${this.data.questions.length} (${percentage}%)
                </div>
                
                <div class="alert ${messageClass}">
                    ${message}
                </div>
                
                <button class="quiz-btn" id="restart-${this.quizId}">
                    🔄 Recommencer le quiz
                </button>
            </div>
        `;

        this.container.querySelector('.quiz-content').innerHTML = html;

        // Gérer le redémarrage
        document.getElementById(`restart-${this.quizId}`).addEventListener('click', () => {
            this.currentQuestion = 0;
            this.score = 0;
            this.selectedAnswer = null;
            this.completed = false;
            this.render();
        });
    }
}

// Gestion des dropdowns
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector('.dropdown-title');
        
        title.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });
}

// Gestion de la navigation active
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Mettre à jour la navigation lors du scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Gestion des checkboxes
function initCheckboxes() {
    const checkboxes = document.querySelectorAll('.checklist-item');
    
    checkboxes.forEach(item => {
        item.addEventListener('click', () => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les dropdowns
    initDropdowns();
    
    // Initialiser la navigation
    initNavigation();
    
    // Initialiser les checkboxes
    initCheckboxes();
    
    // Initialiser les quiz avec un délai pour l'animation
    setTimeout(() => {
        new Quiz('quiz1', quizData.quiz1);
        new Quiz('quiz2', quizData.quiz2);
        new Quiz('quiz3', quizData.quiz3);
    }, 1000);
    
    console.log('🎓 Cours BTS SIO - Méthodologie de déploiement initialisé !');
});