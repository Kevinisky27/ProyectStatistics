const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scroreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: 'Se lanzan dos dados al aire y se anota la suma de los puntos obtenidos. Hallar la probabilidad de qué el número obtenido sea múltiplo de tres', 
    choice1: '1/5',
    choice2: '6/7',
    choice3: '1/3',
    choice4: '1/1',
    answer: 3
  }, 
  {
    question: 'Busca la probabilidad de que a lanzar un dado al aire, salga: un múltiplo de tres', 
    choice1: '1/5',
    choice2: '1/6',
    choice3: '1/2',
    choice4: '1/3',
    answer: 4
  }, 
  {
    question: 'Busca la probabilidad de que a lanzar un dado el aire, salga el número dos', 
    choice1: '1/6',
    choice2: '1/10',
    choice3: '2/5',
    choice4: '4/2',
    answer: 1
  }, 
  {
    question: '¿A lanzar un dado una sola vez cuál es la probabilidad de obtener un número par en la cara superior?', 
    choice1: '1/6',
    choice2: '1/2',
    choice3: '3/2',
    choice4: '1/12',
    answer: 2
  },
  {
    question: 'Una urna tiene nueve bolas rojas, seis amarillas y tres verdes. ¿Cuál es la probabilidad de extraer una bola amarilla?', 
    choice1: '1/6',
    choice2: '1/2',
    choice3: '1/3',
    choice4: '1/12',
    answer: 3
  },
  {
    question: 'Se extrae una bola de una urna que contiene 5 bolas rojas, 9 blancas y 11 negras , ¿Cuál es la probabilidad de que no sea Negra?', 
    choice1: '11/60',
    choice2: '18/22',
    choice3: '14/25',
    choice4: '1/12',
    answer: 3
  },
  {
    question: 'Se extreae una bola de una urna que contiene 8 bolas rojas, 4 blancas y 4 negras. ¿Cuál es la probabilidad de que la bola sea blanca o Negra?', 
    choice1: '1/6',
    choice2: '1/2',
    choice3: '3/2',
    choice4: '1/12',
    answer: 2
  },
  {
    question: 'Una urna tiene 11 bolas rojas, 5 amarillas y 10 verdes. Cul es la probabilidad de extraer una bola verde?', 
    choice1: '1/6',
    choice2: '1/2',
    choice3: '5/13',
    choice4: '1/12',
    answer: 3
  },
  {
    question: 'Hallar la probabilidad de que al lanzar al aire dos monedas, salga una cara y una cruz', 
    choice1: '1/6',
    choice2: '1/2',
    choice3: '3/2',
    choice4: '1/12',
    answer: 2
  },
  {
    question: 'Hallar la probabilidad de no obtener ninguna cara al lanzar 3 monedas', 
    choice1: '1/8',
    choice2: '1/2',
    choice3: '3/2',
    choice4: '1/12',
    answer: 1
  },
  {
    question: 'Si un curso de 28 estudiantes se va a seleccionar 8 para el equipo de microfútbol. ¿Cuál es la probabilidad de salir seleccionado?', 
    choice1: '1/8',
    choice2: '2/7',
    choice3: '3/2',
    choice4: '1/12',
    answer: 2
  },
  {
    question: ' En una canasta hay 11 peras y 3 manzanas. ¿Cuál es la probabilidad de que saque una manzana?', 
    choice1: '1/16',
    choice2: '1/2',
    choice3: '3/14',
    choice4: '1/12',
    answer: 3
  },
  {
    question: 'Una urna tiene 11 bolas rojas, 4 amarillas y 7 verdes. ¿Cuál es la probabilidad de extraer una bola que no sea amarilla?', 
    choice1: '9/11',
    choice2: '11/25',
    choice3: '3/2',
    choice4: '1/12',
    answer: 1
  },
  {
    question: 'Una tombola tiene 5 bolas numerdadas de 1 al 5. Al sacar una de las bolas, la probabilidad de que el número grabado en ella sea divisor de 5 es:', 
    choice1: '1/8',
    choice2: '1/2',
    choice3: '3/2',
    choice4: '2/5',
    answer: 4
  },
  {
    question: 'Una urna tiene 9 bolas rojas, 2 amarillas y 2 verdes. ¿Cuál es la probabilidad de extraer una bola amarilla', 
    choice1: '31.58%',
    choice2: '15.38%',
    choice3: '1%',
    choice4: '15.48%',
    answer: 2
  },
  {
    question: 'Si un curso de 28 estudiantes se va a seleccionar 8 para el equipo de microfútbol. ¿Cuál es la probabilidad de salir seleccionado', 
    choice1: '54.78%',
    choice2: '31.11%',
    choice3: '18.78%',
    choice4: '28.57%',
    answer: 4
  },
  {
    question: 'La probabilidad de que al hacer rodar un dado, salga un número primo es:', 
    choice1: '10%',
    choice2: '5%',
    choice3: '70%',
    choice4: '50%',
    answer: 4
  },
  {
    question: 'Al lanzar un dado una sola vez. ¿Cuál es la probabilidad de obtener un número para en la cara superior?', 
    choice1: '10%',
    choice2: '50%',
    choice3: '70%',
    choice4: '100%',
    answer: 2
  },
  {
    question: 'En una clase hay 8 alumnas rubias, 16 morenas, 6 alumnos rubios y 11 morenos. Encontrar la probabilidad de que un alumno sea hombre.', 
    choice1: '41.46%%',
    choice2: '50.78%',
    choice3: '70.50%',
    choice4: '11.78%',
    answer: 1
  }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 5

starGame = () => {
  questionCounter = 0; 
  score = 0
  availableQuestions = [...questions]
  getNewQuestion ()
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('../source/end.html')
  }

  questionCounter++
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)* 100}%`
  
  const questionsIndex  = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)
  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct'){
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  } )
})

incrementScore = num => {
  score += num
  scroreText.innerText = score
}

starGame()